"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/background1.webp?height=800&width=1920",
    title: "Membangun Keunggulan",
    subtitle: "Menciptakan Ruang yang Menginspirasi",
    description: "Layanan konstruksi dan pembangunan profesional dengan pengalaman lebih dari 15 tahun di industri ini.",
  },
  {
    id: 2,
    image: "/background2.webp?height=800&width=1920",
    title: "Konstruksi Berkualitas",
    subtitle: "Berkomitmen pada Keunggulan",
    description: "Kami memberikan layanan konstruksi berkualitas tinggi dengan perhatian pada detail dan ketepatan.",
  },
  {
    id: 3,
    image: "/background3.webp?height=800&width=1920",
    title: "Solusi Inovatif",
    subtitle: "Pendekatan Modern dalam Konstruksi",
    description: "Menggunakan teknologi dan metode terbaru untuk menciptakan bangunan yang berkelanjutan dan efisien.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative h-[80vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      ))}

      <div className="container relative h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-white"
        >
          <motion.span
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary px-4 py-1 mb-4 text-sm md:text-base"
          >
            {slides[currentSlide].subtitle}
          </motion.span>

          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            {slides[currentSlide].description}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base">
              Layanan Kami
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent text-white border-white hover:bg-white hover:text-black">
              Hubungi Kami
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Pergi ke slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}