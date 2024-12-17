import React from 'react';
import { Laptop2, ShoppingCart, User, Search } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Laptop2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">TechPort</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/">Home</Link>
              <Link href="/store">Store</Link>
              <Link href="/offers">Special Offers</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/support">Support</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search laptops..."
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="h-5 w-5 text-gray-500 -ml-8" />
            </div>
            <button className="text-gray-600 hover:text-blue-600">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}