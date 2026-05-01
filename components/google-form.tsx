"use client"

import { useState } from "react"

const FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScnn5T5OrQ7F3qFV7Q5sTSAMzW1EgkQjRnIFYBCDkfG7f53mw/formResponse"

export default function GoogleForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const f = e.currentTarget
    const body = new URLSearchParams({
      "entry.1633920210": (f.elements.namedItem("name") as HTMLInputElement).value,
      "entry.227649005": (f.elements.namedItem("email") as HTMLInputElement).value,
      "entry.790080973": (f.elements.namedItem("address") as HTMLInputElement).value,
      "entry.1770822543": (f.elements.namedItem("phone") as HTMLInputElement).value,
      "entry.1846923513": (f.elements.namedItem("message") as HTMLTextAreaElement).value,
      "fvv": "1",
      "pageHistory": "0",
      "fbzx": "6582853857070841925",
      "submissionTimestamp": "-1",
    })
    try {
      await fetch(FORM_URL, { method: "POST", body, mode: "no-cors" })
    } catch {}
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="enquiry" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit an Enquiry</h2>
          <p className="text-gray-500">For bulk orders, partnerships, or detailed requirements.</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          {sent ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-semibold text-gray-900 mb-2">Enquiry Submitted</h3>
              <p className="text-sm text-gray-500">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1">Name *</label>
                  <input required name="name" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700 block mb-1">Email *</label>
                  <input required name="email" type="email" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">Phone</label>
                <input name="phone" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">Address *</label>
                <input required name="address" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Your business address" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 block mb-1">Message</label>
                <textarea name="message" rows={4} className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none" placeholder="Describe your requirement..." />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-black text-white py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-60">
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
