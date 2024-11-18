// @ts-check
import { send } from "https://deno.land/x/oak/mod.ts";

/** 
 * Serves documentation files from the docs directory
 * @type {import("https://deno.land/x/oak/mod.ts").Middleware} 
 */
export const serveDocs = async (ctx) => {
  // Get the path from the URL
  const path = ctx.params[0] || "index.html";
  
  try {
    await send(ctx, path, {
      root: `${Deno.cwd()}/../docs`,
      index: "index.html",
    });
  } catch (err) {
    if (err.name === "NotFound") {
      ctx.response.status = 404;
      ctx.response.body = "Documentation not found";
    } else {
      throw err;
    }
  }
};
