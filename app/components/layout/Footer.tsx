"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

interface FooterProps {
  scrollToTop?: () => void;
}

const Footer = ({ scrollToTop }: FooterProps) => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative">
      {/* Bouton retour en haut */}
      {scrollToTop && (
        <button
          onClick={scrollToTop}
          className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 z-10"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <div className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            {/* Informations */}
            <div className="text-center md:text-left">
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pierre Boisnard
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                Développeur Full-Stack
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Disponible pour vos projets
              </p>
            </div>

            {/* Liens sociaux */}
            <div className="flex space-x-4 sm:space-x-6">
              <a
                href="https://github.com/Pierrebsnrd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors transform hover:scale-110 p-2"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pierre-boisnard-74514785/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors transform hover:scale-110 p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:pierre.boisnard@live.fr"
                className="hover:text-blue-400 transition-colors transform hover:scale-110 p-2"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Ligne de séparation et copyright */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 Pierre Boisnard. Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Développé avec React & Next.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
