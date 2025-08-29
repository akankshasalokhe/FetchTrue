"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    interested: [],
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.interested.length) newErrors.interested = "Please select at least one interest";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errors[name]) setErrors({ ...errors, [name]: "" });
    setFormData({ ...formData, [name]: value });
  };

  // Handle interests (checkboxes)
  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      let updated = [...prev.interested];
      if (checked) updated.push(value);
      else updated = updated.filter((item) => item !== value);
      return { ...prev, interested: updated };
    });
    if (errors.interested) setErrors({ ...errors, interested: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://landing-page-yclw.vercel.app/api/fcontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        interested: [],
        message: "",
      });
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
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
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00509D] to-blue-400"></div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 text-[#00509D]">Get In Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Have questions or want to discuss opportunities? Fill out the form below and our team will get back to you shortly.</p>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-200 flex items-center">
              Thank you! We will contact you soon.
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-200 flex items-center">
              Sorry, there was an error submitting your form. Please try again.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`p-4 border rounded-lg w-full focus:ring-2 focus:ring-[#00509D] focus:border-[#00509D] focus:outline-none pl-12 ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.firstName && <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`p-4 border rounded-lg w-full focus:ring-2 focus:ring-[#00509D] focus:border-[#00509D] focus:outline-none pl-12 ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.lastName && <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`p-4 border rounded-lg w-full focus:ring-2 focus:ring-[#00509D] focus:border-[#00509D] focus:outline-none pl-12 ${errors.email ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+1 (555) 123-4567"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`p-4 border rounded-lg w-full focus:ring-2 focus:ring-[#00509D] focus:border-[#00509D] focus:outline-none pl-12 ${errors.phoneNumber ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.phoneNumber && <p className="mt-1 text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>

            {/* Interested (checkboxes) */}
            <div>
              <p className="font-medium text-gray-700 mb-2">Interested in:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Franchise Partner", "Service Provider"].map((item) => (
                  <label key={item} className={`flex items-center gap-3 p-4 rounded-lg border transition-colors cursor-pointer ${formData.interested.includes(item) ? "border-[#00509D] bg-blue-50" : "border-gray-300 hover:bg-blue-50"}`}>
                    <input
                      type="checkbox"
                      value={item}
                      checked={formData.interested.includes(item)}
                      onChange={handleInterestChange}
                      className="text-[#00509D] focus:ring-[#00509D] w-5 h-5"
                    />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </label>
                ))}
              </div>
              {errors.interested && <p className="mt-1 text-red-500 text-sm">{errors.interested}</p>}
            </div>

            {/* Message */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                name="message"
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="p-4 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-[#00509D] focus:border-[#00509D] focus:outline-none"
              ></textarea>
              {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#00509D] to-blue-600 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
            >
              {isSubmitting ? "Processing..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
