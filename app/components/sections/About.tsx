"use client";

import { Code, Database, Globe, Smartphone, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend", 
      icon: <Database className="w-6 h-6" />,
      technologies: ["Node.js", "Express", "MongoDB", "REST API", "JWT"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native", "Expo"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Outils",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section 
      id="about" 
      className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            À Propos de Moi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Développeur passionné avec une approche moderne du développement web. 
            J'aime créer des expériences utilisateur exceptionnelles et des solutions techniques robustes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Présentation personnelle */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <Users className="w-7 h-7 text-blue-600" />
                Mon Parcours
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Passionné par le développement web depuis plusieurs années, j'ai acquis une solide 
                  expérience dans la création d'applications web modernes et performantes.
                </p>
                <p>
                  Mon approche se base sur une veille technologique constante et une attention 
                  particulière aux bonnes pratiques de développement et à l'expérience utilisateur.
                </p>
                <p>
                  J'accompagne mes clients dans la réalisation de leurs projets digitaux, 
                  de la conception à la mise en production.
                </p>
              </div>
            </div>
          </div>

          {/* Compétences */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Code className="w-7 h-7 text-purple-600" />
              Mes Compétences
            </h3>
            
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {skill.category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;