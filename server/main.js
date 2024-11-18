// @ts-check
import { Application } from "https://deno.land/x/oak/mod.ts";
import { router } from "./routes/index.js";
import { errorMiddleware } from "./middleware/error.js";
import { loggingMiddleware } from "./middleware/logging.js";
import { serverConfig } from "./config/server.js";

const app = new Application();

// Middleware
app.use(loggingMiddleware);
app.use(errorMiddleware);

// Routes
app.use(router.routes());
app.use(router.allowedMethods());

// Start server
console.log(`Starting server on ${serverConfig.hostname}:${serverConfig.port}`);
await app.listen({
  port: serverConfig.port,
  hostname: serverConfig.hostname,
});
