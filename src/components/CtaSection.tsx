
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mentor-600 opacity-95"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-mentor-500 rounded-full translate-x-1/3 translate-y-1/3 opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to accelerate your career growth?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join our community of ambitious professionals and dedicated mentors to unlock your full potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-mentor-700 hover:bg-white/90 border-2 border-transparent">
              Find Your Mentor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Become a Mentor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
