import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import GlassCard from './GlassCard';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Task Management System',
      description: 'A full-stack MERN application for managing tasks and projects with user authentication, real-time updates, and collaborative features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://github.com/ayushsalunkhe',
      githubUrl: 'https://github.com/ayushsalunkhe',
      featured: true
    },
    {
      id: 2,
      title: 'E-Learning Platform',
      description: 'An interactive e-learning platform with course management, video streaming, progress tracking, and student-teacher interaction features.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://github.com/ayushsalunkhe',
      githubUrl: 'https://github.com/ayushsalunkhe',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website with modern design, dark mode toggle, and smooth animations built with React and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive'],
      liveUrl: 'https://github.com/ayushsalunkhe',
      githubUrl: 'https://github.com/ayushsalunkhe',
      featured: false
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A weather forecasting application with location-based weather data, interactive maps, and detailed weather analytics using weather APIs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      tags: ['JavaScript', 'Weather API', 'CSS3', 'HTML5'],
      liveUrl: 'https://github.com/ayushsalunkhe',
      githubUrl: 'https://github.com/ayushsalunkhe',
      featured: false
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, private messaging, group chats, and emoji support using Socket.io.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: 'https://github.com/ayushsalunkhe',
      githubUrl: 'https://github.com/ayushsalunkhe',
      featured: false
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A full-featured blog platform with user authentication, post creation, comments, likes, and admin dashboard for content management.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      tags: ['React', 'Express', 'MongoDB', 'JWT'],
      liveUrl: 'https://github.com/ayushsalunkhe',
      githubUrl: 'https://github.com/ayushsalunkhe',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            A collection of projects showcasing my skills in full-stack development and modern web technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {featuredProjects.map((project) => (
            <GlassCard key={project.id} className="group overflow-hidden p-4 sm:p-6">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 text-xs bg-gray-200/60 dark:bg-white/10 text-gray-700 dark:text-white rounded-full border border-gray-300/40 dark:border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Other Projects */}
        <div className="px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Other Notable Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project) => (
              <GlassCard key={project.id} className="group p-4 sm:p-6">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-3 h-3 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-200/60 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ayushsalunkhe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-200/60 dark:bg-white/10 backdrop-blur-sm border border-gray-300/40 dark:border-white/20 text-gray-700 dark:text-white rounded-full font-semibold hover:bg-gray-300/70 dark:hover:bg-white/20 transition-all duration-300"
          >
            View More on GitHub
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
