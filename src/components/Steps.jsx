// "use client";

// import { motion } from "framer-motion";

// const steps = [
//   { title: "Download App", description: "Get the FetchTrue app from Google Play or App Store." },
//   { title: "Sign Up", description: "Register using your email or phone number." },
//   { title: "Activate Packages", description: "Start exploring features and managing your business." },
// ];

// export default function HowItWorks() {
//   return (
//     <section className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 py-16 md:py-24">
//       {/* Section Title */}
//       <div className="text-center mb-12 px-4">
//         <motion.h3
//           className="font-bold text-xl md:text-2xl text-[#2164F4]"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           How It Works
//         </motion.h3>
//         <motion.h2
//           className="font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#1e3c72] to-[#2a5298] bg-clip-text text-transparent mt-2"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           Get Started in 3 Simple Steps
//         </motion.h2>
//       </div>

//       <div className="max-w-7xl mx-auto mt-5 px-4 md:px-6 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
//         {/* Steps List */}
//         <div className="flex-1 flex flex-col gap-12 relative mt-5">
//           {/* Vertical Line */}
//           <div className="absolute left-5 top-5 w-1 h-[85%] bg-gradient-to-b from-blue-300 to-blue-500 md:h-[90%]"></div>

//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="flex items-start gap-6 relative z-20"
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.3 }}
//             >
//               {/* Step Circle with continuous glow */}
//               <motion.div
//                 className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white font-bold shadow-lg glow"
//                 style={{
//                   background: "#2556b1",
//                   // animation: `glowStep 5s infinite ${index * 1}s`,
//                 }}
//               >
//                 {index + 1}
//               </motion.div>

//               {/* Step Description */}
//               <div>
//                 <h5 className="font-semibold text-gray-900 text-lg">{step.title}</h5>
//                 <p className="text-gray-600 mt-1">{step.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* YouTube Video */}
//         <motion.div
//           className="flex-1 w-full lg:mt-0"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <div className="rounded-2xl overflow-hidden shadow-lg mt-10 lg:mt-0">
//             <div className="aspect-w-16 aspect-h-9 relative" style={{ paddingBottom: '56.25%' }}>
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.youtube.com/embed/dRxAN8wLxIk?rel=0&modestbranding=1"
//                 title="FetchTrue App Demo"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Glow Animation Keyframes */}
//       <style jsx>{`
//         @keyframes glowStep {
//           0%, 20%, 100% {
//             box-shadow: 0 0 0px #2556b1;
//           }
//           50% {
//             box-shadow: 0 0 30px #2556b1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const steps = [
  { 
    title: "Download App", 
    description: "Get the FetchTrue app from Google Play or App Store.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  },
  { 
    title: "Sign Up", 
    description: "Register using your email or phone number.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  { 
    title: "Activate Packages", 
    description: "Start exploring features and managing your business.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-20"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 px-4 relative z-10">
        <motion.h3
          className="font-bold text-xl md:text-2xl text-[#2164F4] mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h3>
        <motion.h2
          className="font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#1e3c72] to-[#2a5298] bg-clip-text  mt-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Get Started in 3 Simple Steps
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our intuitive process makes it easy to get started with FetchTrue and begin managing your business efficiently.
        </motion.p>
      </div>


 <section className="flex px-5 justify-around relative z-10">
      {/* Card 1 */}
      <div>
          <motion.div
        className="relative  w-[500px]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/graph.png" alt="Graph" width={500} height={300} className="w-full h-auto" />
        <img
          src="/mockupfetchTrue.png"
          alt="mockup"
          width={200}
          height={400}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mt-[50px]"
          style={{ clipPath: "inset(0 10% 30% 10%)" }}
        />
      </motion.div>
        <motion.div>
        <div className="w-[300px] ms-20">
          <h4 className="font-bold text-lg text-center mt-4">Step 1</h4>
          <p className="text-gray-600 mt-2 justify-center">
            Install Fetch True App and create an Account
          </p>
        </div>
      </motion.div>
      </div>
      

      {/* Card 2 */}
      <div>
        <motion.div
        className="relative w-[500px]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src="/graph.png" alt="Graph" width={500} height={300} className="w-full h-auto" />
        <img
          src="/mockupfetchTrue.png"
          alt="mockup"
          width={200}
          height={400}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ clipPath: "inset(0 10% 30% 10%)" }}
        />
      </motion.div>
      <motion.div>
        <div className="w-[300px] ms-20">
          <h4 className="font-bold text-lg text-center mt-4">Step 2</h4>
          <p className="text-gray-600 mt-2 justify-center">
            Activate Package and start managing your business 
          </p>
        </div>
      </motion.div>
      </div>
      

      {/* Card 3 */}
     <div>
      <motion.div
        className="relative w-[500px]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src="/graph.png" alt="Graph" width={500} height={300} className="w-full h-auto" />
        <img
          src="/mockupfetchTrue.png"
          alt="mockup"
          width={200}
          height={400}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ clipPath: "inset(0 10% 30% 10%)" }}
        />
      </motion.div>
      <motion.div>
        <div className="w-[300px] ms-20">
          <h4 className="font-bold text-lg text-center mt-4">Step 3</h4>
          <p className="text-gray-600 mt-2 justify-center">
            Start earning money more than ₹1 Lakh every month
          </p>
        </div>
      </motion.div>
     </div>
    </section>


    {/* <section className="flex gap-6 px-25 "> */}
      {/* <motion.div>
        <div className="w-[300px] ms-20">
          <h4 className="font-bold text-lg text-center mt-4">Step 1</h4>
          <p className="text-gray-600 mt-2 justify-center">
            Install Fetch True App and create an Account
          </p>
        </div>
      </motion.div> */}
      {/* <motion.div>
        <div className="w-[300px] ms-20">
          <h4 className="font-bold text-lg text-center mt-4">Step 2</h4>
          <p className="text-gray-600 mt-2 justify-center">
            Activate Package and start managing your business 
          </p>
        </div>
      </motion.div> */}
      {/* <motion.div>
        <div className="w-[300px] ms-20">
          <h4 className="font-bold text-lg text-center mt-4">Step 3</h4>
          <p className="text-gray-600 mt-2 justify-center">
            Start earning money more than ₹1 Lakh every month
          </p>
        </div>
      </motion.div> */}
    {/* </section> */}




     
    </section>
  );
}