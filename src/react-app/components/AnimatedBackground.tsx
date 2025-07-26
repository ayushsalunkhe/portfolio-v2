export default function PremiumAnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Layer 1: The Main Gradient
        A deep, multi-color gradient that provides the base 'premium dark' feel.
        It moves from a dark slate, through a deep indigo, to pure black.
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950 to-black" />

      {/* Layer 2: Subtle Dot Grid
        An advanced technique using a repeating radial gradient to create a techy dot pattern.
        A mask is applied to make it fade out towards the edges, focusing the eye on the center.
      */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
          maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 100%)',
        }}
      />

      {/* Layer 3: Animated Glowing Orbs
        These provide color and a sense of life. Their colors are chosen to complement
        the background gradient and the typical tech/portfolio accent colors (cyan, purple).
        The blur and low opacity make them soft and ambient.
      */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '1s' }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '3s' }}
      />
    </div>
  );
}