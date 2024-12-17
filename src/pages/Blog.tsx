import React from 'react';
import { BlogGrid } from '../components/blog/BlogGrid';

export function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Latest Tech Insights</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay up to date with the latest technology trends, laptop reviews, and buying guides.
        </p>
      </div>
      <BlogGrid />
    </div>
  );
}