
import { z } from "zod";

export const shippingSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  pincode: z.string().length(6, "Pincode must be 6 digits"),
  state: z.string().min(1, "State is required"),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number."),
  saveInfo: z.boolean().default(false).optional(),
});
