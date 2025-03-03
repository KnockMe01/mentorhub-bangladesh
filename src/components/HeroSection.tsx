
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f7ff] to-white"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-topmate-100/30 blur-[80px]"></div>
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-topmate-200/20 blur-[60px]"></div>
        <div className="absolute top-0 left-0 w-full h-full subtle-pattern opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-topmate-100 text-topmate-700 border border-topmate-200">
              <span className="text-sm font-medium">Launching in Bangladesh</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 figma-heading">
              Get the Right 
              <span className="text-gradient bg-gradient-to-r from-topmate-600 to-topmate-500 bg-clip-text text-transparent block">Guidance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl figma-subheading">
              KnockMe connects Bangladeshi job seekers and professionals with industry experts for personalized mentorship, career guidance, and skill development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-topmate-600 hover:bg-topmate-700 text-white rounded-xl shadow-lg figma-btn btn-gradient">
                Find a Mentor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-topmate-200 bg-white/80 hover:bg-white figma-btn">
                Become a Mentor
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-topmate-200/30 to-topmate-100/30 rounded-[20px] rotate-6 transform-gpu"></div>
              <div className="absolute inset-0 figma-card overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                  alt="Mentorship Session" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100 w-32 h-32 flex items-center justify-center figma-card">
                <div className="text-center">
                  <div className="text-3xl font-bold text-topmate-600">5K+</div>
                  <div className="text-sm text-gray-500">Mentorship Sessions</div>
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
