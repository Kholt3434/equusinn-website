import { Router } from "express";
import { db } from "../db/client.js";
import { contentSections, activityLog } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { verifyToken } from "./admin.js";

const router = Router();

// Get all content sections
router.get("/sections", async (req, res) => {
  try {
    const sections = await db.select().from(contentSections);
    res.json(sections);
  } catch (error) {
    console.error("Error fetching sections:", error);
    res.status(500).json({ error: "Failed to fetch sections" });
  }
});

// Get specific content section
router.get("/sections/:key", async (req, res) => {
  try {
    const { key } = req.params;
    const sections = await db
      .select()
      .from(contentSections)
      .where(eq(contentSections.sectionKey, key))
      .limit(1);

    if (sections.length === 0) {
      return res.status(404).json({ error: "Section not found" });
    }

    res.json(sections[0]);
  } catch (error) {
    console.error("Error fetching section:", error);
    res.status(500).json({ error: "Failed to fetch section" });
  }
});

// Update content section (requires auth)
router.put("/sections/:key", verifyToken, async (req: any, res) => {
  try {
    const { key } = req.params;
    const { title, content, imageUrl, metadata } = req.body;

    // Check if section exists
    const existing = await db
      .select()
      .from(contentSections)
      .where(eq(contentSections.sectionKey, key))
      .limit(1);

    if (existing.length === 0) {
      // Create new section
      const newSection = await db
        .insert(contentSections)
        .values({
          sectionKey: key,
          title: title || key,
          content: content || "",
          imageUrl,
          metadata,
          updatedBy: req.user.id,
        })
        .returning();

      // Log activity
      await db.insert(activityLog).values({
        userId: req.user.id,
        action: "create",
        entityType: "content",
        entityId: newSection[0].id,
        description: `Created content section: ${key}`,
      });

      return res.json({
        success: true,
        message: "Section created",
        section: newSection[0],
      });
    }

    // Update existing section
    const updated = await db
      .update(contentSections)
      .set({
        title: title || existing[0].title,
        content: content !== undefined ? content : existing[0].content,
        imageUrl: imageUrl !== undefined ? imageUrl : existing[0].imageUrl,
        metadata: metadata || existing[0].metadata,
        updatedBy: req.user.id,
        updatedAt: new Date(),
      })
      .where(eq(contentSections.sectionKey, key))
      .returning();

    // Log activity
    await db.insert(activityLog).values({
      userId: req.user.id,
      action: "update",
      entityType: "content",
      entityId: updated[0].id,
      description: `Updated content section: ${key}`,
    });

    res.json({
      success: true,
      message: "Section updated",
      section: updated[0],
    });
  } catch (error) {
    console.error("Error updating section:", error);
    res.status(500).json({ error: "Failed to update section" });
  }
});

export default router;
