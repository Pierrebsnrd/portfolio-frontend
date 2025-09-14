"use client";

import React, { useState } from "react";
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
  const [showAllTech, setShowAllTech] = useState(false);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const projectImages =
    project.images && project.images.length > 0
      ? project.images
      : ["/images/projects/placeholder.svg"];
  const totalImages = projectImages.length;

  const getMainImageSrc = () => {
    const mainImage = projectImages[0];
    if (mainImage && !imageError[mainImage]) return mainImage;
    return "/images/projects/placeholder.svg";
  };

  const handleImageError = (src: string) => {
    setImageError((prev) => ({ ...prev, [src]: true }));
  };

  const openModal = () => {
    setCurrentImageIndex(0);
    setShowModal(true);
  };

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

  const getCategoryColor = (category: Project["category"]) => {
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

  const getCategoryText = (category: Project["category"]) => {
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

  const isUsingPlaceholder =
    getMainImageSrc() === "/images/projects/placeholder.svg";

  return (
    <>
      <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* IMAGE PRINCIPALE */}
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
            unoptimized
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Badge mis en avant */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-sm">
                <Star className="w-3 h-3" />
                <span>Mis en avant</span>
              </div>
            </div>
          )}

          {/* Badge catégorie */}
          <div className="absolute bottom-4 left-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(
                project.category,
              )} backdrop-blur-sm`}
            >
              {getCategoryText(project.category)}
            </span>
          </div>

          {/* Badge placeholder */}
          {isUsingPlaceholder && (
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-gray-500/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                En développement
              </div>
            </div>
          )}
        </div>

        {/* CONTENU */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6 flex flex-wrap gap-2">
            {(showAllTech
              ? project.technologies
              : project.technologies.slice(0, 4)
            ).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && !showAllTech && (
              <button
                onClick={() => setShowAllTech(true)}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium"
              >
                +{project.technologies.length - 4}
              </button>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {project.githubFrontend && project.githubFrontend !== "#" && (
              <a
                href={project.githubFrontend || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}

            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-w-6xl max-h-[95vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {totalImages > 1 && (
              <div className="absolute -top-12 left-0 text-white text-sm">
                {currentImageIndex + 1} / {totalImages}
              </div>
            )}

            <div className="relative w-full h-[80vh] bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={projectImages[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                unoptimized
                onError={() =>
                  handleImageError(projectImages[currentImageIndex])
                }
              />

              {totalImages > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all backdrop-blur-sm"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Miniatures */}
            {totalImages > 1 && (
              <div className="flex justify-center mt-4 gap-2 px-4 overflow-x-auto">
                {projectImages.map((src, index) => (
                  <button
                    key={index}
                    onClick={(e) => goToImage(index, e)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      index === currentImageIndex
                        ? "border-blue-500 ring-2 ring-blue-500/50"
                        : "border-gray-600 hover:border-gray-400"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Miniature ${index + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
