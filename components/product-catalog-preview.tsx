import { ArrowUpRight } from "lucide-react"
import { productCategories, products } from "../data/products"

export default function ProductCatalogPreview() {
  const categories = productCategories.filter((category) => category !== "All Materials")
  const uniqueProductCount = new Set(products.map((product) => product.name)).size

  return (
    <div id="products" className="mt-10 border-t border-gray-300/80 pt-8 text-left">
      <div>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-800">Product catalogue</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Find the materials you need</h2>
            <p className="mt-2 text-sm text-gray-600">Browse {uniqueProductCount}+ listed products by category, or open the complete A–Z directory.</p>
          </div>
          <a href="/products" className="inline-flex w-fit items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700">
            View full product list <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category}
              href={`/products?category=${encodeURIComponent(category)}`}
              className="group flex min-h-16 items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span className="font-medium text-gray-800 group-hover:text-gray-950">{category}</span>
              <ArrowUpRight size={17} aria-hidden="true" className="shrink-0 text-gray-400 transition-colors group-hover:text-sky-700" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
