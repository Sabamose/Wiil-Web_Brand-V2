import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "@/components/LottieAnimation";

const Platform = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);

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

  // Stacked cards scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 3;
          
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          if (progress >= 0.8) {
            setActiveCardIndex(3);
          } else if (progress >= 0.6) {
            setActiveCardIndex(2);
          } else if (progress >= 0.4) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cardStyle = {
    height: '70vh',
    maxHeight: '700px',
    borderRadius: '20px',
    transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

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
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight animate-on-scroll">
              Platform
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-on-scroll">
              Professional AI infrastructure built for scale. Everything you need to deploy, manage, and optimize intelligent assistants across your organization.
            </p>
          </div>
        </section>

        {/* Platform Features - Stacked Cards Section */}
        <div 
          ref={sectionRef} 
          className="relative" 
          style={{ height: '400vh' }}
          id="platform-features"
        >
          <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white">
            <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
              <div className="mb-2 md:mb-3">
                <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
                  <div className="pulse-chip opacity-0 animate-fade-in" style={{
                    animationDelay: "0.1s"
                  }}>
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
                    <span>Platform Features</span>
                  </div>
                </div>
                
                <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2">
                  Professional AI infrastructure at your fingertips
                </h2>
              </div>
              
              <div className="relative flex-1 perspective-1000">
                {/* Phone System Card */}
                <div 
                  className={`absolute inset-0 overflow-hidden shadow-xl ${isIntersecting ? 'animate-card-enter' : ''}`} 
                  style={{
                    ...cardStyle,
                    zIndex: 10,
                    transform: `translateY(${isIntersecting ? '120px' : '200px'}) scale(0.85)`,
                    opacity: isIntersecting ? 0.8 : 0
                  }}
                >
                  <div
                    className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/50 to-dark-900/90"
                    style={{
                      backgroundImage: "url('/background-section1.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay"
                    }}
                  ></div>
                  
                  <div className="absolute top-4 right-4 z-20">
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      <span className="text-sm font-medium">Phone System</span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center w-full">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                          Professional Phone System
                        </h3>
                        <p className="text-white/90 text-lg mb-6">Get instant access to local and toll-free numbers in 60+ countries with multiple provider redundancy. 99.9% uptime guaranteed.</p>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">99.9%</div>
                            <div className="text-xs text-white/70">uptime</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">60+</div>
                            <div className="text-xs text-white/70">countries</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">$1.25</div>
                            <div className="text-xs text-white/70">per month</div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-3">
                        <img 
                          src="/lovable-uploads/6d0d2660-8bd0-4786-9ae3-f438b3319333.png" 
                          alt="Phone Numbers Management Interface" 
                          className="rounded-lg shadow-lg w-full h-auto bg-white/10 backdrop-blur-sm p-6 scale-125"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Omnichannel Card */}
                <div 
                  className={`absolute inset-0 overflow-hidden shadow-xl ${activeCardIndex >= 1 ? 'animate-card-enter' : ''}`} 
                  style={{
                    ...cardStyle,
                    zIndex: 20,
                    transform: `translateY(${activeCardIndex >= 1 ? (activeCardIndex === 1 ? '80px' : '60px') : '200px'}) scale(0.9)`,
                    opacity: activeCardIndex >= 1 ? 0.9 : 0
                  }}
                >
                  <div
                    className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/50 to-dark-900/90"
                    style={{
                      backgroundImage: "url('/background-section2.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay"
                    }}
                  ></div>
                  
                  <div className="absolute top-4 right-4 z-20">
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      <span className="text-sm font-medium">Omnichannel</span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center w-full">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                          Omnichannel Communication
                        </h3>
                        <p className="text-white/90 text-lg mb-6">One AI assistant that works seamlessly across voice, web, SMS, and mobile platforms. All conversations in one unified inbox.</p>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">4+</div>
                            <div className="text-xs text-white/70">channels</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">Universal</div>
                            <div className="text-xs text-white/70">integration</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">Instant</div>
                            <div className="text-xs text-white/70">handoffs</div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-3">
                        <img 
                          src="/lovable-uploads/1e5994b0-caf7-4d2e-a5ce-35394670ec5e.png" 
                          alt="Customer List Management" 
                          className="rounded-lg shadow-lg w-full h-auto bg-white/10 backdrop-blur-sm p-6 scale-125"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* AI Routing Card */}
                <div 
                  className={`absolute inset-0 overflow-hidden shadow-xl ${activeCardIndex >= 2 ? 'animate-card-enter' : ''}`} 
                  style={{
                    ...cardStyle,
                    zIndex: 30,
                    transform: `translateY(${activeCardIndex >= 2 ? (activeCardIndex === 2 ? '40px' : '20px') : '200px'}) scale(0.95)`,
                    opacity: activeCardIndex >= 2 ? 0.95 : 0
                  }}
                >
                  <div
                    className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/50 to-dark-900/90"
                    style={{
                      backgroundImage: "url('/background-section3.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay"
                    }}
                  ></div>
                  
                  <div className="absolute top-4 right-4 z-20">
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      <span className="text-sm font-medium">Smart Routing</span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center w-full">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                          Intelligent Conversation Routing
                        </h3>
                        <p className="text-white/90 text-lg mb-6">Smart AI routing ensures customers connect with the perfect assistant or human expert instantly. No more wrong transfers.</p>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">95%</div>
                            <div className="text-xs text-white/70">accuracy</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">Zero</div>
                            <div className="text-xs text-white/70">wrong transfers</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">Instant</div>
                            <div className="text-xs text-white/70">escalation</div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-3">
                        <img 
                          src="/lovable-uploads/fa5d6f43-82d0-45ab-865f-9ec55bc8a045.png" 
                          alt="Call Transfer Settings" 
                          className="rounded-lg shadow-lg w-full h-auto bg-white/10 backdrop-blur-sm p-6 scale-125"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Analytics & Security Card */}
                <div 
                  className={`absolute inset-0 overflow-hidden shadow-xl ${activeCardIndex >= 3 ? 'animate-card-enter' : ''}`} 
                  style={{
                    ...cardStyle,
                    zIndex: 40,
                    transform: `translateY(${activeCardIndex >= 3 ? '0px' : '200px'}) scale(1)`,
                    opacity: activeCardIndex >= 3 ? 1 : 0
                  }}
                >
                  <div
                    className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/50 to-dark-900/90"
                    style={{
                      backgroundImage: "url('/Header-background.webp')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay"
                    }}
                  ></div>
                  
                  <div className="absolute top-4 right-4 z-20">
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      <span className="text-sm font-medium">Enterprise Ready</span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center w-full">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                          Analytics & Testing
                        </h3>
                        <p className="text-white/90 text-lg mb-6">Test your assistant's performance in real-time with comprehensive analytics. Monitor conversations and optimize responses instantly.</p>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">Real-time</div>
                            <div className="text-xs text-white/70">testing</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">GDPR</div>
                            <div className="text-xs text-white/70">compliant</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-white">24/7</div>
                            <div className="text-xs text-white/70">support</div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-3">
                        <img 
                          src="/lovable-uploads/b3e99566-6a27-431e-a577-ebe0c18d1fa2.png" 
                          alt="Voice Testing Interface" 
                          className="rounded-lg shadow-lg w-full h-auto bg-white/10 backdrop-blur-sm p-6 scale-125"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-pulse-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pulse-600 to-pulse-400"></div>
          <div className="relative z-10 section-container text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-on-scroll">
              Ready to build your AI assistant platform?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto animate-on-scroll">
              Start with a free trial or speak with our experts to see the complete platform in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
              <a 
                href="#get-access" 
                className="flex items-center justify-center group text-center" 
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FE5C02',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  padding: '16px 32px',
                  border: '1px solid white',
                }}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center group text-center" 
                style={{
                  backgroundColor: 'transparent',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  padding: '16px 32px',
                  border: '1px solid white',
                }}
              >
                Talk to Expert
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platform;