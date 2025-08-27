"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGooglePlay, FaApple, FaCrown, FaChartLine, FaCheck, FaUsers, FaHandshake, FaSync, FaRocket, FaQrcode } from 'react-icons/fa';

export default function DownloadBanner() {
  const [stats, setStats] = useState({ businesses: 0, franchises: 0, growth: 0 });
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <FaCrown className="text-3xl" />,
      title: "Premium Franchises",
      description: "Access exclusive partnerships with top brands"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Business Growth Tools",
      description: "Analytics and insights to scale your operations"
    },
    {
      icon: <FaSync className="text-3xl" />,
      title: "Seamless Management",
      description: "Streamline operations with our all-in-one dashboard"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Rapid Expansion",
      description: "Scale your franchise network with our proven system"
    }
  ];

  useEffect(() => {
    // Counter animation for stats
    const interval = setInterval(() => {
      setStats(prev => ({
        businesses: prev.businesses < 5000 ? prev.businesses + 100 : 5000,
        franchises: prev.franchises < 250 ? prev.franchises + 5 : 250,
        growth: prev.growth < 78 ? prev.growth + 1 : 78
      }));
    }, 50);

    // Feature rotation
    const featureInterval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(featureInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white p-8 text-center relative overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-16 -right-16 w-32 h-32 bg-white/10 rounded-full"
          />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
                className="p-3 bg-blue-600 rounded-full"
              >
                <FaHandshake className="text-2xl" />
              </motion.div>
              <h1 className="text-4xl font-bold">FetchTrue</h1>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold mb-4"
            >
              The Ultimate B2B Franchise Platform
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg max-w-2xl mx-auto opacity-90"
            >
              Connect, manage, and grow your franchise network with our powerful platform
            </motion.p>
          </div>
        </motion.div>

        {/* Main Banner Content */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left Column - App Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">Why Choose FetchTrue?</h3>
            
            {/* Animated Feature Showcase */}
            <div className="h-40 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4 absolute w-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-blue-100 rounded-full mt-1"
                  >
                    {features[currentFeature].icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{features[currentFeature].title}</h4>
                    <p className="text-gray-600">{features[currentFeature].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Feature Indicators */}
            <div className="flex justify-center gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentFeature ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {/* Animated Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="text-2xl font-bold text-blue-600">{stats.businesses}+</div>
                <div className="text-sm text-gray-600">Businesses</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="text-2xl font-bold text-green-600">{stats.franchises}</div>
                <div className="text-sm text-gray-600">Franchises</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="text-2xl font-bold text-purple-600">{stats.growth}%</div>
                <div className="text-sm text-gray-600">Growth</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Download CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-blue-50 to-indigo-50 p-8 rounded-xl shadow-inner relative overflow-hidden"
          >
            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-10 text-blue-200 text-5xl opacity-30"
            >
              <FaQrcode />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-10 left-10 text-indigo-200 text-5xl opacity-30"
            >
              <FaRocket />
            </motion.div>
            
            <div className="text-center mb-6 relative z-10">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-bold text-gray-800 mb-2"
              >
                Get Started Today
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-600"
              >
                Download our app and transform your business
              </motion.p>
            </div>
            
            {/* Download Buttons */}
            <div className="space-y-4 mb-8 relative z-10">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -10px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-4 rounded-xl font-semibold shadow-lg"
              >
                <FaApple className="text-xl" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div>App Store</div>
                </div>
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -10px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-3 bg-blue-700 text-white py-4 rounded-xl font-semibold shadow-lg"
              >
                <FaGooglePlay className="text-xl" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div>Google Play</div>
                </div>
              </motion.button>
            </div>
            
            {/* QR Code Alternative */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-lg shadow flex items-center gap-4 relative z-10"
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                className="bg-gray-200 p-2 rounded"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-white">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2 }}
                        className="w-4 h-4 bg-black rounded-sm"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              <div>
                <h4 className="font-semibold text-gray-800">Scan to Download</h4>
                <p className="text-sm text-gray-600">Use your phone's camera to scan the QR code</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Trust Badge Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="bg-gray-100 p-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="text-gray-600 mb-3"
          >
            Our Service Domain
          </motion.p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {["Franchise", "Business", "Marketing", "Legal","Finance","IT","Education","On-Demand","Onboarding"].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 font-semibold px-4 py-2 bg-white rounded-lg shadow-sm"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}