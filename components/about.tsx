export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">About Us</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">A Supplier You Can Count On</h2>
          <p className="text-gray-500 mb-4">
            Founded over 15 years ago, Ark Enterprises has grown from a local trading firm into a trusted industrial supplier serving clients across the country. We specialize in bridging the gap between manufacturers and businesses that need a reliable, single-point supply partner.
          </p>
          <p className="text-gray-500 mb-8">
            Our team of sourcing experts, logistics coordinators, and account managers work together to ensure every order is fulfilled accurately and on time. We believe in building long-term partnerships, not just transactions.
          </p>
          <ul className="space-y-3">
            {["Pan-India delivery network", "Verified supplier base", "Dedicated account managers", "Flexible credit terms"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Products Supplied", value: "1,200+" },
            { label: "Industry Sectors", value: "12+" },
            { label: "Orders Fulfilled", value: "50,000+" },
            { label: "Vendor Partners", value: "300+" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
