import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "../../components/ui/button"
import BlogSidebar from "../../components/sections/blog-sidebar"
import { getBlogPosts, getBlogPostBySlug } from "../../../../lib/blog-data"

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || "/og-image.jpg"],
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            Postingan blog yang Anda cari tidak ada atau telah dihapus.
          </p>
          <Button asChild>
            <Link href="/blog">Kembali Ke Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-muted/10 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <main className="flex-1">
            <article className="bg-background rounded-xl shadow-md overflow-hidden">
              {/* Featured Image */}
              <div className="aspect-[21/9] relative">
                <img
                  src={post.image || "/placeholder.svg?height=600&width=1200"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-10">
                {/* Back to Blog */}
                <div className="mb-6">
                  <Button variant="ghost" size="sm" asChild className="hover:bg-transparent p-0">
                    <Link href="/blog" className="flex items-center text-muted-foreground hover:text-primary">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Kembali Ke Blog
                    </Link>
                  </Button>
                </div>

                {/* Post Header */}
                <header className="mb-8">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>

                  <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4 mb-4">
                    <span className="inline-flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {post.category}
                    </span>
                  </div>
                </header>

                {/* Post Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-xl text-muted-foreground mb-6">{post.excerpt}</p>

                  <h2>Introduction</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia,
                    nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia,
                    nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                  </p>

                  <p>
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                  </p>

                  <h2>Key Points to Consider</h2>
                  <p>
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                  </p>

                  <ul>
                    <li>First important point about {post.title}</li>
                    <li>Second key consideration for businesses</li>
                    <li>Third factor that impacts results</li>
                    <li>Fourth element of a successful strategy</li>
                  </ul>

                  <h2>Best Practices</h2>
                  <p>
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                  </p>

                  <blockquote>
                    "The key to success is to focus on goals, not obstacles. This mindset shift can transform how you
                    approach challenges and ultimately lead to better outcomes."
                  </blockquote>

                  <p>
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                  </p>

                  <h2>Conclusion</h2>
                  <p>
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-10 pt-6 border-t">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium">Tags:</span>
                    <Button variant="outline" size="sm" className="text-xs rounded-full">
                      Kubah
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs rounded-full">
                      Kerawangan
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs rounded-full">
                      Ornamen
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs rounded-full">
                      Mimbar
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs rounded-full">
                      Menara
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs rounded-full">
                      Masjid
                    </Button>
                  </div>
                </div>

                {/* Share */}
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center flex-wrap gap-4">
                    <span className="text-sm font-medium flex items-center">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share this article:
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Share on Facebook</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Share on Twitter</span>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">Share on LinkedIn</span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-10 pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt={post.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg font-bold">{post.author}</h3>
                      <p className="text-muted-foreground mb-2">Content Strategist</p>
                      <p className="text-sm">
                        A passionate writer and digital marketing expert with over 10 years of experience in helping
                        businesses grow their online presence through strategic content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <BlogSidebar currentSlug={params.slug} />
        </div>
      </div>
    </div>
  )
}

