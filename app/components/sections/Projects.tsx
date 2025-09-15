"use client";

import { useState } from "react";
import { Filter, Code, Database, Globe, Smartphone } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import type { Project, ProjectFilter } from "@/app/types"; // Correction d'import des types

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
    images: [
      "/images/projects/sophrologie/image-1.png",
      // "/images/projects/sophrologie/image-2.png",
      // "/images/projects/sophrologie/image-3.png",
      // "/images/projects/sophrologie/image-4.png"
    ],
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

        {/* Filtres */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 overflow-x-auto max-w-full">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === filter.key
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {filter.icon}
                {filter.label}
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
      </div>
    </section>
  );
};

export default Projects;
