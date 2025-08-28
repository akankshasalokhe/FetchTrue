// pages/contact.js
"use client"

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaCity, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    city: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        city: '',
        message: ''
      });
    }, 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120
      }
    }
  };

  return (
    <div id='contact' className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Contact Us | FetchTrue</title>
        <meta name="description" content="Get in touch with FetchTrue" />
      </Head>

      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to learn more about our services? Reach out to our team and we'll get back to you shortly.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-2/3"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="flex items-center justify-center">
                    <FaPaperPlane className="mr-2 text-green-500" />
                    <span className="font-medium">Thank you for your message! We'll get back to you soon.</span>
                  </div>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 py-3 px-4 transition duration-300 ease-in-out"
                        placeholder="Your first name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 py-3 px-4 transition duration-300 ease-in-out"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 py-3 px-4 transition duration-300 ease-in-out"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 py-3 px-4 transition duration-300 ease-in-out"
                        placeholder="Your mobile number"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaCity className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-3 px-4 transition duration-300 ease-in-out"
                      placeholder="Your city"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 py-3 px-4 transition duration-300 ease-in-out"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="w-full lg:w-1/3"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl shadow-xl p-6 md:p-8 h-full">
              <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className=" bg-opacity-20 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Address</h3>
                    <p className="text-indigo-100">Amanora Mall,Hadpasar<br />Pune, Maharashtra 400001</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className=" bg-opacity-20 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaPhoneAlt className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p className="text-indigo-100">+91 98765 43210<br />+91 81234 56789</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-opacity-20 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaEnvelopeOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-indigo-100">info@fetchtrue.com<br />support@fetchtrue.com</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-indigo-400">
                <h3 className="font-medium text-lg mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-indigo-100">Monday - Saturday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  {/* 
                   */}
                  <div className="flex justify-between">
                    <span className="text-indigo-100">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}