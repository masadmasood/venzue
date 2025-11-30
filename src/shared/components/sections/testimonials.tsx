"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/shared/components/ui/carousel";

const stats = [
  {
    id: 1,
    number: "1,500+",
    label: "Venues Vetted & Approved",
    color: "#FF786A",
  },
  {
    id: 2,
    number: "7,500+",
    label: "Events Successfully Hosted",
    color: "#FF5037",
  },
  {
    id: 3,
    number: "35+",
    label: "Cities Across the Region",
    color: "#FE8B16",
  },
  {
    id: 4,
    number: "4.9★",
    label: "Average Host Rating",
    color: "#FFC332",
  },
];

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Michael Carter",
    rating: 5,
    image: "/images/client-1.png",
  },
  {
    id: 2,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    name: "by Ayesha M.",
    rating: 5,
    image: "/images/client-2.png",
  },
  {
    id: 3,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Michael Carter",
    rating: 5,
    image: "/images/client-1.png",
  },
  {
    id: 4,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    name: "by Ayesha M.",
    rating: 5,
    image: "/images/client-2.png",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #FFF0CD 0%, #FFDBD8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-black mb-3 sm:mb-4">
            Trusted by Event Creators Who Demand Excellence
          </h2>
          <p className="text-base font-normal text-black/80">
            Join thousands of planners and hosts who love our seamless discovery
            and booking experience.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl flex flex-col items-center justify-center text-center py-6 sm:py-0"
              style={{
                backgroundColor: stat.color,
                minHeight: "100px",
                height: "auto",
              }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.number}
              </h3>
              <p className="text-sm font-medium text-white">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 sm:pl-4 basis-full md:basis-1/2"
              >
                <div className="bg-white rounded-3xl flex flex-col sm:flex-row overflow-hidden min-h-[300px]">
                  {/* Client Image */}
                  <div className="shrink-0 w-full sm:w-2/5 h-48 sm:h-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={234}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center p-6 sm:p-8">
                    <p className="text-base text-black mb-6">
                      {testimonial.text}
                    </p>

                    {/* Name */}
                    <p className="text-sm font-semibold text-black mb-2">
                      {testimonial.name}
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-star text-lg">
                          ★
                        </span>
                      ))}
                    </div>
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
