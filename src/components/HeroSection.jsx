"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function VideoHeroPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#00509D] to-[#003F7D]">
      <Head>
        <title>Business Solutions Hero</title>
        <meta
          name="description"
          content="Grow your business with our B2B solutions"
        />
      </Head>

      <section className="relative w-full h-[50vh] md:h-[85vh]  lg:h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Video */}
        <div className="flex w-full h-full absolute top-0 left-0 z-0">
          {!videoError ? (
            <video
              className="w-full h-[50vh] md:h-[85vh] lg:h-screen object-cover"
              fill
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/fallback-image.jpg"
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

        {/* Loading Placeholder */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#00509D] to-[#003F7D] flex items-center justify-center z-20">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
              <div className="text-white text-lg">Loading video...</div>
            </div>
          </div>
        )}

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Content */}
        <div
          className="relative sm:top-20 z-10 px-4 sm:px-6 max-w-3xl mx-auto text-center"
          style={{
            opacity: isLoading ? 0 : 1,
            transform: isLoading ? "translateY(40px)" : "translateY(0)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          {/* Responsive Heading */}
          <h1 className=" text-2xl sm:text-xl mt-8 md:text-4xl lg:text-6xl font-bold mb-4 leading-snug">
            Grow Your Business with Our B2B & Franchise Solutions
          </h1>

          {/* Responsive Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl mb-8 leading-relaxed">
            Unlock new opportunities and scale effortlessly with our powerful
            platform.
          </p>

          {/* Buttons */}
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#about"
              className="bg-[#00509D] hover:bg-[#003F7D] text-white px-5 sm:px-6 md:px-8  py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}
