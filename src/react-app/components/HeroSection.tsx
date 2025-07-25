import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import GlassCard from './GlassCard';

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'MERN Stack Developer', 
    'Software Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative pt-16 sm:pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Ayush
              </span>
            </h1>
            
            <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Passionate MERN Stack developer creating innovative web applications. 
              I blend creativity with technical expertise to build scalable solutions.
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center lg:justify-start gap-6">
            <a
              href="https://github.com/ayushsalunkhe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200/60 dark:bg-white/10 backdrop-blur-sm border border-gray-300/40 dark:border-white/20 hover:bg-gray-300/70 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-white hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ayushsalunkhe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200/60 dark:bg-white/10 backdrop-blur-sm border border-gray-300/40 dark:border-white/20 hover:bg-gray-300/70 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-white hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ayushsalunkhe@example.com"
              className="p-3 rounded-full bg-gray-200/60 dark:bg-white/10 backdrop-blur-sm border border-gray-300/40 dark:border-white/20 hover:bg-gray-300/70 dark:hover:bg-white/20 transition-all duration-300 text-gray-700 dark:text-white hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-violet-500/25 text-sm sm:text-base text-center"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-200/60 dark:bg-white/10 backdrop-blur-sm border border-gray-300/40 dark:border-white/20 text-gray-700 dark:text-white rounded-full font-semibold hover:bg-gray-300/70 dark:hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right side - Code terminal */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <GlassCard className="w-full max-w-sm sm:max-w-md">
            <div className="space-y-4">
              {/* Terminal header */}
              <div className="flex items-center gap-2 pb-4 border-b border-gray-300/30 dark:border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">terminal</span>
              </div>

              {/* Code content */}
              <div className="font-mono text-xs sm:text-sm space-y-2">
                <div className="text-gray-600 dark:text-gray-400">
                  <span className="text-pink-500 dark:text-pink-400">const</span>{' '}
                  <span className="text-gray-900 dark:text-white">developer</span>{' '}
                  <span className="text-pink-500 dark:text-pink-400">=</span>{' '}
                  <span className="text-gray-600 dark:text-gray-400">{'{'}</span>
                </div>
                <div className="pl-4 text-gray-600 dark:text-gray-400">
                  <span className="text-gray-900 dark:text-white">name:</span>{' '}
                  <span className="text-green-600 dark:text-green-400">'Ayush Salunkhe'</span>,
                </div>
                <div className="pl-4 text-gray-600 dark:text-gray-400">
                  <span className="text-gray-900 dark:text-white">skills:</span>{' '}
                  <span className="text-gray-600 dark:text-gray-400">[</span>
                </div>
                <div className="pl-8 text-green-600 dark:text-green-400">
                  'React', 'Node.js', 'MongoDB',
                </div>
                <div className="pl-8 text-green-600 dark:text-green-400">
                  'Express', 'JavaScript', 'Python'
                </div>
                <div className="pl-4 text-gray-600 dark:text-gray-400">],</div>
                <div className="pl-4 text-gray-600 dark:text-gray-400">
                  <span className="text-gray-900 dark:text-white">education:</span>{' '}
                  <span className="text-green-600 dark:text-green-400">'Computer Engineering'</span>,
                </div>
                <div className="pl-4 text-gray-600 dark:text-gray-400">
                  <span className="text-gray-900 dark:text-white">passionate:</span>{' '}
                  <span className="text-blue-600 dark:text-blue-400">true</span>,
                </div>
                <div className="pl-4 text-gray-600 dark:text-gray-400">
                  <span className="text-gray-900 dark:text-white">availableForWork:</span>{' '}
                  <span className="text-blue-600 dark:text-blue-400">true</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400">{'}'}</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-600/60 dark:text-white/60" />
      </div>
    </section>
  );
}
