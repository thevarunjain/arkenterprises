import type { Metadata } from "next"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

export const metadata: Metadata = {
  title: "Terms & Conditions | ARK Enterprises",
  description: "Terms and conditions for using the ARK Enterprises website.",
}

const sections = [
  {
    title: "Website Information",
    content:
      "The information available on this website is provided for general business and informational purposes. Product specifications, pricing, availability and other details may change without prior notice.",
  },
  {
    title: "Product Enquiries",
    content:
      "Submitting an enquiry through the website does not constitute a confirmed order or purchase. Orders are subject to confirmation by ARK Enterprises and may depend on product availability, specifications, quantity and other commercial terms.",
  },
  {
    title: "Pricing",
    content:
      "Prices may vary depending on product, quantity, grade, specifications, market conditions, manufacturer and applicable taxes or charges. Final pricing will be confirmed separately with the customer.",
  },
  {
    title: "Product Specifications",
    content:
      "Customers are responsible for reviewing and confirming the required product specifications, grade, quantity and applicable regulatory requirements before placing an order.",
  },
  {
    title: "Intellectual Property",
    content:
      "All website content, including text, logos, graphics, images and other materials, is the property of ARK Enterprises or is used with appropriate permission and may not be reproduced without prior written consent.",
  },
  {
    title: "Website Availability",
    content:
      "We do not guarantee that the website will always be available, uninterrupted or free from technical errors.",
  },
  {
    title: "Changes to Terms",
    content:
      "ARK Enterprises reserves the right to modify these Terms & Conditions at any time. Updated terms will be posted on this page.",
  },
]

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 pt-24 pb-16">
        <article className="mx-auto max-w-3xl">
          <a href="/" className="text-sm text-gray-500 hover:text-black">← Back to home</a>
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900">Terms &amp; Conditions</h1>
          <p className="mt-5 text-gray-600">
            By accessing and using the ARK Enterprises website, you agree to comply with the following Terms &amp; Conditions.
          </p>
          <div className="mt-10 space-y-8">
            {sections.map(({ title, content }) => (
              <section key={title}>
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                <p className="mt-2 leading-7 text-gray-600">{content}</p>
              </section>
            ))}
          </div>
          <p className="mt-8 leading-7 text-gray-600">
            For any questions regarding these Terms &amp; Conditions, please <a href="/#contact" className="underline underline-offset-4 hover:text-black">contact us</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
