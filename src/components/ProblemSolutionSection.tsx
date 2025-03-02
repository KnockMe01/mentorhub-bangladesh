
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, MapPin } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 md:py-32 relative bg-gradient-to-b from-white to-mentor-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problem Statement */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Mentorship Gap in Bangladesh</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Many talented professionals in Bangladesh, especially those outside Dhaka, 
              struggle to access quality mentorship and guidance for their careers. This 
              creates an uneven playing field and limits opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="glass-card border-0">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-mentor-100 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-mentor-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Geographic Barriers</h3>
                    <p className="text-muted-foreground">Limited access to mentors outside major cities</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-mentor-100 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-mentor-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Network Limitations</h3>
                    <p className="text-muted-foreground">Lack of connections to industry experts</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Solution */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solution</h2>
            <p className="text-lg text-muted-foreground mb-8">
              KnockMe breaks down these barriers by providing structured, accessible mentorship
              to professionals across Bangladesh, connecting them with industry leaders for
              personalized guidance.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mt-8">
              <Card className="glass-card border-0">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-mentor-100 flex items-center justify-center shrink-0">
                    <Award className="h-6 w-6 text-mentor-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Impact Stats</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-mentor-500 mr-2"></span>
                        87% of mentees reported improved job prospects
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-mentor-500 mr-2"></span>
                        200+ industry experts from various sectors
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-mentor-500 mr-2"></span>
                        5,000+ successful mentorship sessions completed
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
