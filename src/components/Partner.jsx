// app/components/PartnerDiagram.jsx
"use client";

import { useState, useEffect } from "react";
import { FaCheckCircle, FaCrown, FaStar, FaRocket, FaArrowRight, FaCheck, FaTimes } from "react-icons/fa";

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
        "Core partner tools",
        "Standard support",
        "Commission: 5% to 15% per successful lead",
        "Onboarding Bonus: ₹5000 per direct GP, ₹3000 per indirect referral",
        "Business Onboarding Bonus: Up to ₹10,000 per business/service",
      ],
      monthlyEarning: "₹4,000/month",
      revenue: "Earn 5% to 15% revenue share",
      teamBuildingIncome: "₹5000 per direct GP, ₹3000 per indirect referral",
      teamRevenueIncome: "Not applicable at this level",
      marketingSupport: "Basic marketing materials and guidance",
      image: <img src="/GP.png" alt="Growth Partner" className="rounded-full" width={70} height={70} />,
      icon: <FaStar className="text-yellow-400" />,
      color: "from-blue-300 to-blue-400",
      borderColor: "border-blue-400",
    },
    {
      id: 2,
      name: "Super Growth Partner (SGP)",
      level: "Level 2",
      earnings: "₹50,000 - ₹70,000/month",
      requireQue: "How to promoted SGP to PGP?",
      requirements: ["Support 3 (SGPs) in your team to qualify as a Premium Growth Partner (PGP)."],
      benefits: [
        "Advanced tools, priority support",
        "Marketing resources",
        "Commission: 5% to 15% per successful lead",
        "Team Revenue Share: 5% to 10% from team performance",
        "Onboarding Bonus: ₹5000 per direct GP, ₹3000 per indirect referral",
        "Business Onboarding Bonus: Up to ₹10,000 per business/service",
      ],
      monthlyEarning: "₹4,000/month",
      revenue: "Earn 5% to 15% revenue share + 5% to 10% team revenue",
      teamBuildingIncome: "₹5000 per direct GP, ₹3000 per indirect referral",
      teamRevenueIncome: "5% to 10% from team performance",
      marketingSupport: "Advanced marketing resources and tools",
      image: <img src="/SGP.png" alt="Super Growth Partner" className="rounded-full" width={70} height={70} />,
      icon: <FaRocket className="text-orange-400" />,
      color: "from-purple-300 to-purple-500",
      borderColor: "border-purple-400",
    },
    {
      id: 3,
      name: "Premium Growth Partner (PGP)",
      level: "Level 3",
      earnings: "₹70,000 - ₹1,00,000/month",
      requireQue: "How to promoted PGP?",
      requirements: ["You are a Premium Growth Partner (PGP) and eligible for unlimited earnings."],
      benefits: [
        "All SGP benefits + exclusive events, premium resources",
        "Commission: 5% to 15% per successful lead",
        "Team Revenue Share: 5% to 10% from team performance",
        "Additional Team Revenue Share: 3% to 7% from GPs onboarded by direct GPs",
      ],
      monthlyEarning: "₹4,000/month",
      revenue: "Earn 5% to 15% revenue share + 5% to 10% team revenue + 3% to 7% secondary team revenue",
      teamBuildingIncome: "₹5000 per direct GP, ₹3000 per indirect referral",
      teamRevenueIncome: "5% to 10% + 3% to 7% from secondary teams",
      marketingSupport: "Exclusive campaigns & dedicated manager",
      image: <img src="/PGP.png" alt="Premium Growth Partner" className="rounded-full" width={70} height={70} />,
      icon: <FaCrown className="text-yellow-300" />,
      color: "from-amber-100 to-amber-300",
      borderColor: "border-amber-400",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
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

        {/* Cards */}
        <div id="cards-container" className="flex flex-col lg:flex-row gap-6 justify-center">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`flex-1 min-w-[300px] transition-all duration-500 transform ${
                activeTier === partner.id ? "scale-105" : "opacity-90 scale-95"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setActiveTier(partner.id)}
            >
              <div className={`h-full bg-white rounded-2xl shadow-lg border-2 ${partner.borderColor} overflow-hidden`}>
                {/* Header */}
                <div className={`flex justify-between p-5 bg-gradient-to-r ${partner.color}`}>
                  <div>{partner.image}</div>
                  <div className="text-right">
                    <div className="text-white text-xl font-bold mb-1">{partner.name}</div>
                    <h4 className="text-green-900 font-semibold">Assured Earnings</h4>
                    <p className="text-green-900 text-sm">{partner.earnings}</p>
                    <h4 className="text-white text-sm bg-blue-950 p-1">
                      Monthly Fixed Earning:{" "}
                      <span className="text-green-600 font-medium">{partner.monthlyEarning}</span>
                    </h4>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-4">
                  {/* Requirements */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2 text-sm">{partner.requireQue}</h3>
                    <p className="text-gray-600 text-sm">{partner.requirements}</p>
                  </div>

                  {/* Accordions (without border) */}
                  <div className="space-y-2">
                    <div>
                      <button
                        className="w-full p-3 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAccordion(partner.id, "revenue");
                        }}
                      >
                        <span className="font-medium text-sm">Revenue</span>
                        {expandedAccordions[partner.id] === "revenue" ? "−" : "+"}
                      </button>
                      {expandedAccordions[partner.id] === "revenue" && (
                        <div className="p-3 text-sm">{partner.revenue}</div>
                      )}
                    </div>

                    <div>
                      <button
                        className="w-full p-3 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAccordion(partner.id, "teamBuilding");
                        }}
                      >
                        <span className="font-medium text-sm">Team Building Income</span>
                        {expandedAccordions[partner.id] === "teamBuilding" ? "−" : "+"}
                      </button>
                      {expandedAccordions[partner.id] === "teamBuilding" && (
                        <div className="p-3 text-sm">{partner.teamBuildingIncome}</div>
                      )}
                    </div>

                    <div>
                      <button
                        className="w-full p-3 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAccordion(partner.id, "teamRevenue");
                        }}
                      >
                        <span className="font-medium text-sm">Team Revenue Income</span>
                        {expandedAccordions[partner.id] === "teamRevenue" ? "−" : "+"}
                      </button>
                      {expandedAccordions[partner.id] === "teamRevenue" && (
                        <div className="p-3 text-sm">{partner.teamRevenueIncome}</div>
                      )}
                    </div>

                    <div>
                      <button
                        className="w-full p-3 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAccordion(partner.id, "marketing");
                        }}
                      >
                        <span className="font-medium text-sm">Marketing Support</span>
                        {expandedAccordions[partner.id] === "marketing" ? "−" : "+"}
                      </button>
                      {expandedAccordions[partner.id] === "marketing" && (
                        <div className="p-3 text-sm">{partner.marketingSupport}</div>
                      )}
                    </div>
                  </div>

                  {/* Benefits (पहले Modal में थे अब Card में ही दिखेंगे) */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">Benefits:</h4>
                    <ul className="space-y-2 text-sm">
                      {partner.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
