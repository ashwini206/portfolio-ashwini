import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[15%] left-[10%] w-32 h-32 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-[60%] right-[15%] w-40 h-40 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-400"></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-[30%] right-[25%] w-24 h-24 bg-blue-500/5 rounded-full filter blur-2xl floating-slow"></div>
        <div className="absolute bottom-[20%] left-[20%] w-28 h-28 bg-purple-500/5 rounded-full filter blur-2xl floating floating-delay-400"></div>
        <div className="absolute top-[45%] left-[30%] w-20 h-20 bg-green-500/5 rounded-full filter blur-2xl floating-slow floating-delay-200"></div>
        <div className="absolute bottom-[35%] right-[10%] w-16 h-16 bg-yellow-500/5 rounded-full filter blur-2xl floating floating-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl mt-8 md:mt-0">
            <p className="text-accent mb-2 opacity-0 animate-fade-in">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in-delayed">
              <span className="text-gradient">Ashwini Kashyap</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground/80 font-medium mb-6 opacity-0 animate-fade-in-delayed-medium">
              Fullstack Developer
            </h2>
            <p className="text-lg text-foreground/60 mb-8 max-w-xl opacity-0 animate-fade-in-delayed-long">
              I'm a software engineer with 5+ years of experience, specializing in creating efficient, 
              high-performance applications. With expertise in frontend and backend development, 
              I've consistently delivered solutions that drive business success and reduce time-to-market.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delayed-long">
              <a href="#projects">
                <Button className="group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(74,222,128,0.4)]">
                  <span className="relative z-10">View my projects</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] group">
                  <span className="relative z-10">Get in touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </a>
            </div>
          </div>
          
          {/* Profile photo on the right side */}
          <div className="flex flex-col items-center md:items-end opacity-0 animate-fade-in-delayed">
            <div className="relative w-full max-w-md">
              <img 
                src="/uploads/ashwini.jpeg" 
                alt="Ashwini Kashyap - Fullstack Developer" 
                className="w-full h-auto rounded-full object-cover shadow-2xl floating max-w-xs mx-auto"
              />
              
              {/* Decorative elements around the photo */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-accent opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent opacity-70"></div>
              
              {/* Abstract tech elements */}
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border border-accent/30 rounded-full animate-pulse-slow"></div>
              <div className="absolute top-1/4 -right-6 w-8 h-8 border border-blue-400/30 rounded-full animate-pulse-slow animation-delay-400"></div>
              <div className="absolute top-1/2 -left-4 w-6 h-6 bg-accent/10 rounded-full floating-slow animation-delay-200"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-sm text-accent/70 mt-2">Scroll down</p>
      </div>
    </section>
  );
};

export default Hero;
