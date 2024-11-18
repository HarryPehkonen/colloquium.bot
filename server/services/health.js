// @ts-check

/** 
 * Health check endpoint for Caddy reverse proxy
 * @type {import("https://deno.land/x/oak/mod.ts").RouterMiddleware} 
 */
export const healthCheck = (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    status: "healthy",
    timestamp: new Date().toISOString(),
  };
};
