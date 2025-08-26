// components/TestimonialCarousel.jsx
"use client"
import { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "NexTech Solutions",
      content: "This service completely transformed our customer engagement. We've seen a 45% increase in satisfaction scores since implementation.",
      rating: 5,
      category: "marketing",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "DataFlow Inc",
      content: "The technical support team is exceptional. They helped us integrate seamlessly with our existing infrastructure.",
      rating: 4,
      category: "technical",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "E-commerce Manager",
      company: "StyleHub",
      content: "Our conversion rates increased by 32% in the first month. This is exactly what our online store needed.",
      rating: 5,
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Startup Founder",
      company: "GreenGrowth",
      content: "As a small business, we needed an affordable solution that could scale with us. This delivered on all fronts.",
      rating: 5,
      category: "startup",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
      id: 5,
      name: "Emily Thompson",
      role: "Product Manager",
      company: "CloudWorks",
      content: "The analytics dashboard provides insights we didn't even know were possible. It's revolutionized our decision-making process.",
      rating: 4,
      category: "technical",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "CEO",
      company: "Wilson & Associates",
      content: "Implementation was smooth and the results were immediate. Our team adapted to the new system with minimal training.",
      rating: 5,
      category: "leadership",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Testimonials' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'technical', name: 'Technical' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'startup', name: 'Startups' },
    { id: 'leadership', name: 'Leadership' }
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory);

  // Auto-play carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying && filteredTestimonials.length > 1) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, filteredTestimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why businesses choose our solution and how it's helping them achieve their goals.
          </p>
        </div>

        {/* Category Filters */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentSlide(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-indigo-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div> */}

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
          {/* Carousel Track */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {filteredTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="flex-shrink-0 w-full">
                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-48 h-48 rounded-full object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                        <span className="text-2xl">”</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <div className="flex mb-4 text-xl">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                    <div>
                      <h3 className="font-semibold text-2xl text-gray-800">{testimonial.name}</h3>
                      <p className="text-lg text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {filteredTestimonials.length > 1 && (
            <>
              <button
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-indigo-50 transition-colors"
              >
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-indigo-50 transition-colors"
              >
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Indicators */}
          {filteredTestimonials.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-xl font-medium text-gray-700">No testimonials found</h3>
            <p className="mt-2 text-gray-500">We don't have any testimonials in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialCarousel;