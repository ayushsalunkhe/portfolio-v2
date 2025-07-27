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
        relative overflow-hidden
        backdrop-blur-3xl // Strong blur for the frosted effect
        // --- NEW ATTEMPT: EXTREMELY LOW OPACITY FOR LIGHT MODE BACKGROUND ---
        // We're aiming for near-full transparency to let your page background show
        bg-white/[0.05] dark:bg-white/[0.02] // Very, very low opacity for light mode
        // Removed gradient for now to simplify and ensure transparency
        
        border border-gray-200/50 dark:border-white/10 // Adjusted border slightly for better visibility
        rounded-3xl p-6
        ${hover ? 'hover:scale-[1.01] hover:shadow-2xl hover:shadow-gray-300/40 dark:hover:shadow-black/40 hover:border-gray-300/70 dark:hover:border-white/25' : ''}
        transition-all duration-500 ease-in-out
        shadow-xl shadow-gray-200/30 dark:shadow-black/30 // Slightly more pronounced shadow
        ${stickyIndex ? 'sticky-card' : ''}
        ${className}
      `}
    >
      {/* Subtle Inner Border/Highlight (Still good to keep) */}
      <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] border border-white/60 dark:border-white/5 pointer-events-none"></div>

      {children}
    </div>
  );
}
