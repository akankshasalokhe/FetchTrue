// app/components/PartnerDiagram.jsx
"use client";

import { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaCrown,
  FaStar,
  FaRocket,
  FaTshirt,
  FaBook,
  FaPen,
  FaMugHot,
  FaTint,
  FaIdCard,
  FaBookOpen,
  FaLaptop,
} from "react-icons/fa";
import AssuranceCard from "./AssuranceCard";

export default function PartnerDiagram() {
  const [activeTier, setActiveTier] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedAccordions, setExpandedAccordions] = useState({});

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleAccordion = (tierId, accordionKey) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [tierId]: prev[tierId] === accordionKey ? null : accordionKey,
    }));
  };

 

  const partners = [
    {
      id: 1,
      name: "Growth Partner (GP)",
      level: "Level 1",
      earnings: "₹30,000 - ₹50,000/month",
      requireQue: "How to promoted GP to SGP?",
      requirements: ["Recruit 10 Growth Partner to become a Super Growth Partner (SGP)"],
      benefits: [
        "Earn ₹ 30,000 - ₹ 50,000",
        "Scalable income - the more leads you convert, the higher your earnings.",
        "Earn ₹5,000 for every franchise you successfully on-board",
        "Earn ₹3,000 when a franchise you on boarded brings in another franchise.",
        "3 - 6 hours response time for quick issue resolution",
        "Full support system to help you succeed"
      ],
      monthlyEarning: "₹3,000/month",
      revenue: "Earn 5% to 15% revenue share",
      teamBuildingIncome: "₹5000 per direct GP, ₹3000 per indirect referral",
      teamRevenueIncome: "Not applicable at this level",
      marketingSupport: "Basic marketing materials and guidance",
      image: <img src="/GP.png" alt="Growth Partner" className="rounded-full" width={70} height={70} />,
      color: "from-blue-300 to-blue-400",
      borderColor: "border-blue-400",
      offerImage: "/kit.jpeg",

    },
    {
      id: 2,
      name: "Super Growth Partner (SGP)",
      level: "Level 2",
      earnings: "₹50,000 - ₹70,000/month",
      requireQue: "How to promoted SGP to PGP?",
      requirements: ["Support 3 (SGPs) in your team to qualify as a Premium Growth Partner (PGP)."],
      benefits: [
        "Earn ₹ 50,000 - ₹ 70,000/Month",
        "Higher income potential with franchise benefits & team earning!",
        "Earn 5% to 15% revenue share on every successful lead conversion.",
        "Earn ₹5,000 for every franchise you successfully on-board.",
        "Earn ₹3,000 when a franchise you on boarded brings in another franchise.",
        "Earn an additional 5% to 8% as team revenue bonus.",
      ],
      monthlyEarning: "₹3,000/month",
      revenue: "Earn 5% to 15% revenue share + 5% to 10% team revenue",
      teamBuildingIncome: "₹5000 per direct GP, ₹3000 per indirect referral",
      teamRevenueIncome: "5% to 10% from team performance",
      marketingSupport: "Advanced marketing resources and tools",
      image: <img src="/SGP.png" alt="Super Growth Partner" className="rounded-full" width={70} height={70} />,
      color: "from-purple-300 to-purple-500",
      borderColor: "border-purple-400",
      offerImage: "/iPhone.png",
    },
    {
      id: 3,
      name: "Premium Growth Partner (PGP)",
      level: "Level 3",
      earnings: "₹70,000 - ₹1,00,000/month",
      requireQue: "How to promoted PGP?",
      requirements: ["You are a Premium Growth Partner (PGP) and eligible for unlimited earnings."],
      benefits: [
            "Earn ₹ 70,000 - ₹ 1,00,000/Month",
            "Scalable income - The more leads you convert the  higher your earnings!!",

            "Earn ₹5,000 for every franchise you successfully on-board.",
            "Earn ₹3,000 when a franchise you on boarded brings in another franchise.",
            "Earn 5% to 8% revenue share from your team's performance",
            "Earn 3% to 7% revenue share from the franchises on boarded by your direct franchisees",
      ],
      monthlyEarning: "₹3,000/month",
      revenue: "Earn 5% to 15% revenue share + 5% to 10% team revenue + 3% to 7% secondary team revenue",
      teamBuildingIncome: "₹5000 per direct GP, ₹3000 per indirect referral",
      teamRevenueIncome: "5% to 10% + 3% to 7% from secondary teams",
      marketingSupport: "Exclusive campaigns & dedicated manager",
      image: <img src="/PGP.png" alt="Premium Growth Partner" className="rounded-full" width={70} height={70} />,
      color: "from-amber-100 to-amber-300",
      borderColor: "border-amber-400",
      offerImage: "/Trip.jpg",
    },
  ];

  return (
    <section id="growth-partner" className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className={`text-4xl font-bold text-center mb-4 text-gray-800 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Become a FetchTrue Partner
        </h2>
        <p
          className={`text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto transform transition-all duration-1000 delay-150 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Join our partner program and unlock increasing benefits as you grow.
          Start as a Growth Partner and progress to higher tiers with greater rewards.
        </p>

        {/* Partner Cards */}
        <div id="cards-container" className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`flex flex-col w-full lg:w-1/3 transition-all duration-500 transform ${
                activeTier === partner.id ? "scale-105" : "opacity-90 scale-95"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setActiveTier(partner.id)}
            >
              <div
                className={`flex-1 bg-white rounded-2xl shadow-lg border-2 ${partner.borderColor} overflow-hidden flex flex-col h-full`}
              >
                {/* Header */}
                <div className={`flex justify-between p-5 bg-gradient-to-r ${partner.color}`}>
                  <div>{partner.image}</div>
                  <div className="text-right">
                    <div className="text-white text-xl font-bold mb-1">{partner.name}</div>
                    <h4 className="text-green-900 font-semibold">Assured Earnings</h4>
                    <p className="text-green-900 text-sm">{partner.earnings}</p>
                    <div className="inline-block mt-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">
                        Monthly Fixed Earning: {partner.monthlyEarning}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  {/* Requirements */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2 text-sm">{partner.requireQue}</h3>
                    <p className="text-gray-600 text-sm">{partner.requirements}</p>
                  </div>

                  {/* Accordions */}
                  <div className="space-y-2">
                    {["revenue", "teamBuilding", "teamRevenue", "marketing"].map((key) => (
                      <div key={key}>
                        <button
                          className="w-full p-3 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleAccordion(partner.id, key);
                          }}
                        >
                          <span className="font-medium text-sm capitalize">
                            {key === "teamBuilding"
                              ? "Team Building Income"
                              : key === "teamRevenue"
                              ? "Team Revenue Income"
                              : key === "marketing"
                              ? "Marketing Support"
                              : "Revenue"}
                          </span>
                          {expandedAccordions[partner.id] === key ? "−" : "+"}
                        </button>
                        {expandedAccordions[partner.id] === key && (
                          <div className="p-3 text-sm">
                            {
                              partner[
                                key === "teamBuilding"
                                  ? "teamBuildingIncome"
                                  : key === "teamRevenue"
                                  ? "teamRevenueIncome"
                                  : key === "marketing"
                                  ? "marketingSupport"
                                  : "revenue"
                              ]
                            }
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">Benefits:</h4>
                    <ul className="space-y-2 text-sm">
                      {partner.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* GP → Welcome Kit */}
                    {partner.id === 1 && (
                      <div className="mt-4">
                        <h5 className="font-semibold text-gray-700 text-sm mb-2">Welcome Kit Includes:</h5>
                        {/* <div className="grid grid-cols-2 gap-4 text-center text-xs mt-4">
                          {partner.offerImage && (
                            <img
                              src={partner.offerImage}
                              alt={`${partner.name} Offer`}
                              className="rounded-lg mt-4 w-full"
                            />
                          )}
                        </div> */}
                      </div>
                    )}

                    {/* SGP & PGP → Offer Image */}
                    {partner.offerImage && (
                      <img
                        src={partner.offerImage}
                        alt={`${partner.name} Offer`}
                        className="rounded-lg mt-4 w-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* Assurance Card at Bottom */}
       {/* Assurance Card at Bottom */}
{/* <div className="mt-12 bg-white shadow-xl rounded-2xl border border-gray-100 p-6 sm:p-8 max-w-4xl mx-auto">
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
    <img
      src="/icon (3).png"
      alt="Assurance"
      width={120}
      height={120}
      className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
    />
    <div className="text-center sm:text-left flex-1">
      <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
        We Assure You up to <span className="text-blue-600">5X Return</span>
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 mt-2">
        If you earn less than 5 Lakh in 3 year, we'll refund up to 5X your initial amount
      </p>
      <p className="mt-4 font-semibold text-gray-800 text-sm sm:text-base">
        Your Extra Benefits:{" "}
        <span className="font-normal text-gray-700">
          You've received ₹ {assuranceData?.monthlyEarnings?.toLocaleString() || 3000} as your fixed monthly earning bonus for purchasing the package.
        </span>
      </p>
      <p className="text-blue-600 text-xs sm:text-sm mt-3 flex items-center justify-center sm:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Safe, secure, and assured returns on your investment.
      </p>
    </div>
  </div>

  <div className="mt-8 border-t border-gray-200 pt-6 space-y-3 text-xs sm:text-sm text-gray-700">
    <div className="flex justify-between">
      <span className="font-medium">Franchise Fees</span>
      <span>
        <s className="text-gray-500"> ₹{assuranceData?.price?.toLocaleString()}</s>{" "}
        <span className="text-green-600 font-semibold ml-2">₹{assuranceData?.discount?.toLocaleString()} 
          ₹{assuranceData?.discountedPrice?.toLocaleString()}</span>
      </span>
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Franchise Deposit (Refundable)</span>
      <span className="font-semibold">₹{assuranceData?.deposit?.toLocaleString()}</span>
    </div>
    <div className="flex justify-between font-bold text-blue-800 pt-2 border-t border-gray-100">
      <span className="text-base sm:text-lg">Growth Total</span>
      <span className="text-base sm:text-lg">₹{assuranceData?.grandtotal?.toLocaleString()}</span>
    </div>
  </div>

  <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
    <div className="flex-1 text-center sm:text-left">
      <p className="text-xs text-gray-500">Pay using UPI, Card, Net Banking</p>
    </div>
    <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-900 text-sm sm:text-base">
      Activate Now
    </button>
  </div>
  
  <div className="mt-4 text-center sm:text-right">
    <p className="text-xs sm:text-sm font-semibold text-blue-700 inline-flex items-center bg-blue-50 px-3 sm:px-4 py-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      We Assure You up to 5X Return
    </p>
  </div>
</div> */}


      </div>

      {/* <AssuranceCard /> */}
    </section>
  );
}
