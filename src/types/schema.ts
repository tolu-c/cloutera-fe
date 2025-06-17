import { z } from "zod";
import { OrderCategory, OrderService } from "@/types/enums";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter an email" })
    .email({ message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "Please enter a password" }),
});

export const newOrderSchema = z.object({
  category: z.enum(Object.values(OrderCategory) as [string, ...string[]], {
    message: "Please select a category",
  }),
  service: z.enum(Object.values(OrderService) as [string, ...string[]], {
    message: "Please select a service",
  }),
  link: z
    .string()
    .min(1, "Link is required")
    .url({ message: "Please enter a valid link" }),
  quantity: z
    .number({
      invalid_type_error: "Please enter a number",
    })
    .min(10, { message: "Minimum quantity is 10" })
    .max(10000000, {
      message: "Maximum quantity is 10000000",
    }),
});
