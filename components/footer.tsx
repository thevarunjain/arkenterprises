export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="text-white font-bold text-lg mb-2">Ark Enterprises</div>
          <p className="text-sm max-w-xs">Reliable industrial supplier serving businesses across India since 2009.</p>
        </div>

        <div className="flex gap-16 text-sm">
          <div>
            <div className="text-white font-medium mb-3">Company</div>
            <ul className="space-y-2">
              {["Services", "About", "Certifications", "Gallery"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>info@arkenterprises.in</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, Maharashtra</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 text-xs text-gray-600">
        © {new Date().getFullYear()} Ark Enterprises. All rights reserved.
      </div>
    </footer>
  )
}
