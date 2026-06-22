import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

const routes = ["", "/about", "/services", "/events", "/donate", "/contact", "/blog", "/prayer", "/member", "/admin"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${env.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
