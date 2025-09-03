// app/blog/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

// Static blog data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development',
    excerpt: 'Explore the latest trends shaping web development in 2023.',
    category: 'Technology',
    date: 'May 15, 2023',
    readTime: '6 min read',
    image: '/images/tech-blog.jpg',
    slug: 'future-of-web-development',
    content: 'Full content would go here...'
  },
  {
    id: 2,
    title: 'Building a Successful SaaS Business',
    excerpt: 'Learn strategies that helped top SaaS companies achieve success.',
    category: 'Business',
    date: 'April 28, 2023',
    readTime: '8 min read',
    image: '/images/saas-blog.jpg',
    slug: 'building-successful-saas',
    content: 'Full content would go here...'
  },
  {
    id: 3,
    title: 'UX Design Principles for Conversion',
    excerpt: 'Improve your website conversion rates with these proven UX design principles.',
    category: 'Design',
    date: 'April 12, 2023',
    readTime: '5 min read',
    image: '/images/ux-blog.jpg',
    slug: 'ux-design-principles',
    content: 'Full content would go here...'
  },
  {
    id: 4,
    title: 'Digital Marketing Strategies for 2023',
    excerpt: 'Stay ahead of the competition with these cutting-edge digital marketing strategies.',
    category: 'Marketing',
    date: 'March 30, 2023',
    readTime: '7 min read',
    image: '/images/marketing-blog.jpg',
    slug: 'digital-marketing-2023',
    content: 'Full content would go here...'
  },
  {
    id: 5,
    title: 'The Science of Productivity and Focus',
    excerpt: 'Discover scientific methods to improve your productivity and maintain focus.',
    category: 'Health',
    date: 'March 18, 2023',
    readTime: '9 min read',
    image: '/images/productivity-blog.jpg',
    slug: 'science-of-productivity',
    content: 'Full content would go here...'
  },
  {
    id: 6,
    title: 'React vs Vue: Which Framework to Choose in 2023',
    excerpt: 'A comprehensive comparison of React and Vue for modern web development.',
    category: 'Technology',
    date: 'March 5, 2023',
    readTime: '10 min read',
    image: '/images/react-vue-blog.jpg',
    slug: 'react-vs-vue-2023',
    content: 'Full content would go here...'
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing', 'Health'];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and news in technology, business, and design
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-30">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <Link 
                    href={`/Blog/${post.slug}`} 
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No posts found</h3>
            <p className="text-gray-500">We couldn't find any posts in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}