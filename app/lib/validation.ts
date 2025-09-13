import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères")
    .regex(
      /^[a-zA-ZÀ-ÿ\s-']+$/,
      "Le nom contient des caractères non autorisés",
    ),

  email: z
    .string()
    .email("Adresse email invalide")
    .max(100, "L'email ne peut pas dépasser 100 caractères"),

  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Types pour les erreurs de validation
export type ValidationErrors = {
  [K in keyof ContactFormData]?: string;
};
