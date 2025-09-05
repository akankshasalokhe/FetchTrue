'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setError(null);
        const res = await fetch('https://landing-page-yclw.vercel.app/api/fblog');
        
        if (!res.ok) {
          throw new Error(`Failed to fetch blogs: ${res.status}`);
        }
        
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data);
          setFilteredBlogs(data.data);
        } else {
          throw new Error('API returned unsuccessful response');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Extract unique categories for tabs
  const categories = ['all', ...new Set(blogs.map(blog => blog.category?.toLowerCase() || 'uncategorized'))];

  const filterBlogs = (category) => {
    setActiveTab(category);
    if (category === 'all') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category?.toLowerCase() === category));
    }
  };

  if (loading) {
    return (
      <section className="py-16 px-6 lg:px-20 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-6 lg:px-20 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Failed to load blogs</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50 min-h-screen">
      <div className='mb-10 mt-10 text-blue-600 ms-20'>
        <Link href="/">back to home</Link>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore insights, tips, and the latest trends across technology, business, and design.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => filterBlogs(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              aria-pressed={activeTab === category}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">No blogs found in this category</h3>
            <p className="text-gray-500 mt-2">Check back later for new content.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map(blog => (
              <article
                key={blog._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={blog.mainImage}
                    alt={blog.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-blue-600 shadow-sm">
                      {blog.category || 'Uncategorized'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span>{new Date(blog.publishedAt || blog._createdAt || blog.createdAt).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readtime || '5 min read'}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blog/${blog._id}`}
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                      aria-label={`Read more about ${blog.title}`}
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    {blog.author && (
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-200 mr-2 overflow-hidden">
                          {blog.author.image ? (
                            <Image 
                              src={blog.author.image} 
                              alt={blog.author.name} 
                              width={32}
                              height={32}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-xs">
                              {blog.author.name ? blog.author.name.charAt(0).toUpperCase() : 'U'}
                            </div>
                          )}
                        </div>
                        <span className="text-sm text-gray-600">{blog.author.name || 'Unknown'}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}