"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const steps = [
  {
    title: "Earn Extra Income",
    desc: "Sell financial products with GroMo and make extra income every month",
    extra: "We provide services and franchise opportunities",
    img: "/PGP.png",
  },
  {
    title: "Work from Anywhere",
    desc: "No fixed hours—you are flexible",
    extra: "Join as a service partner or franchise owner",
    img: "/PGP.png",
  },
  {
    title: "Package Required",
    desc: "To start your journey with GroMo, you need to take a package",
    extra: "Choose from different packages designed for services and franchise",
    img: "/PGP.png",
  },
  {
    title: "Weekly Payout",
    desc: "Get your earning weekly after successful sales",
    extra: "Both services and franchise models get paid weekly",
    img: "/PGP.png",
  },
  {
    title: "Attend Trainings",
    desc: "Learn from experts and grow faster",
    extra: "We train both service providers and franchise partners",
    img: "/PGP.png",
  },
];

export default function ExtraIncome() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20">
      <div className="container mx-auto flex gap-16 px-6 lg:px-20">
        {/* LEFT: Sticky Content */}
        <div className="w-1/2 relative ms-30">
          <div className="sticky top-32">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold mb-6 text-indigo-700 leading-snug"
            >
              Unlock Extra Income with{" "}
              <span className="text-indigo-500">Fetch True</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-600 mb-10 text-lg"
            >
              Scroll down to explore benefits ↓
            </motion.p>

            {/* Active Step Card */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600">
                {steps[activeStep].title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed mb-3">
                {steps[activeStep].desc}
              </p>
              <p className="text-sm text-indigo-500 font-medium">
                {steps[activeStep].extra}
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Scroll Steps Images */}
        <div className="w-1/2 flex flex-col gap-[80vh] relative">
          {steps.map((step, i) => {
            const { ref, inView } = useInView({
              threshold: 0.5,
              triggerOnce: false,
            });

            if (inView && activeStep !== i) setActiveStep(i);

            return (
              <div
                ref={ref}
                key={i}
                className="h-[100vh] flex items-center justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 100, scale: 0.95 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 100,
                    scale: inView ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-indigo-200/40 blur-2xl rounded-3xl" />
                  <motion.img
                    src={step.img}
                    alt={step.title}
                    className="relative z-10 max-h-[420px] object-contain drop-shadow-2xl rounded-xl"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
