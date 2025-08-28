"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const services = [
    {
      id: 1,
      title: "Onboarding",
      description:
        "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
      videoId: "os4ReDyMCphhARd2", // YouTube video ID only
    },
    {
      id: 2,
      title: "Business",
      description:
        "Comprehensive business solutions to help you establish, grow, and scale your operations with strategic planning and execution.",
      videoId: null, // No video
    },
    {
      id: 3,
      title: "Legal Services",
      description:
        "Expert legal guidance and support for your business needs, from compliance to contracts and intellectual property protection.",
      videoId: null, // No video
    },
  ];

  const playVideo = (id) => {
    const service = services.find((s) => s.id === id);
    if (service && service.videoId) {
      setActiveVideo(activeVideo === id ? null : id);
    }
  };

  const getEmbedUrl = (videoId) =>
    `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1&mute=1&controls=1`;

  const getThumbnailUrl = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Comprehensive solutions to help your business thrive in today's
          competitive landscape
        </motion.p>

        {/* Mobile & Tablet Layout */}
        <div className="block lg:hidden mb-12 space-y-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-md p-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Show video or thumbnail */}
              <div className="mb-4">
                {activeVideo === service.id && service.videoId ? (
                  <iframe
                    src={getEmbedUrl(service.videoId)}
                    className="w-full aspect-video rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${service.title} Video`}
                  />
                ) : service.videoId ? (
                  <img
                    src={getThumbnailUrl(service.videoId)}
                    alt={`${service.title} Thumbnail`}
                    className="w-full rounded-lg cursor-pointer"
                    onClick={() => playVideo(service.id)}
                  />
                ) : null}
              </div>

              {/* Button only if video exists */}
              {service.videoId && (
                <button
                  onClick={() => playVideo(service.id)}
                  className="text-indigo-500 font-medium flex items-center hover:text-indigo-700"
                >
                  {activeVideo === service.id ? "Hide Video" : "Watch Video"}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop Zig Zag Layout */}
        <motion.div
          className="hidden lg:grid gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center gap-10`}
              variants={itemVariants}
            >
              <div className="w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {service.videoId && (
                  <button
                    onClick={() => playVideo(service.id)}
                    className="px-5 py-2 bg-indigo-500 text-white rounded-lg flex items-center hover:bg-indigo-600 transition-colors"
                  >
                    {activeVideo === service.id ? "Hide Video" : "Watch Video"}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>

              <div className="w-1/2 relative">
                {activeVideo === service.id && service.videoId ? (
                  <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                    <iframe
                      src={getEmbedUrl(service.videoId)}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay;"
                      allowFullScreen
                      title={`${service.title} Video`}
                    />
                  </div>
                ) : service.videoId ? (
                  <img
                    src={getThumbnailUrl(service.videoId)}
                    alt={`${service.title} Thumbnail`}
                    className="w-full rounded-xl cursor-pointer shadow-md"
                    onClick={() => playVideo(service.id)}
                  />
                ) : (
                  <div className="aspect-video rounded-xl bg-gray-100 flex items-center justify-center shadow-md">
                    <span className="text-gray-400 text-sm">
                      No video available
                    </span>
                  </div>
                )}
                <div className="absolute -inset-2 border border-indigo-200 rounded-xl z-[-1]"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
