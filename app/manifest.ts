import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lulekani Church of Christ",
    short_name: "Lulekani COC",
    description: "A progressive web app for worship, events, and church life.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
