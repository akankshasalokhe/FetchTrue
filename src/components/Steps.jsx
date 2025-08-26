"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Download App", description: "Get the FetchTrue app from Google Play or App Store." },
  { title: "Sign Up", description: "Register using your email or phone number." },
  { title: "Verify OTP", description: "Securely verify your account using OTP." },
  { title: "Fill Details", description: "Complete your profile with business & personal info." },
  { title: "Account Created", description: "Start exploring features and managing your business." },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 py-24">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h3
          className="font-bold text-2xl text-[#2164F4]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h3>
        <motion.h2
          className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-[#1e3c72] to-[#2a5298] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Get Started in 5 Simple Steps
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-16">
        {/* Steps List */}
        <div className="flex-1 flex flex-col gap-20 relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-5 w-1 h-full bg-blue-300"></div>

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
                className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold shadow-lg glow"
                style={{
                  background: "#2556b1",
                  animation: `glowStep 5s infinite ${index * 1}s`,
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
          className="flex-1 mt-12 lg:mt-0 md: w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-100"
              src="Sing up Fetch True_v002.mp4"
              title="FetchTrue App Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
