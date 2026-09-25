import type { Metadata } from "next"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

export const metadata: Metadata = {
  title: "Refund Policy | ARK Enterprises",
  description: "Refund, return and order cancellation policy for ARK Enterprises.",
}

const sections = [
  {
    title: "Order Cancellation",
    content: "Cancellation requests should be communicated to ARK Enterprises as soon as possible. Once an order has been processed, dispatched or supplied, cancellation may not be possible.",
  },
  {
    title: "Damaged or Incorrect Products",
    content: "If a product is received damaged, incorrect or materially different from the confirmed order specifications, please contact us promptly with relevant details and supporting photographs/documents where applicable. The matter will be reviewed and, where applicable, an appropriate replacement, credit or refund may be provided subject to verification.",
  },
  {
    title: "Refunds",
    content: "Where a refund is approved, the refund method and processing time will depend on the payment method and applicable circumstances. Any applicable deductions, charges or non-refundable amounts will be communicated to the customer where relevant.",
  },
  {
    title: "Non-Returnable Products",
    content: "Products that have been specially sourced, customized, opened, altered, stored improperly or supplied according to specific customer requirements may not be eligible for return or refund, subject to applicable law and agreed commercial terms.",
  },
]

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 pt-24 pb-16">
        <article className="mx-auto max-w-3xl">
          <a href="/" className="text-sm text-gray-500 hover:text-black">← Back to home</a>
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900">Refund Policy</h1>
          <p className="mt-5 leading-7 text-gray-600">At ARK Enterprises, we aim to provide quality products and reliable service to our customers.</p>
          <p className="mt-4 leading-7 text-gray-600">Since our business primarily deals in nutraceutical &amp; Food Ingredients the return, replacement or refund of products may depend on the nature of the product, order specifications and applicable commercial terms.</p>
          <div className="mt-10 space-y-8">
            {sections.map(({ title, content }) => (
              <section key={title}>
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                <p className="mt-2 leading-7 text-gray-600">{content}</p>
              </section>
            ))}
          </div>
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
            <p className="mt-2 leading-7 text-gray-600">For any return, replacement or refund-related enquiry, please contact:</p>
            <div className="mt-3 space-y-1 leading-7 text-gray-600">
              <p>ARK Enterprises</p>
              <p>Email: <a href="mailto:info@arkenterprises.in" className="underline underline-offset-4 hover:text-black">info@arkenterprises.in</a></p>
              <p>Phone: <a href="tel:+918383858342" className="underline underline-offset-4 hover:text-black">+91 8383858342</a> / <a href="tel:+918818882225" className="underline underline-offset-4 hover:text-black">+91 8818882225</a></p>
            </div>
            <p className="mt-4 leading-7 text-gray-600">Each request will be reviewed individually based on the order details and applicable terms.</p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
