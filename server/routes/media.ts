import { Router } from "express";
import { db } from "../db/client.js";
import { mediaItems, activityLog } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { verifyToken } from "./admin.js";

const router = Router();

// Get all media items
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    let items;

    if (category) {
      items = await db
        .select()
        .from(mediaItems)
        .where(eq(mediaItems.category, category as string));
    } else {
      items = await db.select().from(mediaItems);
    }
    res.json(items);
  } catch (error) {
    console.error("Error fetching media:", error);
    res.status(500).json({ error: "Failed to fetch media" });
  }
});

// Get specific media item
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const items = await db
      .select()
      .from(mediaItems)
      .where(eq(mediaItems.id, id))
      .limit(1);

    if (items.length === 0) {
      return res.status(404).json({ error: "Media not found" });
    }

    res.json(items[0]);
  } catch (error) {
    console.error("Error fetching media:", error);
    res.status(500).json({ error: "Failed to fetch media" });
  }
});

// Create media item (requires auth)
router.post("/", verifyToken, async (req: any, res) => {
  try {
    const { filename, url, altText, category, fileSize, mimeType } = req.body;

    if (!filename || !url) {
      return res.status(400).json({ error: "Filename and URL required" });
    }

    const newMedia = await db
      .insert(mediaItems)
      .values({
        filename,
        url,
        altText: altText || filename,
        category: category || "general",
        fileSize,
        mimeType,
        uploadedBy: req.user.id,
      })
      .returning();

    // Log activity
    await db.insert(activityLog).values({
      userId: req.user.id,
      action: "upload",
      entityType: "media",
      entityId: newMedia[0].id,
      description: `Uploaded media: ${filename}`,
    });

    res.json({
      success: true,
      message: "Media uploaded",
      media: newMedia[0],
    });
  } catch (error) {
    console.error("Error creating media:", error);
    res.status(500).json({ error: "Failed to create media" });
  }
});

// Update media item (requires auth)
router.put("/:id", verifyToken, async (req: any, res) => {
  try {
    const { id } = req.params;
    const { altText, category } = req.body;

    const updated = await db
      .update(mediaItems)
      .set({
        altText: altText !== undefined ? altText : undefined,
        category: category !== undefined ? category : undefined,
      })
      .where(eq(mediaItems.id, id))
      .returning();

    if (updated.length === 0) {
      return res.status(404).json({ error: "Media not found" });
    }

    // Log activity
    await db.insert(activityLog).values({
      userId: req.user.id,
      action: "update",
      entityType: "media",
      entityId: id,
      description: `Updated media: ${updated[0].filename}`,
    });

    res.json({
      success: true,
      message: "Media updated",
      media: updated[0],
    });
  } catch (error) {
    console.error("Error updating media:", error);
    res.status(500).json({ error: "Failed to update media" });
  }
});

// Delete media item (requires auth)
router.delete("/:id", verifyToken, async (req: any, res) => {
  try {
    const { id } = req.params;

    const deleted = await db
      .delete(mediaItems)
      .where(eq(mediaItems.id, id))
      .returning();

    if (deleted.length === 0) {
      return res.status(404).json({ error: "Media not found" });
    }

    // Log activity
    await db.insert(activityLog).values({
      userId: req.user.id,
      action: "delete",
      entityType: "media",
      entityId: id,
      description: `Deleted media: ${deleted[0].filename}`,
    });

    res.json({
      success: true,
      message: "Media deleted",
    });
  } catch (error) {
    console.error("Error deleting media:", error);
    res.status(500).json({ error: "Failed to delete media" });
  }
});

export default router;
