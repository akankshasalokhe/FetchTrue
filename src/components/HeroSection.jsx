"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [videoHeight, setVideoHeight] = useState("100%");

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Adjust video height for mobile devices
      if (mobile) {
        setVideoHeight("auto");
      } else {
        setVideoHeight("100%");
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-700`}
          style={{ 
            width: '100%', 
            height: videoHeight,
            // Ensure video covers entire container on all devices
            minWidth: '100%',
            minHeight: '100%'
          }}
          src="/Hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoading(false)}
        />
      </div>

      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#00509D] to-[#003F7D] flex items-center justify-center">
          <div className="animate-pulse text-white text-lg">Loading...</div>
        </div>
      )}

      {/* Overlay (dark layer for better text visibility) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Grow Your Business with Our B2B & Franchise Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Unlock new opportunities and scale effortlessly with our powerful platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className="bg-[#00509D] hover:bg-[#003F7D] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition transform hover:scale-105"
            style={{ backgroundColor: "#00509D" }}
          >
            Get Started
          </button>
          <button 
            className="bg-white text-[#00509D] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition transform hover:scale-105"
            style={{ color: "#00509D" }}
          >
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Custom CSS for video responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          video {
            width: 100% !important;
            height: 100vh !important;
            object-fit: cover;
          }
        }
        @media (max-aspect-ratio: 16/9) {
          video {
            width: 100% !important;
            height: 100% !important;
          }
        }
        @media (min-aspect-ratio: 16/9) {
          video {
            width: 100% !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;