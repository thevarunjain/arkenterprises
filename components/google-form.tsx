export default function GoogleForm() {
  return (
    <section id="google-form" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit a Detailed Enquiry</h2>
          <p className="text-gray-500">Use this form for bulk orders, partnerships, or detailed requirements.</p>
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScnn5T5OrQ7F3qFV7Q5sTSAMzW1EgkQjRnIFYBCDkfG7f53mw/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  )
}
