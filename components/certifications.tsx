const certs = [
  { name: "ISO 9001:2015", desc: "Quality Management System certified for consistent product and service standards." },
  { name: "MSME Registered", desc: "Registered under the Ministry of Micro, Small & Medium Enterprises, Government of India." },
  { name: "GST Compliant", desc: "Fully GST registered and compliant for seamless B2B transactions." },
  { name: "Udyam Certificate", desc: "Recognized under the Udyam Registration scheme for small and medium enterprises." },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
          <p className="text-gray-500 max-w-xl mx-auto">We maintain all necessary certifications to ensure you are working with a credible and compliant supplier.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map(({ name, desc }) => (
            <div key={name} className="flex gap-5 p-6 border border-gray-200 rounded-xl">
              <div className="w-12 h-12 shrink-0 bg-gray-900 text-white rounded-lg flex items-center justify-center text-xs font-bold text-center leading-tight px-1">
                {name.split(" ")[0]}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
