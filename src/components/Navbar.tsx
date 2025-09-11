import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { NavbarProps } from '../types';

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Pierre Boisnard
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:text-blue-600 transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-blue-600 transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-blue-600 transition-colors"
            >
              Projets
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;