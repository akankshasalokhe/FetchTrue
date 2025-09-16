'use client';
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./ServiceSection.module.css";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Improved function to extract YouTube video ID
  const extractVideoId = useCallback((url) => {
    if (!url) return "";
    
    // Remove any quotes and trim whitespace
    const cleanUrl = url.replace(/["']/g, '').trim();
    
    // Handle various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
      /(?:embed\/)([^"&?\/\s]{11})/,
      /(?:v=)([^"&?\/\s]{11})/,
      /(?:youtu\.be\/)([^"&?\/\s]{11})/
    ];
    
    for (const pattern of patterns) {
      const match = cleanUrl.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    return "";
  }, []);

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
        
        // Improved fallback data with working video IDs
        // const fallbackServices = [
        //   {
        //     _id: "1",
        //     title: "Franchise",
        //     mainImage: "/",
        //     videoLink: "https://www.youtube.com/embed/dRxAN8wLxIk",
        //     description: "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
        //     videoId: "dRxAN8wLxIk"
        //   },
        //   {
        //     _id: "2",
        //     title: "Business",
        //     mainImage: "/images/business.jpg",
        //     videoLink: "https://www.youtube.com/watch?v=os4ReDyMCpw",
        //     description: "Enhance workforce capabilities through tailored training programs designed to foster growth, improve performance, and strengthen skills.",
        //     videoId: "os4ReDyMCpw"
        //   },
        //   // Add more fallback services with valid video IDs...
        // ];
        // setServices(fallbackServices);
        // setActiveService(fallbackServices[0]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [extractVideoId]);

  const handleServiceChange = useCallback((service) => {
    setActiveService(service);
    setShowVideo(false);
  }, []);

  const handlePlayVideo = useCallback((service) => {
    setActiveService(service);
    setShowVideo(true);
  }, []);

  if (loading) {
    return (
      <section id="services" className={styles.sectionWrapper} aria-label="Our Services">
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
      </section>
    );
  }

  if (error && services.length === 0) {
    return (
      <section id="services" className={styles.sectionWrapper} aria-label="Our Services">
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
      </section>
    );
  }

  return (
    <section id="services" className={styles.sectionWrapper} aria-label="Our Services">
      <div className="text-center mb-10">
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.description}>
          Discover the wide range of professional services we provide to help
          your business grow, scale, and succeed with tailored solutions.
        </p>
      </div>

      {services.length > 0 && (
        <>
          {/* Service Navigation Tabs */}
          <div className="hidden lg:flex flex-wrap gap-3 mb-6 lg:ml-12 justify-center">
            {services.map((service) => (
              <button
                key={service._id}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  activeService?._id === service._id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleServiceChange(service)}
                aria-label={`Show ${service.title} service`}
                aria-pressed={activeService?._id === service._id}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Desktop Layout */}
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
                    title={`${activeService?.title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                  <button 
                    onClick={() => setShowVideo(false)}
                    className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-full text-xs"
                    aria-label="Close video"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="relative group">
                  <img
                    src={activeService?.mainImage}
                    alt={activeService?.title}
                    className="w-full h-96 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300 lg:h-80 text-blue-400"
                    loading="lazy"
                  />
                
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
              <h2 className="text-3xl text-blue-600 font-bold mb-4">{activeService?.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {activeService?.description}
              </p>
                <div className="flex justify-left mt-4">
                    <button
                      onClick={() => setShowVideo(true)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
                      aria-label="Play video"
                    >
                      <span className="mr-1">▶</span> Play Video
                    </button>
                  </div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="grid grid-cols-1 gap-6 lg:hidden mt-4">
            {services.map((service) => (
              <motion.article
                key={service._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.serviceCard}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

                <div className="relative mb-3">
                  {activeService?._id === service._id && showVideo ? (
                    <div className="relative w-full aspect-video">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                        src={`https://www.youtube.com/embed/${service.videoId}?autoplay=1&rel=0&modestbranding=1`}
                        title={`${service.title} video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                      <button 
                        onClick={() => setShowVideo(false)}
                        className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-full text-xs"
                        aria-label="Close video"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <>
                      <img
                        src={service.mainImage}
                        alt={service.title}
                        className="w-full h-56 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                      />
                     
                    </>
                  )}
                </div>

                <p className="text-gray-600">{service.description}</p>
                 <div className="flex justify-start mt-3">
                        <button
                          onClick={() => handlePlayVideo(service)}
                          className="bg-blue-600 text-white rounded-full p-1 text-sm shadow-lg hover:bg-blue-700 transition flex items-center"
                          aria-label="Play video"
                        >
                          <span className="mr-1">▶</span> Play Video
                        </button>
                      </div>
              </motion.article>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ServicesSection;