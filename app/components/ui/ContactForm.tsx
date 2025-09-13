"use client";

import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";

const ContactForm = () => {
  const {
    formData,
    status,
    errors,
    isValid,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contactez-moi
        </h2>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Nom */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         transition-colors duration-200 ${
                           errors.name
                             ? "border-red-500 dark:border-red-400"
                             : "border-gray-300 dark:border-gray-600"
                         }`}
                placeholder="Votre nom"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Champ Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         transition-colors duration-200 ${
                           errors.email
                             ? "border-red-500 dark:border-red-400"
                             : "border-gray-300 dark:border-gray-600"
                         }`}
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Champ Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         transition-colors duration-200 resize-none ${
                           errors.message
                             ? "border-red-500 dark:border-red-400"
                             : "border-gray-300 dark:border-gray-600"
                         }`}
                placeholder="Décrivez votre projet ou votre demande..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {formData.message.length}/1000 caractères
              </p>
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold
                       transition-all duration-200 ${
                         isValid && !isSubmitting
                           ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-[1.02]"
                           : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                       }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {status === "validating"
                    ? "Validation..."
                    : "Envoi en cours..."}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </>
              )}
            </button>

            {/* Messages de statut */}
            {status === "success" && (
              <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-400 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <p className="font-medium">Message envoyé avec succès ! 🎉</p>
                </div>
                <p className="text-sm mt-1">
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 rounded-lg">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <p className="font-medium">Erreur lors de l'envoi 😕</p>
                </div>
                <p className="text-sm mt-1">
                  Veuillez réessayer ou me contacter directement.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
