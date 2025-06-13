
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background py-8 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="p-3 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-accent" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
