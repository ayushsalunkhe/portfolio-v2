import { useState } from 'react';
import GlassCard from './GlassCard';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-600' },
        { name: 'HTML5', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'Tailwind CSS', level: 80, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Bootstrap', level: 75, color: 'from-purple-400 to-purple-600' },
      ]
    },
    backend: {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 82, color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-800' },
        { name: 'Python', level: 75, color: 'from-yellow-400 to-yellow-600' },
        { name: 'REST APIs', level: 88, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Firebase', level: 70, color: 'from-orange-500 to-orange-700' },
      ]
    },
    tools: {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-700' },
        { name: 'npm/yarn', level: 80, color: 'from-red-400 to-red-600' },
        { name: 'Postman', level: 75, color: 'from-orange-500 to-orange-700' },
        { name: 'Figma', level: 70, color: 'from-purple-400 to-purple-600' },
        { name: 'Photoshop', level: 65, color: 'from-blue-600 to-blue-800' },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Technologies and tools I use to build modern web applications
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <GlassCard className="p-1 sm:p-2 w-full max-w-md sm:max-w-none sm:w-auto">
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/10'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Skills display */}
        <div className="max-w-4xl mx-auto px-4">
          <GlassCard className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].title} Skills
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-gray-200/60 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Additional info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 px-4">
          // Update the stats cards
          <GlassCard className="text-center p-4 sm:p-6" stickyIndex={1}>
            {/* Technologies card content */}
          </GlassCard>
          <GlassCard className="text-center p-4 sm:p-6" stickyIndex={2}>
            {/* Commits card content */}
          </GlassCard>
          <GlassCard className="text-center p-4 sm:p-6" stickyIndex={3}>
            {/* Learning Mindset card content */}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
