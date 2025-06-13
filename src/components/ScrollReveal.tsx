
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up"
}: ScrollRevealProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);
  
  const getDirectionClass = () => {
    switch (direction) {
      case "up": return "reveal-up";
      case "down": return "reveal-down";
      case "left": return "reveal-left";
      case "right": return "reveal-right";
      default: return "reveal-up";
    }
  };
  
  const delayClass = delay ? `reveal-delay-${Math.min(Math.floor(delay/200), 4)*200}` : '';
  const directionClass = getDirectionClass();
  
  return (
    <div ref={sectionRef} className={`reveal ${directionClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
