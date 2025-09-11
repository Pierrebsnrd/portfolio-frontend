import React from 'react';
import { Github, Smartphone, Database, Globe } from 'lucide-react';
import { ProjectCardProps } from '../types';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getIcon = (): React.ReactNode => {
    switch (project.category) {
      case 'mobile':
        return <Smartphone />;
      case 'backend':
        return <Database />;
      default:
        return <Globe />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
        <div className="text-6xl opacity-20">
          {getIcon()}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          {project.featured && (
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs rounded-full">
              ⭐ Projet phare
            </span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          <a 
            href={project.githubFrontend} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
            aria-label={`Voir le code frontend de ${project.title}`}
          >
            <Github className="w-4 h-4" />
            Frontend
          </a>
          {project.githubBackend && (
            <a 
              href={project.githubBackend} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
              aria-label={`Voir le code backend de ${project.title}`}
            >
              <Github className="w-4 h-4" />
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;