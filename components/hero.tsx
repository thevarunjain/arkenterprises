export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
          Trusted Industrial Supplier
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          You Demand.<br />We Deliver.
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Ark Enterprises is a leading supplier of industrial goods, raw materials, and equipment. We serve manufacturers, contractors, and businesses across industries with competitive pricing and on-time delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
            Request a Quote
          </a>
          <a href="#services" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:border-gray-500 transition-colors">
            Our Services
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[["500+", "Clients Served"], ["15+", "Years Experience"], ["99%", "On-Time Delivery"]].map(([stat, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-gray-900">{stat}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
