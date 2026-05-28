import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Import routes
  const { default: inquiriesRouter } = await import("./routes/inquiries.js");
  const { default: adminRouter } = await import("./routes/admin.js");
  const { default: contentRouter } = await import("./routes/content.js");
  const { default: mediaRouter } = await import("./routes/media.js");
  const { default: usersRouter } = await import("./routes/users.js");

  // API routes
  app.use("/api", inquiriesRouter);
  app.use("/api/admin", adminRouter);
  app.use("/api/content", contentRouter);
  app.use("/api/media", mediaRouter);
  app.use("/api/users", usersRouter);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
