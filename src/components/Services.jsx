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
      videoId: "dRxAN8wLxIk", // Only the ID part
    },
    {
      id: 2,
      title: "Legal Services",
      description:
        "Enhance workforce capabilities through tailored training programs designed to foster growth, improve performance, and strengthen skills.",
      videoId: "os4ReDyMCphhARd2",
    },
    {
      id: 3,
      title: "On-demand Services",
      description:
        "Boost employee engagement with interactive tools and solutions that promote collaboration, innovation, and a positive work culture.",
      videoId: "os4ReDyMCphhARd2",
    },
  ];

  return (
    <section id="services" className="relative w-full px-6 py-16 bg-gray-50">
      {/* Floating circle background */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-indigo-200 opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative max-w-[1200px] mx-auto z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to help your
            business thrive in today's competitive landscape.
          </p>
        </motion.div>

        {/* Service Items */}
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={`flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Video Section */}
            <div className="w-full md:w-1/2 p-6 flex justify-center">
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${service.videoId}?rel=0`}
                  title={service.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
