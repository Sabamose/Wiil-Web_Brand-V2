import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformScreenshots from "@/components/PlatformScreenshots";
import AssistantManagement from "@/components/AssistantManagement";
import AssistantCreationFlow from "@/components/AssistantCreationFlow";
import ConversationsDashboard from "@/components/ConversationsDashboard";
import ConversationDetailView from "@/components/ConversationDetailView";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "@/components/LottieAnimation";
import { Button } from "@/components/ui/button";

const Platform = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize intersection observer
  useEffect(() => {
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

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load Lottie animation
  useEffect(() => {
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  // Mouse tilt effect for hero image
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);


  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4 sm:space-y-8">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Header-background.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-on-scroll">
              Platform
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-on-scroll">
              Space for Building AI Customer Support Assistants. Everything you need to deploy, manage, and optimize intelligent assistants across your organization.
            </p>
            <Button 
              variant="glass"
              className="animate-on-scroll"
              onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
            >
              Watch Demo
              <ArrowRight size={20} />
            </Button>
          </div>
        </section>

        {/* 1. Build AI Staff That Never Sleep */}
        <AssistantManagement />

        {/* 2. Create Your Custom AI Assistants */}
        <AssistantCreationFlow />

        {/* 3. Engage With Your Audience */}
        <ConversationsDashboard />

        {/* 4. Monitor Conversations in Real-Time */}
        <ConversationDetailView />

        {/* Platform Screenshots Section */}
        <PlatformScreenshots />

      </main>
      <Footer />
    </div>
  );
};

export default Platform;