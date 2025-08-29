"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function PolicyPage() {
  const [policyData, setPolicyData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch privacy policy content
        const policyRes = await fetch(
          "https://biz-booster.vercel.app/api/termsconditions"
        );
        const policyJson = await policyRes.json();
        setPolicyData(policyJson?.data?.[0]?.content || "");
        setLoading(false);
      } catch (err) {
        console.error("Error fetching privacy policy:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div  className="mt-5 mb-10 px-6 md:px-20">

      {/* Heading */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={scrollVariants}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-blue-600 font-bold text-center py-10 text-3xl md:text-4xl"
      >
        Terms & Condition
      </motion.h1>

      {/* Content */}
      <motion.div
        className="text-gray-600 leading-relaxed space-y-4"
        initial="hidden"
        whileInView="visible"
        variants={scrollVariants}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        dangerouslySetInnerHTML={{ __html: policyData }}
      />
    </div>
  );
}
