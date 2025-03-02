
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Calendar } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="h-12 w-12 text-mentor-600" />,
    title: "Create Your Profile",
    description: "Sign up and build your profile highlighting your background, goals, and the specific areas where you need guidance."
  },
  {
    icon: <Search className="h-12 w-12 text-mentor-600" />,
    title: "Find the Right Mentor",
    description: "Browse our diverse pool of verified mentors and filter by industry, expertise, and availability to find your perfect match."
  },
  {
    icon: <Calendar className="h-12 w-12 text-mentor-600" />,
    title: "Book Sessions & Get Guidance",
    description: "Schedule one-on-one sessions, prepare your questions, and receive personalized advice to accelerate your career growth."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-mentor-50 to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">How KnockMe Works</h2>
          <p className="section-subtitle">
            A simple, effective process to connect you with the right mentor
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-mentor-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="glass-card border-0 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto w-24 h-24 rounded-full bg-mentor-50 flex items-center justify-center mb-6 relative">
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-mentor-600 text-white flex items-center justify-center font-bold text-lg">
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
      </div>
    </section>
  );
};

export default HowItWorksSection;
