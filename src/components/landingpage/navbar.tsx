"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ClouteraLogo from "../ui/logo";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { MenuIcon, XIcon } from "@/assets/icons";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Blog", to: "/blog" },
  { name: "FAQs", to: "/faqs" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-foundation-red-white w-full">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo (Left) */}
        <ClouteraLogo isBlack />

        {/* Hamburger (Mobile) */}
        <button
          className="ml-auto md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <XIcon className="text-gray-500" />
          ) : (
            <MenuIcon className="text-gray-500" />
          )}
        </button>

        {/* Nav Links (Desktop) */}
        <div className="hidden flex-1 justify-center md:flex">
          <ul className="flex space-x-8">
            {navLinks.map(({ name, to }) => (
              <li key={to}>
                <Link
                  href={to}
                  className={cn("font-medium transition hover:text-red-600", {
                    "text-foundation-red-normal underline": pathname === to,
                    "text-gray-800": pathname !== to,
                  })}
                  aria-label={name}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden items-center space-x-4 md:flex">
          <button className="bg-foundation-red-light border-foundation-red-light-active text-foundation-red-normal rounded-[44px] border-b-4 px-6 py-2 text-sm">
            Log In
          </button>
          <button className="bg-foundation-red-normal border-foundation-red-light-active rounded-[44px] border-b-4 px-6 py-2 text-sm text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="px-6 pb-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            {navLinks.map(({ name, to }) => (
              <li key={to}>
                <Link
                  href={to}
                  className={cn(
                    "block py-2 font-medium transition hover:text-red-600",
                    {
                      "text-foundation-red-normal underline": pathname === to,
                      "text-gray-800": pathname !== to,
                    },
                  )}
                  aria-label={name}
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col space-y-2">
            <button className="bg-foundation-red-light border-foundation-red-light-active text-foundation-red-normal rounded-[44px] border-b-4 px-6 py-2 text-sm">
              Log In
            </button>
            <button className="bg-foundation-red-normal border-foundation-red-light-active rounded-[44px] border-b-4 px-6 py-2 text-sm text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
