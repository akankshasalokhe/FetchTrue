"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Steps.module.css";

const StepCard = ({ step, index, activeStep }) => {
  const isActive = activeStep === index;
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (isActive && index === 0) {
      const phoneNumber = "+91 98xxxxxxx0";
      setTypedText(""); // reset when step is active again
      let i = 0;
      const interval = setInterval(() => {
        setTypedText((prev) => prev + phoneNumber[i]);
        i++;
        if (i === 13) clearInterval(interval);
      }, 300); // typing speed (medium)
      return () => clearInterval(interval);
    }
  }, [isActive, index]);

  return (
    <motion.div
      className="relative w-full md:w-[320px] flex flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isActive ? 1 : 0.4, y: isActive ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Mobile Mockup */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 80 }}
        animate={isActive ? { scale: 1, opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={styles.phone}
      >
        <div className={styles.screen}>
          {/* Step-Specific Content */}
          {index === 0 && (
            <motion.div
              key="step1"
              className="w-full p-4 text-center"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {/* App header */}
              <motion.div 
                className="flex justify-between items-center px-2 mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                <div className="font-semibold text-gray-800">FetchTrue</div>
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </motion.div>

              <motion.h3 
                className="text-lg font-bold text-gray-800 mb-6"
                initial={{ y: 10, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                Welcome to FetchTrue
              </motion.h3>

              <motion.div
                className="border rounded-xl p-3 mb-4 text-gray-500 text-sm bg-white shadow-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                Enter Mobile Number
              </motion.div>

              {/* ✅ Typewriter effect */}
              <motion.div
                className="h-12 border rounded-lg flex items-center justify-center text-sm text-gray-700 bg-white mx-4 mb-6 shadow-sm font-mono"
                initial={{ width: "0%" }}
                animate={isActive ? { width: "80%" } : {}}
                transition={{ duration: 0.9, delay: 1.5 }}
              >
                {typedText}
                <span className="animate-pulse">|</span>
              </motion.div>

              <motion.button
                className="mt-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg w-4/5 font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isActive ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </motion.div>
          )}


          {index === 1 && (
            <motion.div
              key="step2"
              className="flex flex-col items-center p-4 w-full"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {/* App header */}
              <motion.div 
                className="flex justify-between items-center px-2 mb-6 w-full"
                initial={{ y: -20, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                <div className="font-semibold text-gray-800">Packages</div>
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </motion.div>

              <motion.h3 
                className="text-lg font-bold text-gray-800 mb-4"
                initial={{ y: 10, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                Choose Your Plan
              </motion.h3>

              <motion.div
                className="w-full h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mb-5 flex flex-col items-center justify-center p-4 border border-gray-200 shadow-sm"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isActive ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 1 }}
              >
                <img src="/package.jpeg" alt="Premium Plan" className="w-full h-full object-cover rounded-lg object-cover" />
                {/* <span className="text-lg font-bold text-gray-800">Premium Plan</span>
                <span className="text-2xl font-bold text-blue-600 mt-2">₹999/month</span>
                <span className="text-sm text-gray-600 mt-2">Unlimited access to all features</span> */}
              </motion.div>

              <motion.button
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg w-full font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Activate Now
              </motion.button>

              <motion.div
                className="mt-4 text-green-600 font-semibold text-sm flex items-center"
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                transition={{ delay: 2 }}
              >
                <span className="mr-1">✓</span> Successfully Activated!
              </motion.div>
            </motion.div>
          )}

          {index === 2 && (
            <motion.div
              key="step3"
              className="flex flex-col items-center justify-center p-4 w-full"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              {/* App header */}
              <motion.div 
                className="flex justify-between items-center px-2 mb-6 w-full"
                initial={{ y: -20, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                <div className="font-semibold text-gray-800">Earnings</div>
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </motion.div>

              <motion.h3 
                className="text-lg font-bold text-gray-800 mb-2"
                initial={{ y: 10, opacity: 0 }}
                animate={isActive ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
              >
                Your Earnings
              </motion.h3>

              <motion.div
                className="text-gray-600 text-sm mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                transition={{ delay: 1.1 }}
              >
                Track your monthly income
              </motion.div>

              <motion.div
                className="w-36 h-36 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mb-5 shadow-inner"
                initial={{ scale: 0, rotate: -180 }}
                animate={isActive ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <span className="text-4xl">💰</span>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-4 shadow-lg w-full text-center border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.6 }}
              >
                <div className="text-sm text-gray-600">Current Month</div>
                <div className="text-2xl font-bold text-green-600 mt-1">₹1,25,000</div>
                <div className="text-xs text-gray-500 mt-2">+15% from last month</div>
              </motion.div>

              <motion.p 
                className="text-gray-700 mt-6 text-center text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : {}}
                transition={{ delay: 2 }}
              >
                Earn up to ₹1 Lakh/month
              </motion.p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Step text */}
      <div className="w-full md:w-[260px] mt-6 px-2">
        <h4 className="font-bold text-lg text-center text-gray-800">Step {index + 1}</h4>
        <p className="text-gray-600 mt-2 text-center text-base leading-relaxed">{step}</p>
      </div>
    </motion.div>
  );
};

export default function HowItWorks() {
  const steps = [
    "Install Fetch True App and create an Account",
    "Activate Package and start managing your business",
    "Start earning money more than ₹1 Lakh every month",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveStep((prev) => (prev + 1) % steps.length);
    } else if (isRightSwipe) {
      setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12 md:mb-16 px-4 relative z-10">
        <motion.h3 
          className="font-bold text-xl md:text-2xl text-[#2164F4] mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h3>
        <motion.h2 
          className="font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#1e3c72] to-[#2a5298] bg-clip-text text-transparent mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get Started in 3 Simple Steps
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our intuitive process makes it easy to get started with FetchTrue and begin managing your business efficiently.
        </motion.p>
      </div>

      {/* Steps for desktop */}
      <div className="hidden  lg:flex flex-row justify-center items-center gap-8 lg:gap-12 relative z-10 flex-wrap px-4">
        {steps.map((s, i) => (
          <StepCard key={i} step={s} index={i} activeStep={activeStep} />
        ))}
      </div>

      {/* Carousel for mobile and tablet */}
      <div 
        className="lg:hidden flex overflow-x-hidden w-full relative z-10"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div 
          className="flex w-full"
          animate={{ x: -activeStep * 100 + '%' }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {steps.map((s, i) => (
            <div key={i} className="w-full flex-shrink-0 flex justify-center px-8">
              <StepCard step={s} index={i} activeStep={activeStep} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots indicator for mobile */}
      <div className="lg:hidden flex justify-center mt-8 space-x-2">
        {steps.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${i === activeStep ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setActiveStep(i)}
            aria-label={`Go to step ${i + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows for mobile */}
      <div className="lg:hidden flex justify-center mt-6 space-x-4">
        <button 
          onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
          className="p-2 rounded-full bg-white shadow-md"
          aria-label="Previous step"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
          className="p-2 rounded-full bg-white shadow-md"
          aria-label="Next step"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}