import { z } from "zod";

// ============================================
// Contact Form Validation
// ============================================
export const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z.string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .toLowerCase(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// ============================================
// Validation Utilities
// ============================================

export function validateContactForm(data: unknown): { 
  success: boolean; 
  data?: ContactFormData; 
  errors?: Record<string, string> 
} {
  try {
    const validated = contactSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.flatten().fieldErrors;
      const fieldErrors = Object.fromEntries(
        Object.entries(errors).map(([key, msgs]) => [key, msgs?.[0] || ""])
      );
      return { success: false, errors: fieldErrors };
    }
    return { success: false, errors: { submit: "Validation failed" } };
  }
}
