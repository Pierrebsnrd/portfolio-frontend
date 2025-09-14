"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Loader2,
} from "lucide-react";
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
    <section
      id="contact"
      className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour
            discuter de vos besoins et voir comment nous pouvons collaborer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Restons en contact
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <a
                      href="mailto:pierre.boisnard@live.fr"
                      className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      pierre.boisnard@live.fr
                    </a>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Téléphone
                    </p>
                    <a
                      href="tel:+33611705622"
                      className="text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      06 11 70 56 22
                    </a>
                  </div>
                </div>

                {/* Localisation */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Localisation
                    </p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      Région Parisienne, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Retrouvez-moi aussi sur
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Pierrebsnrd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pierre-boisnard-74514785/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-2">
                🚀 Disponible pour de nouveaux projets
              </h4>
              <p className="opacity-90">
                Je suis actuellement disponible pour des missions freelance.
                N'hésitez pas à me contacter pour discuter de votre projet !
              </p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
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
                  placeholder="Votre nom et prénom"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
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

              {/* Message */}
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
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                           transition-colors duration-200 resize-none ${
                             errors.message
                               ? "border-red-500 dark:border-red-400"
                               : "border-gray-300 dark:border-gray-600"
                           }`}
                  placeholder="Décrivez votre projet ou vos besoins..."
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

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold
                         transition-all duration-200 ${
                           isValid && !isSubmitting
                             ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-[1.02] shadow-lg"
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
                    <p className="font-medium">
                      Message envoyé avec succès ! 🎉
                    </p>
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
      </div>
    </section>
  );
};

export default ContactForm;
