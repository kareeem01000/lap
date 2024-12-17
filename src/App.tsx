import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Store } from './pages/Store';
import { Blog } from './pages/Blog';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Store />
        <Blog />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About TechPort</h3>
              <p className="text-gray-400">
                Premium laptop retailer offering the latest technology with exceptional service and support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/store" className="hover:text-white">Store</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/support" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: support@techport.com<br />
                Phone: (555) 123-4567<br />
                Hours: Mon-Fri 9AM-6PM EST
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;