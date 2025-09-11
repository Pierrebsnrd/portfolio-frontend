import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

// Interface directement dans le fichier si problème d'import
interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"></div>
      
      {/* Pattern de fond simplifié */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23cbd5e1' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E")`
        }}>
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">PB</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
          Développeur Full-Stack
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Passionné par le développement web et la création d'interfaces utilisateur intuitives.
          Spécialisé en <span className="font-semibold text-blue-600 dark:text-blue-400">React, Next.js, Node.js</span> et <span className="font-semibold text-purple-600 dark:text-purple-400">MongoDB</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Découvrir mes projets
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
          >
            Me contacter
          </button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/Pierrebsnrd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/pierre-boisnard-74514785/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:pierre.boisnard@live.fr"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;