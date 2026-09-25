import type { Metadata } from "next"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import ProductCatalog from "../../components/product-catalog"

export const metadata: Metadata = {
  title: "Product Catalogue | ARK Enterprises",
  description: "Browse ARK Enterprises nutraceutical raw materials and food ingredients by category or alphabetically.",
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <h1 className="sr-only">ARK Enterprises Product Catalogue</h1>
        <ProductCatalog />
      </main>
      <Footer />
    </>
  )
}
