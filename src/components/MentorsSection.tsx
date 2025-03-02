
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mentors = [
  {
    name: "Tahsin Ahmed",
    role: "Software Engineering Lead",
    company: "Google",
    image: "/placeholder.svg",
    expertise: ["Career Development", "Technical Interview"],
    initials: "TA"
  },
  {
    name: "Nusrat Jahan",
    role: "Product Manager",
    company: "Microsoft",
    image: "/placeholder.svg",
    expertise: ["Product Strategy", "UX Design"],
    initials: "NJ"
  },
  {
    name: "Farhan Khan",
    role: "Data Science Director",
    company: "Amazon",
    image: "/placeholder.svg",
    expertise: ["Machine Learning", "Analytics"],
    initials: "FK"
  },
  {
    name: "Sabrina Rahman",
    role: "Marketing Executive",
    company: "Grameenphone",
    image: "/placeholder.svg",
    expertise: ["Brand Strategy", "Digital Marketing"],
    initials: "SR"
  }
];

const MentorsSection = () => {
  return (
    <section id="mentors" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Meet Our Expert Mentors</h2>
          <p className="section-subtitle">
            Learn from Bangladesh's top industry professionals who are passionate about helping you succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 border-4 border-white shadow-lg mb-4">
                    <AvatarImage src={mentor.image} alt={mentor.name} />
                    <AvatarFallback className="bg-mentor-100 text-mentor-800 text-xl font-medium">
                      {mentor.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                  <p className="text-muted-foreground mb-1">{mentor.role}</p>
                  <p className="text-sm font-medium text-mentor-600 mb-4">{mentor.company}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {mentor.expertise.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-mentor-50 text-mentor-700 hover:bg-mentor-100">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-mentor-600 hover:text-mentor-700 font-medium"
          >
            View all mentors
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-1"
            >
              <path 
                d="M6 12L10 8L6 4" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
