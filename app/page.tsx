'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Product, FilterState } from '@/types/product';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    searchQuery: ''
  });

  useEffect(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.categories.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.includes(product.category)
      );
    }

    filtered = filtered.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [searchQuery, filters]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearchChange={handleSearchChange} searchQuery={searchQuery} />

      {/* Main Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-80">
            <Sidebar filters={filters} onFiltersChange={handleFiltersChange} />
          </div>

          {/* Product Listing */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Product Listing
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#003366] text-white mt-16">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {/* Filters */}
            <div>
              <h3 className="text-base font-semibold mb-4">Filters</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white">All</a></li>
                <li><a href="#" className="hover:text-white">Elektronik</a></li>
              </ul>
              <p className="mt-4 text-blue-300 text-sm">&copy; 2024 American</p>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-base font-semibold mb-4">About Us</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="text-base font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <div className="w-8 h-8 bg-[#1D4ED8] rounded-full flex items-center justify-center">
                    <Facebook className="w-4 h-4 text-white" />
                  </div>
                </a>
                <a href="#" className="hover:text-white">
                  <div className="w-8 h-8 bg-[#1D4ED8] rounded-full flex items-center justify-center">
                    <Twitter className="w-4 h-4 text-white" />
                  </div>
                </a>
                <a href="#" className="hover:text-white">
                  <div className="w-8 h-8 bg-[#1D4ED8] rounded-full flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
