// app/components/PartnerDiagram.jsx
"use client";

import { useState, useEffect } from "react";
import { FaCheckCircle, FaCrown, FaStar, FaRocket, FaArrowRight, FaCheck, FaTimes } from "react-icons/fa";

export default function PartnerDiagram() {
  const [activeTier, setActiveTier] = useState(null);
  const [viewMode, setViewMode] = useState('cards');
  const [isVisible, setIsVisible] = useState(false);
  const [expandedAccordions, setExpandedAccordions] = useState({});
  const [showAllBenefits, setShowAllBenefits] = useState({});
  const [benefitsModal, setBenefitsModal] = useState(null);

  useEffect(() => {
    // Animation on component mount
    setIsVisible(true);
    
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleAccordion = (tierId, accordionKey) => {
    setExpandedAccordions(prev => ({
      ...prev,
      [tierId]: prev[tierId] === accordionKey ? null : accordionKey
    }));
  };

  const toggleShowAllBenefits = (tierId) => {
    setBenefitsModal(tierId);
  };

  const partners = [
    {
      id: 1,
      name: "Growth Partner (GP)",
      level: "Level 1",
      earnings: "₹30,000 - ₹50,000/month",
      requireQue:"How to promoted GP to SGP?",
      requirements:["Recruit 10 Growth Partner to become a Super Growth Partner (SGP)"],
      benefits: [
        "Core partner tools",
        "Standard support",
        "Commission: 5% to 15% per successful lead",
        "Onboarding Bonus: ₹5000 per direct GP, ₹3000 per indirect referral",
        "Business Onboarding Bonus: Up to ₹10,000 per business/service",
      ],
      detailedBenefits: [
        {
          title: "Assured Earnings Opportunity:",
          points: [
            "Earn ₹ 30,000 - ₹ 50,000",
            "Scalable income - the more leads you convert, the higher your earnings"
          ]
        },
        {
          title: "Revenue:",
          points: [
            "Earn 5% to 15% revenue share on every successful lead conversion"
          ]
        },
        {
          title: "Team Building Income:",
          points: [
            "Earn ₹5,000 for every franchise you successfully on-board",
            "Earn ₹3,000 when a franchise you on boarded brings in another franchise"
          ]
        },
        {
          title: "Marketing Support:",
          points: [
            "3 - 6 hours response time for quick issue resolution",
            "Full support system to help you succeed",
            "Never feel stuck! Get expert guidance whenever you need it"
          ]
        }
      ],
      monthlyEarning: "₹4,000/month",
      revenue: "Earn 5% to 15% revenue share",
      teamBuildingIncome: "₹5000 per direct GP, ₹3000 per indirect referral",
      teamRevenueIncome: "Not applicable at this level",
      marketingSupport: "Basic marketing materials and guidance",
      image: <img src="/GP.png" alt="Growth Partner" className="rounded-full" width={70} height={70} />,
      icon: <FaStar className="text-yellow-400" />,
      color: "from-blue-300 to-blue-400",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-400"
    },
    {
      id: 2,
      name: "Super Growth Partner (SGP)",
      level: "Level 2",
      earnings: "₹50,000 - ₹70,000/month",
      requireQue:"How to promoted SGP to PGP?",
      requirements: ["Support 3 (SGPs) in your team to qualify as a Premium Growth Partner (PGP)."],
      benefits: [
        "Advanced tools, priority support",
        "Marketing resources",
        "Commission: 5% to 15% per successful lead",
        "Team Revenue Share: 5% to 10% from team performance",
        "Onboarding Bonus: ₹5000 per direct GP, ₹3000 per indirect referral",
        "Business Onboarding Bonus: Up to ₹10,000 per business/service",
        "Access to pre-designed outreach & promotion tools",
        "Support within 3-6 hours",
        "5X return guarantee",
      ],
      detailedBenefits: [
        {
          title: "Assured Earnings Opportunity:",
          points: [
            "Earn ₹ 50,000 - ₹ 70,000",
            "Scalable income - the more leads you convert, the higher your earnings"
          ]
        },
        {
          title: "Revenue:",
          points: [
            "Earn 5% to 15% revenue share on every successful lead conversion",
            "Additional 5% to 10% team revenue share"
          ]
        },
        {
          title: "Team Building Income:",
          points: [
            "Earn ₹5,000 for every franchise you successfully on-board",
            "Earn ₹3,000 when a franchise you on boarded brings in another franchise"
          ]
        },
        {
          title: "Marketing Support:",
          points: [
            "3 - 6 hours response time for quick issue resolution",
            "Full support system to help you succeed",
            "Never feel stuck! Get expert guidance whenever you need it",
            "Access to pre-designed outreach & promotion tools"
          ]
        }
      ],
      monthlyEarning: "₹4,000/month",
      revenue: "Earn 5% to 15% revenue share + 5% to 10% team revenue",
      teamBuildingIncome: "₹5000 per direct GP, ₹3000 per indirect referral",
      teamRevenueIncome: "5% to 10% from team performance",
      marketingSupport: "Advanced marketing resources and tools",
      image: <img src="/SGP.png" alt="Super Growth Partner" className="rounded-full" width={70} height={70} />,
      icon: <FaRocket className="text-orange-400" />,
      color: "from-purple-300 to-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-400"
    },
    {
      id: 3,
      name: "Premium Growth Partner (PGP)",
      level: "Level 3",
      earnings: "₹70,000 - ₹1,00,000/month",
      requireQue:"How to promoted PGP?",
      requirements:["You are a Premium Growth Partner (PGP) and eligible for unlimited earnings."],
      benefits: [
        "All SGP benefits + exclusive events, premium resources",
        "Commission: 5% to 15% per successful lead",
        "Team Revenue Share: 5% to 10% from team performance",
        "Additional Team Revenue Share: 3% to 7% from GPs onboarded by direct GPs",
        "Onboarding Bonus: ₹5000 per direct GP, ₹3000 per indirect referral",
        "Business Onboarding Bonus: Up to ₹10,000 per business/service",
        "Access to pre-designed outreach & promotion tools",
      ],
      detailedBenefits: [
        {
          title: "Assured Earnings Opportunity:",
          points: [
            "Earn ₹ 70,000 - ₹ 1,00,000+",
            "Unlimited earning potential based on your performance"
          ]
        },
        {
          title: "Revenue:",
          points: [
            "Earn 5% to 15% revenue share on every successful lead conversion",
            "Additional 5% to 10% team revenue share",
            "Extra 3% to 7% from secondary team performance"
          ]
        },
        {
          title: "Team Building Income:",
          points: [
            "Earn ₹5,000 for every franchise you successfully on-board",
            "Earn ₹3,000 when a franchise you on boarded brings in another franchise"
          ]
        },
        {
          title: "Marketing Support:",
          points: [
            "3 - 6 hours response time for quick issue resolution",
            "Full support system to help you succeed",
            "Never feel stuck! Get expert guidance whenever you need it",
            "Exclusive marketing campaigns for brand visibility & lead generation",
            "Dedicated Relationship Manager"
          ]
        }
      ],
      monthlyEarning: "₹4,000/month",
      revenue: "Earn 5% to 15% revenue share + 5% to 10% team revenue + 3% to 7% secondary team revenue",
      teamBuildingIncome: ["Earn ₹5,000 for every GP you onboard, Get ₹3,000 when your onboarded GP brings another."],
      teamRevenueIncome: "5% to 10% from team performance + 3% to 7% from secondary teams",
      marketingSupport: ["Support within 3-6 hours.,Full support system.,Expert help, anytime you need it."],
      dedicatedSupport: [
        "24-hour response time for issue resolution",
        "Dedicated Relationship Manager",
        "Exclusive marketing campaigns for brand visibility & lead generation",
      ],
      image: <img src="/PGP.png" alt="Premium Growth Partner" className="rounded-full" width={70} height={70} />,
      icon: <FaCrown className="text-yellow-300" />,
      color: "from-amber-100 to-amber-300",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-400"
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-4 text-gray-800 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Become a FetchTrue Partner
        </h2>
        <p className={`text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto transform transition-all duration-1000 delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Join our partner program and unlock increasing benefits as you grow. 
          Start as a Growth Partner and progress to higher tiers with greater rewards.
        </p>

        {/* Progress Path */}
        <div className={`flex justify-center items-center mb-12 relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-300 transform -translate-y-1/2 z-0"></div>
          
          {/* {partners.map((partner, idx) => (
            <div key={partner.id} className="relative z-10 flex flex-col items-center mx-4">
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2 bg-gradient-to-br ${partner.color} text-white shadow-lg transform transition-all duration-300 hover:scale-110 cursor-pointer ${activeTier === partner.id ? 'ring-4 ring-white ring-opacity-80 animate-pulse' : ''}`}
                onClick={() => {
                  setActiveTier(partner.id);
                  // Smooth scroll to cards
                  document.getElementById('cards-container')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {partner.image}
              </div>
              <span className="text-sm font-semibold text-gray-700">{partner.level}</span>
              
              {idx < partners.length - 1 && (
                <FaArrowRight className="hidden md:block mx-2 text-gray-500 absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 animate-bounce-x" />
              )}
            </div>
          ))} */}
        </div>

        {/* Horizontal Cards Container */}
        <div id="cards-container" className="flex flex-col md:flex-row gap-6 justify-center">
          {partners.map((partner, index) => (
            <div 
              key={partner.id}
              className={`flex-1 min-w-[300px] transition-all duration-500 transform ${activeTier === partner.id ? 'scale-105' : 'opacity-80 scale-95'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setActiveTier(partner.id)}
            >
              <div className={`h-full bg-white rounded-2xl shadow-lg border-2 ${partner.borderColor} overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl`}>
                {/* Tier Header with animated gradient */}
                <div className={`flex justify-between p-5 bg-gradient-to-r ${partner.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 animate-shimmer"></div>
                  <div>{partner.image}</div>
                  <div className="text-right">
                      <div className="text-white text-xl font-bold mb-1 relative z-10">{partner.name}</div>
                      <h4 className="text-green-900 font-semibold">Assured Earnings</h4>
                      <p className="text-green-900 text-sm relative z-10">{partner.earnings}</p>
                      <h4 className=" text-white text-sm bg-blue-950 p-1">Monthly Fixed Earning: <span className="text-green-600 font-medium">{partner.monthlyEarning}</span> </h4>

                  </div>
                </div>

                <div className="p-5">
                  {/* Monthly Fixed Earning */}
                  {/* <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-1 text-sm">Monthly Fixed Earning:</h4>
                    <p className="text-green-600 font-medium">{partner.monthlyEarning}</p>
                  </div> */}

                  {/* Promotion Requirements */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2 text-sm">{partner.requireQue}</h3>
                    <div className="text-gray-600 space-y-1 text-sm">
                        <p className="transition-colors hover:text-blue-600 animate-fade-in">{partner.requirements}</p>
                    </div>                  
                  </div>

                  {/* Accordions */}
                  <div className="mb-4 space-y-2">
                    {/* Revenue Accordion */}
                    <div className="border rounded-lg overflow-hidden">
                      <button 
                        className="w-full p-3 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAccordion(partner.id, 'revenue');
                        }}
                      >
                        <span className="font-medium text-sm">Revenue</span>
                        <div className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          {expandedAccordions[partner.id] === 'revenue' ? '−' : '+'}
                        </div>
                      </button>
                      {expandedAccordions[partner.id] === 'revenue' && (
                        <div className="p-3 bg-white text-sm">
                          <p>{partner.revenue}</p>
                        </div>
                      )}
                    </div>

                    {/* Team Building Income Accordion */}
                    <div className="border rounded-lg overflow-hidden">
                      <button 
                        className="w-full p-3 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAccordion(partner.id, 'teamBuilding');
                        }}
                      >
                        <span className="font-medium text-sm">Team Building Income</span>
                        <div className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          {expandedAccordions[partner.id] === 'teamBuilding' ? '−' : '+'}
                        </div>
                      </button>
                      {expandedAccordions[partner.id] === 'teamBuilding' && (
                        <div className="p-3 bg-white text-sm">
                          <p>{partner.teamBuildingIncome}</p>
                        </div>
                      )}
                    </div>

                    {/* Team Revenue Income Accordion */}
                    <div className="border rounded-lg overflow-hidden">
                      <button 
                        className="w-full p-3 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAccordion(partner.id, 'teamRevenue');
                        }}
                      >
                        <span className="font-medium text-sm">Team Revenue Income</span>
                        <div className="flex items-center">
                          {partner.teamRevenueIncome !== "Not applicable at this level" ? (
                            <FaCheck className="text-green-500 mr-2" />
                          ) : (
                            <FaTimes className="text-red-500 mr-2" />
                          )}
                          {expandedAccordions[partner.id] === 'teamRevenue' ? '−' : '+'}
                        </div>
                      </button>
                      {expandedAccordions[partner.id] === 'teamRevenue' && (
                        <div className="p-3 bg-white text-sm">
                          <p>{partner.teamRevenueIncome}</p>
                        </div>
                      )}
                    </div>

                    {/* Marketing Support Accordion */}
                    <div className="border rounded-lg overflow-hidden">
                      <button 
                        className="w-full p-3 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAccordion(partner.id, 'marketing');
                        }}
                      >
                        <span className="font-medium text-sm">Marketing Support</span>
                        <div className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          {expandedAccordions[partner.id] === 'marketing' ? '−' : '+'}
                        </div>
                      </button>
                      {expandedAccordions[partner.id] === 'marketing' && (
                        <div className="p-3 bg-white text-sm">
                          <p>{partner.marketingSupport}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  {/* <div className="mb-5">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">Benefits:</h4>
                    <ul className="space-y-2 text-sm">
                      {partner.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 animate-bounce" style={{ animationDelay: `${i * 100}ms` }} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                      {partner.benefits.length > 3 && (
                        <li className="text-blue-600 text-sm font-medium animate-fade-in" style={{ animationDelay: `${partner.benefits.length * 100}ms` }}>
                          +{partner.benefits.length - 3} more benefits
                        </li>
                      )}
                    </ul>
                  </div> */}

                  {/* Know Benefits Button */}
                  <div className="flex justify-center">
                    <button 
                      className={`py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${partner.color} hover:brightness-110 text-white text-sm transform hover:scale-105`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleShowAllBenefits(partner.id);
                      }}
                    >
                      Know Benefits
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Modal */}
        {benefitsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <div className={`p-6 bg-gradient-to-r ${partners[benefitsModal-1].color} text-white`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">{partners[benefitsModal-1].name}</h3>
                    <p className="text-white/90">{partners[benefitsModal-1].level}</p>
                  </div>
                  <button 
                    className="text-white text-2xl transform hover:scale-125 transition-transform"
                    onClick={() => setBenefitsModal(null)}
                  >
                    &times;
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Benefits Overview</h4>
                
                <div className="space-y-6">
                  {partners[benefitsModal-1].detailedBenefits.map((benefitGroup, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <h5 className="font-semibold text-gray-700 mb-2 text-lg">{benefitGroup.title}</h5>
                      <ul className="space-y-2 pl-5">
                        {benefitGroup.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Expanded View Modal */}
        {activeTier && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <div className={`p-6 bg-gradient-to-r ${partners[activeTier-1].color} text-white`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">{partners[activeTier-1].name}</h3>
                    <p className="text-white/90">{partners[activeTier-1].level}</p>
                  </div>
                  <button 
                    className="text-white text-2xl transform hover:scale-125 transition-transform"
                    onClick={() => setActiveTier(null)}
                  >
                    &times;
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6 animate-fade-in">
                  <h4 className="font-semibold text-gray-700 mb-2">Earnings Potential:</h4>
                  <p className="text-xl font-bold text-blue-700 animate-pulse">{partners[activeTier-1].earnings}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
                    {partners[activeTier-1].requirements.map((req, i) => (
                      <li key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {partners[activeTier-1].benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${i * 50}ms` }}>
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 animate-bounce" style={{ animationDelay: `${i * 50}ms` }} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {partners[activeTier-1].dedicatedSupport && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">Premium Support:</h4>
                    <ul className="space-y-2">
                      {partners[activeTier-1].dedicatedSupport.map((support, i) => (
                        <li key={i} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${i * 50}ms` }}>
                          <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0 animate-bounce" style={{ animationDelay: `${i * 50}ms` }} />
                          <span className="text-gray-700">{support}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-bounce-x {
          animation: bounce-x 2s infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.3s forwards;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}