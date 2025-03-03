
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Calendar } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="h-12 w-12 text-topmate-600" />,
    title: "Create Your Profile",
    description: "Sign up and build your profile highlighting your background, goals, and the specific areas where you need guidance."
  },
  {
    icon: <Search className="h-12 w-12 text-topmate-600" />,
    title: "Find the Right Mentor",
    description: "Browse our diverse pool of verified mentors and filter by industry, expertise, and availability to find your perfect match."
  },
  {
    icon: <Calendar className="h-12 w-12 text-topmate-600" />,
    title: "Book Sessions & Get Guidance",
    description: "Schedule one-on-one sessions, prepare your questions, and receive personalized advice to accelerate your career growth."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How KnockMe Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, effective process to connect you with the right mentor
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="border-0 rounded-3xl h-full hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-topmate-50 flex items-center justify-center mb-6 relative">
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-topmate-600 text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </span>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
