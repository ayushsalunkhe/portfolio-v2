import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  stickyIndex?: number
  variant?: "default" | "premium" | "luxury" | "minimal"
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  stickyIndex,
  variant = "premium",
}: GlassCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "premium":
        return `
          backdrop-blur-2xl 
          bg-white/85 dark:bg-white/8
          border border-white/30 dark:border-white/15
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]
          before:absolute before:inset-0 before:rounded-3xl 
          before:bg-gradient-to-br before:from-white/20 before:to-transparent 
          before:pointer-events-none before:opacity-0 before:transition-opacity before:duration-500
          relative overflow-hidden
        `
      case "luxury":
        return `
          backdrop-blur-3xl 
          bg-white/90 dark:bg-white/12
          border-2 border-white/40 dark:border-white/20
          shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.8)]
          before:absolute before:inset-0 before:rounded-3xl 
          before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent 
          before:pointer-events-none before:opacity-0 before:transition-all before:duration-700
          after:absolute after:inset-0 after:rounded-3xl 
          after:bg-gradient-to-tr after:from-transparent after:via-white/5 after:to-white/20
          after:pointer-events-none after:opacity-60 dark:after:opacity-30
          relative overflow-hidden
        `
      case "minimal":
        return `
          backdrop-blur-lg 
          bg-white/70 dark:bg-white/5
          border border-gray-200/50 dark:border-white/10
          shadow-lg shadow-gray-200/50 dark:shadow-black/30
        `
      default:
        return `
          backdrop-blur-xl 
          bg-white/80 dark:bg-white/5
          border border-gray-200/50 dark:border-white/10
          shadow-xl shadow-gray-200/20 dark:shadow-black/20
        `
    }
  }

  const getHoverClasses = () => {
    if (!hover) return ""

    switch (variant) {
      case "premium":
        return `
          hover:bg-white/95 dark:hover:bg-white/15
          hover:border-white/50 dark:hover:border-white/25
          hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] dark:hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.8)]
          hover:before:opacity-100
          hover:-translate-y-1 hover:scale-[1.02]
        `
      case "luxury":
        return `
          hover:bg-white/95 dark:hover:bg-white/18
          hover:border-white/60 dark:hover:border-white/30
          hover:shadow-[0_25px_80px_-12px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_25px_80px_-12px_rgba(0,0,0,0.9)]
          hover:before:opacity-100
          hover:-translate-y-2 hover:scale-[1.03]
          hover:after:opacity-80 dark:hover:after:opacity-50
        `
      case "minimal":
        return `
          hover:bg-white/85 dark:hover:bg-white/8
          hover:border-gray-300/60 dark:hover:border-white/20
          hover:shadow-xl hover:shadow-gray-300/30 dark:hover:shadow-black/40
        `
      default:
        return `
          hover:bg-white/90 dark:hover:bg-white/10
          hover:border-gray-300/60 dark:hover:border-white/20
        `
    }
  }

  return (
    <div
      id={stickyIndex ? `sticky-card-${stickyIndex}` : undefined}
      className={`
        ${getVariantClasses()}
        rounded-3xl p-6
        ${getHoverClasses()}
        transition-all duration-500 ease-out
        ${stickyIndex ? "sticky-card" : ""}
        group
        ${className}
      `}
    >
      {/* Premium glow effect */}
      {variant === "premium" && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      )}

      {/* Luxury shimmer effect */}
      {variant === "luxury" && (
        <>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 dark:via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 dark:via-white/30 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/50 dark:via-white/30 to-transparent" />
        </>
      )}

      {/* Inner content */}
      <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-1px]">{children}</div>

      {/* Corner accents for luxury variant */}
      {variant === "luxury" && (
        <>
          <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-white/40 dark:border-white/30 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-white/40 dark:border-white/30 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-white/40 dark:border-white/30 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-white/40 dark:border-white/30 rounded-br-lg" />
        </>
      )}
    </div>
  )
}
