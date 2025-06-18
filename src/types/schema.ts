import { z } from "zod/v4";

export const loginSchema = z.object({
  email: z
    .email({ error: "Please enter a valid email" })
    .min(1, { error: "Please enter an email" }),
  password: z.string().min(1, { error: "Please enter a password" }),
});

export const signupSchema = z
  .object({
    username: z.string().min(1, { error: "Please enter a username" }),
    email: z
      .email({ error: "Please enter a valid email" })
      .min(1, { error: "Please enter an email" }),
    firstName: z.string().min(1, { error: "Please enter your first name" }),
    lastName: z.string().min(1, { error: "Please enter your last name" }),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters " }),
    confirmPassword: z
      .string()
      .min(1, { error: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z
    .email({ error: "Please enter a valid email" })
    .min(1, { error: "Please enter an email" }),
});
