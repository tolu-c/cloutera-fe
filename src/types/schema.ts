import { z } from "zod/v4";
import { AddFundOptions } from "@/types/enums";
import {
  NotificationEnum,
  NotificationFreqEnum,
  Time,
} from "@/types/notifications.types";

export const supportFormSchema = z.object({
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  image: z.any().optional(),
});

export const loginSchema = z.object({
  email: z
    .email({ error: "Please enter a valid email" })
    .min(1, { error: "Please enter an email" }),
  password: z.string().min(1, { error: "Please enter a password" }),
});

export const newOrderSchema = z.object({
  category: z.string().min(1, { error: "Please select a category" }),
  service: z.string().min(1, { error: "Please select a service" }),
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

export const editAccountSchema = signupSchema.pick({
  username: true,
  firstName: true,
  lastName: true,
});

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, { error: "Please enter a password" }),
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

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { error: "Password must be at least 8 characters" }),
    confirmNewPassword: z
      .string()
      .min(1, { error: "Please confirm your new password" }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    error: "New passwords do not match",
    path: ["confirmNewPassword"],
  });

export const addFundSchema = z.object({
  amount: z
    .number({
      error: (issue) =>
        issue.input === undefined ? "Required" : "Please enter a number",
    })
    .min(500, { error: "Minimum amount is 500" })
    .max(10000000, {
      error: "Maximum amount is 10000000",
    }),
  paymentMethod: z.enum(AddFundOptions, {
    error: "Please select a method",
  }),
});

export const faqSchema = z.object({
  question: z.string().min(1, { error: "Please enter a question" }),
  answer: z.string().min(1, { error: "Please enter a question" }),
});

export const notificationSchema = z.object({
  title: z.string().min(1, { error: "Please enter a title" }),
  message: z.string().min(1, { error: "Please enter a message" }),
  type: z.enum(NotificationEnum, {
    error: "Please select a notification type",
  }),
});

export const scheduledNotificationSchema = notificationSchema
  .extend({
    date: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date" })
      .refine(
        (val) => new Date(val) >= new Date(new Date().setHours(0, 0, 0, 0)),
        { message: "Cannot select a date lesser than today" },
      ),
    time: z.enum(Time, { message: "Please enter a time" }),
    recurring: z.boolean(),
    endDate: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date" })
      .refine(
        (val) => new Date(val) >= new Date(new Date().setHours(0, 0, 0, 0)),
        { message: "Cannot select a date lesser than today" },
      )
      .optional(),
    freq: z
      .enum(NotificationFreqEnum, { error: "Please select a frequency" })
      .optional(),
  })
  .refine((data) => !data.recurring || data.freq, {
    path: ["freq"],
    message: "Please select a frequency",
  })
  .refine((data) => !data.recurring || data.endDate, {
    path: ["endDate"],
    message: "Please select an end date",
  })
  .refine(
    (data) =>
      !data.recurring || (data.endDate && !isNaN(Date.parse(data.endDate))),
    {
      path: ["endDate"],
      message: "Invalid end date",
    },
  )
  .refine(
    (data) =>
      !data.recurring ||
      (data.endDate && new Date(data.endDate) > new Date(data.date)),
    {
      path: ["endDate"],
      message: "End date must be after start date",
    },
  );
