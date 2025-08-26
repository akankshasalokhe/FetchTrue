'use client';

import { useState } from 'react';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('onboarding');

  const servicesData = {
    onboarding: {
      title: "Onboarding Services",
      services: [
        {
          name: "Employee Onboarding",
          description: "Streamlined process for integrating new hires into your organization. Comprehensive documentation and orientation programs. Ensuring compliance with company policies and regulations. Setting up for success from day one."
        },
        {
          name: "Investor Onboarding",
          description: "Efficient onboarding process for investors with proper documentation. Secure verification and compliance procedures. Transparent communication channels and reporting. Building strong investor relationships from the start."
        },
        {
          name: "Merchant Onboarding",
          description: "Simplified merchant account setup and verification process. Payment gateway integration and technical support. Compliance with financial regulations and security standards. Ongoing relationship management and support."
        },
        {
          name: "Customer Onboarding",
          description: "Seamless customer acquisition and account setup process. Personalized welcome experiences and product education. Support systems for customer questions and issues. Building long-term customer loyalty from the first interaction."
        }
      ]
    },
    business: {
      title: "Business Services",
      services: [
        {
          name: "Industrial Services",
          description: "Comprehensive solutions for industrial operations and manufacturing. Equipment maintenance and operational efficiency consulting. Supply chain optimization and logistics management. Safety compliance and regulatory guidance."
        },
        {
          name: "Agricultural Services",
          description: "Modern solutions for farming and agricultural businesses. Crop management technology and precision agriculture tools. Supply chain and distribution network optimization. Sustainable practice implementation and certification."
        },
        {
          name: "Transportation Services",
          description: "Logistics and transportation management solutions. Fleet optimization and route planning services. Compliance with transportation regulations and safety standards. Technology integration for real-time tracking and management."
        },
        {
          name: "Food Business Services",
          description: "Complete solutions for food-related businesses. Quality control and safety compliance assistance. Supply chain management and vendor relations. Marketing and distribution channel development."
        }
      ]
    },
    marketing: {
      title: "Branding & Marketing",
      services: [
        {
          name: "Design Studio",
          description: "Creative design solutions for branding and visual identity. Logo design, brand guidelines, and marketing collateral. UI/UX design for digital products and platforms. Professional graphic design services for all media."
        },
        {
          name: "Digital Marketing",
          description: "Comprehensive digital marketing strategies and campaigns. SEO optimization and content marketing services. Social media management and advertising campaigns. Analytics and performance tracking for ROI measurement."
        },
        {
          name: "Branding Services",
          description: "Strategic brand development and positioning. Market research and competitive analysis. Brand voice and messaging development. Consistent brand experience across all touchpoints."
        },
        {
          name: "Video Lab",
          description: "Professional video production and editing services. Corporate videos, product demos, and promotional content. Animation and motion graphics for engaging storytelling. Live streaming and virtual event production capabilities."
        }
      ]
    },
    legal: {
      title: "Legal Services",
      services: [
        {
          name: "Registration Services",
          description: "Assistance with business registration and licensing requirements. Entity formation guidance (LLC, Corporation, Partnership). Trademark and intellectual property registration. Compliance with local, state, and federal regulations."
        },
        {
          name: "Taxation & Returns",
          description: "Comprehensive tax planning and preparation services. Business and individual tax return filing. Tax optimization strategies and compliance review. Representation in case of audits or disputes."
        },
        {
          name: "Audit & Compliances",
          description: "Internal and statutory audit services. Regulatory compliance assessment and implementation. Risk management and internal control evaluation. Compliance reporting and documentation services."
        },
        {
          name: "Legal Consultancy",
          description: "Expert legal advice for business and personal matters. Contract review and drafting services. Dispute resolution and litigation support. Ongoing legal counsel for risk mitigation."
        }
      ]
    },
    home: {
      title: "Home Services",
      services: [
        {
          name: "Cleaning Services",
          description: "Professional residential and commercial cleaning services. Regular maintenance and deep cleaning options. Eco-friendly cleaning products and methods. Customized cleaning plans to suit specific needs."
        },
        {
          name: "Security Services",
          description: "Home security system installation and monitoring. Access control systems and surveillance solutions. 24/7 monitoring services and emergency response. Smart home security integration and automation."
        },
        {
          name: "Moving & Relocation",
          description: "Stress-free moving and relocation services. Packing, loading, transportation, and unpacking assistance. Special handling for fragile and valuable items. Storage solutions and inventory management."
        },
        {
          name: "Electrician Services",
          description: "Professional electrical installation and repair services. Lighting solutions and electrical system upgrades. Safety inspections and code compliance. Emergency electrical repair and troubleshooting."
        }
      ]
    },
    it: {
      title: "IT Services",
      services: [
        {
          name: "Computer Services",
          description: "Hardware and software installation and configuration. Troubleshooting and technical support services. System upgrades and performance optimization. Data backup and recovery solutions."
        },
        {
          name: "Website Development",
          description: "Custom website design and development services. Responsive design for all devices and platforms. E-commerce solutions and content management systems. SEO-friendly architecture and performance optimization."
        },
        {
          name: "Cyber Security",
          description: "Comprehensive cybersecurity assessment and solutions. Network security and vulnerability testing. Data protection and encryption services. Incident response and security awareness training."
        },
        {
          name: "Mobile App Development",
          description: "Native and cross-platform mobile application development. User-centered design and intuitive interfaces. Integration with existing systems and databases. Ongoing maintenance and update services."
        }
      ]
    },
    education: {
      title: "Education Services",
      services: [
        {
          name: "Personal Development",
          description: "Courses and coaching for personal growth and skills development. Leadership training and communication skills workshops. Career advancement and professional certification programs. Customized learning paths for individual goals."
        },
        {
          name: "IT & Software Training",
          description: "Comprehensive technology training programs. Coding bootcamps and software development courses. Certification preparation for industry-standard credentials. Hands-on learning with real-world projects."
        },
        {
          name: "Business Education",
          description: "Entrepreneurship and business management courses. Financial literacy and investment education programs. Marketing strategy and digital marketing training. Professional development for organizational growth."
        },
        {
          name: "Health & Fitness Training",
          description: "Certified fitness instruction and wellness programs. Nutritional guidance and healthy lifestyle education. Personalized workout plans and goal setting. Group classes and individual training sessions."
        }
      ]
    },
    finance: {
      title: "Finance Services",
      services: [
        {
          name: "Banking Services",
          description: "Business and personal banking solutions. Account management and financial product guidance. Loan and credit facility assistance. Digital banking integration and support."
        },
        {
          name: "Financial Planning & Analysis",
          description: "Comprehensive financial planning for individuals and businesses. Investment strategy and portfolio management. Retirement planning and wealth preservation strategies. Risk assessment and financial goal setting."
        },
        {
          name: "Corporate Finance",
          description: "Capital structure optimization and fundraising assistance. Mergers and acquisitions advisory services. Financial modeling and valuation analysis. Strategic financial planning for business growth."
        },
        {
          name: "Accounting Services",
          description: "Bookkeeping and financial record management. Financial statement preparation and analysis. Payroll processing and management. Budgeting and cash flow forecasting services."
        }
      ]
    },
    franchise: {
      title: "Franchise Services",
      services: [
        {
          name: "Real Estate Franchise",
          description: "Turnkey franchise opportunities in real estate sector. Comprehensive training and ongoing support programs. Marketing materials and lead generation systems. Established brand recognition and operational frameworks."
        },
        {
          name: "Food & Beverage Franchise",
          description: "Successful restaurant and food service franchise models. Site selection and facility setup assistance. Supply chain management and inventory systems. Operational training and quality control standards."
        },
        {
          name: "Fashion Franchise",
          description: "Retail fashion franchise opportunities with recognized brands. Store design and visual merchandising support. Inventory management and buying assistance. Marketing campaigns and brand promotion strategies."
        },
        {
          name: "Automotive Franchise",
          description: "Automobile service and retail franchise opportunities. Technical training and equipment specifications. Parts sourcing and inventory management systems. Marketing support and customer acquisition strategies."
        }
      ]
    }
  };

  return (
    <div id="services" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Professional Services
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-600">
            Comprehensive solutions for your business and personal needs
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(servicesData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={` px-5 py-3 rounded-full  text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-100 shadow-md'
              }`}
            >
              {servicesData[category].title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesData[activeCategory].services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to get started with our services?
            </h2>
            <p className="mt-4 text-blue-100 max-w-3xl mx-auto text-lg">
              Contact us today to discuss how we can help meet your specific needs and requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
                Contact Our Team
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-300">
                View All Services
              </button>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}