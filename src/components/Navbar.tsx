
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-mentor-600" />
          <span className="font-display text-xl font-bold">MentorHub BD</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground/80 hover:text-mentor-600 transition-colors">Services</a>
          <a href="#mentors" className="text-foreground/80 hover:text-mentor-600 transition-colors">Mentors</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-mentor-600 transition-colors">Testimonials</a>
          <a href="#about" className="text-foreground/80 hover:text-mentor-600 transition-colors">About</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">Sign In</Button>
          <Button className="bg-mentor-600 hover:bg-mentor-700 text-white">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
