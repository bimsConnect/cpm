"use client"

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "DKM Masjid A",
    position: "Ketua",
    image: "/placeholder.svg?height=100&width=100",
    content:
    "Pokoknya yang berhubungan dengan GRC saya sangat percaya kepada CV. CIPTA MANDIRI PERKASA karna sangat berpengalaman!",
    rating: 5,
  },
  {
    id: 2,
    name: "H.J Bakri",
    position: "",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Motif yang bagus dan warna yang memanjakan mata, respon masyarakat sekitar bagus pembuatan kubah di CV. Cipta Mandiri Perkasa SUKSES!.",
    rating: 5,
  },
  {
    id: 3,
    name: "DKM Masjid F",
    position: "Ketua",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "jika ingin buat Kubah GRC saya sangat rekomendasikan CV. CIPTA MANDIRI PERKASA karna hasilnya sangat memuaskan",
    rating: 5,
  },

  {
    id: 4,
    name: "H.J Muslim",
    position: "",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Hasil nya bagus dan luar biasa OK!",
    rating: 5,
  },
  {
    id: 5,
    name: "DKM Masjid A",
    position: "Ketua",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Pekerjaan nya sesuai yang saya inginkan dan hasilnya rapih dan bagus, sukses terus CV. CIPTA MANDIRI PERKASA",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<number>(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Client <span className="text-primary">Testimoni</span>
          </h2>
          <p className="section-subtitle">
          Apa yang dikatakan klien kami tentang layanan kami dan pengalaman mereka bekerja sama dengan kami.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-6"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div className="flex justify-center mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonials[current].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </motion.div>
              <motion.p className="text-lg italic mb-6">&quot;{testimonials[current].content}&quot;</motion.p>
              <motion.h3 className="font-bold text-lg">{testimonials[current].name}</motion.h3>
              <p className="text-muted-foreground">{testimonials[current].position}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
