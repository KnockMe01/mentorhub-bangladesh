
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 purple-gradient-bg"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-topmate-400/20 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full subtle-pattern opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center text-white animate-on-scroll">
          <Users className="h-16 w-16 mx-auto mb-8 text-white/80" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight figma-heading">
            Ready to transform your career?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto figma-subheading">
            Join thousands of Bangladeshi professionals who have accelerated their careers through personalized mentorship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-topmate-700 hover:bg-white/90 border-2 border-transparent rounded-xl shadow-lg figma-btn">
              Find Your Mentor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-xl figma-btn">
              Become a Mentor
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-white/60">
            No credit card required to start your free mentorship session
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
