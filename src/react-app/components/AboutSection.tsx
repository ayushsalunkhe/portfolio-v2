import { Code, Palette, Lightbulb, Users } from 'lucide-react';
import GlassCard from './GlassCard';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: 'MERN Stack',
      description: 'Proficient in MongoDB, Express.js, React, and Node.js development.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with modern design principles.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant, scalable solutions.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively to deliver high-quality projects on time.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            I'm Ayush Salunkhe, a passionate Computer Engineering student and MERN Stack developer 
            who loves building innovative web applications. I'm dedicated to creating digital solutions 
            that make a meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Lottie Animation */}
          <div className="relative order-2 lg:order-1">
            <GlassCard className="p-6 sm:p-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <DotLottieReact
                  src="https://lottie.host/d3ceb63e-3986-43f2-b7f8-09310bab4659/njQxj3lZjA.json"
                  loop
                  autoplay
                />
              </div>
            </GlassCard>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Computer Engineering Student & Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Currently pursuing Computer Engineering, I specialize in full-stack web development 
                with expertise in the MERN stack. My journey started with a curiosity about how 
                software works, and it has evolved into a passion for creating seamless digital experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                I enjoy working on challenging projects that push my boundaries and allow me to learn 
                new technologies. When I'm not coding, you'll find me exploring the latest tech trends, 
                contributing to open-source projects, or working on personal development initiatives.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Education</h4>
              <div className="p-4 bg-gray-100/60 dark:bg-white/10 rounded-lg border border-gray-300/40 dark:border-white/20">
                <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Bachelor of Computer Engineering</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Currently Pursuing</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">2+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Years Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {highlights.map((highlight, index) => (
            <GlassCard key={index} className="text-center p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <highlight.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{highlight.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
