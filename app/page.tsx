"use client"

import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Services from "../components/services"
import About from "../components/about"
import Certifications from "../components/certifications"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
