import AnimatedBackground from '@/react-app/components/AnimatedBackground';
import ThemeToggle from '@/react-app/components/ThemeToggle';
import Navigation from '@/react-app/components/Navigation';
import HeroSection from '@/react-app/components/HeroSection';
import AboutSection from '@/react-app/components/AboutSection';
import SkillsSection from '@/react-app/components/SkillsSection';
import ProjectsSection from '@/react-app/components/ProjectsSection';
import ContactSection from '@/react-app/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <ThemeToggle />
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-300/30 dark:border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            © 2024 Ayush Salunkhe. Built with React, TypeScript, and Vision Pro inspiration.
          </p>
        </div>
      </footer>
    </div>
  );
}
