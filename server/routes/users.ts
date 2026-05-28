import { Router } from "express";
import { db } from "../db/client.js";
import { adminUsers, activityLog } from "../db/schema.js";
import { eq } from "drizzle-orm";
import bcryptjs from "bcryptjs";
import { verifyToken } from "./admin.js";

const router = Router();

// Helper function to check if user is admin
const isAdmin = (req: any) => req.user?.role === "admin";

// Get all users (admin only)
router.get("/", verifyToken, async (req: any, res) => {
  try {
    if (!isAdmin(req)) {
      return res.status(403).json({ error: "Admin access required" });
    }

    const users = await db
      .select({
        id: adminUsers.id,
        email: adminUsers.email,
        username: adminUsers.username,
        fullName: adminUsers.fullName,
        role: adminUsers.role,
        isActive: adminUsers.isActive,
        createdAt: adminUsers.createdAt,
      })
      .from(adminUsers);

    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Create new user (admin only)
router.post("/", verifyToken, async (req: any, res) => {
  try {
    if (!isAdmin(req)) {
      return res.status(403).json({ error: "Admin access required" });
    }

    const { email, username, password, fullName, role } = req.body;

    // Validate required fields
    if (!email || !username || !password) {
      return res.status(400).json({ error: "Email, username, and password required" });
    }

    // Check if user already exists
    const existing = await db
      .select()
      .from(adminUsers)
      .where(eq(adminUsers.email, email))
      .limit(1);

    if (existing.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const passwordHash = await bcryptjs.hash(password, 10);

    // Create user
    const newUser = await db
      .insert(adminUsers)
      .values({
        email,
        username,
        passwordHash,
        fullName: fullName || username,
        role: role || "editor",
        isActive: true,
      })
      .returning({
        id: adminUsers.id,
        email: adminUsers.email,
        username: adminUsers.username,
        fullName: adminUsers.fullName,
        role: adminUsers.role,
        isActive: adminUsers.isActive,
      });

    // Log activity
    await db.insert(activityLog).values({
      userId: req.user.id,
      action: "create",
      entityType: "user",
      entityId: newUser[0].id,
      description: `Created user: ${email}`,
    });

    res.json({
      success: true,
      message: "User created successfully",
      user: newUser[0],
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Update user (admin only)
router.put("/:userId", verifyToken, async (req: any, res) => {
  try {
    if (!isAdmin(req)) {
      return res.status(403).json({ error: "Admin access required" });
    }

    const { userId } = req.params;
    const { fullName, role, isActive } = req.body;

    // Prevent self-deactivation
    if (userId === req.user.id && isActive === false) {
      return res.status(400).json({ error: "Cannot deactivate your own account" });
    }

    const updated = await db
      .update(adminUsers)
      .set({
        fullName: fullName !== undefined ? fullName : undefined,
        role: role !== undefined ? role : undefined,
        isActive: isActive !== undefined ? isActive : undefined,
        updatedAt: new Date(),
      })
      .where(eq(adminUsers.id, userId))
      .returning({
        id: adminUsers.id,
        email: adminUsers.email,
        username: adminUsers.username,
        fullName: adminUsers.fullName,
        role: adminUsers.role,
        isActive: adminUsers.isActive,
      });

    if (updated.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Log activity
    await db.insert(activityLog).values({
      userId: req.user.id,
      action: "update",
      entityType: "user",
      entityId: userId,
      description: `Updated user: ${updated[0].email}`,
    });

    res.json({
      success: true,
      message: "User updated successfully",
      user: updated[0],
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
});

// Reset user password (admin only)
router.post("/:userId/reset-password", verifyToken, async (req: any, res) => {
  try {
    if (!isAdmin(req)) {
      return res.status(403).json({ error: "Admin access required" });
    }

    const { userId } = req.params;
    const { newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }

    // Hash new password
    const passwordHash = await bcryptjs.hash(newPassword, 10);

    // Update password
    const updated = await db
      .update(adminUsers)
      .set({
        passwordHash,
        updatedAt: new Date(),
      })
      .where(eq(adminUsers.id, userId))
      .returning({
        id: adminUsers.id,
        email: adminUsers.email,
        username: adminUsers.username,
        fullName: adminUsers.fullName,
      });

    if (updated.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Log activity
    await db.insert(activityLog).values({
      userId: req.user.id,
      action: "update",
      entityType: "user",
      entityId: userId,
      description: `Reset password for user: ${updated[0].email}`,
    });

    res.json({
      success: true,
      message: "Password reset successfully",
      user: updated[0],
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ error: "Failed to reset password" });
  }
});

// Deactivate user (admin only)
router.delete("/:userId", verifyToken, async (req: any, res) => {
  try {
    if (!isAdmin(req)) {
      return res.status(403).json({ error: "Admin access required" });
    }

    const { userId } = req.params;

    // Prevent self-deletion
    if (userId === req.user.id) {
      return res.status(400).json({ error: "Cannot delete your own account" });
    }

    // Deactivate instead of delete
    const updated = await db
      .update(adminUsers)
      .set({
        isActive: false,
        updatedAt: new Date(),
      })
      .where(eq(adminUsers.id, userId))
      .returning({
        id: adminUsers.id,
        email: adminUsers.email,
        username: adminUsers.username,
      });

    if (updated.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Log activity
    await db.insert(activityLog).values({
      userId: req.user.id,
      action: "delete",
      entityType: "user",
      entityId: userId,
      description: `Deactivated user: ${updated[0].email}`,
    });

    res.json({
      success: true,
      message: "User deactivated successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Failed to deactivate user" });
  }
});

export default router;
