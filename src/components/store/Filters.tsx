import React from 'react';
import { Filter } from 'lucide-react';

export function Filters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 text-gray-500" />
        <h2 className="ml-2 text-lg font-semibold">Filters</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Brand</h3>
          <div className="space-y-2">
            {['Apple', 'Dell', 'HP', 'Lenovo'].map((brand) => (
              <label key={brand} className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="ml-2 text-gray-600">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="space-y-2">
            {['Under $1000', '$1000-$2000', '$2000-$3000', 'Over $3000'].map((range) => (
              <label key={range} className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="ml-2 text-gray-600">{range}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}