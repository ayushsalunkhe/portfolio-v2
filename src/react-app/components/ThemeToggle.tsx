import ThemeToggleButton from './ThemeToggleButton';

export default function ThemeToggle() {
  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      <ThemeToggleButton 
        variant="circle-blur" 
        start="top-right"
        showLabel={false}
      />
    </div>
  );
}
