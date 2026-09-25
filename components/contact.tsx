"use client"

import { useState } from "react"

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
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Contact Us</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">Let's Talk Business</h2>
          <p className="text-gray-500 mb-8">We would be happy to assist you with your requirements for Nutraceuticals and Food Ingredients.</p>

          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <span className="font-medium text-gray-900">ARK Enterprises</span>
            </div>
            <div>
              <span className="font-medium text-gray-900">Address</span><br />
              Shop No. 15, E-10-11-12, Ground Floor,<br />
              Triveni Complex, Laxmi Nagar, East Delhi,<br />
              New Delhi – 110092, India
            </div>
            <div>
              <span className="font-medium text-gray-900">Phone</span><br />
              <a className="hover:text-gray-900" href="tel:+918383858342">+91 8383858342</a>
              {" / "}
              <a className="hover:text-gray-900" href="tel:+918818882225">+91 8818882225</a>
            </div>
            <div>
              <span className="font-medium text-gray-900">Email</span><br />
              <a className="hover:text-gray-900" href="mailto:info@arkenterprises.in">info@arkenterprises.in</a><br />
              <a className="hover:text-gray-900" href="mailto:ark0805enterprises@gmail.com">ark0805enterprises@gmail.com</a>
            </div>
            <p>For product enquiries, quotations, samples or bulk requirements, please contact our team.</p>
          </div>
        </div>

        <div>
          {sent ? (
            <div className="flex items-center justify-center h-full text-center">
              <div>
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Message Sent</h3>
                <p className="text-sm text-gray-500">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1">Name</label>
                  <input required name="name" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1">Company</label>
                  <input name="company" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Company name" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">Email</label>
                <input required name="email" type="email" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">Phone</label>
                <input name="phone" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">Message</label>
                <textarea required name="message" rows={4} className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none" placeholder="Describe your requirement..." />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-black text-white py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-60">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
