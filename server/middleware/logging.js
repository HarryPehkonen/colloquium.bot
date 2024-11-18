// @ts-check

/** @type {import("https://deno.land/x/oak/mod.ts").Middleware} */
const loggingMiddleware = async (ctx, next) => {
  const start = Date.now();
  const { method, url } = ctx.request;
  
  await next();
  
  const ms = Date.now() - start;
  const status = ctx.response.status;
  
  // Log in JSON format for easier parsing
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    method,
    url: url.pathname,
    status,
    duration: `${ms}ms`,
    userAgent: ctx.request.headers.get("user-agent"),
  }));
};

// Add this export statement
export { loggingMiddleware };
