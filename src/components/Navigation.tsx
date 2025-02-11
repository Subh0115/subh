import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold gradient-text">
          BtrackiFiS
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-muted hover:text-foreground transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-muted hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-muted hover:text-foreground transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/signin">
            <Button variant="ghost" className="hidden md:inline-flex hover:bg-secondary/20 hover:text-secondary">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-secondary to-accent text-primary font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;