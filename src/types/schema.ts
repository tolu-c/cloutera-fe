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
