// @ts-check
import { isHttpError } from "https://deno.land/x/oak/mod.ts";

/** @type {import("https://deno.land/x/oak/mod.ts").Middleware} */
export const errorMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      // Handle known HTTP errors
      ctx.response.status = err.status;
      ctx.response.body = {
        status: err.status,
        message: err.message,
      };
    } else {
      // Handle unexpected errors
      console.error("Unexpected error:", err);
      ctx.response.status = 500;
      ctx.response.body = {
        status: 500,
        message: "Internal server error",
      };
    }
  }
};
