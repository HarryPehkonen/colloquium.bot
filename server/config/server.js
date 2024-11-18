// @ts-check

/** @typedef {Object} ServerConfig
 * @property {number} port - Server port
 * @property {string} hostname - Server hostname
 * @property {string} environment - Runtime environment
 */

/** @type {ServerConfig} */
export const serverConfig = {
  port: 3000,
  hostname: "127.0.0.1",
  environment: Deno.env.get("DENO_ENV") || "production"
};
