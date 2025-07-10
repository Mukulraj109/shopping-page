'use client';

import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { categories } from '@/data/products';
import { FilterState } from '@/types/product';

interface SidebarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export default function Sidebar({ filters, onFiltersChange }: SidebarProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  useEffect(() => {
    setPriceRange(filters.priceRange);
  }, [filters.priceRange]);

  const handleCategorySelect = (categoryId: string) => {
    onFiltersChange({
      ...filters,
      categories: categoryId === 'all' ? [] : [categoryId]
    });
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const handlePriceCommit = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  return (
    <div className="bg-[#0052cc] text-white p-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>

      <div className="mb-8">
        <h3 className="text-md font-medium mb-4">Category</h3>
        <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={filters.categories.length === 0}
              onChange={() => handleCategorySelect('all')}
              className="appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white"
            />
            <span>All</span>
          </label>

          {categories
            .filter((cat) => cat.id !== 'all')
            .map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-2 cursor-pointer capitalize"
              >
                <input
                  type="radio"
                  name="category"
                  checked={filters.categories.includes(category.id)}
                  onChange={() => handleCategorySelect(category.id)}
                  className="appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white"
                />
                <span>{category.name}</span>
              </label>
            ))}
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium mb-4">Price</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={handlePriceChange}
            onValueCommit={handlePriceCommit}
            max={1000}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-white/80">
            <span>{priceRange[0]}</span>
            <span>{priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
