"use client";

import Image from "next/image";

const steps = [
  {
    id: 1,
    number: "1",
    title: "Search & filter",
    description:
      "Browse our curated collection of venues and event professionals. Use smart filters, high-quality visuals, and authentic reviews to find options that fit your needs, style, and budget.",
  },
  {
    id: 2,
    number: "2",
    title: "Compare & message",
    description:
      "Communicate directly with venue hosts and service providers. Request tailored quotes, discuss requirements, and design every detail of your event or project with confidence.",
  },
  {
    id: 3,
    number: "3",
    title: "Book & add services",
    description:
      "Secure your choices with ease through our protected booking system. With clear agreements, secure payments, and ongoing support, you can move forward knowing everything is handled.",
  },
];

export default function PerfectVenue() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-black mb-3 sm:mb-4">
            Your Path to the Perfect Venue
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-7xl mx-auto leading-relaxed px-4">
            Planning an event, production, or gathering shouldn't feel complicated. Our streamlined process connects you with the right venues and trusted professionals, taking the stress out of logistics so you can focus on what matters most making it a success.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left Side - Single Image */}
          <div className="relative order-2 lg:order-1">
            <Image
              src="/images/grid.png"
              alt="Event planning process"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Side - Steps */}
          <div className="space-y-0 order-1 lg:order-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex gap-3 sm:gap-4 md:gap-6">
                {/* Number Badge */}
                <div className="flex flex-col items-center shrink-0">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(to right, #FF5037 0%, #FE8B16 100%)'
                    }}
                  >
                    <span className="text-xl font-semibold text-white">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      className="w-0.5 flex-1 my-2"
                      style={{
                        borderLeft: '2px dashed #D1D5DB'
                      }}
                    ></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-6 sm:pb-8 md:pb-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-black/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
