"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

interface VenueCategory {
  id: string;
  title: string;
  venueCount: number;
  image: string;
}

const venueCategories: VenueCategory[] = [
  {
    id: "celebration",
    title: "Celebration Venues",
    venueCount: 37,
    image: "/images/category-1.png",
  },
  {
    id: "private-party",
    title: "Private Party Venues",
    venueCount: 37,
    image: "/images/category-2.png",
  },
  {
    id: "corporate",
    title: "Corporate Meetings",
    venueCount: 37,
    image: "/images/category-3.png",
  },
  {
    id: "creative",
    title: "Creative Studios",
    venueCount: 37,
    image: "/images/category-4.png",
  },
  {
    id: "wedding",
    title: "Wedding Venues",
    venueCount: 37,
    image: "/images/category-1.png",
  },
  {
    id: "conference",
    title: "Conference Halls",
    venueCount: 37,
    image: "/images/category-2.png",
  },
  {
    id: "outdoor",
    title: "Outdoor Spaces",
    venueCount: 37,
    image: "/images/category-3.png",
  },
  {
    id: "banquet",
    title: "Banquet Halls",
    venueCount: 37,
    image: "/images/category-4.png",
  },
];

export default function VenueCategories() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-black mb-3 sm:mb-4">
            Find The Best Venue For Any Occasion
          </h2>
          <p className="text-black lg:max-w-7xl text-base sm:text-lg md:text-xl mx-auto px-4">
            Explore venues by category, from timeless ballrooms and rooftops
            with a view to modern studios and outdoor gardens, discover spaces
            designed to inspire unforgettable experiences.
          </p>
        </div>

        {/* Categories Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {venueCategories.map((category) => (
              <CarouselItem key={category.id} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/4" >
                <div className="group cursor-pointer">
                  <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
                    {/* Image */}
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2), transparent)", }} />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <span className="text-xs font-medium text-white capitalize">
                        {category.venueCount} Venues
                      </span>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3>
                        {category.title.split(" ").map((word, index) => (
                          <span
                            key={index}
                            className="text-3xl font-semibold text-white leading-[30px]"
                          >
                            {word}
                            {index === 0 && <br />}
                            {index > 0 && " "}
                          </span>
                        ))}
                      </h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0 rounded-full border-0 bg-black/10 hover:bg-black hover:text-white size-10" />
            <CarouselNext className="static translate-y-0 rounded-full border-0 bg-black/10 hover:bg-black hover:text-white size-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
