import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, User, Search } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import BlogSidebar from "../components/sections/blog-sidebar"
import { getBlogPosts } from "../../../lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | Modern Company",
  description: "Explore our latest articles, insights, and industry trends to stay informed and inspired.",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="bg-muted/10 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog Kami</h1>
          <p className="text-lg text-muted-foreground">
          Jelajahi artikel, wawasan, dan tren industri terbaru kami untuk mendapatkan informasi dan inspirasi.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <main className="flex-1">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
            </div>

            {/* Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="bg-background rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Selengkapnya
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                <Button variant="outline" disabled>
                  Kembali
                </Button>
                <Button variant="outline" className="bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Selanjutnya</Button>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}

