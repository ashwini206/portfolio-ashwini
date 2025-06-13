
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const progress = scrollTop / scrollHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div 
        className="h-full bg-gradient-to-r from-accent via-accent/80 to-accent/60"
        style={{ 
          transform: `scaleX(${scrollProgress})`, 
          transformOrigin: "left",
          transition: "transform 0.1s ease-out" 
        }}
      />
    </div>
  );
};

export default ProgressBar;
