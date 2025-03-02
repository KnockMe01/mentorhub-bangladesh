
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowRight, RefreshCw, GraduationCap } from 'lucide-react';

const benefitGroups = [
  {
    icon: <BookOpen className="h-10 w-10 text-mentor-600" />,
    title: "For Job Seekers",
    benefits: [
      "Personalized CV review and optimization",
      "Mock interviews with industry experts",
      "Insider tips on company hiring processes",
      "Networking opportunities with professionals"
    ]
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-mentor-600" />,
    title: "For Career Switchers",
    benefits: [
      "Guidance on transitioning to tech-driven roles",
      "Skills assessment and development plans",
      "Industry-specific insights and requirements",
      "Strategic advice on positioning your experience"
    ]
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-mentor-600" />,
    title: "For Upskillers",
    benefits: [
      "Customized learning paths from experts",
      "Feedback on portfolio projects",
      "Recommendations for in-demand skills",
      "Guidance on professional certifications"
    ]
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Who Can Benefit</h2>
          <p className="section-subtitle">
            Personalized mentorship solutions for different career stages and goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitGroups.map((group, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden h-full animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="mb-6">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{group.title}</h3>
                <ul className="space-y-3 mb-6">
                  {group.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-mentor-600 mr-2 mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-flex items-center text-mentor-600 font-medium hover:text-mentor-700 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
