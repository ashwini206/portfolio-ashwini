
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect } from "react";

const Index = () => {
  // Initialize animations on page load
  useEffect(() => {
    // Preload animations
    const animationPreloadStyles = document.createElement('style');
    animationPreloadStyles.innerHTML = `
      body::after {
        content: '';
        display: none;
        animation-name: fade-in, slide-up, slide-down, slide-left, slide-right, floating, rotating;
      }
    `;
    document.head.appendChild(animationPreloadStyles);
    
    return () => {
      document.head.removeChild(animationPreloadStyles);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Ashwini Kashyap | Fullstack Developer Portfolio</title>
        <meta name="description" content="Experienced fullstack developer with 5+ years in designing and building high-performance applications. Specialized in React, Node.js, and MongoDB development." />
        <meta name="keywords" content="Ashwini Kashyap, fullstack developer, react developer, web developer, portfolio, nodejs, mongodb" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Ashwini Kashyap | Fullstack Developer Portfolio" />
        <meta property="og:description" content="Experienced fullstack developer with 5+ years in designing and building high-performance applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ashwinikashyap.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ashwini Kashyap | Fullstack Developer Portfolio" />
        <meta name="twitter:description" content="Experienced fullstack developer with 5+ years in designing and building high-performance applications." />
        
        {/* Additional SEO Tags */}
        <link rel="canonical" href="https://ashwinikashyap.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal delay={600}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal delay={800}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
};

export default Index;
