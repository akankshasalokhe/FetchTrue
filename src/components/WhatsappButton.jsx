// app/components/WhatsAppButton.jsx
"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [scrolled, setScrolled] = useState(false);

  // ✅ Replace with your WhatsApp number (no + sign, only country code + number)
  const whatsappNumber = "919309517500"; 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent("Hello! I need help.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      title="Chat on WhatsApp"
      className={`fixed z-50 bottom-6 right-10 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110 ${
        scrolled ? "opacity-100" : "opacity-80"
      }`}
    >
      <FaWhatsapp size={28} />
    </div>
  );
}
