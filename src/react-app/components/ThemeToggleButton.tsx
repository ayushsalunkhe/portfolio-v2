import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/react-app/hooks/useTheme';

interface ThemeToggleButtonProps {
  showLabel?: boolean;
  variant?: 'default' | 'gif' | 'circle' | 'circle-blur';
  start?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  url?: string;
  className?: string;
}

export default function ThemeToggleButton({ 
  showLabel = false, 
  variant = 'circle-blur', 
  start = 'top-right',
  url,
  className = ''
}: ThemeToggleButtonProps) {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    // Clean up after animation completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getStartPosition = () => {
    switch (start) {
      case 'top-left': return 'top-0 left-0';
      case 'top-right': return 'top-0 right-0';
      case 'bottom-left': return 'bottom-0 left-0';
      case 'bottom-right': return 'bottom-0 right-0';
      case 'center': return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      default: return 'top-0 right-0';
    }
  };

  const renderCircleBlurVariant = () => (
    <>
      <button
        onClick={handleToggle}
        className={`relative p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group ${className}`}
        aria-label="Toggle theme"
      >
        <div className="relative w-6 h-6 z-20">
          <Sun 
            className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-500 ${
              theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
            }`} 
          />
          <Moon 
            className={`absolute inset-0 w-6 h-6 text-blue-300 transition-all duration-500 ${
              theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
            }`} 
          />
        </div>
        
        {showLabel && (
          <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            {theme === 'dark' ? 'Dark' : 'Light'}
          </span>
        )}
      </button>
      
      {/* Full-screen animated transition */}
      {isAnimating && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div 
            className={`absolute rounded-full ease-out ${
              isAnimating ? 'animate-theme-expand' : ''
            }`}
            style={{
              width: '48px',
              height: '48px',
              background: theme === 'light' 
                ? 'linear-gradient(135deg, rgba(30, 30, 30, 0.95), rgba(10, 10, 10, 0.95))'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95))',
              backdropFilter: 'blur(20px)',
              top: start.includes('top') ? '24px' : 'auto',
              bottom: start.includes('bottom') ? '24px' : 'auto',
              left: start.includes('left') ? '24px' : 'auto',
              right: start.includes('right') ? '24px' : 'auto',
              transform: start === 'center' ? 'translate(-50%, -50%)' : 
                        start === 'top-right' ? 'translate(50%, -50%)' :
                        start === 'top-left' ? 'translate(-50%, -50%)' :
                        start === 'bottom-right' ? 'translate(50%, 50%)' :
                        start === 'bottom-left' ? 'translate(-50%, 50%)' :
                        'translate(50%, -50%)',
              transformOrigin: start === 'top-right' ? 'top right' :
                              start === 'top-left' ? 'top left' :
                              start === 'bottom-right' ? 'bottom right' :
                              start === 'bottom-left' ? 'bottom left' :
                              'center'
            }}
          />
        </div>
      )}
    </>
  );

  const renderCircleVariant = () => (
    <button
      onClick={handleToggle}
      className={`relative overflow-hidden p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group ${className}`}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 z-20">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-500 ${
            theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-300 transition-all duration-500 ${
            theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
          }`} 
        />
      </div>
      
      {/* Simple circle animation */}
      <div 
        className={`absolute rounded-full transition-all duration-800 ease-out z-0 ${getStartPosition()}`}
        style={{
          width: isAnimating ? '150px' : '0px',
          height: isAnimating ? '150px' : '0px',
          background: isAnimating 
            ? theme === 'dark' 
              ? 'linear-gradient(135deg, rgb(147, 51, 234), rgb(59, 130, 246))'
              : 'linear-gradient(135deg, rgb(251, 191, 36), rgb(249, 115, 22))'
            : 'transparent',
          transform: start === 'center' ? 'translate(-50%, -50%)' : 
                    start.includes('right') ? 'translate(50%, -50%)' :
                    start.includes('bottom') ? 'translate(-50%, 50%)' : 
                    start.includes('left') && start.includes('bottom') ? 'translate(-50%, 50%)' :
                    'translate(-50%, -50%)'
        }}
      />
      
      {showLabel && (
        <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );

  const renderGifVariant = () => (
    <button
      onClick={handleToggle}
      className={`relative overflow-hidden p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group ${className}`}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {url ? (
          <img 
            src={url} 
            alt="Theme toggle animation"
            className="w-6 h-6 rounded-full object-cover"
          />
        ) : (
          <>
            <Sun 
              className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-300 ${
                theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
              }`} 
            />
            <Moon 
              className={`absolute inset-0 w-6 h-6 text-blue-300 transition-all duration-300 ${
                theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              }`} 
            />
          </>
        )}
      </div>
      
      {showLabel && (
        <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );

  const renderDefaultVariant = () => (
    <button
      onClick={toggleTheme}
      className={`p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group ${className}`}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-300 ${
            theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-300 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
          }`} 
        />
      </div>
      
      {showLabel && (
        <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );

  switch (variant) {
    case 'circle-blur':
      return renderCircleBlurVariant();
    case 'circle':
      return renderCircleVariant();
    case 'gif':
      return renderGifVariant();
    default:
      return renderDefaultVariant();
  }
}
