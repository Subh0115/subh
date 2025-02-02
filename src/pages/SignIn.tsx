import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import SignInForm from "@/components/auth/SignInForm";

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/dashboard');
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen relative bg-background flex items-center justify-center p-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-secondary/20 to-accent/20 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10" />
      
      {/* Content */}
      <div className="w-full max-w-md glass-card p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Welcome Back to
            <br />
            <span className="gradient-text">
              BtrackiFiS
            </span>
          </h1>
          <p className="text-muted-foreground">Sign in to continue to your account</p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;