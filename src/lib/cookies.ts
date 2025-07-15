"use server";

import { cookies } from "next/headers";

// Cookie names
// export const TOKEN_COOKIE_NAME = "cloutera_auth_token";

// Cookie options
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 days
};

/**
 * Get a cookie value by name
 */
export async function getCookie(name: string): Promise<string | undefined> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(name);
  return cookie?.value;
}

/**
 * Set a cookie with the provided name and value
 */
export async function setCookie(
  name: string,
  value: string,
  options = {},
): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(name, value, { ...COOKIE_OPTIONS, ...options });
}

/**
 * Remove a cookie by name
 */
export async function removeCookie(name: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}

/**
 * Get the authentication token from cookies
 */
export async function getAuthToken(): Promise<string | undefined> {
  return await getCookie("cloutera_auth_token");
}

/**
 * Set the authentication token in cookies
 */
export async function setAuthToken(token: string): Promise<void> {
  await setCookie("cloutera_auth_token", token);
}

/**
 * Remove the authentication token from cookies
 */
export async function removeAuthToken(): Promise<void> {
  await removeCookie("cloutera_auth_token");
}

export async function clearAuthCookies(): Promise<void> {
  await removeAuthToken();
}
