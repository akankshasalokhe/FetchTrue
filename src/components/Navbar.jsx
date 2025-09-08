"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Growth Partner", href: "#growth-partner" },
  { label: "Features", href: "#features" },
  { label: "Blog", href: "#blog" }
  // { label: "Franchise", href: "#franchise" },
  // { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-gradient-to-r from-[#003f7f] via-[#00509D] to-[#007bbd] shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              FetchTrue
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
            {/* <Link href="/blog" className="text-base font-medium text-black hover:text-blue-600 transition">
              Blog
            </Link> */}
            <Link
              href="#contact"
              className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: mobileOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="mx-4 mt-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {link.label}
              </Link>
            ))}

             {/* <Link href="/blog" className="rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Blog
            </Link> */}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-base font-semibold text-white hover:bg-blue-700"
            >
              Contact Us <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
