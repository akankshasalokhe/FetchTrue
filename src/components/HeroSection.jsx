"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function VideoHeroPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00509D] to-[#003F7D]">
      <Head>
        <title>Business Solutions Hero</title>
        <meta
          name="description"
          content="Grow your business with our B2B solutions"
        />
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
            transform: isLoading ? "translateY(40px)" : "translateY(0)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Grow Your Business with Our B2B & Franchise Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Unlock new opportunities and scale effortlessly with our powerful
            platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#about"
              className="bg-[#00509D] hover:bg-[#003F7D] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            {/* <Link
              href="#learn-more"
              className="bg-white text-[#00509D] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}
