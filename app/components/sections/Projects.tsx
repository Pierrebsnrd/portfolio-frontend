"use client";

import { useState } from "react";
import { Filter, Code, Database, Smartphone, Globe } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import { Project, ProjectFilter } from "../../../app/types/index";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Site Vitrine Sophrologie",
      description: "Site professionnel avec interface d'administration complète. Système de témoignages avec modération, formulaire de contact sécurisé et interface admin avec authentification JWT.",
      technologies: ["Next.js", "React", "CSS Modules", "Node.js", "Express", "MongoDB", "JWT"],
      category: "fullstack",
      githubFrontend: "https://github.com/Pierrebsnrd/sophrologie-frontend",
      githubBackend: "https://github.com/Pierrebsnrd/sophrologie-backend", 
      demo: "https://www.sophrologuevillepreux.fr/",
      featured: true,
      images: [
        "/images/projects/sophrologie/image-1.png",
/*         "/images/projects/sophrologie/image-2.png",
        "/images/projects/sophrologie/image-3.png",
        "/images/projects/sophrologie/image-4.png" */
      ]
    },
    {
      id: 2,
      title: "Trollen",
      description: "Application sociale immersive combinant chat anonyme et éléments RPG. Fonctionnalités de chat temps réel, système de personnages et interface mobile optimisée.",
      technologies: ["React Native", "Node.js", "Express", "MongoDB"],
      category: "mobile",
      githubFrontend: "https://github.com/Pierrebsnrd/trollen-frontend",
      githubBackend: "https://github.com/Pierrebsnrd/trollen-backend",
      demo: "#",
      featured: true,
      images: [
/*         "/images/projects/trollen/image-1.png",
        "/images/projects/trollen/image-2.png" */
      ]
    },
    {
      id: 3,
      title: "Hackatweet", 
      description: "Mini réseau social type Twitter avec authentification utilisateur, publication de tweets en temps réel, système de likes et interface responsive moderne.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
      category: "frontend",
      githubFrontend: "https://github.com/Pierrebsnrd/hackatweet/tree/main/frontend",
      githubBackend: "https://github.com/Pierrebsnrd/hackatweet/tree/main/backend",
      demo: "#",
      featured: false,
      images: [
/*         "/images/projects/hackatweet/image-1.png",
        "/images/projects/hackatweet/image-2.png", 
        "/images/projects/hackatweet/image-3.png" */
      ]
    }
  ];

  const filters: ProjectFilter[] = [
    { key: "all", label: "Tous", icon: <Filter className="w-4 h-4" /> },
    {
      key: "fullstack",
      label: "Full-Stack", 
      icon: <Code className="w-4 h-4" />,
    },
    { key: "frontend", label: "Frontend", icon: <Globe className="w-4 h-4" /> },
    {
      key: "backend",
      label: "Backend",
      icon: <Database className="w-4 h-4" />,
    },
    {
      key: "mobile",
      label: "Mobile",
      icon: <Smartphone className="w-4 h-4" />,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section 
      id="projects" 
      className="pt-16 min-h-screen bg-white dark:bg-gray-900 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes réalisations en développement web et mobile. 
            Cliquez sur les images pour voir plus de captures d'écran.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

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