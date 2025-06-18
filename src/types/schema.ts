import { z } from "zod/v4";
import { OrderCategory, OrderService } from "@/types/enums";

export const loginSchema = z.object({
  email: z
    .email({ error: "Please enter a valid email" })
    .min(1, { error: "Please enter an email" }),
  password: z.string().min(1, { error: "Please enter a password" }),
});

export const newOrderSchema = z.object({
  category: z.enum(OrderCategory, {
    error: "Please select a category",
  }),
  service: z.enum(OrderService, {
    error: "Please select a service",
  }),
  link: z
    .url({ error: "Please enter a valid link" })
    .min(1, { error: "Link is required" }),
  quantity: z
    .number({
      error: (issue) =>
        issue.input === undefined ? "Required" : "Please enter a number",
    })
    .min(10, { error: "Minimum quantity is 10" })
    .max(10000000, {
      error: "Maximum quantity is 10000000",
    }),
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
