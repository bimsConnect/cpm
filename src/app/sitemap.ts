type SitemapEntry = {
    url: string;
    lastModified: string;
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
    priority?: number;
  };
  
  export default async function sitemap(): Promise<SitemapEntry[]> {
    const baseUrl = "https://localhost:3000"; // Ganti dengan link websitenya jika sudah jadi
  
    const staticPages: SitemapEntry[] = [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 1,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.8,
      },
    ];
  
    return [...staticPages];
  }