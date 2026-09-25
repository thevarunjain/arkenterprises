import ProductCatalogPreview from "./product-catalog-preview"

export default function Hero() {
  const yearsExperience = new Date().getFullYear() - 2023

  return (
    <section id="home" className="pt-32 pb-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
          Nutraceutical &amp; Food Ingredients
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-sky-700 mb-6">
          Nourishing Health, Naturally
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          One Stop Solution for all your Nutraceutical Products Requirement.
        </p>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[["150+", "Clients Served"], [`${yearsExperience}+`, "Years Experience"], ["99%", "On-Time Delivery"]].map(([stat, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-gray-900">{stat}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
        <ProductCatalogPreview />
      </div>
    </section>
  )
}
