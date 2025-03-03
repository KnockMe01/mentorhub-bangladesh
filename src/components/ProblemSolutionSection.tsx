
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, MapPin } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-gradient-to-b from-white to-topmate-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Problem Statement */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Mentorship Gap in Bangladesh</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Many talented professionals in Bangladesh, especially those outside Dhaka, 
              struggle to access quality mentorship and guidance for their careers. This 
              creates an uneven playing field and limits opportunities.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mt-8">
              <Card className="border-0 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 card-hover">
                <CardContent className="p-6 flex items-start space-x-6">
                  <div className="h-14 w-14 rounded-2xl bg-topmate-100 flex items-center justify-center shrink-0">
                    <MapPin className="h-7 w-7 text-topmate-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Geographic Barriers</h3>
                    <p className="text-muted-foreground">Limited access to mentors outside major cities</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 card-hover">
                <CardContent className="p-6 flex items-start space-x-6">
                  <div className="h-14 w-14 rounded-2xl bg-topmate-100 flex items-center justify-center shrink-0">
                    <Users className="h-7 w-7 text-topmate-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Network Limitations</h3>
                    <p className="text-muted-foreground">Lack of connections to industry experts</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Solution */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solution</h2>
            <p className="text-xl text-muted-foreground mb-8">
              KnockMe breaks down these barriers by providing structured, accessible mentorship
              to professionals across Bangladesh, connecting them with industry leaders for
              personalized guidance.
            </p>
            
            <div className="mt-8">
              <Card className="border-0 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-topmate-50 card-hover">
                <CardContent className="p-6 flex items-start space-x-6">
                  <div className="h-14 w-14 rounded-2xl bg-topmate-100 flex items-center justify-center shrink-0">
                    <Award className="h-7 w-7 text-topmate-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Impact Stats</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-topmate-500 mr-3"></span>
                        87% of mentees reported improved job prospects
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-topmate-500 mr-3"></span>
                        200+ industry experts from various sectors
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-topmate-500 mr-3"></span>
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
