
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Get started with a free initial session",
    features: [
      "30-minute initial consultation",
      "Basic career assessment",
      "Profile creation",
      "Access to mentor directory"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Standard",
    price: "৳1999",
    description: "Comprehensive guidance for job seekers",
    features: [
      "Three 45-min mentorship sessions",
      "CV review and optimization",
      "Mock interview with feedback",
      "LinkedIn profile assessment",
      "30-day email support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Premium",
    price: "৳4999",
    description: "Full career transformation package",
    features: [
      "Five 60-min mentorship sessions",
      "Comprehensive career planning",
      "Resume & cover letter optimization",
      "Three mock interviews with feedback",
      "Portfolio/GitHub review",
      "60-day unlimited email support"
    ],
    cta: "Choose Premium",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-white to-topmate-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invest in your career growth with affordable mentorship packages
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`animate-on-scroll border-0 rounded-3xl overflow-hidden ${
              plan.popular ? 'shadow-xl relative' : 'shadow-sm hover:shadow-xl'
            } transition-all duration-300`} style={{ animationDelay: `${index * 0.2}s` }}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-topmate-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.name !== "Basic" && <span className="text-muted-foreground">/package</span>}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-center text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-topmate-600 mr-3 h-5 w-5 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button className={`w-full rounded-full ${plan.popular ? 'bg-topmate-600 hover:bg-topmate-700' : ''}`}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-xl font-bold mb-4">For Mentors</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your expertise and earn by helping others grow. Mentors receive 70% of all session fees.
          </p>
          <Button className="mt-6 rounded-full" variant="outline">Become a Mentor</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
