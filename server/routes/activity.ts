import { Router } from "express";
import { db } from "../db/client.js";
import { activityLog, adminUsers } from "../db/schema.js";
import { eq, desc, like, and, gte, lte } from "drizzle-orm";
import { verifyToken } from "./admin.js";

const router = Router();

// Get activity log with optional filtering
router.get("/", verifyToken, async (req: any, res) => {
  try {
    const {
      userId,
      action,
      entityType,
      search,
      startDate,
      endDate,
      limit = "50",
      offset = "0",
    } = req.query;

    const conditions: any[] = [];

    if (userId) {
      conditions.push(eq(activityLog.userId, userId as string));
    }

    if (action) {
      conditions.push(eq(activityLog.action, action as string));
    }

    if (entityType) {
      conditions.push(eq(activityLog.entityType, entityType as string));
    }

    if (search) {
      conditions.push(
        like(activityLog.description, `%${search as string}%`)
      );
    }

    if (startDate) {
      conditions.push(gte(activityLog.createdAt, new Date(startDate as string)));
    }

    if (endDate) {
      const end = new Date(endDate as string);
      end.setHours(23, 59, 59, 999);
      conditions.push(lte(activityLog.createdAt, end));
    }

    // Build base query
    let baseQuery = db
      .select({
        id: activityLog.id,
        userId: activityLog.userId,
        action: activityLog.action,
        entityType: activityLog.entityType,
        entityId: activityLog.entityId,
        description: activityLog.description,
        createdAt: activityLog.createdAt,
        user: {
          id: adminUsers.id,
          email: adminUsers.email,
          fullName: adminUsers.fullName,
          username: adminUsers.username,
        },
      })
      .from(activityLog)
      .leftJoin(adminUsers, eq(activityLog.userId, adminUsers.id));

    // Apply filters
    if (conditions.length > 0) {
      baseQuery = baseQuery.where(and(...conditions)) as any;
    }

    // Get total count
    const allResults = await (baseQuery as any);
    const total = allResults.length;

    // Get paginated results
    const results = await (baseQuery as any)
      .orderBy(desc(activityLog.createdAt))
      .limit(parseInt(limit as string))
      .offset(parseInt(offset as string));

    res.json({
      data: results,
      pagination: {
        total,
        limit: parseInt(limit as string),
        offset: parseInt(offset as string),
        hasMore: parseInt(offset as string) + parseInt(limit as string) < total,
      },
    });
  } catch (error) {
    console.error("Error fetching activity log:", error);
    res.status(500).json({ error: "Failed to fetch activity log" });
  }
});

// Get activity summary (stats)
router.get("/summary", verifyToken, async (req: any, res) => {
  try {
    const { days = "7" } = req.query;
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - parseInt(days as string));

    const logs = await db
      .select()
      .from(activityLog)
      .where(gte(activityLog.createdAt, daysAgo));

    // Count by action
    const actionCounts: Record<string, number> = {};
    const entityCounts: Record<string, number> = {};
    const userCounts: Record<string, number> = {};

    logs.forEach((log) => {
      actionCounts[log.action] = (actionCounts[log.action] || 0) + 1;
      entityCounts[log.entityType] = (entityCounts[log.entityType] || 0) + 1;
      userCounts[log.userId] = (userCounts[log.userId] || 0) + 1;
    });

    res.json({
      totalActivities: logs.length,
      actionCounts,
      entityCounts,
      userCounts,
      period: `Last ${days} days`,
    });
  } catch (error) {
    console.error("Error fetching activity summary:", error);
    res.status(500).json({ error: "Failed to fetch activity summary" });
  }
});

// Get activity by specific entity
router.get("/entity/:entityType/:entityId", verifyToken, async (req: any, res) => {
  try {
    const { entityType, entityId } = req.params;

    const logs = await db
      .select({
        id: activityLog.id,
        userId: activityLog.userId,
        action: activityLog.action,
        description: activityLog.description,
        createdAt: activityLog.createdAt,
        user: {
          id: adminUsers.id,
          email: adminUsers.email,
          fullName: adminUsers.fullName,
        },
      })
      .from(activityLog)
      .leftJoin(adminUsers, eq(activityLog.userId, adminUsers.id))
      .where(
        and(
          eq(activityLog.entityType, entityType),
          eq(activityLog.entityId, entityId)
        )
      )
      .orderBy(desc(activityLog.createdAt));

    res.json(logs);
  } catch (error) {
    console.error("Error fetching entity activity:", error);
    res.status(500).json({ error: "Failed to fetch entity activity" });
  }
});

export default router;
