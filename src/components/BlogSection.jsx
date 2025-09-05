'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('https://landing-page-yclw.vercel.app/api/fblog');
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const displayedBlogs = blogs.slice(0, 3);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Latest Blogs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest insights and news across technology,
            business, design, and more.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.mainImage}
                  alt={blog.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-sm">{blog.readtime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {blog.description.slice(0, 100)}...
                </p>
                <div className="flex items-center justify-between mt-auto pt-4">
                  <span className="text-gray-500 text-sm">
                    {new Date(blog.createdAt).toDateString()}
                  </span>
                  <Link
                    href={`/blog/${blog._id}`}
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 flex items-center group"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center px-5 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


