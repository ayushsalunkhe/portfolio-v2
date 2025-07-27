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
        backdrop-blur-md
        bg-gradient-to-br from-white/90 to-white/80
        dark:from-white/10 dark:to-white/5
        border border-gray-200/80 dark:border-white/20
        rounded-3xl p-6
        ${hover ? 'hover:scale-[1.01] hover:shadow-2xl hover:shadow-gray-300/50 dark:hover:shadow-black/50 hover:border-gray-300/90 dark:hover:border-white/30' : ''}
        transition-all duration-500 ease-in-out
        shadow-xl shadow-gray-200/40 dark:shadow-black/40
        ${stickyIndex ? 'sticky-card' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] border border-white/80 dark:border-white/15 pointer-events-none"></div>

      <div className="relative z-10 text-black dark:text-white">
        {children}
      </div>
    </div>
  );
}
