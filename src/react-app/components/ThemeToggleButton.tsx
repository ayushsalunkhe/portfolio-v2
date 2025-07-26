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

  // Updated toggle handler with View Transitions API support
  const handleToggle = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        toggleTheme();
      });
    } else {
      toggleTheme();
    }
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
  );

  // (Other variant renderers remain unchanged except handleToggle usage)

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
      
      <div 
        className={`absolute rounded-full transition-all duration-800 ease-out z-0 ${getStartPosition()}`}
        style={{
          width: '0px',
          height: '0px',
          background: 'transparent',
          transform: 'translate(-50%, -50%)'
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
      onClick={handleToggle}
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
