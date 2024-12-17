import React from 'react';
import { BlogPost } from '../../types';
import { formatDate } from '../../utils/format';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{formatDate(post.date)}</span>
          <span className="mx-2">•</span>
          <span>{post.category}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center">
          <span className="text-sm text-gray-500">By {post.author}</span>
          <button className="ml-auto text-blue-600 hover:text-blue-700">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
}