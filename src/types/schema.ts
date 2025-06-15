import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Please enter an email" })
    .email({ message: "Please enter a valid email" }),
  password: z.string().nonempty({ message: "Please enter a password" }),
});
