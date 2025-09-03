// components/BlogSection.js
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
    <section className="py-12 px-40 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Latest Blogs</h2>
        <p className="text-gray-600 text-center mb-8">Stay updated with our latest insights and news</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-sm">{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{blog.date}</span>
                  <Link href={`/Blog/${blog.slug}`} className="text-blue-600 font-medium hover:text-blue-800">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {blogPosts.length > 3 && !showAll && (
          <div className="text-center mt-8">
            <Link href="/Blog" className="text-blue-600 hover:text-blue-800 font-medium">
              View All Blogs
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;