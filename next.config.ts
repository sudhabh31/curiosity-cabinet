import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    /* Wraps router navigations in document.startViewTransition() so
     * matching viewTransitionName CSS rules animate between routes.
     * Used to morph a world card into its full scene on tap and
     * reverse on Home. */
    viewTransition: true,
  },
};

export default nextConfig;
