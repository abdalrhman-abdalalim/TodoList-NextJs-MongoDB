import { z } from "zod";


export const todoSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 3 characters" }),
  body: z
    .string()
    .max(80, { message: "body must not exceed 80 characters" })
        .optional(),
  completed :z.boolean()
});
