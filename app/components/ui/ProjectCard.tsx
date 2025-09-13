"use client";

import React from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import { Project } from "../../../app/types/index";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getCategoryColor = (category: Project["category"]): string => {
    switch (category) {
      case "fullstack":
        return "bg-gradient-to-r from-blue-500 to-purple-500";
      case "frontend":
        return "bg-gradient-to-r from-green-500 to-teal-500";
      case "backend":
        return "bg-gradient-to-r from-orange-500 to-red-500";
      case "mobile":
        return "bg-gradient-to-r from-pink-500 to-rose-500";
      default:
        return "bg-gray-500";
    }
  };

  const getCategoryText = (category: Project["category"]): string => {
    switch (category) {
      case "fullstack":
        return "Full Stack";
      case "frontend":
        return "Frontend";
      case "backend":
        return "Backend";
      case "mobile":
        return "Mobile";
      default:
        return category;
    }
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star className="w-3 h-3" />
            <span>Mis en avant</span>
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Category badge */}
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(project.category)}`}
          >
            {getCategoryText(project.category)}
          </span>
        </div>

        {/* Project title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Project description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          {/* GitHub Frontend */}
          {project.githubFrontend && project.githubFrontend !== "#" && (
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
              aria-label={`Voir le code frontend de ${project.title}`}
            >
              <Github className="w-4 h-4" />
              <span>Frontend</span>
            </a>
          )}

          {/* GitHub Backend */}
          {project.githubBackend && project.githubBackend !== "#" && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
              aria-label={`Voir le code backend de ${project.title}`}
            >
              <Github className="w-4 h-4" />
              <span>Backend</span>
            </a>
          )}

          {/* Demo */}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all text-sm font-medium"
              aria-label={`Voir la démonstration de ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
