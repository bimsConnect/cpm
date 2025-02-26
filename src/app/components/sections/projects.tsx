"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../ui/button"

const categories = ["All", "Kubah", "Kerawangan", "Menara", "Masjid", "Ornamen", "Mimbar"]

const projects = [
  // Projek untuk kategori "Kubah"
  { id: 1, title: "Kubah Masjid A", category: "Kubah", image: "/kubah1.webp", description: "Desain kubah modern dengan ornamen islami." },
  { id: 2, title: "Kubah Masjid B", category: "Kubah", image: "/kubah2.webp", description: "Kubah klasik dengan sentuhan kontemporer." },
  { id: 3, title: "Kubah Masjid C", category: "Kubah", image: "/kubah3.webp", description: "Kubah besar dengan kapasitas jamaah yang luas." },
  { id: 4, title: "Kubah Masjid D", category: "Kubah", image: "/kubah4.webp", description: "Kubah minimalis dengan material berkualitas tinggi." },
  { id: 5, title: "Kubah Masjid E", category: "Kubah", image: "/kubah5.webp", description: "Kubah dengan desain unik dan artistik." },

  // Projek untuk kategori "Kerawangan"
  { id: 6, title: "Kerawangan A", category: "Kerawangan", image: "/kerawangan1.webp", description: "Desain kerawangan dengan pola geometris." },
  { id: 7, title: "Kerawangan B", category: "Kerawangan", image: "/kerawangan2.webp", description: "Kerawangan dengan sentuhan tradisional." },
  { id: 8, title: "Kerawangan C", category: "Kerawangan", image: "/kerawangan3.webp", description: "Kerawangan modern untuk interior masjid." },
  { id: 9, title: "Kerawangan D", category: "Kerawangan", image: "/kerawangan4.webp", description: "Kerawangan dengan material kayu berkualitas." },
  { id: 10, title: "Kerawangan E", category: "Kerawangan", image: "/kerawangan5.webp", description: "Kerawangan dengan desain minimalis." },

  // Projek untuk kategori "Menara"
  { id: 11, title: "Menara A", category: "Menara", image: "/menara1.webp", description: "Menara masjid dengan ketinggian 30 meter." },
  { id: 12, title: "Menara B", category: "Menara", image: "/menara2.webp", description: "Menara dengan desain modern dan elegan." },
  { id: 13, title: "Menara C", category: "Menara", image: "/menara3.webp", description: "Menara dengan ornamen islami yang indah." },
  { id: 14, title: "Menara D", category: "Menara", image: "/menara4.webp", description: "Menara dengan material tahan cuaca." },
  { id: 15, title: "Menara E", category: "Menara", image: "/menara5.webp", description: "Menara dengan pencahayaan yang menarik." },

  // Projek untuk kategori "Masjid"
  { id: 16, title: "Masjid A", category: "Masjid", image: "/masjid1.webp", description: "Masjid dengan kapasitas jamaah besar." },
  { id: 17, title: "Masjid B", category: "Masjid", image: "/masjid2.webp", description: "Masjid dengan desain arsitektur modern." },
  { id: 18, title: "Masjid C", category: "Masjid", image: "/masjid3.webp", description: "Masjid dengan taman yang asri." },
  { id: 19, title: "Masjid D", category: "Masjid", image: "/masjid4.webp", description: "Masjid dengan kubah dan menara yang megah." },
  { id: 20, title: "Masjid E", category: "Masjid", image: "/masjid5.webp", description: "Masjid dengan interior yang nyaman." },

  // Projek untuk kategori "Ornamen"
  { id: 21, title: "Ornamen A", category: "Ornamen", image: "/ornamen1.webp", description: "Ornamen dinding dengan pola islami." },
  { id: 22, title: "Ornamen B", category: "Ornamen", image: "/ornamen2.webp", description: "Ornamen kayu dengan ukiran tangan." },
  { id: 23, title: "Ornamen C", category: "Ornamen", image: "/ornamen3.webp", description: "Ornamen kaligrafi untuk interior masjid." },
  { id: 24, title: "Ornamen D", category: "Ornamen", image: "/ornamen4.webp", description: "Ornamen dengan material marmer." },
  { id: 25, title: "Ornamen E", category: "Ornamen", image: "/ornamen5.webp", description: "Ornamen dengan desain modern." },

  // Projek untuk kategori "Mimbar"
  { id: 26, title: "Mimbar A", category: "Mimbar", image: "/mimbar1.webp", description: "Mimbar dengan desain klasik." },
  { id: 27, title: "Mimbar B", category: "Mimbar", image: "/mimbar2.webp", description: "Mimbar dengan material kayu jati." },
  { id: 28, title: "Mimbar C", category: "Mimbar", image: "/mimbar3.webp", description: "Mimbar dengan ukiran tangan." },
  { id: 29, title: "Mimbar D", category: "Mimbar", image: "/mimbar4.webp", description: "Mimbar dengan desain minimalis." },
  { id: 30, title: "Mimbar E", category: "Mimbar", image: "/mimbar5.webp", description: "Mimbar dengan pencahayaan LED." },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
  } | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6)
  }

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Galeri <span className="text-primary">Kami</span>
          </h2>
          <p className="section-subtitle">Jelajahi portofolio proyek kami di berbagai kategori.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`mb-2 ${activeCategory === category ? "border-primary" : ""}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <Button
              onClick={loadMoreProjects}
              variant="outline"
              className="bg-primary text-white hover:bg-primary/90"
            >
              Tampilkan Lebih Banyak ({filteredProjects.length - visibleProjects} tersisa)
            </Button>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white rounded-lg p-6 max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                <Button onClick={() => setSelectedProject(null)}>Tutup</Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}