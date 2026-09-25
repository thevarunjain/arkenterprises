import { Facebook, Instagram } from "lucide-react"
import XBrandIcon from "./x-brand-icon"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="mb-2 flex items-center gap-3 text-white">
            <img src="/ark-logo.png" alt="" aria-hidden="true" className="h-12 w-12 object-contain" />
            <span className="text-lg font-bold">Ark Enterprises</span>
          </div>
          <p className="text-sm max-w-xs">Reliable industrial supplier serving businesses across India since 2024.</p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm">
          <div>
            <div className="text-white font-medium mb-3">Company</div>
            <ul className="space-y-2">
              {["About Us", "Contact", "Services", "Certifications", "Gallery"].map((l) => (
                <li key={l}><a href={`/#${l === "About Us" ? "about" : l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Policies</div>
            <ul className="space-y-2">
              <li><a href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
              <li><a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@arkenterprises.in" className="hover:text-white transition-colors">info@arkenterprises.in</a></li>
              <li><a href="mailto:ark0805enterprises@gmail.com" className="hover:text-white transition-colors">ark0805enterprises@gmail.com</a></li>
              <li><a href="tel:+918383858342" className="hover:text-white transition-colors">+91 8383858342</a></li>
              <li><a href="tel:+918818882225" className="hover:text-white transition-colors">+91 8818882225</a></li>
              <li>Shop No. 15, E-10-11-12, Ground Floor,<br />Triveni Complex, Laxmi Nagar,<br />East Delhi, New Delhi – 110092, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 flex gap-4" aria-label="Social media">
        <a href="https://www.instagram.com/ark0805enterprises/" aria-label="Instagram" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Instagram size={18} /></a>
        <a href="https://www.facebook.com/profile.php?id=61594430831439" aria-label="Facebook" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Facebook size={18} /></a>
        <a href="https://x.com/ARK080587" aria-label="X" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><XBrandIcon size={16} /></a>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 text-xs leading-6 text-gray-500">
        <p className="text-gray-300">Copyright ARK Enterprises</p>
        <p>©️ 2026 ARK Enterprises. All Rights Reserved.</p>
        <p className="mt-3">All content available on this website, including text, logos, graphics, images, product information, designs and other materials, is the property of ARK Enterprises unless otherwise stated.</p>
        <p>No part of this website may be copied, reproduced, modified, distributed, published or used for commercial purposes without prior written permission from ARK Enterprises.</p>
        <p>ARK Enterprises reserves all rights not expressly granted herein.</p>
      </div>
    </footer>
  )
}
