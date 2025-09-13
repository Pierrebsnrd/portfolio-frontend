"use client";

import { Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"></div>

      {/* Pattern de fond */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-4xl font-bold text-white">PB</span>
          </div>
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Pierre Boisnard
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800 dark:text-white">
          Développeur Full-Stack
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Passionné par le développement web et la création d&apos;interfaces
          utilisateur intuitives.
          <br />
          Spécialisé en{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            React, Next.js, Node.js
          </span>{" "}
          et{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            MongoDB
          </span>
          .
        </p>

        {/* Boutons CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Découvrir mes projets
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:scale-105"
          >
            Me contacter
          </button>
        </div>

        {/* Liens sociaux */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Pierrebsnrd"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 backdrop-blur-sm transition-all transform hover:scale-110 shadow-lg"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/pierre-boisnard-74514785/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 backdrop-blur-sm transition-all transform hover:scale-110 shadow-lg"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="mailto:pierre.boisnard@live.fr"
            className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 backdrop-blur-sm transition-all transform hover:scale-110 shadow-lg"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
