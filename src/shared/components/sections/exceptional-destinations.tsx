"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/shared/components/ui/carousel";

interface Destination {
  id: string;
  city: string;
  country: string;
  image: string;
  venueCount: number;
  energyType: string;
  venueType: string;
  popularFor: string;
  pricePerHour: number;
}

const destinations: Destination[] = [
  {
    id: "1",
    city: "New York",
    country: "USA",
    image: "/images/category-1.png",
    venueCount: 94,
    energyType: "Coastal energy, modern Venue",
    venueType: "modern Venue",
    popularFor: "Rooftop",
    pricePerHour: 50,
  },
  {
    id: "2",
    city: "London",
    country: "UK",
    image: "/images/category-2.png",
    venueCount: 108,
    energyType: "Coastal energy, modern Venue",
    venueType: "modern Venue",
    popularFor: "Rooftop",
    pricePerHour: 25,
  },
  {
    id: "3",
    city: "Dubai",
    country: "UAE",
    image: "/images/category-3.png",
    venueCount: 17,
    energyType: "Coastal energy, modern Venue",
    venueType: "modern Venue",
    popularFor: "Rooftop",
    pricePerHour: 50,
  },
  {
    id: "4",
    city: "New York",
    country: "USA",
    image: "/images/category-1.png",
    venueCount: 94,
    energyType: "Coastal energy, modern Venue",
    venueType: "modern Venue",
    popularFor: "Rooftop",
    pricePerHour: 50,
  },
  {
    id: "5",
    city: "London",
    country: "UK",
    image: "/images/category-2.png",
    venueCount: 108,
    energyType: "Coastal energy, modern Venue",
    venueType: "modern Venue",
    popularFor: "Rooftop",
    pricePerHour: 25,
  },
  {
    id: "6",
    city: "Dubai",
    country: "UAE",
    image: "/images/category-3.png",
    venueCount: 17,
    energyType: "Coastal energy, modern Venue",
    venueType: "modern Venue",
    popularFor: "Rooftop",
    pricePerHour: 50,
  },
];

export default function ExceptionalDestinations() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-black mb-3 sm:mb-4">
            Discover Exceptional Destinations Across the Region
          </h2>
          <p className="text-xl text-black/80 max-w-4xl mx-auto">
            From cosmopolitan cityscapes to cultural treasures, explore where celebrations come alive with local flavor.
          </p>
        </div>

        {/* Destinations Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6">
            {destinations.map((destination) => (
              <CarouselItem
                key={destination.id}
                className="pl-2 sm:pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="relative rounded-[20px] overflow-hidden group cursor-pointer min-h-[350px] sm:min-h-[400px] md:min-h-[500px]">
                  {/* Image */}
                  <div className="relative w-full h-full min-h-[350px] sm:min-h-[400px] md:min-h-[500px]">
                    <Image
                      src={destination.image}
                      alt={`${destination.city}, ${destination.country}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Venue Count Badge */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <span className="text-xs font-medium text-white">
                        {destination.venueCount} Venues
                      </span>
                    </div>

                    {/* Dark Gradient Overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)",
                      }}
                    />

                    {/* Content Over Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                      {/* City Name */}
                      <h3 className="text-xl sm:text-2xl md:text-[30px] font-semibold text-white mb-2">
                        {destination.city}, {destination.country}
                      </h3>
                      
                      {/* Energy Type */}
                      <p className="text-base font-normal text-white mb-2">
                        {destination.energyType}
                      </p>

                      {/* Popular For and Price */}
                      <div className="flex items-center justify-between">
                        <p className="text-base text-white">
                          <span>Popular:</span> {destination.popularFor}
                        </p>
                        <span className="text-base font-bold text-white">
                          From ${destination.pricePerHour} per hour
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0 rounded-full border-0 bg-black/10 hover:bg-black hover:text-white text-black size-10" />
            <CarouselNext className="static translate-y-0 rounded-full border-0 bg-black/10 hover:bg-black hover:text-white text-black size-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
