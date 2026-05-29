import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Avoid /Join-the-Bootcamp → /join-the-bootcamp redirects on macOS:
     case-insensitive paths can cause ERR_TOO_MANY_REDIRECTS. */
};

export default nextConfig;
