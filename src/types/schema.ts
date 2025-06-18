import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter an email" })
    .email({ message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "Please enter a password" }),
});

export const signupSchema = z
  .object({
    username: z.string().min(1, { message: "Please enter a username" }),
    email: z
      .string()
      .min(1, { message: "Please enter an email" })
      .email({ message: "Please enter a valid email" }),
    firstName: z.string().min(1, { message: "Please enter your first name" }),
    lastName: z.string().min(1, { message: "Please enter your last name" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters " }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter an email" })
    .email({ message: "Please enter a valid email" }),
});
