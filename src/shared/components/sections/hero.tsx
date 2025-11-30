"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SearchBar from "@/shared/components/ui/search-bar";

const carouselSlides = [
  {
    image: "/images/hero-1.jpg",
    title: "Celebrate in venues",
    subtitle: "big and small",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Discover perfect",
    subtitle: "event spaces",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Book your dream",
    subtitle: "venue today",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 300);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image with Carousel */}
      <div className="absolute inset-0 z-0">
        {carouselSlides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`} >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pb-16 sm:pb-24 md:pb-32 pt-24">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-semibold text-center leading-tight mb-8 sm:mb-10 md:mb-12">
          {carouselSlides[currentSlide].title}
          <br />
          {carouselSlides[currentSlide].subtitle}
        </h1>

        {/* Search Card - hide with opacity when scrolled (only on md screens and above) */}
        <div className={`transition-opacity duration-500 w-full flex justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 ${isScrolled ? 'md:opacity-0 md:pointer-events-none' : 'opacity-100'}`}>
          <SearchBar />
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-7 bg-star" : "w-2 bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </main>
    </section>
  );
}
