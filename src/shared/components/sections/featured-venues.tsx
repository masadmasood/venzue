"use client";

import Image from "next/image";
import { Heart, Share2, Users, Maximize2, Car, MapPin } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/shared/components/ui/carousel";

interface Venue {
  id: string;
  title: string;
  location: string;
  image: string;
  verified: boolean;
  capacity: string;
  area: string;
  parking: boolean;
  amenities: number;
  pricePerHour: number;
}

const venues: Venue[] = [
  {
    id: "1",
    title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
    location: "London, SW1",
    image: "/images/category-1.png",
    verified: true,
    capacity: "300+",
    area: "2,000 sq ft",
    parking: true,
    amenities: 25,
    pricePerHour: 50,
  },
  {
    id: "2",
    title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
    location: "London, SW1",
    image: "/images/category-2.png",
    verified: true,
    capacity: "300+",
    area: "2,000 sq ft",
    parking: true,
    amenities: 25,
    pricePerHour: 50,
  },
  {
    id: "3",
    title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
    location: "London, SW1",
    image: "/images/category-3.png",
    verified: true,
    capacity: "300+",
    area: "2,000 sq ft",
    parking: true,
    amenities: 25,
    pricePerHour: 50,
  },
  {
    id: "4",
    title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
    location: "London, SW1",
    image: "/images/category-4.png",
    verified: true,
    capacity: "300+",
    area: "2,000 sq ft",
    parking: true,
    amenities: 25,
    pricePerHour: 50,
  },
  {
    id: "5",
    title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
    location: "London, SW1",
    image: "/images/category-1.png",
    verified: true,
    capacity: "300+",
    area: "2,000 sq ft",
    parking: true,
    amenities: 25,
    pricePerHour: 50,
  },
  {
    id: "6",
    title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
    location: "London, SW1",
    image: "/images/category-2.png",
    verified: true,
    capacity: "300+",
    area: "2,000 sq ft",
    parking: true,
    amenities: 25,
    pricePerHour: 50,
  },
  {
    id: "7",
    title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
    location: "London, SW1",
    image: "/images/category-3.png",
    verified: true,
    capacity: "300+",
    area: "2,000 sq ft",
    parking: true,
    amenities: 25,
    pricePerHour: 50,
  },
  {
    id: "8",
    title: "High-Spec Room in Trendy Home Clapham/ Stockwell",
    location: "London, SW1",
    image: "/images/category-4.png",
    verified: true,
    capacity: "300+",
    area: "2,000 sq ft",
    parking: true,
    amenities: 25,
    pricePerHour: 50,
  },
];

const categories = [
  { id: "rooftop", label: "ROOFTOP" },
  { id: "gallery", label: "GALLERY", active: true },
  { id: "restaurant", label: "RESTAURANT" },
  { id: "outdoor", label: "OUTDOOR" },
  { id: "studio", label: "STUDIO" },
  { id: "terrace", label: "TERRACE" },
  { id: "ballroom", label: "BALLROOM" },
];

export default function FeaturedVenues() {
  return (
    <section 
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #1a1a1a 0%, #000000 100%)'
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/features.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-20 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-white mb-4 sm:mb-6">
            Featured Venues
          </h2>

          {/* Category Tabs */}
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${category.active
                  ? "bg-primary text-white"
                  : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Venues Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6">
            {venues.map((venue) => (
              <CarouselItem
                key={venue.id}
                className="pl-2 sm:pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-4/3">
                    <Image
                      src={venue.image}
                      alt={venue.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Verified Badge */}
                    {venue.verified && (
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        <span className="text-xs font-medium text-white capitalize">
                          Verified
                        </span>
                      </div>
                    )}

                    {/* Action Icons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="w-9 h-9 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors">
                        <Share2 className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-9 h-9 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors">
                        <Heart className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Title & Location */}
                    <h3 className="text-base font-semibold text-black mb-1 line-clamp-2">
                      {venue.title}
                    </h3>
                    <p className="text-xs text-primary mb-4 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {venue.location}
                    </p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 text-xs text-black mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-2 rounded-full">
                        <Users className="w-4 h-4 text-gray-600" />
                        <span className="text-xs text-gray-600">{venue.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-2 rounded-full">
                        <Maximize2 className="w-4 h-4 text-gray-600" />
                        <span className="text-xs text-gray-600">{venue.area}</span>
                      </div>
                      {venue.parking && (
                        <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-2 rounded-full">
                          <Car className="w-4 h-4 text-gray-600" />
                          <span className="text-xs text-gray-600">Free parking</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-2 rounded-full">
                        <span className="text-xs text-gray-600">+{venue.amenities} more</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-black">From </span>
                        <span className="text-base font-semibold text-black">
                          ${venue.pricePerHour}/hour
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="text-primary border-primary hover:bg-primary hover:text-white px-4 py-2 text-xs"
                      >
                        View details
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0 rounded-full border-2 border-white bg-transparent hover:bg-white text-white size-10" />
            <CarouselNext className="static translate-y-0 rounded-full border-2 border-white bg-transparent hover:bg-white text-white size-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
