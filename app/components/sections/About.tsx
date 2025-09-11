'use client';

interface SkillGroup {
  category: string;
  skills: string[];
}

const About = () => {
  const skillGroups: SkillGroup[] = [
    { 
      category: "Frontend", 
      skills: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript"] 
    },
    { 
      category: "Backend", 
      skills: ["Node.js", "Express.js", "REST API", "JWT Auth"] 
    },
    { 
      category: "Base de données", 
      skills: ["MongoDB", "Mongoose ODM"] 
    },
    { 
      category: "Mobile", 
      skills: ["React Native"] 
    },
    { 
      category: "Outils", 
      skills: ["Git", "GitHub", "Vercel", "Figma", "Trello"] 
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          À propos de moi
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Développeur full-stack passionné par le développement web et la création d&apos;interfaces utilisateur intuitives. 
              J&apos;ai développé une solide expertise en développement d&apos;applications web modernes avec une attention particulière 
              portée aux interfaces utilisateur soignées et à l&apos;expérience utilisateur.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Mon approche combine créativité et technicité pour créer des solutions web innovantes et performantes. 
              J&apos;aime relever des défis techniques et transformer des idées en applications fonctionnelles.
            </p>
            
            {/* Card Expertise */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">🎯 Expertise</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Développement d&apos;applications web full-stack</li>
                <li>• Création d&apos;interfaces utilisateur modernes</li>
                <li>• Développement d&apos;APIs REST performantes</li>
                <li>• Applications mobiles avec React Native</li>
              </ul>
            </div>
          </div>
          
          {/* Colonne droite - Compétences */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">Compétences techniques</h3>
            
            <div className="space-y-6">
              {skillGroups.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      >
                        {skill}
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