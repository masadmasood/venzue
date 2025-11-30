"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/shared/components/ui/carousel";

interface Vendor {
  id: string;
  title: string;
  image: string;
}

const vendors: Vendor[] = [
  {
    id: "1",
    title: "Caterers",
    image: "/images/category-1.png",
  },
  {
    id: "2",
    title: "Decorators",
    image: "/images/category-2.png",
  },
  {
    id: "3",
    title: "Photographers",
    image: "/images/category-3.png",
  },
  {
    id: "4",
    title: "Entertainment",
    image: "/images/category-4.png",
  },
  {
    id: "5",
    title: "Caterers",
    image: "/images/category-1.png",
  },
  {
    id: "6",
    title: "Decorators",
    image: "/images/category-2.png",
  },
  {
    id: "7",
    title: "Photographers",
    image: "/images/category-3.png",
  },
  {
    id: "8",
    title: "Entertainment",
    image: "/images/category-4.png",
  },
];

export default function TrustedVendors() {
  return (
    <section  className="py-8 sm:py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#FDF1D2]">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-black mb-3 sm:mb-4">
            Complete Your Event with our Trusted Vendors
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-4xl mx-auto px-4">
            Venues are just the beginning. Discover caterers, decorators, photographers, entertainment, and more all in one place, ready to bring your event project to life.
          </p>
        </div>

        {/* Vendors Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6">
            {vendors.map((vendor) => (
              <CarouselItem
                key={vendor.id}
                className="pl-2 sm:pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden group cursor-pointer">
                  {/* Image */}
                  <Image
                    src={vendor.image}
                    alt={vendor.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Dark Gradient Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%)",
                    }}
                  />

                  {/* Title */}
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-semibold text-white">
                      {vendor.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0 rounded-full border-0 bg-white hover:bg-black hover:text-white text-black size-10" />
            <CarouselNext className="static translate-y-0 rounded-full border-0 bg-white hover:bg-black hover:text-white text-black size-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
