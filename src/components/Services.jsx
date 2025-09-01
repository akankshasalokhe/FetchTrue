"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ServiceSection.module.css"; // ✅ import CSS module

const services = [
  {
    id: 1,
    title: "Franchise",
    description:
      "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
    videoId: "dRxAN8wLxIk",
    image: "/contactform.jpeg",
  },
  {
    id: 2,
    title: "Business",
    description:
      "Enhance workforce capabilities through tailored training programs designed to foster growth, improve performance, and strengthen skills.",
    videoId: "os4ReDyMCphhARd2",
    image: "/images/business.jpg",
  },
  {
    id: 3,
    title: "Branding & Marketing",
    description:
      "Boost employee engagement with interactive tools and solutions that promote collaboration, innovation, and a positive work culture.",
    videoId: "os4ReDyMCphhARd2",
    image: "/images/branding.jpg",
  },
  {
    id: 4,
    title: "Legal Services",
    description:
      "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
    videoId: "dRxAN8wLxIk",
    image: "/images/legal.jpg",
  },
  {
    id: 5,
    title: "Finance",
    description:
      "Enhance workforce capabilities through tailored training programs designed to foster growth, improve performance, and strengthen skills.",
    videoId: "os4ReDyMCphhARd2",
    image: "/images/finance.jpg",
  },
  {
    id: 6,
    title: "IT Services",
    description:
      "Boost employee engagement with interactive tools and solutions that promote collaboration, innovation, and a positive work culture.",
    videoId: "os4ReDyMCphhARd2",
    image: "/images/it.jpg",
  },
  {
    id: 7,
    title: "Education",
    description:
      "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
    videoId: "dRxAN8wLxIk",
    image: "/images/education.jpg",
  },
  {
    id: 8,
    title: "On-Demand Services",
    description:
      "Enhance workforce capabilities through tailored training programs designed to foster growth, improve performance, and strengthen skills.",
    videoId: "os4ReDyMCphhARd2",
    image: "/images/on-demand.jpg",
  },
  {
    id: 9,
    title: "OnBoarding",
    description:
      "Boost employee engagement with interactive tools and solutions that promote collaboration, innovation, and a positive work culture.",
    videoId: "os4ReDyMCphhARd2",
    image: "/images/onboarding.jpg",
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="w-full p-6 mt-10 lg:mt-20">
      {/* ✅ Section Title + Description */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the wide range of professional services we provide to help
          your business grow, scale, and succeed with tailored solutions.
        </p>
      </div>

      {/* Tabs (Desktop only) */}
      <div className="hidden md:flex flex-wrap gap-3 mb-6 lg:ms-50">
        {services.map((service) => (
          <button
            key={service.id}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activeService.id === service.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => {
              setActiveService(service);
              setShowVideo(false);
            }}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Large screen */}
      <div className="hidden md:flex flex-col md:flex-row items-center gap-15 lg:ms-30 mt-10 me-30">
        <motion.div
          key={activeService.id + (showVideo ? "-video" : "-image")}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          {showVideo ? (
            <iframe
              className="w-full h-72 md:h-96 rounded-lg shadow-md"
              src={`https://www.youtube.com/embed/${activeService.videoId}?autoplay=1`}
              title={activeService.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative group">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-72 md:h-96 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={() => setShowVideo(true)}
                className={`${styles.playButton} absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700`}
              >
                ▶ Play Video
              </button>
            </div>
          )}
        </motion.div>

        <motion.div
          key={activeService.title}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-4">{activeService.title}</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {activeService.description}
          </p>
        </motion.div>
      </div>

      {/* Small screen cards */}
      <div className="grid grid-cols-1 gap-6 md:hidden mt-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.serviceCard}
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <div className="relative mb-3">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-lg shadow-sm"
              />
              <button
                onClick={() =>
                  setActiveService(service) || setShowVideo(true)
                }
                className={`${styles.playButton} absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-lg shadow-md hover:bg-blue-700 text-sm`}
              >
                ▶ Play Video
              </button>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
