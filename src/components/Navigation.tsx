import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const Navigation = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border dark:bg-black/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          BtrackiFiS
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" className="hidden md:inline-flex dark:text-gray-300">
            Sign In
          </Button>
          <Button className="text-white dark:bg-white dark:text-black">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;