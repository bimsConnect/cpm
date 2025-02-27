import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"; // Hapus ikon yang tidak digunakan
import { Button } from "../../components/ui/button";
import BlogSidebar from "../../components/sections/blog-sidebar";
import { getBlogPosts, getBlogPostBySlug } from "../../../../lib/blog-data";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
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
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

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
    );
  }

  return (
    <div className="bg-muted/10 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <main className="flex-1">
            <article className="bg-background rounded-xl shadow-md overflow-hidden">
              <div className="aspect-[21/9] relative">
                <Image
                  src={post.image || "/placeholder.svg?height=600&width=1200"}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 md:p-10">
                <div className="mb-6">
                  <Button variant="ghost" size="sm" asChild className="hover:bg-transparent p-0">
                    <Link href="/blog" className="flex items-center text-muted-foreground hover:text-primary">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Kembali Ke Blog
                    </Link>
                  </Button>
                </div>
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
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-xl text-muted-foreground mb-6">{post.excerpt}</p>
                  <h2>Introduction</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia,
                    nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                  </p>
                  <blockquote>
                    &quot;The key to success is to focus on goals, not obstacles. This mindset shift can transform how you
                    approach challenges and ultimately lead to better outcomes.&quot;
                  </blockquote>
                </div>
              </div>
            </article>
          </main>
          <BlogSidebar currentSlug={params.slug} />
        </div>
      </div>
    </div>
  );
}
