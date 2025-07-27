import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  stickyIndex?: number;
}

export default function GlassCard({  
  children,  
  className = '',  
  hover = true,
  stickyIndex
}: GlassCardProps) {
  return (
    <div
      id={stickyIndex ? `sticky-card-${stickyIndex}` : undefined}
      className={`
        // --- Core Vision Pro Style ---
        backdrop-blur-2xl 
        rounded-3xl 
        p-6
        border
        transition-all duration-300

        // --- Background & Shadow (Light vs. Dark) ---
        // Light Mode: A clean, white glass look
        bg-gradient-to-br from-white/80 to-white/60
        border-white/50
        shadow-2xl shadow-gray-300/20

        // Dark Mode: A brighter, ethereal glass that 'glows'
        dark:bg-gradient-to-br dark:from-white/10 dark:to-white/5
        dark:border-white/15
        dark:shadow-2xl dark:shadow-black/20

        // --- Hover Effect ---
        ${hover ? 'hover:dark:border-white/25 hover:border-white' : ''}
        
        // --- Sticky & Custom Classes ---
        ${stickyIndex ? 'sticky-card' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
