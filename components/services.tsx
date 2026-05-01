import { Package, Truck, ShieldCheck, BarChart3, Settings, Users } from "lucide-react"

const services = [
  { icon: Package, title: "Raw Material Supply", desc: "Consistent supply of industrial raw materials sourced from verified manufacturers." },
  { icon: Truck, title: "Logistics & Delivery", desc: "End-to-end delivery solutions ensuring goods reach you safely and on time." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every product goes through rigorous quality checks before dispatch." },
  { icon: BarChart3, title: "Bulk Procurement", desc: "Cost-effective bulk purchasing with flexible payment and credit terms." },
  { icon: Settings, title: "Custom Sourcing", desc: "We source specific products tailored to your requirements." },
  { icon: Users, title: "B2B Partnerships", desc: "Long-term supply agreements with dedicated account management." },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-gray-500 max-w-xl mx-auto">From sourcing to delivery, we handle every step of the supply chain so you can focus on your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Icon size={20} className="text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
