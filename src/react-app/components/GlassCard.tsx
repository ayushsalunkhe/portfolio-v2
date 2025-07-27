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
        backdrop-blur-3xl
        // --- IMPORTANT FIX HERE: Even lower opacity for light mode background ---
        bg-gradient-to-br from-white/15 to-white/5 // Reduced from /20 and /10
        dark:from-white/5 dark:to-white/[0.02]
        border border-gray-200/60 dark:border-white/15
        rounded-3xl p-6
        ${hover ? 'hover:scale-[1.01] hover:shadow-2xl hover:shadow-gray-300/30 dark:hover:shadow-black/30 hover:border-gray-300/70 dark:hover:border-white/25' : ''}
        transition-all duration-500 ease-in-out
        shadow-xl shadow-gray-200/25 dark:shadow-black/25
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
