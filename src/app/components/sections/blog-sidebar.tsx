"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Tag, Calendar } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { getBlogPosts } from "../../../../lib/blog-data"

interface BlogSidebarProps {
  currentSlug?: string
}

export default function BlogSidebar({ currentSlug }: BlogSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const allPosts = getBlogPosts()

  // Get recent posts (excluding current post if on a post page)
  const recentPosts = allPosts.filter((post) => post.slug !== currentSlug).slice(0, 4)

  // Get categories from all posts
  const categories = [...new Set(allPosts.map((post) => post.category))]

  // Get all tags (dummy data)
  const tags = ["Design", "Technology", "Marketing", "Business", "Strategy", "Development", "UX/UI", "Branding"]

  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background rounded-xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold mb-4">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-background rounded-xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="flex gap-3">
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium hover:text-primary transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-background rounded-xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex justify-between items-center">
              <Link
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {category}
              </Link>
              <span className="text-xs bg-muted px-2 py-1 rounded-full">
                {allPosts.filter((post) => post.category === category).length}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-background rounded-xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Button key={index} variant="outline" size="sm" className="text-xs rounded-full" asChild>
              <Link href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Link>
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-primary/10 rounded-xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold mb-2">Subscribe to Newsletter</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get the latest articles and insights delivered straight to your inbox.
        </p>
        <form className="space-y-2">
          <Input type="email" placeholder="Your email address" required />
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      </motion.div>
    </aside>
  )
}

