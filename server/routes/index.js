// @ts-check
import { Router } from "https://deno.land/x/oak/mod.ts";
import { serveStaticFiles } from "./static.js";
import { serveDocs } from "./docs.js";
import { healthCheck } from "../services/health.js";

export const router = new Router();

// Health check endpoint for Caddy
router.get("/health", healthCheck);

// Main routes
router.get("/", async (ctx) => {
  await serveStaticFiles(ctx, "/index.html");
});

// Documentation routes
router.get("/docs/(.*)", serveDocs);

// Serve static files (CSS, JS, images)
router.get("/static/(.*)", async (ctx) => {
  const path = ctx.params[0];
  await serveStaticFiles(ctx, path);
});
