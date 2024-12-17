import React from 'react';
import { Filters } from '../components/store/Filters';
import { ProductGrid } from '../components/store/ProductGrid';

export function Store() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Laptops</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <Filters />
        </div>
        <div className="lg:w-3/4">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}