"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    remark: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.interest) newErrors.interest = "Please select an option";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({...errors, [name]: ""});
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form Submitted:", formData);
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "",
        remark: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00509D] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00509D] opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="w-full max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full p-6 md:p-10 rounded-2xl shadow-2xl bg-white border border-blue-100 relative overflow-hidden"
        >
          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00509D] to-blue-400"></div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 text-[#00509D]">Get In Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Have questions or want to discuss opportunities? Fill out the form below and our team will get back to you shortly.</p>
          </div>
          
          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-200 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Thank you! We will contact you soon.
            </motion.div>
          )}
          
          {submitStatus === "error" && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-200 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              Sorry, there was an error submitting your form. Please try again.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`p-4 border rounded-lg w-full focus:ring-2 focus:ring-[#00509D] focus:border-[#00509D] focus:outline-none transition-all pl-12 ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div className="absolute inset-y-0 left-0 top-7 flex items-center pl-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                {errors.firstName && <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div className="relative">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`p-4 border rounded-lg w-full focus:ring-2 focus:ring-[#00509D] focus:border-[#00509D] focus:outline-none transition-all pl-12 ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div className="absolute inset-y-0 left-0 top-7 flex items-center pl-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                {errors.lastName && <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`p-4 border rounded-lg w-full focus:ring-2 focus:ring-[#00509D] focus:border-[#00509D] focus:outline-none transition-all pl-12 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              <div className="absolute inset-y-0 left-0 top-7 flex items-center pl-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="relative">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                className={`p-4 border rounded-lg w-full focus:ring-2 focus:ring-[#00509D] focus:border-[#00509D] focus:outline-none transition-all pl-12 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              <div className="absolute inset-y-0 left-0 top-7 flex items-center pl-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Interested In */}
            <div>
              <p className="font-medium text-gray-700 mb-2">Interested in:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className={`flex items-center gap-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                  formData.interest === "Franchise Partner" 
                    ? "border-[#00509D] bg-blue-50" 
                    : "border-gray-300 hover:bg-blue-50"
                }`}>
                  <input
                    type="radio"
                    name="interest"
                    value="Franchise Partner"
                    checked={formData.interest === "Franchise Partner"}
                    onChange={handleChange}
                    className="text-[#00509D] focus:ring-[#00509D] w-5 h-5"
                  />
                  <div>
                    <span className="text-gray-700 font-medium">Franchise Partner</span>
                    <p className="text-gray-500 text-sm mt-1">Join our network as a franchise owner</p>
                  </div>
                </label>
                <label className={`flex items-center gap-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                  formData.interest === "Service Provider" 
                    ? "border-[#00509D] bg-blue-50" 
                    : "border-gray-300 hover:bg-blue-50"
                }`}>
                  <input
                    type="radio"
                    name="interest"
                    value="Service Provider"
                    checked={formData.interest === "Service Provider"}
                    onChange={handleChange}
                    className="text-[#00509D] focus:ring-[#00509D] w-5 h-5"
                  />
                  <div>
                    <span className="text-gray-700 font-medium">Service Provider</span>
                    <p className="text-gray-500 text-sm mt-1">Partner with us to provide services</p>
                  </div>
                </label>
              </div>
              {errors.interest && <p className="mt-1 text-red-500 text-sm">{errors.interest}</p>}
            </div>

            {/* Remark */}
            <div className="relative">
              <label htmlFor="remark" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="remark"
                name="remark"
                placeholder="Tell us more about your inquiry..."
                value={formData.remark}
                onChange={handleChange}
                rows="4"
                className="p-4 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#00509D] focus:border-[#00509D] focus:outline-none transition-all pl-12"
              ></textarea>
              <div className="absolute top-10 left-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#00509D] to-blue-600 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Send Message
                </>
              )}
            </motion.button>
          </form>
          
          <div className="mt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row items-center justify-center gap-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>We value your privacy</span>
            </div>
            <span className="hidden md:block">•</span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Your information is secure</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}