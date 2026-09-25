export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">About Us</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">A Trusted Supplier for Nutraceuticals &amp; Raw Materials</h2>
          <p className="text-gray-500 mb-4">
            ARK Enterprises is a trusted supplier and trading company engaged in Nutraceuticals, Raw Material. We cater to the requirements of nutraceutical, food, dietary supplement and related industries by sourcing and supplying quality raw materials from reliable manufacturers and suppliers.
          </p>
          <p className="text-gray-500 mb-4">
            Our product portfolio includes Nutraceutical Ingredients and Food Ingredients. At ARK Enterprises, we focus on providing:
          </p>
          <ul className="space-y-3 mb-6">
            {["Quality-oriented products", "Reliable sourcing", "Competitive pricing", "Timely supply", "Customer-focused service"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 mb-4">
            Our objective is to build long-term business relationships by providing dependable products and professional service.
          </p>
          <p className="font-semibold text-gray-900">
            ARK Enterprises – One Stop Solution for all your Nutraceutical Products Requirement.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-8 md:p-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Our Product Portfolio</span>
          <h3 className="mt-4 text-2xl font-bold text-gray-900">Ingredients for growing industries</h3>
          <p className="mt-3 leading-7 text-gray-500">Sourcing and supply support for nutraceutical, food, dietary supplement and related businesses.</p>
          <div className="mt-8 space-y-3">
            {["Nutraceutical Raw Materials", "Food Raw Materials"].map((item) => (
              <div key={item} className="rounded-lg bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
