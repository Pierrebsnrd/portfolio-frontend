"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  Star,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Project } from "../../../app/types/index";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);

  // Bloquer le scroll du body quand la modal est ouverte
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      // Empêcher le zoom sur iOS
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }

    // Cleanup au démontage
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [showModal]);

  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showModal]);

  // Obtient toutes les images du projet
  const getProjectImages = (): string[] => {
    if (project.images && project.images.length > 0) {
      return project.images;
    }
    if (project.image) {
      return [project.image];
    }
    return ["/images/projects/placeholder.svg"];
  };

  const projectImages = getProjectImages();
  const totalImages = projectImages.length;

  // Fonction pour obtenir l'image principale
  const getMainImageSrc = () => {
    const mainImage = projectImages[0];
    if (mainImage && !imageError[mainImage]) {
      return mainImage;
    }
    return "/images/projects/placeholder.svg";
  };

  // Navigation dans la galerie
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  const handleImageError = (imageSrc: string) => {
    setImageError((prev) => ({ ...prev, [imageSrc]: true }));
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

  const openModal = () => {
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Détermine si on utilise le placeholder
  const isUsingPlaceholder =
    getMainImageSrc() === "/images/projects/placeholder.svg";

  return (
    <>
      <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* IMAGE DE PREVIEW */}
        <div
          className="relative h-48 w-full overflow-hidden cursor-pointer"
          onClick={openModal}
        >
          <Image
            src={getMainImageSrc()}
            alt={`Preview de ${project.title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => handleImageError(getMainImageSrc())}
            priority={project.featured}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Indicateur multiple images */}
          {totalImages > 1 && !isUsingPlaceholder && (
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                <div className="w-3 h-3 grid grid-cols-2 gap-0.5">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                {totalImages}
              </div>
            </div>
          )}

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Projet phare
              </div>
            </div>
          )}
        </div>

        {/* CONTENU DE LA CARTE */}
        <div className="p-6">
          {/* Catégorie */}
          <div className="mb-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold ${getCategoryColor(project.category)}`}
            >
              {getCategoryText(project.category)}
            </span>
          </div>

          {/* Titre et description */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(showAllTechnologies
              ? project.technologies
              : project.technologies.slice(0, 4)
            ).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <button
                onClick={() => setShowAllTechnologies(!showAllTechnologies)}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-pointer"
              >
                {showAllTechnologies
                  ? "Moins"
                  : `+${project.technologies.length - 4}`}
              </button>
            )}
          </div>

          {/* Liens */}
          <div className="flex flex-wrap gap-2">
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

      {/* MODAL GALERIE D'IMAGES - OPTIMISÉE MOBILE */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center overflow-hidden"
          style={{ touchAction: "none" }} // Empêche le scroll
          onClick={closeModal}
        >
          {/* BOUTON FERMER - OPTIMISÉ MOBILE */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 w-12 h-12 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm touch-manipulation"
            aria-label="Fermer la galerie"
          >
            <X className="w-6 h-6" />
          </button>

          {/* COMPTEUR D'IMAGES - MOBILE */}
          {totalImages > 1 && (
            <div className="absolute top-4 left-4 z-50 bg-black/50 text-white px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              {currentImageIndex + 1} / {totalImages}
            </div>
          )}

          {/* CONTENEUR PRINCIPAL - RESPONSIVE */}
          <div
            className="relative w-full h-full max-w-6xl mx-auto p-4 sm:p-8 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CONTENEUR IMAGE - ADAPTATIF */}
            <div className="relative flex-1 bg-gray-900 rounded-lg overflow-hidden mb-4">
              <Image
                src={
                  projectImages[currentImageIndex] ||
                  "/images/projects/placeholder.svg"
                }
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 90vw"
                onError={() =>
                  handleImageError(projectImages[currentImageIndex])
                }
              />

              {/* NAVIGATION - BOUTONS AGRANDIS POUR MOBILE */}
              {totalImages > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm touch-manipulation"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm touch-manipulation"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* MINIATURES - SCROLL HORIZONTAL SUR MOBILE */}
            {totalImages > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 px-2 scrollbar-hide">
                <div className="flex gap-2 min-w-max">
                  {projectImages.map((imageSrc, index) => (
                    <button
                      key={index}
                      onClick={(e) => goToImage(index, e)}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 touch-manipulation ${
                        index === currentImageIndex
                          ? "border-blue-500 ring-2 ring-blue-500/50"
                          : "border-gray-600 hover:border-gray-400"
                      }`}
                    >
                      <Image
                        src={imageSrc}
                        alt={`Miniature ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* INFORMATIONS DU PROJET */}
            <div className="mt-4 text-white text-center max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                {project.description}
              </p>
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

      {/* CSS pour masquer la scrollbar des miniatures */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default ProjectCard;
