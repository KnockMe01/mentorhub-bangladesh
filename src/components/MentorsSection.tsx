
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const mentors = [
  {
    name: "Tahsin Ahmed",
    role: "Software Engineering Lead",
    company: "Google",
    image: "/placeholder.svg",
    expertise: ["Career Development", "Technical Interview"],
    bio: "10+ years experience in software engineering with expertise in guiding junior developers through career transitions.",
    initials: "TA"
  },
  {
    name: "Nusrat Jahan",
    role: "Product Manager",
    company: "Microsoft",
    image: "/placeholder.svg",
    expertise: ["Product Strategy", "UX Design"],
    bio: "Passionate about helping professionals understand product management and make successful career transitions.",
    initials: "NJ"
  },
  {
    name: "Farhan Khan",
    role: "Data Science Director",
    company: "Amazon",
    image: "/placeholder.svg",
    expertise: ["Machine Learning", "Analytics"],
    bio: "Specialized in helping candidates prepare for data science roles and develop the right skills for the industry.",
    initials: "FK"
  },
  {
    name: "Sabrina Rahman",
    role: "Marketing Executive",
    company: "Grameenphone",
    image: "/placeholder.svg",
    expertise: ["Brand Strategy", "Digital Marketing"],
    bio: "Dedicated to mentoring the next generation of marketing professionals in Bangladesh's evolving digital landscape.",
    initials: "SR"
  }
];

const MentorsSection = () => {
  return (
    <section id="mentors" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 figma-heading">Featured Mentors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto figma-subheading">
            Meet some of our experienced mentors ready to guide you on your professional journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <Card key={index} className="figma-card transition-all duration-300 animate-on-scroll shadow-md hover:shadow-xl" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 border-4 border-white shadow-lg mb-4">
                    <AvatarImage src={mentor.image} alt={mentor.name} />
                    <AvatarFallback className="bg-topmate-100 text-topmate-800 text-xl font-medium">
                      {mentor.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                  <p className="text-muted-foreground mb-1">{mentor.role}</p>
                  <p className="text-sm font-medium text-topmate-600 mb-4">{mentor.company}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {mentor.expertise.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-topmate-50 text-topmate-700 hover:bg-topmate-100 rounded-md">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {mentor.bio}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full rounded-xl figma-btn">View Profile</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="group rounded-xl figma-btn">
            Explore All Mentors
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
