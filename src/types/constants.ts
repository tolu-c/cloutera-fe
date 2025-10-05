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
