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
        backdrop-blur-xl 
        bg-white/80 dark:bg-white/5 
        border border-gray-200/50 dark:border-white/10
        rounded-3xl p-6
        ${hover ? 'hover:bg-white/90 dark:hover:bg-white/10 hover:border-gray-300/60 dark:hover:border-white/20' : ''}
        transition-all duration-500 ease-out
        shadow-xl shadow-gray-200/20 dark:shadow-black/20
        ${stickyIndex ? 'sticky-card' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
