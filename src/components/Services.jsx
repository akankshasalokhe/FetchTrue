"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const services = [
    {
      id: 1,
      title: "Onboarding",
      description:
        "Streamline your employee integration process with our efficient onboarding solutions that ensure smooth transitions and faster productivity.",
      videoId: "dRxAN8wLxIk",
      icon: "👥",
      color: "#3B82F6",
    },
    {
      id: 2,
      title: "Business Consulting",
      description:
        "Comprehensive business solutions to help you establish, grow, and scale your operations with strategic planning and execution.",
      videoId: null,
      icon: "📈",
      color: "#6366F1",
    },
    // Add more services...
  ];

  const playVideo = (id) => {
    const service = services.find((s) => s.id === id);
    if (service && service.videoId) {
      setActiveVideo(activeVideo === id ? null : id);
    }
  };

  const getEmbedUrl = (videoId) =>
    `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1&mute=1&controls=1`;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const PlayButtonPlaceholder = ({ service, onClick }) => (
    <motion.div
      style={{
        position: "relative",
        aspectRatio: "16/9",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        background: `linear-gradient(135deg, ${service.color}80, #60A5FA80)`,
      }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(4px)",
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <svg
            style={{ width: "48px", height: "48px", color: "white" }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px",
          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
        }}
      >
        <p style={{ color: "white", fontWeight: 500 }}>Watch overview</p>
      </div>
    </motion.div>
  );

  const NoVideoPlaceholder = ({ service }) => (
    <motion.div
      style={{
        aspectRatio: "16/9",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${service.color}20`,
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div style={{ padding: "24px", textAlign: "center" }}>
        <motion.div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            fontSize: "24px",
            marginBottom: "16px",
          }}
          whileHover={{ rotate: 5, scale: 1.05 }}
        >
          {service.icon}
        </motion.div>
        <h4
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#374151",
            marginBottom: "8px",
          }}
        >
          Content Coming Soon
        </h4>
        <p style={{ color: "#6B7280" }}>
          We're preparing something special for this service
        </p>
      </div>
    </motion.div>
  );

  return (
    <section
      id="services"
      style={{
        position: "relative",
        padding: "80px 24px",
        background: "linear-gradient(135deg, #EFF6FF 0%, #EDE9FE 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Section Title */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "64px" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              marginBottom: "16px",
              color: "#1F2937",
            }}
          >
            Our{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #2563EB, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#6B7280",
              maxWidth: "672px",
              margin: "0 auto",
            }}
          >
            Discover our comprehensive range of services designed to help
            your business thrive in today's competitive landscape.
          </p>
        </motion.div>

        {/* Services in Zig-Zag Layout */}
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "112px",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              style={{
                display: "flex",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "60px",
              }}
              variants={itemVariants}
            >
              {/* Content */}
              <motion.div
                style={{ flex: 1 }}
                whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <motion.div
                    style={{
                      padding: "12px",
                      borderRadius: "12px",
                      background: `linear-gradient(135deg, ${service.color}, #60A5FA)`,
                      color: "white",
                      marginRight: "16px",
                      fontSize: "24px",
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      color: "#1F2937",
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  style={{
                    color: "#6B7280",
                    fontSize: "18px",
                    lineHeight: "1.6",
                    marginBottom: "24px",
                  }}
                >
                  {service.description}
                </p>

                {service.videoId && (
                  <motion.button
                    style={{
                      padding: "10px 24px",
                      borderRadius: "9999px",
                      background:
                        "linear-gradient(to right, #2563EB, #06B6D4)",
                      color: "white",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      border: "none",
                      cursor: "pointer",
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow:
                        "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => playVideo(service.id)}
                  >
                    <svg
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Watch Video
                  </motion.button>
                )}
              </motion.div>

              {/* Video/Placeholder */}
              <motion.div style={{ flex: 1 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVideo === service.id ? "video" : "placeholder"}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeVideo === service.id && service.videoId ? (
                      <div
                        style={{
                          aspectRatio: "16/9",
                          borderRadius: "16px",
                          overflow: "hidden",
                          boxShadow:
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <iframe
                          src={getEmbedUrl(service.videoId)}
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                          }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${service.title} Video`}
                        />
                      </div>
                    ) : service.videoId ? (
                      <PlayButtonPlaceholder
                        service={service}
                        onClick={() => playVideo(service.id)}
                      />
                    ) : (
                      <NoVideoPlaceholder service={service} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
