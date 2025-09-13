"use client";

import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import ContactForm from "./components/ui/ContactForm";
import Footer from "./components/layout/Footer";
import { useDarkMode } from "./hooks/useDarkMode";
import { useScrollToSection } from "./hooks/useScrollToSection";

export default function Home() {
  const { darkMode, toggleDarkMode, isLoading } = useDarkMode();
  const { scrollToSection } = useScrollToSection();

  // Éviter le flash de contenu pendant le chargement
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
      />
      <main className="min-h-screen">
        <HeroSection scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
