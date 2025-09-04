// components/BlogSection.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    slug: 'future-of-web-development'
  },
  {
    id: 2,
    title: 'Building a Successful SaaS Business',
    excerpt: 'Learn strategies that helped top SaaS companies achieve success.',
    category: 'Business',
    date: 'April 28, 2023',
    readTime: '8 min read',
    image: '/images/saas-blog.jpg',
    slug: 'building-successful-saas'
  },
  {
    id: 3,
    title: 'UX Design Principles for Conversion',
    excerpt: 'Improve your website conversion rates with these proven UX design principles.',
    category: 'Design',
    date: 'April 12, 2023',
    readTime: '5 min read',
    image: '/images/ux-blog.jpg',
    slug: 'ux-design-principles'
  },
  {
    id: 4,
    title: 'Digital Marketing Strategies for 2023',
    excerpt: 'Stay ahead of the competition with these cutting-edge digital marketing strategies.',
    category: 'Marketing',
    date: 'March 30, 2023',
    readTime: '7 min read',
    image: '/images/marketing-blog.jpg',
    slug: 'digital-marketing-2023'
  },
  {
    id: 5,
    title: 'The Science of Productivity and Focus',
    excerpt: 'Discover scientific methods to improve your productivity and maintain focus.',
    category: 'Health',
    date: 'March 18, 2023',
    readTime: '9 min read',
    image: '/images/productivity-blog.jpg',
    slug: 'science-of-productivity'
  },
  {
    id: 6,
    title: 'React vs Vue: Which Framework to Choose in 2023',
    excerpt: 'A comprehensive comparison of React and Vue for modern web development.',
    category: 'Technology',
    date: 'March 5, 2023',
    readTime: '10 min read',
    image: '/images/react-vue-blog.jpg',
    slug: 'react-vs-vue-2023'
  }
];

const BlogSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedBlogs = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Latest Blogs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with our latest insights and news across technology, business, design, and more.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedBlogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    blog.category === 'Technology' ? 'bg-blue-100 text-blue-600' :
                    blog.category === 'Business' ? 'bg-green-100 text-green-600' :
                    blog.category === 'Design' ? 'bg-purple-100 text-purple-600' :
                    blog.category === 'Marketing' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-indigo-100 text-indigo-600'
                  }`}>
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{blog.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4">
                  <span className="text-gray-500 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {blog.date}
                  </span>
                  <Link 
                    href={`/blog/${blog.slug}`} 
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 flex items-center group"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          {!showAll ? (
            <button 
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              View All Blogs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          ) : (
            <button 
              onClick={() => setShowAll(false)}
              className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Show Less
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;