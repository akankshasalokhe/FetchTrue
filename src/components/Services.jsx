'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ServiceSection.module.css";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to extract YouTube video ID from various URL formats
  const extractVideoId = (url) => {
    if (!url) return "";
    
    // Remove any quotes from the URL string
    const cleanUrl = url.replace(/"/g, '');
    
    // Handle embed URLs
    if (cleanUrl.includes("embed/")) {
      return cleanUrl.split("embed/")[1].split("?")[0];
    }
    
    // Handle standard YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = cleanUrl.match(regExp);
    return (match && match[2].length === 11) ? match[2] : "";
  };

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://landing-page-yclw.vercel.app/api/fservices');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success && data.data && data.data.length > 0) {
          // Process data to extract video IDs
          const processedServices = data.data.map((service) => ({
            ...service,
            videoId: extractVideoId(service.videoLink)
          }));
          
          setServices(processedServices);
          setActiveService(processedServices[0]);
        } else {
          throw new Error("No services data found");
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(err.message);
        
        // Fallback to local data if API fails
        const fallbackServices = [
          {
            _id: "1",
            title: "Franchise",
            mainImage: "https://ik.imagekit.io/hzyuadmua/fservices_images/contactform_prEpJmmwK.jpeg",
            videoLink: "https://www.youtube.com/embed/dRxAN8wLxIk",
            description: "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
            videoId: "dRxAN8wLxIk"
          },
          {
            _id: "2",
            title: "Business",
            mainImage: "/images/business.jpg",
            videoLink: "https://www.youtube.com/embed/os4ReDyMCphhARd2",
            description: "Enhance workforce capabilities through tailored training programs designed to foster growth, improve performance, and strengthen skills.",
            videoId: "os4ReDyMCphhARd2"
          },
          {
            _id: "3",
            title: "Branding & Marketing",
            mainImage: "/images/branding.jpg",
            videoLink: "https://www.youtube.com/embed/os4ReDyMCphhARd2",
            description: "Boost employee engagement with interactive tools and solutions that promote collaboration, innovation, and a positive work culture.",
            videoId: "os4ReDyMCphhARd2"
          },
          {
            _id: "4",
            title: "Legal Services",
            mainImage: "/images/legal.jpg",
            videoLink: "https://www.youtube.com/embed/dRxAN8wLxIk",
            description: "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
            videoId: "dRxAN8wLxIk"
          },
          {
            _id: "5",
            title: "Finance",
            mainImage: "/images/finance.jpg",
            videoLink: "https://www.youtube.com/embed/os4ReDyMCphhARd2",
            description: "Enhance workforce capabilities through tailored training programs designed to foster growth, improve performance, and strengthen skills.",
            videoId: "os4ReDyMCphhARd2"
          },
          {
            _id: "6",
            title: "IT Services",
            mainImage: "/images/it.jpg",
            videoLink: "https://www.youtube.com/embed/os4ReDyMCphhARd2",
            description: "Boost employee engagement with interactive tools and solutions that promote collaboration, innovation, and a positive work culture.",
            videoId: "os4ReDyMCphhARd2"
          },
          {
            _id: "7",
            title: "Education",
            mainImage: "/images/education.jpg",
            videoLink: "https://www.youtube.com/embed/dRxAN8wLxIk",
            description: "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
            videoId: "dRxAN8wLxIk"
          },
          {
            _id: "8",
            title: "On-Demand Services",
            mainImage: "/images/on-demand.jpg",
            videoLink: "https://www.youtube.com/embed/os4ReDyMCphhARd2",
            description: "Enhance workforce capabilities through tailored training programs designed to foster growth, improve performance, and strengthen skills.",
            videoId: "os4ReDyMCphhARd2"
          },
          {
            _id: "9",
            title: "OnBoarding",
            mainImage: "/images/onboarding.jpg",
            videoLink: "https://www.youtube.com/embed/os4ReDyMCphhARd2",
            description: "Boost employee engagement with interactive tools and solutions that promote collaboration, innovation, and a positive work culture.",
            videoId: "os4ReDyMCphhARd2"
          }
        ];
        setServices(fallbackServices);
        setActiveService(fallbackServices[0]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div id="services" className={styles.sectionWrapper}>
        <div className="text-center mb-10">
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.description}>
            Discover the wide range of professional services we provide to help
            your business grow, scale, and succeed with tailored solutions.
          </p>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-600">Loading services...</div>
        </div>
      </div>
    );
  }

  if (error && services.length === 0) {
    return (
      <div id="services" className={styles.sectionWrapper}>
        <div className="text-center mb-10">
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.description}>
            Discover the wide range of professional services we provide to help
            your business grow, scale, and succeed with tailored solutions.
          </p>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="text-red-500">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div id="services" className={styles.sectionWrapper}>
      <div className="text-center mb-10">
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.description}>
          Discover the wide range of professional services we provide to help
          your business grow, scale, and succeed with tailored solutions.
        </p>
      </div>

      {services.length > 0 && (
        <>
          <div className="hidden lg:flex flex-wrap gap-3 mb-6 lg:ml-12">
            {services.map((service) => (
              <button
                key={service._id}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  activeService?._id === service._id
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

          <div className="hidden lg:flex items-center gap-12 lg:ml-20 mt-10 mr-10">
            <motion.div
              key={activeService?._id + (showVideo ? "-video" : "-image")}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-1/2"
            >
              {showVideo ? (
                <div className="relative w-full aspect-video">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md lg:h-80"
                    src={`https://www.youtube.com/embed/${activeService?.videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={activeService?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative group">
                  <img
                    src={activeService?.mainImage}
                    alt={activeService?.title}
                    className="w-full h-96  object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300 lg:h-80"
                  />
                  <button
                    onClick={() => setShowVideo(true)}
                    className={`${styles.playButton} absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300`}
                  >
                    ▶ Play Video
                  </button>
                </div>
              )}
            </motion.div>

            <motion.div
              key={activeService?._id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-1/2"
            >
              <h2 className="text-3xl font-bold mb-4">{activeService?.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {activeService?.description}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:hidden mt-4">
            {services.map((service) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.serviceCard}
              >
                <h3>{service.title}</h3>
                <div className="relative mb-3">
                  <img
                    src={service.mainImage}
                    alt={service.title}
                    className="w-full h-56 object-cover rounded-lg shadow-sm"
                  />
                  <button
                    onClick={() => {
                      setActiveService(service);
                      setShowVideo(true);
                    }}
                    className={`${styles.playButton} absolute bottom-3 left-1/2 transform -translate-x-1/2`}
                  >
                    ▶ Play Video
                  </button>
                </div>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesSection;