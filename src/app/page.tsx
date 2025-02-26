import type { Metadata } from "next"
import Hero from "./components/sections/hero"
import About from "./components/sections/about"
import Services from "./components/sections/services"
import Projects from "./components/sections/projects"
import Testimonials from "./components/sections/testimonial"
import Contact from "./components/sections/contact"
import Footer from "./components/layout/footer"
import Header from "./components/layout/header"
import Blog from "./components/sections/blog"

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
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

