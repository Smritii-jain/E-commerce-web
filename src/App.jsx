import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import productsData from "./data/products";

export default function App() {
  const [products] = useState(productsData);
  const [filters, setFilters] = useState({
    brand: null,
    color: null,
    price: 600,
  });
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const filteredProducts = products.filter((p) => {
    const brandMatch = filters.brand ? p.brand === filters.brand : true;
    const colorMatch = filters.color ? p.colors.includes(filters.color) : true;
    const priceMatch = p.discountPrice <= filters.price;
    return brandMatch && colorMatch && priceMatch;
  });

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar - This is where the sidebar is located */}
        <Sidebar filters={filters} setFilters={setFilters} />
        
        {/* Main Content Area */}
        <main className="flex-1 p-4">
          <HeroSlider />
          <div className="mt-8">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-600">
                No products found.
                <button
                  onClick={() => setFilters({ brand: null, color: null, price: 600 })}
                  className="text-blue-600 underline"
                >
                  Reset filters
                </button>
              </p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
                <div className="mt-6 flex justify-center">
                  <Pagination
                    currentPage={page}
                    totalItems={filteredProducts.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setPage}
                  />
                </div>
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}