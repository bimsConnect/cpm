import type { Metadata } from "next"
import Hero from "./components/sections/hero"
import About from "./components/sections/about"
import Services from "./components/sections/services"
import Projects from "./components/sections/projects"
import Testimonials from "./components/sections/testimonial"
import Contact from "./components/sections/contact"
import Footer from "./components/layout/footer"
import Header from "./components/layout/header"
import Blog from "./components/sections/blog-section"
import StatsSection from "./components/sections/web-statistic" 

export const metadata: Metadata = {
  title: "Cipta Mandiri Perkasa - Construction & Building Services",
  description:
    "Professional construction and building services with over 15 years of experience in the industry. We provide high-quality construction, renovation, and maintenance services.",
  keywords: "construction, building, renovation, contractor, civil engineering, architecture, infrastructure",
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Blog />
        <Testimonials />
        <Contact />
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Statistik website</h1>
        <p className="text-gray-700 mb-8"></p>
        {/* Statistik Website */}
        <StatsSection />
        </main>
      </main>
      <Footer />
    </>
  )
}

