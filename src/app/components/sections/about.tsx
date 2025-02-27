"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import Head from "next/head"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Tentang Kami - Cipta Mandiri Perkasa</title>
        <meta
          name="description"
          content="Cipta Mandiri Perkasa adalah spesialis pembuatan kubah GRC, ornamen, masjid, kerawangan, menara, dan motif awan kaligrafi. Dengan pengalaman lebih dari 15 tahun, kami berkomitmen untuk memberikan layanan terbaik."
        />
        <meta
          name="keywords"
          content="kubah GRC, ornamen masjid, konstruksi bangunan, kerawangan, menara, motif awan kaligrafi"
        />
        <meta name="author" content="Cipta Mandiri Perkasa" />
        <meta property="og:title" content="Tentang Kami - Cipta Mandiri Perkasa" />
        <meta
          property="og:description"
          content="Spesialis pembuatan kubah GRC, ornamen, masjid, kerawangan, menara, dan motif awan kaligrafi."
        />
        <meta property="og:image" content="/kubah1.webp" />
        <meta property="og:url" content="https://www.ciptamandiriperkasa.com/about" />
      </Head>

      <section id="about" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Tentang <span className="text-primary">Kami</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-subtitle"
            >
              Dengan pengalaman lebih dari 15 tahun, kami berkomitmen untuk menjadi yang terbaik dalam layanan konstruksi dan bangunan.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg"
                  alt="Tentang Cipta Mandiri Perkasa - Spesialis Kubah GRC dan Ornamen Masjid"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-lg hidden lg:block" />
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4">
                Kami Membangun Mimpi Anda
              </motion.h3>
              <motion.p variants={itemVariants} className="text-muted-foreground mb-6">
                Spesialis pembuatan kubah GRC, ornamen, masjid, kerawangan, menara, dan motif awan kaligrafi. Kualitas terbaik dengan desain eksklusif dan kokoh.
              </motion.p>
              <motion.p variants={itemVariants} className="text-muted-foreground mb-6">
                Tim kami yang terdiri dari para profesional berpengalaman berdedikasi untuk memberikan hasil yang luar biasa tepat waktu dan sesuai anggaran. Kami bangga dengan perhatian kami terhadap detail dan kemampuan kami untuk mengubah visi klien kami menjadi kenyataan.
              </motion.p>

              <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Tim Profesional",
                  "Bahan Berkualitas",
                  "Pengiriman Tepat Waktu",
                  "Solusi Inovatif",
                  "Kepuasan Pelanggan",
                  "Harga yang Terjangkau",
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" aria-label="Check Icon" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Proyek Selesai</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Tim Ahli</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}