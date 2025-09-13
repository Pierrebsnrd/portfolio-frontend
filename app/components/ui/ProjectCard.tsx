"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, Star, X } from "lucide-react";
import { Project } from "../../../app/types/index";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Utilise le placeholder.svg par défaut
  const getImageSrc = () => {
    if (project.image && !imageError) {
      return project.image;
    }
    return "/images/projects/placeholder.svg";
  };

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

  // Placeholder discret sans texte
  const PlaceholderImage = () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
      <div className="text-center opacity-60">
        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800/50 dark:to-purple-800/50 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
        
        {/* IMAGE DE PREVIEW */}
        <div className="relative h-48 w-full overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Preview de ${project.title}`}
              fill
              className="object-cover cursor-pointer"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onClick={() => setShowModal(true)}
              onError={() => {
                console.log(`Erreur de chargement de l'image: ${project.image}`);
                setImageError(true);
              }}
              priority={project.featured}
              unoptimized={true}
            />
          ) : (
            <div className="cursor-pointer h-full" onClick={() => setShowModal(true)}>
              <PlaceholderImage />
            </div>
          )}
          
          {/* Overlay gradient seulement si image existe */}
          {project.image && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
          
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-sm">
                <Star className="w-3 h-3" />
                <span>Mis en avant</span>
              </div>
            </div>
          )}
          
          {/* Category badge */}
          <div className="absolute bottom-4 left-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(project.category)} backdrop-blur-sm`}
            >
              {getCategoryText(project.category)}
            </span>
          </div>
        </div>

        <div className="p-6">
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

      {/* MODAL D'AGRANDISSEMENT */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Image agrandie */}
            <div className="relative w-full h-[70vh] bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={getImageSrc()}
                alt={`Preview agrandie de ${project.title}`}
                fill
                className="object-contain"
                sizes="90vw"
                unoptimized={true}
              />
            </div>
            
            {/* Info du projet dans le modal */}
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;