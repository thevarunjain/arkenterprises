"use client"

import { useEffect, useMemo, useState } from "react"
import { products, productCategories, type Product } from "../data/products"

const letterColors = [
  "bg-sky-100 text-sky-800",
  "bg-emerald-100 text-emerald-800",
  "bg-amber-100 text-amber-900",
  "bg-violet-100 text-violet-800",
  "bg-rose-100 text-rose-800",
]

export default function ProductCatalog() {
  const [category, setCategory] = useState("All Materials")
  const [query, setQuery] = useState("")
  const [letter, setLetter] = useState("All")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const initialCategory = params.get("category")
    const initialQuery = params.get("q")
    if (initialCategory && productCategories.includes(initialCategory)) setCategory(initialCategory)
    if (initialQuery) setQuery(initialQuery)
  }, [])

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase()
    return products
      .filter((product) => category === "All Materials" || product.category === category)
      .filter((product) => !search || `${product.name} ${product.category}`.toLowerCase().includes(search))
      .filter((product) => letter === "All" || product.name.toUpperCase().startsWith(letter))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [category, query, letter])

  const letters = useMemo(
    () => Array.from(new Set(products
      .filter((product) => category === "All Materials" || product.category === category)
      .map((product) => product.name[0].toUpperCase())))
      .sort((a, b) => a.localeCompare(b)),
    [category],
  )

  const groups = useMemo(() => filteredProducts.reduce<Record<string, Product[]>>((result, product) => {
    const initial = product.name[0].toUpperCase()
    ;(result[initial] ??= []).push(product)
    return result
  }, {}), [filteredProducts])

  function changeCategory(next: string) {
    setCategory(next)
    setLetter("All")
  }

  return (
    <section id="catalog" className="bg-gray-50 px-6 pb-16 pt-10 md:pb-20 md:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-green-800">ARK Enterprises Product List</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Browse Materials A–Z</h2>
          <p className="mt-2 text-gray-600">Browse by category or search by material name.</p>
        </div>

        <div className="sticky top-16 z-40 -mx-6 mt-5 border-y border-gray-200 bg-gray-50/95 px-6 py-3 shadow-sm backdrop-blur">
          <label htmlFor="product-search" className="sr-only">Search products</label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(event) => { setQuery(event.target.value); setLetter("All") }}
            placeholder="Search materials…"
            className="w-full max-w-xl rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Filter by category">
            {productCategories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => changeCategory(item)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors sm:text-sm ${category === item ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-gray-500"}`}
              >
                {item}
              </button>
            ))}
          </div>

          <nav className="mt-2 flex gap-1 overflow-x-auto whitespace-nowrap" aria-label="Browse by first letter">
            <button type="button" aria-pressed={letter === "All"} onClick={() => setLetter("All")} className={`shrink-0 rounded px-2.5 py-1 text-sm font-medium ${letter === "All" ? "bg-sky-100 text-sky-900" : "text-gray-600 hover:bg-white"}`}>All</button>
            {letters.map((item) => (
              <button key={item} type="button" aria-pressed={letter === item} onClick={() => setLetter(item)} className={`shrink-0 rounded px-2.5 py-1 text-sm font-medium ${letter === item ? "bg-sky-100 text-sky-900" : "text-gray-600 hover:bg-white"}`}>
                {item}
              </button>
            ))}
          </nav>
        </div>

        <p className="mt-4 text-sm text-gray-500" aria-live="polite">Showing {filteredProducts.length} materials</p>

        {filteredProducts.length === 0 ? (
          <p className="mt-8 rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center text-gray-600">No materials match that search. Try another name or category.</p>
        ) : (
          <div className="mt-3 grid gap-x-12 md:grid-cols-2">
            {Object.entries(groups).map(([initial, items]) => (
              <section key={initial} aria-labelledby={`letter-${initial}`}>
                <h2 id={`letter-${initial}`} className="border-b border-gray-300 py-3 text-lg font-semibold text-gray-900">
                  <span className={`inline-grid h-8 w-8 place-items-center rounded-md ${letterColors[initial.charCodeAt(0) % letterColors.length]}`}>{initial}</span>
                </h2>
                <ul>
                  {items.map((product) => (
                    <li key={`${product.category}-${product.name}`} className="flex items-center justify-between gap-4 border-b border-gray-200 py-3">
                      <div>
                        <div className="font-medium text-gray-800">{product.name}</div>
                        <div className="mt-1 text-xs text-gray-500">{product.category}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
