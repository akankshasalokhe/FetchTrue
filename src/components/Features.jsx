"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefitsData = [
  {
    heading: "Reliable Support",
    description:
       "Receive assistance anytime from our committed support team, ensuring quick solutions and a seamless experience.",
    imageUrl: "/relaiblesupport.png",
  },
  {
    heading: "Boost Sales Effortlessly",
    description:
      "Receive daily reward points for continuous value, ensuring ongoing benefits and greater savings over time.",
    imageUrl: "/boostsales.png",
  },
  {
    heading: "Evergreen Opportunities",
    description:
      "Step into the thriving financial and banking sector for enduring success, while building a stable and rewarding career for the future.",
    imageUrl: "/evergreenopportunities.png",
  },
  {
    heading: "Manage on Mobile",
    description:
      "Be part of the expanding financial and banking industry for long-term success, while unlocking endless growth opportunities and career advancements.",
    imageUrl: "/mobile.png",
  },
  {
    heading: "Nationwide Operations",
    description:
      "Grow your business across India effortlessly, anytime and from anywhere, while reaching more customers and unlocking new opportunities.",
    imageUrl: "/nationwide.png",
  },
  {
    heading: "Guaranteed Rewards",
    description:
      "Collect daily reward points for continuous value, ensuring consistent benefits and greater savings over time with ease.",
    imageUrl: "/graducation award.png",
  },
  {
    heading: "Passive Income",
    description:
      "Get earn effortlessly with steady and reliable income, giving you financial stability and peace of mind while enjoying the freedom to focus on what truly matters.",
    imageUrl: "/passiveicon.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger cards animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Benefits() {
  return (
    <section id="features" className="relative bg-white text-dark w-full py-20 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-30 filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-purple-200 rounded-full opacity-30 filter blur-3xl animate-pulse"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h3 className="font-bold text-2xl text-[#2164F4]">Benefits of</h3>
        <h2 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-[#1e3c72] to-[#2a5298] bg-clip-text text-transparent">
          Becoming a FetchTrue Partner
        </h2>
      </div>

      {/* Benefits Grid with Scroll Animation */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
            transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
          >
            <div className="flex p-6 rounded-3xl h-full items-center gap-6 bg-white/70 backdrop-blur-md border border-white/40 shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-4xl border-2 border-blue-200 flex items-center justify-center shadow-2xl overflow-hidden">
                  <Image
                    src={benefit.imageUrl}
                    alt={benefit.heading}
                    width={60}
                    height={60}
                    className="object-cover"
                    // style={{borderRadius:"50%"}}
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h6 className="font-bold text-[#2164F4] mb-2">{benefit.heading}</h6>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
