import React from 'react';
import { Truck, Shield, HeadphonesIcon, CreditCard } from 'lucide-react';

const features = [
  {
    name: 'Free Shipping',
    description: 'Free delivery on all orders over $999',
    icon: Truck,
  },
  {
    name: 'Two-Year Warranty',
    description: 'Extended warranty with full coverage',
    icon: Shield,
  },
  {
    name: '24/7 Support',
    description: 'Technical assistance whenever you need',
    icon: HeadphonesIcon,
  },
  {
    name: 'Secure Payment',
    description: 'Multiple payment options available',
    icon: CreditCard,
  },
];

export function Features() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}