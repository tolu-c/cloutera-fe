"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import { TESTIMONIALS } from "@/types/constants";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Column: Heading and Navigation */}
          <div className="flex flex-col gap-5">
            <p className="text-foundation-red-normal text-xs font-semibold tracking-[0.47em]">
              TESTIMONIALS
            </p>
            <h2 className="text-dark text-4xl font-semibold sm:text-3xl">
              Our Customer Stories
            </h2>
            <p className="text-dark max-w-xl pr-6 text-base font-light">
              Here’s what people have to say About ClouTeraHub. Real moments,
              real experiences, real feedback.
            </p>
            <div className="mt-6 flex w-full space-x-4">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white transition-colors duration-200 hover:bg-red-600"
                aria-label="Previous testimonial"
                onClick={goToPrevious}
              >
                <ArrowLeftIcon />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white transition-colors duration-200 hover:bg-red-600"
                aria-label="Next testimonial"
                onClick={goToNext}
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          {/* Right Column: Testimonial Card */}
          <div className="relative rounded-lg bg-white p-8 shadow-lg">
            {/* Quote icon */}
            <div className="absolute top-0 left-0 -mt-6 -ml-6 text-9xl leading-none font-bold text-gray-200 opacity-70 md:-mt-8 md:-ml-8">
              &ldquo;
            </div>
            <h3 className="relative z-10 mb-4 text-3xl font-bold text-gray-900">
              Quality Services
            </h3>
            <p className="relative z-10 mb-6 text-lg text-gray-600">
              {currentTestimonial.quote}
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src={currentTestimonial.avatarSrc}
                alt={currentTestimonial.author}
                width={64}
                height={64}
                className="rounded-full border-2 border-red-500 object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {currentTestimonial.author}
                </p>
                <p className="text-sm text-gray-500">
                  {currentTestimonial.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
