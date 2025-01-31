import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import SocialLoginButtons from "@/components/auth/SocialLoginButtons";
import SignUpForm from "@/components/auth/SignUpForm";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            firstName: values.firstName,
            lastName: values.lastName,
          },
        },
      });

      if (error) throw error;

      if (data) {
        toast({
          title: "Success!",
          description: "Your account has been created. Please check your email to verify your account.",
        });
        navigate("/signin");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-purple-200/30 to-cyan-200/30 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] -z-10" />

      {/* Content */}
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        <div className="text-center md:text-left space-y-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="text-sm text-muted-foreground">
            Join BtrackiFiS and start managing your finances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <SocialLoginButtons />
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            <SignUpForm onSubmit={handleSubmit} />
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="max-w-sm text-center space-y-6">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Welcome to BtrackiFiS
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Your trusted companion for financial management and tracking
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm mt-8">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-semibold text-purple-600 hover:text-purple-700 hover:underline transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;