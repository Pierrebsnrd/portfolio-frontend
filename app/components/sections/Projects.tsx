'use client';

import { useState } from 'react';
import { Filter, Code, Database, Smartphone, Globe } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import { Project, ProjectFilter } from '@/types';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Site Vitrine Sophrologie",
      description: "Site professionnel avec interface d'administration complète. Système de témoignages avec modération, formulaire de contact sécurisé et interface admin avec authentification JWT.",
      technologies: ["Next.js", "React", "CSS Modules", "Node.js", "Express", "MongoDB", "JWT"],
      category: "fullstack", // Type strict maintenant
      githubFrontend: "https://github.com/Pierrebsnrd/sophrologie-frontend",
      githubBackend: "https://github.com/Pierrebsnrd/sophrologie-backend",
      demo: "#",
      featured: true
    },
    {
      id: 2,
      title: "Trollen",
      description: "Application sociale immersive combinant chat anonyme et éléments RPG. Fonctionnalités de chat temps réel, système de personnages et interface mobile optimisée.",
      technologies: ["React Native", "Node.js", "Express", "MongoDB"],
      category: "mobile", // Type strict maintenant
      githubFrontend: "https://github.com/Pierrebsnrd/trollen-frontend",
      githubBackend: "https://github.com/Pierrebsnrd/trollen-backend",
      demo: "#",
      featured: true
    },
    {
      id: 3,
      title: "Hackatweet",
      description: "Mini réseau social type Twitter avec authentification utilisateur, publication de tweets en temps réel, système de likes et interface responsive moderne.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
      category: "frontend", // Type strict maintenant
      githubFrontend: "https://github.com/Pierrebsnrd/hackatweet/tree/main/frontend",
      githubBackend: "https://github.com/Pierrebsnrd/hackatweet/tree/main/backend",
      demo: "#",
      featured: false
    },
  ];

  const filters: ProjectFilter[] = [
    { key: 'all', label: 'Tous', icon: <Filter className="w-4 h-4" /> },
    { key: 'fullstack', label: 'Full-Stack', icon: <Code className="w-4 h-4" /> },
    { key: 'frontend', label: 'Frontend', icon: <Globe className="w-4 h-4" /> },
    { key: 'backend', label: 'Backend', icon: <Database className="w-4 h-4" /> },
    { key: 'mobile', label: 'Mobile', icon: <Smartphone className="w-4 h-4" /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Mes Projets
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Découvrez une sélection de mes réalisations en développement web et mobile
        </p>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {filter.icon}
              <span className="font-medium">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Grid des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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