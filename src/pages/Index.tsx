
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import MentorsSection from '@/components/MentorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

import { GraduationCap } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Loading animation overlay */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-700" 
           style={{ animation: 'fadeOut 0.7s ease-in-out forwards 0.5s' }}>
        <div className="flex flex-col items-center">
          <GraduationCap className="h-16 w-16 text-mentor-600 animate-pulse" />
          <h1 className="mt-4 text-2xl font-bold">MentorHub BD</h1>
        </div>
      </div>
      
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <MentorsSection />
        <TestimonialsSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
