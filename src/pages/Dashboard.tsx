import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/signin');
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/signin');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="relative">
          <h1 className="text-4xl font-bold mb-8 text-primary">Welcome to Your Dashboard</h1>
          <div className="grid gap-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://antimetal.com/images/hero/preview.png"
                alt="Banking Dashboard Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;