"use client"

import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Services from "../components/services"
import About from "../components/about"
import Certifications from "../components/certifications"
import Gallery from "../components/gallery"
import Contact from "../components/contact"
import GoogleForm from "../components/google-form"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Certifications />
      <Gallery />
      <Contact />
      <GoogleForm />
      <Footer />
    </main>
  )
}
