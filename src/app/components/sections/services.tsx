"use client"

import { motion } from "framer-motion"
import { Building2, Home, PenTool, Paintbrush, Users, Wrench } from "lucide-react"
import { Button } from "../ui/button"

const services = [
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Konstruksi Bangunan",
    description:
      "Kami menyediakan layanan konstruksi pembuatan kubah GRC, Ornamen, Masjid, Kerawangan, Menara, dan Motif awan kaligrafi",
  },
  {
    icon: <Home className="h-10 w-10" />,
    title: "Renovasi Rumah",
    description:
      "Ubah ruang yang ada dengan layanan renovasi profesional kami yang disesuaikan dengan kebutuhan dan preferensi Anda.",
  },
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "Desain Arsitektur",
    description:
      "Tim arsitek kami yang terampil menciptakan desain inovatif dan fungsional yang memenuhi kebutuhan spesifik Anda.",
  },
  {
    icon: <Paintbrush className="h-10 w-10" />,
    title: "Desain Interior",
    description: "Ciptakan ruang interior yang indah dan fungsional dengan layanan desain interior profesional kami.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Konsultasi",
    description:
      "Dapatkan saran dan panduan ahli untuk proyek konstruksi dan bangunan Anda dari konsultan berpengalaman kami.",
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: "Pemeliharaan",
    description: "Jaga properti Anda dalam kondisi optimal dengan layanan pemeliharaan komprehensif kami.",
  },
]

export default function Services() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Mengapa <span className="text-primary">Memilih Kami?</span>
          </h2>
          <p className="section-subtitle">
            Kami menawarkan berbagai macam jasa konstruksi dan bangunan untuk memenuhi kebutuhan Anda.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="p-4 bg-primary/10 rounded-lg w-fit mb-4 text-primary">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
              <div>
            </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}