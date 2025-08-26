"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

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
        <p className="text-lg md:text-xl mb-6">
          Unlock new opportunities and scale effortlessly with our powerful platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition">
            Get Started
          </button>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
