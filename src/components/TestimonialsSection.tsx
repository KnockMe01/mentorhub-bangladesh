
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "KnockMe transformed my job search. My mentor's feedback on my CV and interview techniques helped me secure a position at a top tech company within just 2 months.",
    author: "Raisa Islam",
    role: "Software Engineer at Pathao",
    image: "/placeholder.svg",
    initials: "RI"
  },
  {
    content: "As someone looking to switch from banking to tech product management, my mentor gave me invaluable guidance on transferring my skills and highlighting my strengths. I wouldn't have made the transition without this mentorship.",
    author: "Mohammed Hasan",
    role: "Product Manager at ShopUp",
    image: "/placeholder.svg",
    initials: "MH"
  },
  {
    content: "Being based in Rajshahi, I never thought I'd have access to mentors from global companies. KnockMe broke those geographical barriers and connected me with amazing mentors who helped me land a remote data science role.",
    author: "Anika Rahman",
    role: "Data Analyst at Bkash",
    image: "/placeholder.svg",
    initials: "AR"
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-white to-mentor-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Real outcomes from professionals who found the right mentorship
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : 'opacity-0 translate-x-8 -z-10'
                }`}
              >
                <Card className="glass-card border-0 h-full">
                  <CardContent className="flex flex-col justify-between h-full p-8">
                    <div>
                      <svg width="45" height="36" className="text-mentor-300 mb-6" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 18H9C9 12.4772 13.4772 8 19 8V12C15.6863 12 13 14.6863 13 18V18.5C13 19.3284 13.6716 20 14.5 20H18.5C19.3284 20 20 20.6716 20 21.5V30.5C20 31.3284 19.3284 32 18.5 32H14.5C13.6716 32 13 31.3284 13 30.5V18.5C13 18.3333 13.0167 18.1667 13.05 18H13.5Z" fill="currentColor"/>
                        <path d="M33.5 18H29C29 12.4772 33.4772 8 39 8V12C35.6863 12 33 14.6863 33 18V18.5C33 19.3284 33.6716 20 34.5 20H38.5C39.3284 20 40 20.6716 40 21.5V30.5C40 31.3284 39.3284 32 38.5 32H34.5C33.6716 32 33 31.3284 33 30.5V18.5C33 18.3333 33.0167 18.1667 33.05 18H33.5Z" fill="currentColor"/>
                      </svg>
                      <p className="text-lg md:text-xl text-foreground mb-6">
                        {testimonial.content}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 border-2 border-white mr-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.author} />
                        <AvatarFallback className="bg-mentor-100 text-mentor-800">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-mentor-600 w-6' 
                    : 'bg-mentor-200 hover:bg-mentor-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
