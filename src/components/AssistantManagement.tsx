import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Phone, Calendar, Headphones, ConciergeBell } from "lucide-react";

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
            <h1 className="mt-2 text-4xl font-display font-semibold tracking-tight text-slate-900 md:text-5xl">
              Create AI <span className="text-teal-600">Assistants</span>
            </h1>
            <p className="mt-2 max-w-xl text-slate-500">
              A quiet, capable workforce. Minimal setup. Maximum presence.
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="rounded-2xl">Create Assistant</Button>
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

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">What you get</p>
            <ul className="mt-3 space-y-3 text-slate-700">
              <li className="flex items-center gap-3"><ConciergeBell className="size-4" /> Concierge requests & hospitality</li>
              <li className="flex items-center gap-3"><Headphones className="size-4" /> Customer support, 24/7</li>
              <li className="flex items-center gap-3"><Calendar className="size-4" /> Scheduling & reminders</li>
              <li className="flex items-center gap-3"><Phone className="size-4" /> Service booking via calls</li>
            </ul>
            <div className="mt-6 space-y-2">
              <RedactedLine w="w-3/4" />
              <RedactedLine w="w-2/3" />
              <RedactedLine w="w-1/2" />
            </div>
            <Button className="mt-6 w-full rounded-2xl">Try a Live Demo</Button>
          </div>
          <Card className="mt-6 rounded-3xl border-0 bg-gradient-to-br from-white to-teal-50 shadow-sm ring-1 ring-black/5">
            <CardContent className="p-6">
              <p className="text-sm text-slate-500">Our assistants book, solve, and greet—without pause or fatigue.</p>
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

// Elegant decorative backgrounds
function Decoration({ variant }: { variant: "lines" | "rings" | "mesh" | "wave" }) {
  if (variant === "lines") {
    return (
      <svg viewBox="0 0 800 600" className="h-full w-full">
        <defs>
          <linearGradient id="lineg" x1="0" x2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${50 + i * 40} Q 400 ${20 + i * 60}, 800 ${50 + i * 40}`}
            stroke="url(#lineg)"
            strokeWidth="1.2"
            fill="none"
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
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(7)].map((_, i) => (
          <circle key={i} cx="300" cy="300" r={60 + i * 60} fill="none" stroke="url(#rg)" strokeWidth="1.3" />
        ))}
      </svg>
    );
  }
  if (variant === "mesh") {
    return (
      <svg viewBox="0 0 800 600" className="h-full w-full">
        <defs>
          <linearGradient id="meshg" x1="0" x2="1">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {[...Array(10)].map((_, i) => (
          <circle
            key={i}
            cx={80 + i * 80}
            cy={100 + (i % 2) * 60}
            r={120}
            fill="none"
            stroke="url(#meshg)"
            strokeWidth="1.2"
          />
        ))}
      </svg>
    );
  }
  // wave
  return (
    <svg viewBox="0 0 800 600" className="h-full w-full">
      <defs>
        <linearGradient id="waveg" x1="0" x2="1">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      {[...Array(10)].map((_, i) => (
        <path
          key={i}
          d={`M0 ${60 + i * 50} C 200 ${20 + i * 40}, 600 ${100 + i * 30}, 800 ${60 + i * 50}`}
          fill="none"
          stroke="url(#waveg)"
          strokeWidth="1.4"
        />
      ))}
    </svg>
  );
}