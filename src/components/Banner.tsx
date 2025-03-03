
import { ExternalLink } from 'lucide-react';

const Banner = () => {
  return (
    <div className="bg-topmate-500 text-white text-sm py-2 px-4 text-center">
      <p className="flex items-center justify-center flex-wrap gap-1">
        I am going to build this platform for Bangladesh. If you have any feedback or suggestion please share on
        <a 
          href="https://bd.linkedin.com/in/tanvirmorshalinshafin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium underline underline-offset-4 ml-1 hover:text-topmate-100"
        >
          LinkedIn
          <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </p>
    </div>
  );
};

export default Banner;
