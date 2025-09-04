'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`https://landing-page-yclw.vercel.app/api/fblog/${id}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch blog: ${res.status}`);
        }
        
        const data = await res.json();
        if (data.success) {
          setBlog(data.data);
          // Fetch related posts based on tags
          if (data.data.tags && data.data.tags.length > 0) {
            fetchRelatedPosts(data.data.tags, data.data._id);
          }
        } else {
          throw new Error('Blog data not found');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedPosts = async (tags, currentId) => {
      try {
        const res = await fetch(`https://landing-page-yclw.vercel.app/api/related-posts?tags=${tags.join(',')}&category=${blog.category}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setRelatedPosts(data.data.slice(0, 3)); // Get top 3 related posts
          }
        }
      } catch (error) {
        console.error('Error fetching related posts:', error);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen py-20">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          <span className="mt-4 text-lg text-gray-600">Loading blog post...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-red-800 mb-2">Error Loading Blog Post</h2>
          <p className="text-red-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/blog"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <article className="w-full lg:w-2/3">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="flex items-center">
                <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-gray-800 font-medium truncate">{blog.blogHeading || blog.title}</li>
            </ol>
          </nav>

          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {blog.blogHeading || blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-4">
              {blog.createdAt && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={blog.createdAt}>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
              )}
              {blog.readtime && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{blog.readtime}</span>
                </div>
              )}
            </div>

            {blog.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="relative h-64 sm:h-80 md:h-96 w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={blog.mainImage}
              alt={blog.title}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {blog.description && (
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed text-lg font-medium">{blog.description}</p>
              </div>
            )}

            {blog.bestQuote && (
              <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-800 my-8 text-xl bg-blue-50 py-4 rounded-r">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400 inline-block mr-2 -mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9h6m-4 0h2m4 0h2m-8 4h6m-4 0h2m4 0h2m-8 4h6m-4 0h2m4 0h2" />
                </svg>
                "{blog.bestQuote}"
              </blockquote>
            )}

            {/* Blog Content Items */}
            {blog.items?.length > 0 && (
              <section className="mb-10">
                {blog.items.map((item, idx) => (
                  <div key={idx} className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.itemTitle}</h2>
                    {item.itemDescription && (
                      <div className="text-gray-700 leading-relaxed space-y-4">
                        {item.itemDescription.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </section>
            )}

            {blog.keyTechnologies?.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Key Technologies</h2>
                <div className="grid gap-6">
                  {blog.keyTechnologies.map((tech, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {tech.itemTitle}
                      </h3>
                      {tech.itemDescription && (
                        <p className="text-gray-600 mb-4">{tech.itemDescription}</p>
                      )}
                      {tech.itemPoints?.length > 0 && (
                        <ul className="list-disc list-inside ml-4 text-gray-600 space-y-2">
                          {tech.itemPoints.map((point, i) => (
                            <li key={i} className="leading-relaxed">{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Share this post</h3>
            <div className="flex space-x-4">
              <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" title="Share">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors" title="Share on Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button className="p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors" title="Share on Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors" title="Share on LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.920-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </div>
        </article>

        {/* Sidebar with Related Posts */}
        <aside className="w-full lg:w-1/3">
          <div className="sticky top-24">
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  Related Posts
                </h3>
                <div className="space-y-6">
                  {relatedPosts.map((post, index) => (
                    <div 
                      key={index} 
                      className="group cursor-pointer"
                      onClick={() => router.push(`/blog/${post.category}`)}
                    >
                      <div className="flex gap-4">
                        {post.mainImage && (
                          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                            <img 
                              src={post.mainImage} 
                              alt={post.title}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-500 mb-2">
                            {post.createdAt && new Date(post.createdAt).toLocaleDateString()}
                          </p>
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 2).map((tag, i) => (
                                <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      {index < relatedPosts.length - 1 && <hr className="my-4 border-gray-200" />}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe to Newsletter</h3>
              <p className="text-gray-600 text-sm mb-4">Get the latest posts delivered right to your inbox.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}