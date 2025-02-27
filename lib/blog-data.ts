export interface BlogPost {
    title: string
    excerpt: string
    content?: string
    image: string
    date: string
    author: string
    category: string
    slug: string
    tags?: string[]
  }
  
  // Dummy blog data
  const blogPosts: BlogPost[] = [
    {
      title: "10 Web Design Trends to Watch in 2023",
      excerpt:
        "Discover the latest trends that are shaping the future of web design and how you can incorporate them into your projects.",
      image: "/Masjid1.webp?height=300&width=500",
      date: "June 15, 2023",
      author: "Alex Morgan",
      category: "Design",
      slug: "web-design-trends-2023",
      tags: ["Design", "Web Development", "Trends"],
    },
    {
      title: "The Ultimate Guide to Digital Marketing Strategy",
      excerpt:
        "Learn how to create a comprehensive digital marketing strategy that drives traffic, engagement, and conversions.",
      image: "/Mimbar1.webp?height=300&width=500",
      date: "May 22, 2023",
      author: "Jessica Chen",
      category: "Marketing",
      slug: "digital-marketing-strategy-guide",
      tags: ["Marketing", "Strategy", "Digital"],
    },
    {
      title: "How AI is Transforming the Creative Industry",
      excerpt:
        "Explore the impact of artificial intelligence on creative processes and how professionals are adapting to this technology.",
      image: "/kerawangan2.webp?height=300&width=500",
      date: "April 10, 2023",
      author: "Ryan Wilson",
      category: "Technology",
      slug: "ai-transforming-creative-industry",
      tags: ["AI", "Technology", "Creative"],
    },
    {
      title: "Building Responsive Websites: Best Practices",
      excerpt:
        "A comprehensive guide to creating websites that look and function perfectly across all devices and screen sizes.",
      image: "/kubah3.webp?height=300&width=500",
      date: "March 18, 2023",
      author: "Emma Rodriguez",
      category: "Development",
      slug: "responsive-website-best-practices",
      tags: ["Web Development", "Responsive Design", "CSS"],
    },
    {
      title: "The Psychology of Color in Branding",
      excerpt:
        "Understanding how color choices influence consumer perception and how to leverage this knowledge in your brand strategy.",
      image: "/menara2.webp?height=300&width=500",
      date: "February 5, 2023",
      author: "Michael Chen",
      category: "Branding",
      slug: "psychology-color-branding",
      tags: ["Branding", "Psychology", "Design"],
    },
    {
      title: "SEO Strategies That Actually Work in 2023",
      excerpt:
        "Cut through the noise and discover proven SEO techniques that will help your website rank higher in search results.",
      image: "/ornamen3.webp?height=300&width=500",
      date: "January 20, 2023",
      author: "Sarah Johnson",
      category: "Marketing",
      slug: "seo-strategies-2023",
      tags: ["SEO", "Marketing", "Strategy"],
    },
  ]
  
  // Function to get all blog posts
  export function getBlogPosts(): BlogPost[] {
    return blogPosts
  }
  
  // Function to get a specific blog post by slug
  export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug)
  }
  
  // Function to get blog posts by category
  export function getBlogPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
  }
  
  // Function to get blog posts by tag
  export function getBlogPostsByTag(tag: string): BlogPost[] {
    return blogPosts.filter((post) => post.tags?.some((t) => t.toLowerCase() === tag.toLowerCase()))
  }
  
  // Function to search blog posts
  export function searchBlogPosts(query: string): BlogPost[] {
    const lowercaseQuery = query.toLowerCase()
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.content?.toLowerCase().includes(lowercaseQuery) ||
        post.author.toLowerCase().includes(lowercaseQuery) ||
        post.category.toLowerCase().includes(lowercaseQuery) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
    )
  }
  
  