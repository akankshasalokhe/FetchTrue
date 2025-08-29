"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function AboutSection() {
  // Counter Animation for Stats
  const [stats, setStats] = useState({ users: 0, partners: 0, revenue: 0 });

  useEffect(() => {
    let start = 0;
    const end = { users: 1500, partners: 200, revenue: 50 }; // Example values
    const interval = setInterval(() => {
      start += 20;
      setStats({
        users: Math.min(end.users, start * 3),
        partners: Math.min(end.partners, start / 5),
        revenue: Math.min(end.revenue, Math.floor(start / 40)),
      });
      if (start >= 500) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden py-20 px-6 lg:px-16">
        {/* Background Abstract Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-indigo-300 rounded-full opacity-10 blur-3xl -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent leading-tight">
              Grow Your Business with <br /> Our FetchTrue App
            </h2>
            <p className="mt-6 text-gray-700 text-lg max-w-xl mx-auto lg:mx-0">
              Expand your reach, scale your operations, and unlock franchise
              opportunities effortlessly. Our platform connects businesses,
              streamlines processes, and accelerates growth in a modern way.
            </p>

            {/* Bullet Points */}
            <ul className="mt-4 space-y-2 text-left text-gray-600 font-medium">
              <li>✔ Scalable B2B Solutions</li>
              <li>✔ Franchise Opportunities</li>
              <li>✔ Real-Time Business Insights</li>
            </ul>

            {/* Download Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
              <a
                href="#"
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                <FaGooglePlay size={22} /> Google Play
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
              >
                <FaApple size={22} /> App Store
              </a>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-[320px] md:w-[420px] lg:w-[480px]"
            >
              <Image
                src="/mockupFetchTrue.png" // Replace with your mockup image path
                alt="App Mockup"
                width={400}
                height={400}
                className="drop-shadow-2xl rounded-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-16 px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {/* Active Users */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">{stats.users}+</h3>
            <p className="text-gray-600 mt-2">Active Users</p>
          </div>

          {/* Franchise Partners */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg">
            <h3 className="text-4xl font-bold text-indigo-600">{stats.partners}+</h3>
            <p className="text-gray-600 mt-2">Franchise Partners</p>
          </div>

          {/* Revenue Growth */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg">
            <h3 className="text-4xl font-bold text-blue-700">{stats.revenue}x</h3>
            <p className="text-gray-600 mt-2">Revenue Growth</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
