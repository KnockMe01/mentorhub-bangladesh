
import { ClipboardList, Users, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Users className="h-10 w-10 text-mentor-500" />,
    title: "Long-term Mentorship",
    description: "Get paired with a dedicated mentor for continuous guidance throughout your career journey."
  },
  {
    icon: <ClipboardList className="h-10 w-10 text-mentor-500" />,
    title: "CV Review",
    description: "Have your resume professionally reviewed and optimized to stand out to potential employers."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-mentor-500" />,
    title: "Career Guidance",
    description: "Receive expert advice on career paths, job opportunities, and professional development."
  },
  {
    icon: <Award className="h-10 w-10 text-mentor-500" />,
    title: "Skill Development",
    description: "Learn and enhance the specific skills needed to excel in your chosen industry."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-mentor-50 to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Mentorship Services</h2>
          <p className="section-subtitle">
            Comprehensive support tailored to help you achieve your professional goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden group">
              <CardHeader className="pb-2">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
