"use client"

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Head from "next/head";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Static testimonial data
  const testimonials = [
    {
      para: "This service exceeded my expectations. The team was professional and delivered results faster than I anticipated. I would highly recommend them to anyone looking for quality work.",
      src: "/api/placeholder/100/100",
      title: "John Smith",
      text1: "New York, USA",
      rating: 4.5
    },
    {
      para: "I've been using this service for over a year now and they consistently deliver excellent results. Their attention to detail is remarkable and their customer support is top-notch.",
      src: "/api/placeholder/100/100",
      title: "Sarah Johnson",
      text1: "London, UK",
      rating: 5
    },
    {
      para: "As a small business owner, finding reliable service providers is crucial. This company has been a game-changer for my business. Their solutions are innovative and effective.",
      src: "/api/placeholder/100/100",
      title: "Michael Chen",
      text1: "Toronto, Canada",
      rating: 4
    },
    {
      para: "The quality of work is exceptional. They understood exactly what I needed and delivered beyond my expectations. Will definitely work with them again in the future.",
      src: "/api/placeholder/100/100",
      title: "Emma Wilson",
      text1: "Sydney, Australia",
      rating: 4.5
    },
    {
      para: "I was hesitant at first, but I'm so glad I decided to try this service. The results speak for themselves. My business has grown significantly since working with them.",
      src: "/api/placeholder/100/100",
      title: "David Brown",
      text1: "Berlin, Germany",
      rating: 3.5
    },
    {
      para: "Prompt service, excellent communication, and outstanding results. What more could you ask for? I'm thoroughly impressed and will be a returning customer.",
      src: "/api/placeholder/100/100",
      title: "Lisa Garcia",
      text1: "Madrid, Spain",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-blue-800 text-lg" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-blue-800 text-lg" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300 text-lg" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-white py-8 px-20">
      <Head>
        <title>Testimonials</title>
        <meta name="description" content="What our clients say about our services" />
      </Head>
      
      <div className="container mx-auto px-4">
        <h4 className="text-blue-600 pt-8 pb-2 text-center text-lg font-semibold">----- Testimonial -----</h4>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Clients Say</h1>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.testimonial-pagination' }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex justify-center p-2 ">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm flex flex-col items-center text-center transition-transform duration-300 hover:shadow-xl">
                  {/* User Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mt-6 border-4 border-blue-100">
                    <img 
                      src={testi.src} 
                      alt={testi.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">{testi.title}</h3>

                  {/* Location */}
                  <p className="text-gray-500 text-sm mt-1">{testi.text1}</p>

                  {/* Star Rating */}
                  <div className="flex mb-4 mt-2">
                    {renderStars(testi.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <div className="bg-blue-50 mt-2 rounded-xl w-full p-4 flex-grow">
                    <p className="text-gray-700 italic">"{testi.para}"</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-4">
          <button ref={prevRef} className="mx-2 p-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
            <FaArrowLeft />
          </button>
          <button ref={nextRef} className="mx-2 p-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
            <FaArrowRight />
          </button>
        </div>
        
        {/* Custom pagination */}
        <div className="testimonial-pagination flex justify-center mt-6 space-x-2" />
      </div>
    </div>
  );
}

export default Testimonial;