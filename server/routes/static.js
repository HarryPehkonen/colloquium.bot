// @ts-check
import { send } from "https://deno.land/x/oak/mod.ts";

/** 
 * Serves static files from the static directory
 * @type {import("https://deno.land/x/oak/mod.ts").Middleware} 
 */
export const serveStaticFiles = async (ctx, path) => {
  try {
    await send(ctx, path, {
      root: `${Deno.cwd()}/static`,
      index: "index.html",
    });
  } catch (err) {
    if (err.name === "NotFound") {
      ctx.response.status = 404;
      ctx.response.body = "Not found";
    } else {
      throw err;
    }
  }
};
