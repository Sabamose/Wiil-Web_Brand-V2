import React, { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Wiil Platform — ELEGANT SHOWROOM (Creative Variants)
 *
 * Each template card now has its own elegant visual style:
 * subtle lines, rings, mesh gradients, waves, or grids.
 */
export default function PlatformElegantShowroom() {
  const slides = [
    {
      id: "concierge",
      title: "Concierge, Always Available",
      line: "Handle guest requests with warmth and speed.",
      tags: ["Hospitality", "Requests", "Multi‑lingual"],
      bg: "from-[#F8FAFC] via-[#ECFDF5] to-[#F0FDFA]",
      deco: <Decoration variant="lines" />,
    },
    {
      id: "support",
      title: "Customer Support, On Demand",
      line: "Solve problems and provide help, instantly.",
      tags: ["Phone", "Tech Support", "Escalations"],
      bg: "from-[#F9FAFB] via-[#F1F5F9] to-[#EEF2FF]",
      deco: <Decoration variant="rings" />,
    },
    {
      id: "scheduling",
      title: "Scheduling Simplified",
      line: "Appointments, reminders, and follow‑ups—handled.",
      tags: ["Calendar", "Reminders", "SMS"],
      bg: "from-[#FAFAF9] via-[#ECFEFF] to-[#F0FDFA]",
      deco: <Decoration variant="mesh" />,
    },
    {
      id: "service",
      title: "Service Booking Reimagined",
      line: "From table reservations to service calls, automated.",
      tags: ["Bookings", "Payments", "Notifications"],
      bg: "from-[#F8FAFC] via-[#F5F3FF] to-[#ECFDF5]",
      deco: <Decoration variant="wave" />,
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);

  // Card style matching HumanoidSection
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '28px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    // Create intersection observer to detect when section is in view
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
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          // Calculate the scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Determine which card should be visible based on progress (4 cards)
          if (progress >= 0.75) {
            setActiveCardIndex(3);
          } else if (progress >= 0.5) {
            setActiveCardIndex(2);
          } else if (progress >= 0.25) {
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
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;
  const isFourthCardVisible = activeCardIndex >= 3;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          {/* Header */}
          <div className="mb-2 md:mb-3">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Wiil Platform</p>
                <h1 className="mt-2 text-4xl font-display font-semibold tracking-tight md:text-5xl">
                  <span className="text-slate-900">Create</span><span className="text-teal-600"> AI Assistants</span>
                </h1>
                <p className="mt-2 max-w-xl text-slate-500">
                  A quiet, capable workforce. Minimal setup. Maximum presence.
                </p>
              </div>
              <div className="flex gap-2">
                <button 
                  className="relative h-11 rounded-full bg-teal-50/20 backdrop-blur-md border border-teal-200/30 px-5 text-sm font-medium text-teal-800 shadow-[0_8px_32px_0_rgba(20,184,166,0.25)] hover:bg-teal-100/30 transition-all duration-300 overflow-hidden group"
                  onClick={() => window.open('https://console.wiil.io/login?from=%2F', '_blank')}
                >
                  <span className="relative z-10 bg-gradient-to-r from-teal-700 to-teal-900 bg-clip-text text-transparent font-semibold">+ Get Started</span>
                </button>
              </div>
            </div>
          </div>

          {/* Scrolling Cards Stack */}
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}
            >
              <Card className="h-full overflow-hidden rounded-[28px] border-0 shadow-sm ring-1 ring-black/5">
                <CardContent className="relative h-full p-0">
                  <div className={`relative flex h-full overflow-hidden rounded-[28px] bg-gradient-to-br ${slides[0].bg}`}>
                    <div className="pointer-events-none absolute inset-0 opacity-80">
                      {slides[0].deco}
                    </div>
                    <div className="relative z-10 flex flex-1 items-end p-8 md:p-10">
                      <div>
                        <h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
                          {slides[0].title}
                        </h2>
                        <p className="mt-2 max-w-md text-slate-600">{slides[0].line}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {slides[0].tags.map((t) => (
                            <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-1 items-center justify-center">
                      <div className="text-slate-400 text-sm">Isometric Image Area</div>
                    </div>
                    <div className="pointer-events-none absolute right-8 top-8 rounded-full bg-white/60 px-3 py-1 text-xs text-slate-600 backdrop-blur">
                      Step 1
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Second Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}
            >
              <Card className="h-full overflow-hidden rounded-[28px] border-0 shadow-sm ring-1 ring-black/5">
                <CardContent className="relative h-full p-0">
                  <div className={`relative flex h-full overflow-hidden rounded-[28px] bg-gradient-to-br ${slides[1].bg}`}>
                    <div className="pointer-events-none absolute inset-0 opacity-80">
                      {slides[1].deco}
                    </div>
                    <div className="relative z-10 flex flex-1 items-end p-8 md:p-10">
                      <div>
                        <h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
                          {slides[1].title}
                        </h2>
                        <p className="mt-2 max-w-md text-slate-600">{slides[1].line}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {slides[1].tags.map((t) => (
                            <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-1 items-center justify-center">
                      <div className="text-slate-400 text-sm">Isometric Image Area</div>
                    </div>
                    <div className="pointer-events-none absolute right-8 top-8 rounded-full bg-white/60 px-3 py-1 text-xs text-slate-600 backdrop-blur">
                      Step 2
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Third Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}
            >
              <Card className="h-full overflow-hidden rounded-[28px] border-0 shadow-sm ring-1 ring-black/5">
                <CardContent className="relative h-full p-0">
                  <div className={`relative flex h-full overflow-hidden rounded-[28px] bg-gradient-to-br ${slides[2].bg}`}>
                    <div className="pointer-events-none absolute inset-0 opacity-80">
                      {slides[2].deco}
                    </div>
                    <div className="relative z-10 flex flex-1 items-end p-8 md:p-10">
                      <div>
                        <h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
                          {slides[2].title}
                        </h2>
                        <p className="mt-2 max-w-md text-slate-600">{slides[2].line}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {slides[2].tags.map((t) => (
                            <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-1 items-center justify-center">
                      <div className="text-slate-400 text-sm">Isometric Image Area</div>
                    </div>
                    <div className="pointer-events-none absolute right-8 top-8 rounded-full bg-white/60 px-3 py-1 text-xs text-slate-600 backdrop-blur">
                      Step 3
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fourth Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFourthCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 40,
                transform: `translateY(${isFourthCardVisible ? '0px' : '200px'}) scale(1)`,
                opacity: isFourthCardVisible ? 1 : 0,
                pointerEvents: isFourthCardVisible ? 'auto' : 'none'
              }}
            >
              <Card className="h-full overflow-hidden rounded-[28px] border-0 shadow-sm ring-1 ring-black/5">
                <CardContent className="relative h-full p-0">
                  <div className={`relative flex h-full overflow-hidden rounded-[28px] bg-gradient-to-br ${slides[3].bg}`}>
                    <div className="pointer-events-none absolute inset-0 opacity-80">
                      {slides[3].deco}
                    </div>
                    <div className="relative z-10 flex flex-1 items-end p-8 md:p-10">
                      <div>
                        <h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
                          {slides[3].title}
                        </h2>
                        <p className="mt-2 max-w-md text-slate-600">{slides[3].line}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {slides[3].tags.map((t) => (
                            <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 flex flex-1 items-center justify-center">
                      <div className="text-slate-400 text-sm">Isometric Image Area</div>
                    </div>
                    <div className="pointer-events-none absolute right-8 top-8 rounded-full bg-white/60 px-3 py-1 text-xs text-slate-600 backdrop-blur">
                      Step 4
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function RedactedLine({ w = "w-1/2" }: { w?: string }) {
  return <div className={`${w} h-3 rounded-md bg-slate-200/70`} />;
}

// Elegant decorative backgrounds with enhanced linear design
function Decoration({ variant }: { variant: "lines" | "rings" | "mesh" | "wave" }) {
  if (variant === "lines") {
    return (
      <svg viewBox="0 0 800 600" className="h-full w-full">
        <defs>
          <linearGradient id="lineg" x1="0" x2="1">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="lineg2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {/* Flowing curves */}
        {[...Array(15)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${40 + i * 35} Q 400 ${15 + i * 45}, 800 ${40 + i * 35}`}
            stroke="url(#lineg)"
            strokeWidth="1.5"
            fill="none"
            opacity={1 - i * 0.06}
          />
        ))}
        {/* Diagonal accents */}
        {[...Array(8)].map((_, i) => (
          <line
            key={`diag-${i}`}
            x1={i * 120}
            y1="0"
            x2={i * 120 + 200}
            y2="600"
            stroke="url(#lineg2)"
            strokeWidth="0.8"
            opacity="0.4"
          />
        ))}
      </svg>
    );
  }
  if (variant === "rings") {
    return (
      <svg viewBox="0 0 600 600" className="h-full w-full">
        <defs>
          <radialGradient id="rg" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.28" />
            <stop offset="70%" stopColor="#06B6D4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="rg2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {/* Concentric circles */}
        {[...Array(9)].map((_, i) => (
          <circle 
            key={i} 
            cx="300" 
            cy="300" 
            r={50 + i * 45} 
            fill="none" 
            stroke="url(#rg)" 
            strokeWidth="1.8"
            opacity={1 - i * 0.08}
          />
        ))}
        {/* Corner accent lines */}
        <path d="M50 50 L150 50 L150 150" stroke="url(#rg2)" strokeWidth="2" fill="none" />
        <path d="M450 50 L550 50 L550 150" stroke="url(#rg2)" strokeWidth="2" fill="none" />
        <path d="M50 450 L150 450 L150 550" stroke="url(#rg2)" strokeWidth="2" fill="none" />
        <path d="M450 450 L550 450 L550 550" stroke="url(#rg2)" strokeWidth="2" fill="none" />
      </svg>
    );
  }
  if (variant === "mesh") {
    return (
      <svg viewBox="0 0 800 600" className="h-full w-full">
        <defs>
          <linearGradient id="meshg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.20" />
          </linearGradient>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="url(#meshg)" strokeWidth="1.5"/>
          </pattern>
        </defs>
        {/* Grid pattern */}
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.6" />
        {/* Floating geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            cx={60 + (i % 4) * 180 + (i > 7 ? 90 : 0)}
            cy={80 + Math.floor(i / 4) * 140}
            r={25 + (i % 3) * 15}
            fill="none"
            stroke="url(#meshg)"
            strokeWidth="1.5"
            opacity={0.7 - (i % 4) * 0.1}
          />
        ))}
        {/* Connecting lines */}
        <path d="M140 150 Q 400 100, 660 150" stroke="url(#meshg)" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M140 350 Q 400 300, 660 350" stroke="url(#meshg)" strokeWidth="1.2" fill="none" opacity="0.5" />
      </svg>
    );
  }
  // wave with enhanced linear elements
  return (
    <svg viewBox="0 0 800 600" className="h-full w-full">
        <defs>
          <linearGradient id="waveg" x1="0" x2="1" y1="0" y2="0.5">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="waveg2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.12" />
          </linearGradient>
        </defs>
      {/* Main flowing waves */}
      {[...Array(12)].map((_, i) => (
        <path
          key={i}
          d={`M0 ${50 + i * 42} C 200 ${15 + i * 35}, 600 ${85 + i * 25}, 800 ${50 + i * 42}`}
          fill="none"
          stroke="url(#waveg)"
          strokeWidth={1.8 - i * 0.08}
          opacity={1 - i * 0.06}
        />
      ))}
      {/* Vertical accent lines */}
      {[...Array(6)].map((_, i) => (
        <line
          key={`vert-${i}`}
          x1={100 + i * 120}
          y1="0"
          x2={100 + i * 120}
          y2="600"
          stroke="url(#waveg2)"
          strokeWidth="1"
          opacity="0.3"
        />
      ))}
      {/* Horizontal guides */}
      <line x1="0" y1="150" x2="800" y2="150" stroke="url(#waveg2)" strokeWidth="0.8" opacity="0.2" />
      <line x1="0" y1="300" x2="800" y2="300" stroke="url(#waveg2)" strokeWidth="0.8" opacity="0.2" />
      <line x1="0" y1="450" x2="800" y2="450" stroke="url(#waveg2)" strokeWidth="0.8" opacity="0.2" />
    </svg>
  );
}