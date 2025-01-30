import { Button } from "@/components/ui/button";
import { Github, Apple, Facebook } from "lucide-react";

const SocialLoginButtons = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 animate-fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        <Github className="h-5 w-5" />
        Continue with Github
      </Button>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <Apple className="h-5 w-5" />
        Continue with Apple
      </Button>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 animate-fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        <Facebook className="h-5 w-5" />
        Continue with Facebook
      </Button>
    </div>
  );
};

export default SocialLoginButtons;