"use client";

import { 
  Code, 
  Globe, 
  Smartphone, 
  Users, 
  Server,
  Palette,
  Zap
} from "lucide-react";

const About = () => {
  const skillsData = [
    {
      category: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      category: "Backend", 
      icon: <Server className="w-5 h-5" />,
      technologies: ["Node.js", "Express", "MongoDB", "REST API", "JWT"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-5 h-5" />,
      technologies: ["React Native", "Expo"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      category: "Outils",
      icon: <Code className="w-5 h-5" />,
      technologies: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      category: "Design",
      icon: <Palette className="w-5 h-5" />,
      technologies: ["UI/UX", "Responsive Design", "Animations"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20"
    },
    {
      category: "Performance",
      icon: <Zap className="w-5 h-5" />,
      technologies: ["Optimisation", "SEO", "PWA"],
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    }
  ];

  return (
    <section 
      id="about" 
      className="pt-20 pb-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            À Propos de Moi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Développeur passionné avec une approche moderne du développement web. 
            J'aime créer des expériences utilisateur exceptionnelles.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Présentation personnelle - 2 colonnes */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Mon Parcours
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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

          {/* Compétences - 3 colonnes avec grille 2x3 */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Code className="w-6 h-6 text-purple-600" />
              Mes Compétences
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className={`${skill.bgColor} border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {skill.category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-gray-600"
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