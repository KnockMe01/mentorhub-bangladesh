
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mentor-100 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mentor-200 rounded-full translate-y-1/3 -translate-x-1/3 opacity-50 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-slide-up [animation-delay:0.1s]">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-mentor-100 text-mentor-700 border border-mentor-200">
              <span className="text-sm font-medium">Launching in Bangladesh</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Mentorship that
              <span className="relative whitespace-nowrap">
                <span className="relative z-10"> transforms careers</span>
                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -bottom-2 left-0 h-[0.58em] w-full fill-mentor-200/70" preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Connect with industry-leading mentors from Bangladesh who will guide you through every step of your professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Find a Mentor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-white/50 backdrop-blur-sm hover:bg-white/80">
                Explore Services
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-slide-up [animation-delay:0.3s]">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-4 left-4 right-4 bottom-4 bg-gradient-to-br from-mentor-100 to-mentor-50 rounded-2xl animate-float"></div>
                  <div className="absolute inset-0 glass-card overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                      alt="Mentorship Session" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -right-6 -bottom-6 glass-card p-4 animate-float [animation-delay:1s]">
                    <div className="flex items-center gap-3">
                      <div className="bg-mentor-500 rounded-full w-10 h-10 flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">200+ Mentors</p>
                        <p className="text-xs text-muted-foreground">Ready to guide you</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
