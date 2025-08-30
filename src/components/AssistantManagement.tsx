import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Phone, Calendar, Headphones, ConciergeBell, MessageCircle, ShoppingCart, Wrench, MessageSquare } from "lucide-react";

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

  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 pt-16">
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
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/30 via-teal-500/20 to-teal-600/30 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
              <span className="relative z-10 bg-gradient-to-r from-teal-700 to-teal-900 bg-clip-text text-transparent font-semibold">+ Get Started</span>
            </button>
          </div>
        </div>
      </div>

      {/* Poster Carousel */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-8 pt-10 md:grid-cols-[1.15fr,0.85fr]">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-white to-teal-50" />
          <Card className="overflow-hidden rounded-[28px] border-0 shadow-sm ring-1 ring-black/5">
            <CardContent className="relative h-[540px] p-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[index].id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className={`relative flex h-full items-end justify-between overflow-hidden rounded-[28px] bg-gradient-to-br ${slides[index].bg}`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-80">
                    {slides[index].deco}
                  </div>
                  <div className="relative z-10 p-8 md:p-10">
                    <h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
                      {slides[index].title}
                    </h2>
                    <p className="mt-2 max-w-md text-slate-600">{slides[index].line}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {slides[index].tags.map((t) => (
                        <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pointer-events-none absolute right-8 top-8 rounded-full bg-white/60 px-3 py-1 text-xs text-slate-600 backdrop-blur">
                    Preview
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
                <button onClick={prev} className="rounded-full bg-white/80 p-2 shadow ring-1 ring-black/5 backdrop-blur transition hover:bg-white">
                  <ChevronLeft className="size-5 text-slate-700" />
                </button>
                <button onClick={next} className="rounded-full bg-white/80 p-2 shadow ring-1 ring-black/5 backdrop-blur transition hover:bg-white">
                  <ChevronRight className="size-5 text-slate-700" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

      {/* Dots */}
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 pb-14">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full transition ${i === index ? "bg-slate-800" : "bg-slate-200"}`}
          />
        ))}
      </div>

      {/* Philosophy */}
      <div className="border-t border-slate-100 bg-slate-50/60 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-sm text-slate-600">
            We craft assistants that take care of details—so your people can focus on the big picture.
          </p>
        </div>
      </div>
    </section>
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