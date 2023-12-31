import { withBlitz } from "@blitzjs/next"

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
//!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import('@blitzjs/next').BlitzConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [ "@acme/db", "@acme/guard" ],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
};

export default withBlitz(config)
