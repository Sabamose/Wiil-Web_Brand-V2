import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    // Initialize intersection observer to detect when elements enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      id="hero"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Header-background.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div 
          className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in bg-teal-400/10 border border-teal-500/20 inline-flex" 
          style={{ animationDelay: "0.1s" }}
        >
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white mr-2">01</span>
          <span className="text-teal-600">AI Platform</span>
        </div>
        
        <h1 
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight animate-on-scroll"
          style={{ animationDelay: "0.3s" }}
        >
          AI Assistants for<br className="hidden sm:inline" />every conversation
        </h1>
        
        <p 
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-on-scroll"
          style={{ animationDelay: "0.5s" }}
        >
          Build intelligent AI assistants that handle sales, support, scheduling, and operations. Deploy across voice, chat, and SMS in minutes—no coding required.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll" 
          style={{ animationDelay: "0.7s" }}
        >
          <a 
            href="https://console.wiil.io/" 
            className="flex items-center justify-center group w-full sm:w-auto text-center" 
            style={{
              backgroundColor: '#0f766e',
              borderRadius: '1440px',
              boxSizing: 'border-box',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '14px',
              lineHeight: '20px',
              padding: '16px 24px',
              border: '1px solid #0f766e',
            }}
          >
            Get Early Access
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;