"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const services = [
    {
      id: 1,
      title: "Franchise",
      description: "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
      videoId: "dRxAN8wLxIk",
    },
    {
      id: 2,
      title: "Business",
      description: "Enhance workforce capabilities through tailored training programs designed to foster growth, improve performance, and strengthen skills.",
      videoId: "os4ReDyMCphhARd2",
    },
    {
      id: 3,
      title: "Branding & Marketing",
      description: "Boost employee engagement with interactive tools and solutions that promote collaboration, innovation, and a positive work culture.",
      videoId: "os4ReDyMCphhARd2",
    },
    {
      id: 4,
      title: "Legal Services",
      description: "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
      videoId: "dRxAN8wLxIk",
    },
    {
      id: 5,
      title: "Finance",
      description: "Enhance workforce capabilities through tailored training programs designed to foster growth, improve performance, and strengthen skills.",
      videoId: "os4ReDyMCphhARd2",
    },
    {
      id: 6,
      title: "IT Services",
      description: "Boost employee engagement with interactive tools and solutions that promote collaboration, innovation, and a positive work culture.",
      videoId: "os4ReDyMCphhARd2",
    },
    {
      id: 7,
      title: "Education",
      description: "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
      videoId: "dRxAN8wLxIk",
    },
    {
      id: 8,
      title: "On-Demand Services",
      description: "Enhance workforce capabilities through tailored training programs designed to foster growth, improve performance, and strengthen skills.",
      videoId: "os4ReDyMCphhARd2",
    },
    {
      id: 9,
      title: "OnBoarding",
      description: "Boost employee engagement with interactive tools and solutions that promote collaboration, innovation, and a positive work culture.",
      videoId: "os4ReDyMCphhARd2",
    },
  ];

  // New animation variants
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const backgroundVariants = {
    animate: {
      rotate: 360,
      transition: {
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      }
    }
  };

  return (
    <section id="services" className="relative w-full px-6 py-16 bg-gradient-to-b from-blue-50 to-cyan-50 overflow-hidden">
      {/* New animated background elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-200 opacity-30"
        variants={backgroundVariants}
        animate="animate"
      />
      
      <motion.div
        className="absolute -bottom-28 -right-28 w-72 h-72 rounded-full bg-cyan-200 opacity-30"
        variants={backgroundVariants}
        animate="animate"
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-200 opacity-20"
        variants={backgroundVariants}
        animate="animate"
      />

      <div className="relative max-w-[1200px] mx-auto z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Discover our comprehensive range of services designed to help your
            business thrive in today's competitive landscape.
          </motion.p>
        </motion.div>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Video with fallback for invalid IDs */}
              <div className="aspect-video w-full relative overflow-hidden">
                {service.videoId.length > 11 ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-blue-600 font-medium">Video coming soon</p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${service.videoId}?rel=0&modestbranding=1`}
                    title={service.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#00509D] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;