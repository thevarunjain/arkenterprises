import type { Metadata } from "next"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

export const metadata: Metadata = {
  title: "Disclaimer | ARK Enterprises",
  description: "Disclaimer for information provided on the ARK Enterprises website.",
}

const paragraphs = [
  "The information provided on this website is intended for general informational and business purposes only.",
  "ARK Enterprises makes reasonable efforts to ensure that the information presented on this website is accurate and up to date. However, we do not guarantee that all information, product specifications, descriptions, availability or other content is complete, accurate or error-free at all times.",
  "Product specifications, grades, compositions, packaging, availability and other details may vary depending on the manufacturer, batch, applicable standards and customer requirements.",
  "The information provided on this website should not be considered medical, pharmaceutical, diagnostic or professional advice. Customers should independently verify product suitability, specifications, regulatory requirements and applicable standards before using or purchasing any product.",
  "ARK Enterprises shall not be responsible for any loss or damage arising from reliance solely on information available on this website.",
  "By using this website, you acknowledge and agree to this Disclaimer.",
]

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 pt-24 pb-16">
        <article className="mx-auto max-w-3xl">
          <a href="/" className="text-sm text-gray-500 hover:text-sky-700">← Back to home</a>
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900">Disclaimer</h1>
          <div className="mt-8 space-y-5">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-7 text-gray-600">{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
