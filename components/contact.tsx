"use client"

import { useState } from "react"
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react"

// Use the coordinates of ARK Enterprises' verified Google Maps listing so the
// map opens on the business rather than geocoding the broader street address.
const mapEmbedUrl = "https://maps.google.com/maps?q=28.6343582,77.2812563&z=17&output=embed"
const directionsUrl = "https://www.google.com/maps/place/ARK+Enterprises/@28.6343629,77.2786814,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd2a66a6835f:0x8354b05d56a29a80!8m2!3d28.6343582!4d77.2812563!16s%2Fg%2F11njcwn3tl"

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const formsubmitData = new FormData(e.currentTarget)
    formsubmitData.append("_cc", "ark0805enterprises@gmail.com")

    const formspreeData = new FormData(e.currentTarget)

    await Promise.all([
      fetch("https://formsubmit.co/varunsj18@gmail.com", {
        method: "POST",
        body: formsubmitData,
        headers: { Accept: "application/json" },
      }),
      fetch("https://formspree.io/f/mjglvdbe", {
        method: "POST",
        body: formspreeData,
        headers: { Accept: "application/json" },
      }),
    ])
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Contact Us</h2>
          <p className="text-gray-500 mb-8">For product enquiries, quotations, samples or bulk requirements, please contact our team.</p>

          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-900">ARK Enterprises</span>
            </div>
            <div>
              <span className="mb-1 inline-flex items-center gap-1.5 font-medium text-gray-900"><Phone size={14} className="text-sky-700/70" aria-hidden="true" />Phone</span><br />
              <a className="hover:text-sky-800" href="tel:+918383858342">+91 83838 58342</a><br />
              <a className="hover:text-sky-800" href="tel:+918818882225">+91 88188 82225</a>
            </div>
            <div>
              <span className="mb-1 inline-flex items-center gap-1.5 font-medium text-gray-900"><Mail size={14} className="text-sky-700/70" aria-hidden="true" />Email</span><br />
              <a className="hover:text-sky-800" href="mailto:info@arkenterprises.in">info@arkenterprises.in</a><br />
              <a className="hover:text-sky-800" href="mailto:ark0805enterprises@gmail.com">ark0805enterprises@gmail.com</a>
            </div>
            <div>
              <span className="mb-1 inline-flex items-center gap-1.5 font-medium text-gray-900"><MapPin size={14} className="text-sky-700/70" aria-hidden="true" />Address</span><br />
              Shop No. 15, E-10-11-12, Ground Floor,<br />
              Triveni Complex, Laxmi Nagar, East Delhi,<br />
              New Delhi – 110092, India
            </div>
          </div>

          <div className="mt-6 max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="relative">
            <iframe
              title="ARK Enterprises location on Google Maps"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-56 w-full sm:h-64"
            />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[calc(50%+14px)] top-[calc(50%-18px)] z-10 -translate-y-1/2 whitespace-nowrap text-[18px] leading-tight text-[#b3261e] [text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white,0_0_5px_white]"
              >
                <span className="block">ARK Enterprises</span>
                <span className="block text-[15px]">एआरके एंटरप्राइजेज</span>
              </div>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-sky-800 transition-colors hover:text-sky-950"
            >
              <MapPin size={17} aria-hidden="true" />
              Get Directions
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="ml-auto h-full w-full max-w-xl">
          {sent ? (
            <div className="flex h-full min-h-72 items-center justify-center rounded-2xl border border-gray-200 bg-white/75 p-6 text-center shadow-sm backdrop-blur-sm">
              <div className="max-w-sm">
                <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-800">
                  <Send size={24} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">Message sent</h3>
                <p className="text-sm leading-6 text-gray-600">Thanks for reaching out. Our team will review your enquiry and get back to you.</p>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white/60 p-5 shadow-sm backdrop-blur-sm sm:p-6">
              <div className="mb-5 border-b border-gray-200/80 pb-4">
                <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-800">Product enquiry</span>
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Send us a message</h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">Tell us what you need and our team will get back to you.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-gray-700">Name <span className="text-sky-700">*</span></label>
                  <input id="contact-name" required name="name" autoComplete="name" className="w-full rounded-md border border-gray-200 bg-white/80 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-company" className="mb-1.5 block text-xs font-medium text-gray-700">Company</label>
                  <input id="contact-company" name="company" autoComplete="organization" className="w-full rounded-md border border-gray-200 bg-white/80 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100" placeholder="Company name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-gray-700">Business email <span className="text-sky-700">*</span></label>
                  <input id="contact-email" required name="email" type="email" autoComplete="email" className="w-full rounded-md border border-gray-200 bg-white/80 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100" placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-medium text-gray-700">Phone</label>
                  <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className="w-full rounded-md border border-gray-200 bg-white/80 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100" placeholder="+91 00000 00000" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-gray-700">Your requirements <span className="text-sky-700">*</span></label>
                  <textarea id="contact-message" required name="message" rows={3} className="w-full resize-y rounded-md border border-gray-200 bg-white/80 px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100" placeholder="Product, quantity or specifications…" />
                </div>
                <div className="space-y-2">
                  <button type="submit" disabled={loading} className="group flex w-full items-center justify-center gap-2 rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300 disabled:cursor-wait disabled:opacity-60">
                    {loading ? "Sending your enquiry…" : "Send enquiry"}
                    <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="text-center text-xs text-gray-400">Your details will only be used to respond to your enquiry.</p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
