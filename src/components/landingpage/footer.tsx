import React from "react";
import Link from "next/link";
import ClouteraLogo from "../ui/logo";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="mt-[16rem] bg-black text-gray-400 lg:mt-[40rem]">
      {/* Newsletter Subscription Section */}
      <div className="relative z-10 mx-4 -mt-20 max-w-6xl md:mx-auto lg:px-8">
        <div className="absolute top-1/2 right-0 left-0 mx-auto flex -translate-y-1/2 items-center justify-center overflow-hidden rounded-2xl border-4 border-transparent bg-gradient-to-br from-[#DE3746] via-[#B42D39] to-[#781E26] p-8 text-center shadow-xl md:py-24 lg:rounded-[60px]">
          {/* Background Waves/Pattern */}
          <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full items-center justify-center opacity-65">
            <div
              className="h-full w-full bg-[url('/images/subscribeBg.svg')] bg-cover bg-center"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 flex flex-col gap-4 md:gap-16">
            <div className="flex flex-col gap-1 md:gap-3">
              <h2 className="text-xs font-semibold text-white md:text-4xl">
                Subscribe To News Letter
              </h2>
              <p className="mx-auto max-w-40 text-[4px] text-white md:text-sm lg:max-w-xl">
                Lorem ipsum dolor sit amet consectetur. Morbi non bibendum leo
                eget odio gravida bibendum faucibus.
              </p>
            </div>
            <form className="bg-foundation-red-normal mx-auto flex w-full items-center justify-center rounded-full p-0.5 text-[4px] md:p-1.5 lg:text-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-opacity-20 w-full flex-grow pl-2.5 text-white placeholder-white/50 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-white focus:outline-none sm:w-auto lg:pl-10"
              />
              <button
                type="submit"
                className="bg-dark w-fit rounded-full border-4 border-b border-black py-1 text-[4px] text-white/50 transition-all duration-300 hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-red-600 focus:outline-none lg:px-6 lg:py-5 lg:text-sm"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          {/* Gradient border using Tailwind and pseudo-element */}
          <span className="pointer-events-none absolute inset-0 border-4 border-transparent before:absolute before:inset-0 before:z-10 before:border-4 before:border-transparent before:bg-gradient-to-b before:from-black/10 before:to-transparent before:content-['']"></span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-4 pt-[8rem] pb-12 sm:px-6 lg:px-8 lg:pt-[16rem]">
        <div className="flex flex-col space-y-8 md:flex-row md:items-start md:justify-between md:space-y-0">
          <div className="md:hidden">
            <ClouteraLogo />
          </div>

          <div className="flex flex-row justify-between space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="transition-colors duration-200 hover:text-white"
              >
                Services
              </Link>
              <Link
                href="/blogs"
                className="transition-colors duration-200 hover:text-white"
              >
                Blogs
              </Link>
              <Link
                href="/faqs"
                className="transition-colors duration-200 hover:text-white"
              >
                FAQs
              </Link>
            </div>

            <div className="flex flex-col space-y-4">
              <Link
                href="/privacy-policy"
                className="transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/about-cookies"
                className="transition-colors duration-200 hover:text-white"
              >
                About Cookies
              </Link>
            </div>
          </div>

          <div className="flex space-x-5 md:mt-0">
            <Image
              src="/images/facebook.svg"
              alt="facebook"
              width={43}
              height={43}
            />
            <Image
              src="/images/instagram.svg"
              alt="facebook"
              width={43}
              height={43}
            />

            <Image
              src="/images/linkedin.svg"
              alt="facebook"
              width={43}
              height={43}
            />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm md:text-left">
          <p className="block md:hidden">
            Copyright &copy; 2023 Transparent. All rights reserved.
          </p>

          <div className="hidden items-center justify-between md:flex">
            <p>&copy; 2019 Lift Media. All rights reserved.</p>
            <ClouteraLogo />
            <p>Powered by ClouteraHub</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
