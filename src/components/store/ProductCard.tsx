import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../utils/format';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.brand}</p>
          </div>
          <p className="text-lg font-bold text-blue-600">{formatPrice(product.price)}</p>
        </div>
        <div className="mt-2 flex items-center">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}