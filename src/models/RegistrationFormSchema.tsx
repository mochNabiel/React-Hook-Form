import { z } from "zod";

// MENDEFINISIKAN USER REGISTRATION FORM SCHEMA
const RegistrationFormSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required" })
      .min(5, "Name is too short"),
    email: z
      .string({ required_error: "Email is required" })
      .email("Please enter a valid email"),
    dob: z.coerce
      .date({ required_error: "Date of birth is required" })
      .min(new Date("1900-01-01"), "Date of birth must be after 1900-01-01")
      .max(new Date(), "Date of birth cannot be in the future"),
    age: z.coerce
      .number({
        required_error: "Age is required",
        invalid_type_error: "Age must be a number",
      })
      .min(1, "Age must be at least 1")
      .max(100, "Age must be at most 100"),
    phoneNumber: z
      .number({ required_error: "Phone number is required" })
      .min(10, "Phone number is too short"),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one capital letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[\W_]/, "Password must contain at least one special character")
      .nonempty({ message: "Password is required" }),
    confirmPassword: z.string({
      required_error: "Confirm password is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default RegistrationFormSchema;
