"use client";

import Image from "next/image";
import { Button } from "@/shared/components/ui/button";

export default function GrowBusiness() {
  return (
    <section className="-mt-12 sm:-mt-16 md:-mt-20 relative z-20 px-4 sm:px-6 lg:px-8">
      <div
        className="relative overflow-hidden mx-auto max-w-7xl rounded-xl sm:rounded-2xl lg:rounded-[20px] px-6 sm:px-10 md:px-12 lg:pl-[60px] lg:pr-[30px] py-6 sm:py-8 lg:py-[30px]"
        style={{
          background: 'linear-gradient(90deg, #FF786A 0%, #FF4F37 50%, #FFC331 100%)',
        }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 sm:gap-8 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 z-10 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-white mb-3 sm:mb-4 leading-tight">
              Grow Your Business with Venuze
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-white mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
              Showcase your services to thousands of event organizers and creators searching for talent like yours.
            </p>
            <Button 
              className="bg-black text-white hover:bg-black/90 rounded-lg font-medium text-sm sm:text-base lg:text-[20px] px-6 sm:px-8 lg:px-[30px] py-3 sm:py-4 lg:py-6"
            >
              Join as a Vendor
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative shrink-0 w-full lg:w-auto self-center lg:self-end -mb-6 sm:-mb-8 lg:-mb-[30px]">
            {/* Decorative Arrow - hidden on mobile */}
            <div className="absolute -translate-x-1/2 -left-14 lg:-translate-x-40 top-20 hidden md:block z-10">
              <Image
                src="/images/arrow.png"
                alt="Arrow"
                width={180}
                height={100}
                className="w-32 md:w-40 lg:w-44 h-auto"
              />
            </div>

            <div className="relative h-32 sm:h-40 md:h-48 lg:h-[200px] w-full">
              <Image
                src="/images/jumbo-img.png"
                alt="Grow Your Business"
                width={400}
                height={200}
                className="h-full w-full lg:w-auto object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
