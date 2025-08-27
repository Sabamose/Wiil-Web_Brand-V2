import React, { useEffect, useState } from "react";
import { Phone, MessageCircle, Mail, MessageSquare, Link, Send } from "lucide-react";

/**
 * Magical CTA — Option 4 + Option 1
 * - Word carousel (front) that rotates the final verb elegantly
 * - Subtle infinite marquee of the full phrase in the background with gradient edge masks
 * - TailwindCSS only (custom keyframes defined inline below)
 * - Teal‑first palette, elegant/clean
 */
const PlatformScreenshots = () => {
  const words = ["connect", "call", "chat", "text", "email", "message"];
  const icons = [Link, Phone, MessageCircle, MessageSquare, Mail, Send];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate w-full overflow-hidden bg-background py-48">

      {/* Foreground CTA line */}
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-muted-foreground leading-tight tracking-tight">
            <span className="text-foreground">Meet your customers wherever they are,</span>
            <br />
            <span className="text-foreground">however they</span>{" "}
            <span className="relative inline-block min-w-[180px] md:min-w-[220px] lg:min-w-[280px] h-[1.2em] align-top">
              {/* word carousel items */}
              {words.map((w, i) => {
                const IconComponent = icons[i];
                return (
                  <span
                    key={w}
                    aria-hidden={i !== idx}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-500 ease-in-out flex items-center gap-3 ${
                      i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    } text-primary`}
                    style={{ transform: i === idx ? 'translate(-50%, -50%)' : 'translate(-50%, calc(-50% + 12px))' }}
                  >
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                    {w}
                  </span>
                );
              })}
              {/* accessibility live region */}
              <span className="sr-only" aria-live="polite">{words[idx]}</span>
            </span>
          </h1>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 justify-center">
          <a href="#create" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90">Create an Assistant</a>
          <a href="#demo" className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition hover:bg-accent">See Live Demo</a>
        </div>
      </div>

      {/* Inline keyframes for marquee + reduced motion support */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee { position: relative; overflow: hidden; }
        .marquee-inner { animation: marquee 28s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-inner { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default PlatformScreenshots;