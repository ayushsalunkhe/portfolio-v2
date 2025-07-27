export default function DualThemeAnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* =================================================================
          LAYER 1: Main Gradient
          - Dark Mode: Now an even darker, more subtle black-to-gray gradient.
      ================================================================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-black dark:via-gray-950 dark:to-black" />

      {/* =================================================================
          LAYER 2: Dot Grid (Conditional)
          - No changes here.
      ================================================================= */}
      {/* Light mode dot grid (darker dots) */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
          maskImage: 'radial-gradient(ellipse at center, white 50%, transparent 100%)',
        }}
      />
      {/* Dark mode dot grid (lighter dots) */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
          maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 100%)',
        }}
      />

      {/* =================================================================
          LAYER 3: Animated Orbs (Dimmed)
          - All orbs have reduced opacity and use darker color shades for a
            more subtle effect, especially on mobile. The middle orb is now the dimmest.
      ================================================================= */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-400/20 dark:from-cyan-600/15 dark:to-teal-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-rose-400/20 dark:from-purple-700/15 dark:to-indigo-700/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 dark:from-indigo-800/10 dark:to-blue-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}/>
      
      {/* =================================================================
          LAYER 4: Floating Particles
          - No changes here.
      ================================================================= */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/30 dark:bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
