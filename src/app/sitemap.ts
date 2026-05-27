import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/data";

const BASE = "https://www.vighnahartadentalclinic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const services = [
    "dental-implants",
    "root-canal-treatment",
    "teeth-whitening",
    "orthodontics-braces",
    "dental-crowns-bridges",
    "wisdom-tooth-removal",
    "pediatric-dentistry",
    "general-dentistry",
  ];

  const areas = [
    "wagholi",
    "bakori-phata",
    "kharadi",
    "viman-nagar",
    "nagar-road",
    "lonikand",
    "solapur-road",
    "mundhwa",
  ];

  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/doctors`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: `${BASE}/services/${s}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...areas.map((a) => ({
      url: `${BASE}/areas/${a}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...BLOG_POSTS.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
