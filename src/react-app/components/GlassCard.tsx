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
        relative overflow-hidden // Added for gradient overlay and refined shadows
        backdrop-blur-3xl // Increased blur for a softer, more premium look
        bg-gradient-to-br from-white/85 to-white/70 dark:from-white/10 dark:to-white/5 // Subtle gradient for depth
        border border-gray-200/60 dark:border-white/15 // Slightly stronger border for definition
        rounded-3xl p-6
        ${hover ? 'hover:scale-[1.01] hover:shadow-2xl hover:shadow-gray-300/30 dark:hover:shadow-black/30 hover:border-gray-300/70 dark:hover:border-white/25' : ''} // Enhanced hover effects
        transition-all duration-500 ease-in-out // Smoother transitions
        shadow-xl shadow-gray-200/25 dark:shadow-black/25 // Refined initial shadow
        ${stickyIndex ? 'sticky-card' : ''}
        ${className}
      `}
    >
      {/* Subtle Inner Border/Highlight for premium feel */}
      <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] border border-white/50 dark:border-white/5 pointer-events-none"></div>

      {children}
    </div>
  );
}
