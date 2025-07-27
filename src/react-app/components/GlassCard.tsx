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
        backdrop-blur-xl // Main blur effect - slightly toned down to prevent over-blurring content
        
        // --- CRITICAL ADJUSTMENT: ENSURING VISIBILITY IN LIGHT MODE ---
        // We're making the white background more opaque to ensure it's always visible,
        // while still using a gradient for depth.
        bg-gradient-to-br from-white/70 to-white/50 // Significantly more opaque white for light mode
        
        // Dark mode settings (assuming a dark background for your page in dark mode)
        dark:bg-white/10 dark:to-white/5 

        border border-gray-200/80 dark:border-white/20 // Stronger, more defined borders
        rounded-3xl p-6
        
        ${hover ? 'hover:scale-[1.01] hover:shadow-2xl hover:shadow-gray-300/50 dark:hover:shadow-black/50 hover:border-gray-300/90 dark:hover:border-white/30' : ''}
        transition-all duration-500 ease-in-out
        shadow-xl shadow-gray-200/40 dark:shadow-black/40 // More pronounced shadow for depth
        ${stickyIndex ? 'sticky-card' : ''}
        ${className}
      `}
    >
      {/* Subtle Inner Border/Highlight - made more prominent for definition */}
      <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] border border-white/80 dark:border-white/15 pointer-events-none"></div>

      {children}
    </div>
  );
}
