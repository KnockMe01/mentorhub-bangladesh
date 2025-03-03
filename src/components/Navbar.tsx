
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
          <GraduationCap className="h-8 w-8 text-topmate-600" />
          <span className="font-display text-xl font-bold">KnockMe</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-gray-500 hover:text-gray-700 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-foreground/80 hover:text-topmate-600 transition-colors">How It Works</a>
          <a href="#benefits" className="text-foreground/80 hover:text-topmate-600 transition-colors">Benefits</a>
          <a href="#mentors" className="text-foreground/80 hover:text-topmate-600 transition-colors">Mentors</a>
          <a href="#pricing" className="text-foreground/80 hover:text-topmate-600 transition-colors">Pricing</a>
          <a href="#faq" className="text-foreground/80 hover:text-topmate-600 transition-colors">FAQ</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex rounded-full border-topmate-200">Sign In</Button>
          <Button className="bg-topmate-600 hover:bg-topmate-700 text-white rounded-full">Get Started</Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} glass transition-all duration-300 mt-3`}>
        <div className="px-4 py-5 space-y-4">
          <a href="#how-it-works" className="block text-foreground/80 hover:text-topmate-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a href="#benefits" className="block text-foreground/80 hover:text-topmate-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Benefits</a>
          <a href="#mentors" className="block text-foreground/80 hover:text-topmate-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Mentors</a>
          <a href="#pricing" className="block text-foreground/80 hover:text-topmate-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#faq" className="block text-foreground/80 hover:text-topmate-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          <div className="pt-4 flex flex-col space-y-3">
            <Button variant="outline" className="w-full rounded-full">Sign In</Button>
            <Button className="bg-topmate-600 hover:bg-topmate-700 text-white w-full rounded-full">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
