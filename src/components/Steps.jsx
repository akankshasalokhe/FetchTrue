"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Download App", description: "Get the FetchTrue app from Google Play or App Store." },
  { title: "Sign Up", description: "Register using your email or phone number." },
  { title: "Activate Packages", description: "Start exploring features and managing your business." },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12 px-4">
        <motion.h3
          className="font-bold text-xl md:text-2xl text-[#2164F4]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h3>
        <motion.h2
          className="font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#1e3c72] to-[#2a5298] bg-clip-text text-transparent mt-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Get Started in 3 Simple Steps
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto mt-5 px-4 md:px-6 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Steps List */}
        <div className="flex-1 flex flex-col gap-12 relative mt-5">
          {/* Vertical Line */}
          <div className="absolute left-5 top-5 w-1 h-[85%] bg-gradient-to-b from-blue-300 to-blue-500 md:h-[90%]"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 relative z-20"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Step Circle with continuous glow */}
              <motion.div
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white font-bold shadow-lg glow"
                style={{
                  background: "#2556b1",
                  // animation: `glowStep 5s infinite ${index * 1}s`,
                }}
              >
                {index + 1}
              </motion.div>

              {/* Step Description */}
              <div>
                <h5 className="font-semibold text-gray-900 text-lg">{step.title}</h5>
                <p className="text-gray-600 mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Video */}
        <motion.div
          className="flex-1 w-full lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg mt-10 lg:mt-0">
            <div className="aspect-w-16 aspect-h-9 relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dRxAN8wLxIk?rel=0&modestbranding=1"
                title="FetchTrue App Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Glow Animation Keyframes */}
      <style jsx>{`
        @keyframes glowStep {
          0%, 20%, 100% {
            box-shadow: 0 0 0px #2556b1;
          }
          50% {
            box-shadow: 0 0 30px #2556b1;
          }
        }
      `}</style>
    </section>
  );
}