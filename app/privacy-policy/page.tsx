import type { Metadata } from "next"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | ARK Enterprises",
  description: "Learn how ARK Enterprises collects and uses information submitted through its website.",
}

const sections = [
  {
    title: "Information We May Collect",
    content: (
      <>
        <p>When you contact us or submit an enquiry through our website, we may collect information such as:</p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>Name</li>
          <li>Company name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business address</li>
          <li>Product requirements</li>
          <li>Any other information voluntarily provided by you</li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <>
        <p>The information collected may be used to:</p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>Respond to your enquiries</li>
          <li>Provide quotations and product information</li>
          <li>Process business requests</li>
          <li>Communicate regarding products and services</li>
          <li>Improve our website and customer service</li>
        </ul>
        <p className="mt-4">We do not sell or knowingly share your personal information with unrelated third parties for their independent marketing purposes.</p>
      </>
    ),
  },
  {
    title: "Data Security",
    content: <p>We take reasonable measures to protect the information provided to us from unauthorized access, misuse or disclosure. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.</p>,
  },
  {
    title: "Third-Party Websites",
    content: <p>Our website may contain links to third-party websites. ARK Enterprises is not responsible for the privacy practices or content of external websites.</p>,
  },
  {
    title: "Updates to This Policy",
    content: <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 pt-24 pb-16">
        <article className="mx-auto max-w-3xl">
          <a href="/" className="text-sm text-gray-500 hover:text-sky-700">← Back to home</a>
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
          <p className="mt-5 leading-7 text-gray-600">At ARK Enterprises, we respect your privacy and are committed to protecting the information you provide to us.</p>
          <div className="mt-10 space-y-8">
            {sections.map(({ title, content }) => (
              <section key={title}>
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                <div className="mt-2 leading-7 text-gray-600">{content}</div>
              </section>
            ))}
          </div>
          <p className="mt-8 leading-7 text-gray-600">
            If you have questions regarding this Privacy Policy, please contact us at <a href="mailto:info@arkenterprises.in" className="underline underline-offset-4 hover:text-sky-700">info@arkenterprises.in</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
