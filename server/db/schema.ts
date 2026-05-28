import { pgTable, text, varchar, timestamp, boolean, integer, jsonb } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

// Admin Users Table
export const adminUsers = pgTable("admin_users", {
  id: varchar("id", { length: 128 }).primaryKey().$defaultFn(() => createId()),
  email: varchar("email", { length: 255 }).notNull().unique(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  fullName: varchar("full_name", { length: 255 }),
  role: varchar("role", { length: 50 }).notNull().default("editor"), // 'admin' or 'editor'
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Content Sections Table
export const contentSections = pgTable("content_sections", {
  id: varchar("id", { length: 128 }).primaryKey().$defaultFn(() => createId()),
  sectionKey: varchar("section_key", { length: 255 }).notNull().unique(), // e.g., 'homepage_hero', 'baseball_intro'
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(), // HTML or plain text
  imageUrl: text("image_url"),
  metadata: jsonb("metadata"), // Additional data as JSON
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  updatedBy: varchar("updated_by", { length: 128 }).references(() => adminUsers.id),
});

// Media/Images Table
export const mediaItems = pgTable("media_items", {
  id: varchar("id", { length: 128 }).primaryKey().$defaultFn(() => createId()),
  filename: varchar("filename", { length: 255 }).notNull(),
  url: text("url").notNull(),
  altText: varchar("alt_text", { length: 255 }),
  category: varchar("category", { length: 100 }), // e.g., 'homepage', 'baseball', 'swim', 'gallery'
  fileSize: integer("file_size"),
  mimeType: varchar("mime_type", { length: 100 }),
  uploadedBy: varchar("uploaded_by", { length: 128 }).references(() => adminUsers.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Activity Log Table
export const activityLog = pgTable("activity_log", {
  id: varchar("id", { length: 128 }).primaryKey().$defaultFn(() => createId()),
  userId: varchar("user_id", { length: 128 }).notNull().references(() => adminUsers.id),
  action: varchar("action", { length: 100 }).notNull(), // 'create', 'update', 'delete', 'upload'
  entityType: varchar("entity_type", { length: 100 }).notNull(), // 'content', 'media', 'user'
  entityId: varchar("entity_id", { length: 128 }),
  description: text("description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
