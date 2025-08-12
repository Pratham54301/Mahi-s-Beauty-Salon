"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^\d{10}$/),
  email: z.string().email(),
  date: z.string(), // Date is stringified by FormData
  service: z.string(),
});

export type FormState = {
  message: string;
  status?: "success" | "error";
};

export async function bookAppointment(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    date: formData.get("date"),
    service: formData.get("service"),
  };

  const validatedFields = formSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten().fieldErrors);
    return {
      message: "There was an error with your submission. Please check the fields and try again.",
      status: "error",
    };
  }

  // Here you would typically save the data to a database.
  // For this example, we'll just simulate a successful submission.
  console.log("New Appointment Booked:", validatedFields.data);

  // Simulate network delay
  await new Promise(res => setTimeout(res, 1000));

  return {
    message: `Thank you, ${validatedFields.data.name}! Your appointment for ${validatedFields.data.service} on ${new Date(validatedFields.data.date).toLocaleDateString()} has been requested. We will contact you shortly to confirm.`,
    status: "success",
  };
}
