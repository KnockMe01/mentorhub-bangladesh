
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';

const stats = [
  {
    value: "200+",
    label: "Expert Mentors",
    icon: <GraduationCap className="h-6 w-6 text-mentor-600" />,
  },
  {
    value: "5,000+",
    label: "Successful Mentees",
    icon: <Users className="h-6 w-6 text-mentor-600" />,
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    icon: <Award className="h-6 w-6 text-mentor-600" />,
  },
  {
    value: "20+",
    label: "Industry Specializations",
    icon: <BookOpen className="h-6 w-6 text-mentor-600" />,
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-mentor-50/50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-mentor-100 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
