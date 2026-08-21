import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raelvis Paulino — Full-Stack Developer",
    short_name: "Raelvis Paulino",
    description: "Portfolio of Raelvis Paulino, junior Full-Stack and Frontend Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f0e8",
    theme_color: "#111820",
    icons: [{ src: "/logo-rp.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
