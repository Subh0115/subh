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
    <div className="min-h-screen flex flex-col-reverse md:flex-row bg-background">
      {/* Form Side */}
      <div className="w-full md:w-1/2 px-4 py-8 md:px-12 lg:px-20 flex flex-col justify-center animate-fade-in">
        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-sm text-muted-foreground">
              Join BtrackiFiS and start managing your finances
            </p>
          </div>

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

          <p className="text-center text-sm">
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

      {/* Image Side */}
      <div className="w-full md:w-1/2 bg-[#F2FCE2] flex items-center justify-center p-8">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome to BtrackiFiS
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your trusted companion for financial management and tracking
          </p>
          <img
            src="/illustration.png"
            alt="Financial Management Illustration"
            className="w-full max-w-sm mx-auto animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;