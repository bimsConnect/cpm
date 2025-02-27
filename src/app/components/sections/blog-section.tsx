"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "../ui/button"
import { getBlogPosts } from "../../../../lib/blog-data"

export default function BlogSection() {
  const blogPosts = getBlogPosts().slice(0, 3)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-lg font-medium mb-4">
            Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Wawasan dan Artikel Terbaru</h2>
          <p className="text-lg text-muted-foreground">
          Tetap terupdate dengan tren, tips, dan wawasan terbaru dari para ahli kami. Blog kami membahas berbagai topik untuk membantu Anda tetap terdepan di dunia digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="bg-background rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image || "/Kubah1.webp"}
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
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
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
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/blog">
              Lihat Semua Artikel
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
