// app/blog/[slug]/page.js
'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

// Static blog data (same as above)
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

export default function BlogPost() {
  const params = useParams();
  const { slug } = params;
  
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/Blog" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Back Button */}
        <Link 
          href="/Blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </Link>
        
        {/* Header */}
        <div className="mb-8">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-7">
            {post.content}
          </p>
          
          {/* Example content - you would replace with actual content */}
          <p className="text-gray-700 leading-7 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
          
          <p className="text-gray-700 leading-7">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        
        {/* Related Posts */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.slug}`}
                  className="block bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{relatedPost.title}</h3>
                  <p className="text-sm text-gray-600">{relatedPost.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}