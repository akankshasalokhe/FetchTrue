"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function VideoHeroPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00509D] to-[#003F7D]">
      <Head>
        <title>Business Solutions Hero</title>
        <meta name="description" content="Grow your business with our B2B solutions" />
      </Head>

      <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Video Container */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {!videoError ? (
            <video
              className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => setIsLoading(false)}
              onError={() => {
                setVideoError(true);
                setIsLoading(false);
              }}
            >
              <source src="/Hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#00509D] to-[#003F7D]"></div>
          )}
        </div>

        {/* Loading placeholder */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#00509D] to-[#003F7D] flex items-center justify-center z-20">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
              <div className="text-white text-lg">Loading video...</div>
            </div>
          </div>
        )}

        {/* Overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-5"></div>

        {/* Content */}
        <div
          className="relative z-10 px-6 max-w-3xl"
          style={{
            opacity: isLoading ? 0 : 1,
            transform: isLoading ? 'translateY(40px)' : 'translateY(0)',
            transition: 'opacity 1s ease, transform 1s ease'
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Grow Your Business with Our B2B & Franchise Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Unlock new opportunities and scale effortlessly with our powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="bg-[#00509D] hover:bg-[#003F7D] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
            <button 
              className="bg-white text-[#00509D] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Additional content section to demonstrate scrolling */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-lg text-gray-600 mb-10">
            We provide comprehensive B2B solutions to help your business grow and thrive in today's competitive market.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Franchise Solutions</h3>
              <p className="text-gray-600">Expand your business with our proven franchise models and support systems.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">B2B Integration</h3>
              <p className="text-gray-600">Seamlessly connect your business with partners and suppliers.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Partner Network</h3>
              <p className="text-gray-600">Access our extensive network of business partners and collaborators.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}