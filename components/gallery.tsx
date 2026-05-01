const items = [
  { label: "Warehouse & Storage", bg: "bg-gray-200" },
  { label: "Industrial Equipment", bg: "bg-gray-300" },
  { label: "Raw Materials", bg: "bg-gray-200" },
  { label: "Packaging & Dispatch", bg: "bg-gray-300" },
  { label: "Logistics Fleet", bg: "bg-gray-200" },
  { label: "Quality Inspection", bg: "bg-gray-300" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Operations</h2>
          <p className="text-gray-500 max-w-xl mx-auto">A glimpse into our warehouses, logistics operations, and quality processes.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map(({ label, bg }) => (
            <div key={label} className={`${bg} rounded-xl aspect-video flex items-end p-4`}>
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">Images coming soon</p>
      </div>
    </section>
  )
}
