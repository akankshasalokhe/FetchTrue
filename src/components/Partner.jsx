// app/components/PartnerDiagram.jsx
"use client";

import { useState, useEffect } from "react";
import { FaCheckCircle, FaCrown, FaStar, FaRocket, FaArrowRight } from "react-icons/fa";

export default function PartnerDiagram() {
  const [activeTier, setActiveTier] = useState(null);
  const [viewMode, setViewMode] = useState('cards');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation on component mount
    setIsVisible(true);
    
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const partners = [
    {
      id: 1,
      name: "FetchTrue Growth Partner (GP)",
      level: "Level 1",
      earnings: "₹30,000 - ₹50,000",
      requirements: ["₹99,999 Investment"],
      benefits: [
        "Core partner tools",
        "Standard support",
        "Commission: 5% to 15% per successful lead",
        "Onboarding Bonus: ₹5000 per direct GP, ₹3000 per indirect referral",
        "Business Onboarding Bonus: Up to ₹10,000 per business/service",
      ],
      icon: <FaStar className="text-yellow-400" />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-400"
    },
    {
      id: 2,
      name: "Super Growth Partner (SGP)",
      level: "Level 2",
      earnings: "₹50,000 - ₹70,000",
      requirements: ["Appoint 10 GPs to become SGP"],
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
      icon: <FaRocket className="text-orange-400" />,
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-400"
    },
    {
      id: 3,
      name: "Premium Growth Partner (PGP)",
      level: "Level 3",
      earnings: "₹70,000 - ₹1,00,000",
      requirements: ["Appoint 10 SGPs to become PGP"],
      benefits: [
        "All SGP benefits + exclusive events, premium resources",
        "Commission: 5% to 15% per successful lead",
        "Team Revenue Share: 5% to 10% from team performance",
        "Additional Team Revenue Share: 3% to 7% from GPs onboarded by direct GPs",
        "Onboarding Bonus: ₹5000 per direct GP, ₹3000 per indirect referral",
        "Business Onboarding Bonus: Up to ₹10,000 per business/service",
        "Access to pre-designed outreach & promotion tools",
      ],
      dedicatedSupport: [
        "24-hour response time for issue resolution",
        "Dedicated Relationship Manager",
        "Exclusive marketing campaigns for brand visibility & lead generation",
      ],
      icon: <FaCrown className="text-yellow-300" />,
      color: "from-amber-500 to-amber-700",
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
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 transform -translate-y-1/2 z-0"></div>
          
          {partners.map((partner, idx) => (
            <div key={partner.id} className="relative z-10 flex flex-col items-center mx-4">
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2 bg-gradient-to-br ${partner.color} text-white shadow-lg transform transition-all duration-300 hover:scale-110 cursor-pointer ${activeTier === partner.id ? 'ring-4 ring-white ring-opacity-80 animate-pulse' : ''}`}
                onClick={() => {
                  setActiveTier(partner.id);
                  // Smooth scroll to cards
                  document.getElementById('cards-container')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {partner.icon}
              </div>
              <span className="text-sm font-semibold text-gray-700">{partner.level}</span>
              
              {idx < partners.length - 1 && (
                <FaArrowRight className="hidden md:block mx-2 text-gray-500 absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 animate-bounce-x" />
              )}
            </div>
          ))}
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
                <div className={`p-5 bg-gradient-to-r ${partner.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 animate-shimmer"></div>
                  <div className="text-white text-xl font-bold mb-1 relative z-10">{partner.name}</div>
                  <div className="text-white/90 text-sm relative z-10">{partner.level}</div>
                </div>

                <div className="p-5">
                  {/* Earnings */}
                  <div className="mb-5 animate-fade-in">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">Earnings Potential:</h4>
                    <p className="text-lg font-bold text-blue-700 animate-pulse">{partner.earnings}</p>
                  </div>

                  {/* Requirements */}
                  <div className="mb-5">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">Requirements:</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      {partner.requirements.map((req, i) => (
                        <li key={i} className="transition-colors hover:text-blue-600 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>• {req}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-5">
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
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-2.5 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${partner.color} hover:brightness-110 text-white text-sm transform hover:scale-105 animate-bounce-slow`}>
                    Join as {partner.name.split('(')[1].replace(')', '')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

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

                <button className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${partners[activeTier-1].color} hover:brightness-110 transform hover:scale-105 transition-all duration-300 animate-pulse`}>
                  Join as {partners[activeTier-1].name.split('(')[1].replace(')', '')}
                </button>
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