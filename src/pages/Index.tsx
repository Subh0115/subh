import { ArrowRight, ChevronDown, PieChart, LineChart, Wallet, Shield } from "lucide-react";
import { useState } from "react";
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
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary dark:text-white mb-6">
              Smart Banking for
              <br />
              <span className="bg-gradient-to-r from-[#9EE755] to-[#CFDD3C] bg-clip-text text-transparent">
                Smarter Finance
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-secondary dark:text-gray-300 mb-8">
              Track expenses, manage investments, and grow your wealth with our comprehensive financial management tools.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors dark:bg-white dark:text-black">
                Open Account
              </button>
              <button className="px-6 py-3 glass rounded-full hover:bg-white/20 transition-colors flex items-center gap-2 text-primary dark:text-white">
                View Demo <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-16">
            <div className="flex justify-center">
              <img
                src="https://antimetal.com/images/hero/preview.png"
                alt="Banking Dashboard"
                className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-surface dark:bg-black/20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16 text-primary dark:text-white">
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
                  className="p-6 rounded-2xl bg-background dark:bg-black/40 border border-border dark:border-white/10 hover:border-accent transition-colors"
                >
                  <div className="text-primary dark:text-white mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-secondary dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-16 text-primary dark:text-white">
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
                  className="border border-border dark:border-white/10 rounded-lg overflow-hidden dark:bg-black/40"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background/50 text-primary dark:text-white"
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
                    <div className="px-6 py-4 bg-background/50 dark:bg-black/20">
                      <p className="text-secondary dark:text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary dark:bg-black text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Ready to take control of your finances?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already managing their money smarter with BtrackiFiS.
            </p>
            <button className="px-8 py-4 bg-accent text-primary dark:text-black rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Create Free Account
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;