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
        backdrop-blur-2xl // Slightly reduced blur intensity for better control over overall clarity
        
        // --- NEW STRATEGY: Balanced Opacity & Subtle Gradient for Light Mode ---
        // A more balanced opacity to give the card "body" without making it dark or fully transparent
        // Using a very subtle white gradient for a luminous feel in light mode
        bg-gradient-to-br from-white/40 to-white/20 // Adjusted to be translucent, but not invisible
        
        // Dark mode settings remain similar, assuming your page background in dark mode is dark
        dark:bg-white/5 dark:to-white/[0.02] 

        border border-gray-200/70 dark:border-white/15 // Slightly more defined border for structure
        rounded-3xl p-6
        
        ${hover ? 'hover:scale-[1.01] hover:shadow-2xl hover:shadow-gray-300/40 dark:hover:shadow-black/40 hover:border-gray-300/80 dark:hover:border-white/25' : ''}
        transition-all duration-500 ease-in-out
        shadow-xl shadow-gray-200/35 dark:shadow-black/35 // Refined initial shadow
        ${stickyIndex ? 'sticky-card' : ''}
        ${className}
      `}
    >
      {/* Subtle Inner Border/Highlight (Important for premium feel) */}
      {/* Increased opacity of this inner border slightly for more definition */}
      <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] border border-white/70 dark:border-white/10 pointer-events-none"></div>

      {children}
    </div>
  );
}
