"use client";

import { useState } from "react";
import { Filter, Code, Database, Globe, Smartphone } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import type { Project, ProjectFilter } from "@/app/types";

const projects: Project[] = [
  {
    id: 1,
    title: "Site Vitrine Sophrologie",
    description:
      "Site professionnel avec interface d'administration complète. Système de témoignages avec modération, formulaire de contact sécurisé et interface admin avec authentification JWT.",
    technologies: [
      "Next.js",
      "React",
      "CSS Modules",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    category: "fullstack",
    githubFrontend: "https://github.com/Pierrebsnrd/sophrologie-frontend",
    githubBackend: "https://github.com/Pierrebsnrd/sophrologie-backend",
    demo: "https://www.sophrologuevillepreux.fr/",
    featured: true,
    images: ["/images/projects/sophrologie/image-1.png"],
  },
  {
    id: 2,
    title: "Trollen",
    description:
      "Application sociale immersive combinant chat anonyme et éléments RPG. Fonctionnalités de chat temps réel, système de personnages et interface mobile optimisée.",
    technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    category: "mobile",
    githubFrontend: "https://github.com/Pierrebsnrd/trollen-frontend",
    githubBackend: "https://github.com/Pierrebsnrd/trollen-backend",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Hackatweet",
    description:
      "Mini réseau social type Twitter avec authentification utilisateur, publication de tweets en temps réel, système de likes et interface responsive moderne.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    category: "fullstack",
    githubFrontend: "https://github.com/Pierrebsnrd/hackatweet-frontend",
    githubBackend: "https://github.com/Pierrebsnrd/hackatweet-backend",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "WeatherApp",
    description:
      "Application météo responsive avec géolocalisation, prévisions sur plusieurs jours et interface moderne adaptative.",
    technologies: ["React", "API REST", "CSS3", "OpenWeather API"],
    category: "frontend",
    githubFrontend: "https://github.com/Pierrebsnrd/weather-app",
    demo: "#",
    featured: false,
  },
];

const filters: ProjectFilter[] = [
  { key: "all", label: "Tous", icon: <Filter className="w-4 h-4" /> },
  {
    key: "fullstack",
    label: "Full-Stack",
    icon: <Database className="w-4 h-4" />,
  },
  { key: "frontend", label: "Frontend", icon: <Globe className="w-4 h-4" /> },
  { key: "backend", label: "Backend", icon: <Code className="w-4 h-4" /> },
  {
    key: "mobile",
    label: "Mobile",
    icon: <Smartphone className="w-4 h-4" />,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="pt-20 pb-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations en développement web et
            mobile
          </p>
        </div>

        {/* Filtres - CORRECTION APPLIQUÉE */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 p-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base min-h-[44px] ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg ring-2 ring-blue-500/30 transform scale-[1.02]"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md"
                }`}
              >
                <span className="flex-shrink-0">{filter.icon}</span>
                <span className="whitespace-nowrap">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Aucun projet trouvé pour cette catégorie.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
