import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import SocialLoginButtons from "./SocialLoginButtons";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resendingEmail, setResendingEmail] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleResendConfirmation = async (email: string) => {
    setResendingEmail(true);
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });
      
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Confirmation email resent. Please check your inbox.", {
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error("Failed to resend confirmation email. Please try again.");
    } finally {
      setResendingEmail(false);
    }
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        if (error.message === "Email not confirmed") {
          toast.error(
            <div className="flex flex-col gap-2">
              <p>Please confirm your email address to sign in.</p>
              <Button
                variant="outline"
                size="sm"
                disabled={resendingEmail}
                onClick={() => handleResendConfirmation(values.email)}
              >
                {resendingEmail ? "Sending..." : "Resend confirmation email"}
              </Button>
            </div>,
            {
              duration: 10000,
            }
          );
        } else {
          toast.error(error.message);
        }
        return;
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 animate-fade-in">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    {...field}
                    className="border-white/20 focus:border-white text-foreground transition-all duration-300 placeholder:text-white/50 bg-surface/50"
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    className="border-white/20 focus:border-white text-foreground transition-all duration-300 placeholder:text-white/50 bg-surface/50"
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <Link
              to="/signup"
              className="text-sm text-secondary hover:text-accent hover:underline transition-colors"
            >
              Don't have an account?
            </Link>
            <Link
              to="/forgot-password"
              className="text-sm text-secondary hover:text-accent hover:underline transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/80 hover:to-accent/80 text-foreground transition-all duration-300 transform hover:scale-[1.02] button-glow"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/20"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-white/50">Or continue with</span>
        </div>
      </div>

      <SocialLoginButtons />
    </div>
  );
};

export default SignInForm;