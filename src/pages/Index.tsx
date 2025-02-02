import { ArrowRight, ChevronDown, PieChart, LineChart, Wallet } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="mx-auto max-w-7xl text-center relative">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 animate-float">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                BtrackiFiS
              </span>
              <br />
              <span className="text-foreground">
                Your Financial Companion
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/80 mb-8">
              Better tracking for smarter financial success. Experience a new way to manage, monitor, and maximize your money.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/signup">
                <button className="px-6 py-3 bg-gradient-accent text-primary font-semibold rounded-full hover:opacity-90 transition-all duration-300 animate-pulse-glow">
                  Open Account
                </button>
              </Link>
              <button className="px-6 py-3 glass rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2 text-foreground group">
                View Demo 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-16">
            <div className="flex justify-center">
              <img
                src="https://antimetal.com/images/hero/preview.png"
                alt="Banking Dashboard"
                className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto animate-hover-glow"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Powerful Financial Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expense Tracking",
                  description: "Automatically categorize and track all your spending in real-time",
                  icon: <Wallet className="w-8 h-8" />,
                },
                {
                  title: "Investment Analytics",
                  description: "Advanced charts and insights for your investment portfolio",
                  icon: <LineChart className="w-8 h-8" />,
                },
                {
                  title: "Budget Management",
                  description: "Set and track budgets with smart alerts and recommendations",
                  icon: <PieChart className="w-8 h-8" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-accent mb-4 animate-float">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8 bg-gradient-dark">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Common Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "How secure is my financial data?",
                  answer: "We use bank-level encryption and security measures to protect your data. All transactions and personal information are encrypted and stored securely.",
                },
                {
                  question: "What are the account fees?",
                  answer: "We offer transparent pricing with no hidden fees. Basic accounts are free, while premium features are available with our Pro plan starting at $9.99/month.",
                },
                {
                  question: "How do I start tracking my finances?",
                  answer: "Simply create an account, connect your bank accounts securely, and our system will automatically categorize and track your transactions.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="glass-card overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 text-foreground transition-colors"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 py-4 bg-black/20">
                      <p className="text-foreground/80">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-primary text-foreground px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Ready to take control of your finances?
            </h2>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already managing their money smarter with BtrackiFiS.
            </p>
            <Link to="/signup">
              <button className="px-8 py-4 bg-gradient-accent text-primary rounded-full font-semibold hover:opacity-90 transition-all duration-300 animate-pulse-glow">
                Create Free Account
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;