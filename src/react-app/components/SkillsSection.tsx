import { useState } from 'react';
import GlassCard from './GlassCard'; // Assuming GlassCard component exists

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  // New, updated skill list categorized for a professional look
  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    backend: {
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'Python', 'SQL', 'Firebase', 'REST APIs'],
    },
    systems: {
        title: 'Programming & Systems',
        skills: ['C Programming', 'Linux', 'Bash Scripting', 'Git & GitHub'],
    },
    tools: {
        title: 'Tools & Software',
        skills: ['VS Code', 'Jupyter Notebook', 'Postman', 'Figma', 'Photoshop'],
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Technical Toolbox
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of technologies I use to build robust and efficient solutions.
          </p>
        </div>

        {/* Category tabs - Refined styling */}
        <div className="flex justify-center mb-12">
          <GlassCard className="p-1.5 w-full max-w-md sm:max-w-none sm:w-auto">
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1">
              {Object.entries(skillCategories).map(([key, { title }]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base w-full sm:w-auto ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/10'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Skills Grid Display - Replaces progress bars */}
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill) => (
                <div 
                  key={skill} 
                  className="bg-gray-500/5 dark:bg-white/5 p-4 rounded-xl border border-transparent hover:border-violet-400/50 transition-all duration-300 group"
                >
                  {/* In the future, you can add SVG icons here */}
                  <p className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Additional Info - Updated for impact */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16">
          <GlassCard className="text-center p-6">
            <h4 className="text-3xl font-bold text-violet-500 dark:text-violet-400">20+</h4>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Core Technologies</p>
          </GlassCard>
          <GlassCard className="text-center p-6">
            <h4 className="text-3xl font-bold text-violet-500 dark:text-violet-400">1000+</h4>
            <p className="mt-2 text-gray-700 dark:text-gray-300">GitHub Commits</p>
          </GlassCard>
          <GlassCard className="text-center p-6">
            <h4 className="text-3xl font-bold text-violet-500 dark:text-violet-400">Daily</h4>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Learning & Improving</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}