"use client";
import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function Footer() {
  const footerData = {
    companyName: "FetchTrue",
    description:
      "Welcome to FetchTrue Group! We are dedicated to helping you build a secure financial future and make smart investment decisions. Join us on the path to financial success!",
    address:
      "Office no.307, 3rd Floor, Amanora Chamber, Amanora Mall, Hadapsar, Pune- 411028",
    email: "info@fetchtrue.com",
    phone: "+91 9309517500",
    website: "www.fetchtrue.com",
    socialLinks: [
      { type: "facebook", link: "https://www.facebook.com/share/1BXEeQnmYF/" },
      {
        type: "instagram",
        link: "https://www.instagram.com/fetchtrue?utm_source=qr&igsh=dzl1NTJ1c2Fxcnpx",
      },
      { type: "linkedin", link: "https://www.linkedin.com/company/fetchtrue/" },
      { type: "whatsapp", link: "https://wa.me/919309517500" },
      { type: "youtube", link: "https://www.youtube.com/@FetchTrue" },
      {
        type: "playstore",
        link: "https://play.google.com/",
        image:
          "https://i.pinimg.com/736x/44/2b/18/442b1839d663a7ffe73828a6ba28ec10.jpg",
      },
      {
        type: "appstore",
        link: "https://apple.com/app-store/",
        image:
          "https://i.pinimg.com/1200x/20/8e/c3/208ec34130feffa6c2905e9c3575ae8c.jpg",
      },
    ],
  };

  const socialIcons = {
    facebook: <FaFacebookF className="text-[#1877F2]" />,
    instagram: <FaInstagram className="text-[#e44095]" />,
    linkedin: <FaLinkedinIn className="text-[#0A66C2]" />,
    whatsapp: <FaWhatsapp className="text-[#25D366]" />,
    youtube: <FaYoutube className="text-[#FF0000]" />,
  };

  const renderSocialIcons = footerData?.socialLinks?.filter((link) =>
    ["facebook", "instagram", "linkedin", "whatsapp", "youtube"].includes(
      link.type
    )
  );

  const renderDownloadLinks = footerData?.socialLinks?.filter((link) =>
    ["playstore", "appstore"].includes(link.type)
  );

  return (
    <footer className="text-white bg-gradient-to-r from-[#003f7f] via-[#00509D] to-[#007bbd]">
  {/* Container */}
  <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
    
    {/* Company Info */}
    <div>
      <h1 className="text-2xl font-extrabold mb-3">{footerData?.companyName}</h1>
      <p className="mb-4 leading-relaxed">{footerData?.description}</p>
      <h4 className="font-semibold mb-3">Our Social</h4>
      <div className="flex flex-wrap gap-4 text-2xl">
        {renderSocialIcons?.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            {socialIcons[item.type]}
          </a>
        ))}
      </div>
    </div>

    {/* Official Info */}
    <div>
      <h4 className="font-bold mb-5">Official Info:</h4>
      <p className="mb-3">{footerData?.address}</p>
      <Link href={`mailto:${footerData?.email}`} className="mb-2 flex items-center gap-2">
        <FiMail /> {footerData?.email}
      </Link>
      <Link href={`tel:+${footerData?.phone}`} className="mb-2 flex items-center gap-2">
        <FaPhoneAlt /> {footerData?.phone}
      </Link>
      {/* <p className="mb-2 flex items-center gap-2">
        <TbWorld /> {footerData?.website}
      </p> */}
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="font-bold mb-4">Quick Links</h4>
      <ul className="space-y-4">
  <li>
    <Link href="/privacypolicy" className="flex items-center gap-2 hover:underline">
      <MdOutlineKeyboardDoubleArrowRight /> Privacy Policy
    </Link>
  </li>
  <li>
    <Link href="/returnpolicy" className="flex items-center gap-2 hover:underline">
      <MdOutlineKeyboardDoubleArrowRight /> Return & Refund Policy
    </Link>
  </li>
  <li>
    <Link href="/termscondition" className="flex items-center gap-2 hover:underline">
      <MdOutlineKeyboardDoubleArrowRight /> Terms & Conditions
    </Link>
  </li>
</ul>

    </div>

    {/* Download Section */}
    <div>
      <h4 className="font-bold mb-5">Download</h4>
      <div className="flex flex-col sm:flex-row lg:flex-col gap-5">
        {renderDownloadLinks?.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.image}
              alt={item.type}
              className="w-[150px] sm:w-[140px] hover:opacity-90 transition"
            />
          </a>
        ))}
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="text-center mt-6 border-t border-white/20 pt-4 text-xs sm:text-sm">
    <p>2025 © All rights Reserved | FetchTrue</p>
  </div>
</footer>

  );
}

export default Footer;
