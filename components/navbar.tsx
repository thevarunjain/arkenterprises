"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = ["Services", "About", "Certifications", "Gallery", "Contact"]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="text-xl font-bold tracking-tight">Ark Enterprises</span>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm text-gray-600 hover:text-black transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
          Get a Quote
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-sm text-gray-700">
              {l}
            </a>
          ))}
          <a href="#contact" className="text-sm font-medium text-black">Get a Quote →</a>
        </div>
      )}
    </nav>
  )
}
