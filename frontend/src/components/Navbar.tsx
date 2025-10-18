import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Furniture
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Home
            </Link>
            <Link
              to="/recommend"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/recommend') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Recommend
            </Link>
            <Link
              to="/analytics"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/analytics') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Analytics
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              About
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
