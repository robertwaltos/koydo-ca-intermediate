import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://ca-intermediate.koydo.app/sitemap.xml",
    host: "https://ca-intermediate.koydo.app",
  };
}
