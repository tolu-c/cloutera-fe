import { Testimonial } from "@/types/index";

export const IMAGE_MAX_SIZE = 5 * 1024 * 1024;
export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
export const CLOUTERA_TOKEN = "cloutera.token";
export const CLOUTERA_USER_EMAIL = "cloutera.user.email";
export const CLOUTERA_USER_PASSWORD = "cloutera.user.password";
export const CLOUTERA_USER = "cloutera.user";
export const SELECTED_SERVICE_CATEGORIES = [
  "Facebook - Followers",
  "IG Followers",
  "TikTok - Followers",
  "Twitter - Views",
] as const;

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "What I love most is how secure and easy the payment process is. No delays, no issues — just results.",
    author: "Daniel E.",
    title: "Brand Owner",
    avatarSrc: "/images/testimonialAvatar.png",
  },
  {
    quote:
      "Cloutera Hub helped me grow my page engagement overnight. It’s fast, affordable, and very efficient.",
    author: "Precious L.",
    title: "Content Creator",
    avatarSrc: "/images/testimonialAvatar.png",
  },
];
