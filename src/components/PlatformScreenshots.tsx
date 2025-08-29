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
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-32">
      {/* Subtle background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-2xl" />
      </div>

      {/* Foreground CTA line */}
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <div className="text-center relative">
          {/* Main heading with enhanced typography */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-foreground leading-[1.1] tracking-tight max-w-5xl mx-auto">
              <span className="block">Meet your customers</span>
              <span className="block">wherever they are,</span>
              <span className="flex items-center justify-center gap-4 flex-wrap">
                however they{" "}
                <span className="relative inline-flex items-center gap-3 min-w-[200px] md:min-w-[280px] lg:min-w-[320px] h-[1.2em] justify-center">
                  {/* word carousel items */}
                  {words.map((w, i) => {
                    const IconComponent = icons[i];
                    return (
                      <span
                        key={w}
                        aria-hidden={i !== idx}
                        className={`absolute inset-0 flex items-center justify-center gap-3 whitespace-nowrap transition-all duration-700 ease-in-out ${
                          i === idx 
                            ? "opacity-100 translate-y-0 scale-100" 
                            : "opacity-0 translate-y-4 scale-95"
                        } text-primary font-medium`}
                      >
                        <IconComponent className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 drop-shadow-sm" />
                        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {w}
                        </span>
                      </span>
                    );
                  })}
                  {/* accessibility live region */}
                  <span className="sr-only" aria-live="polite">{words[idx]}</span>
                </span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Connect with your audience across every channel with AI-powered conversations that feel natural and personal.
            </p>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a 
              href="#create" 
              className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                Create an Assistant
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 transition-opacity group-hover:opacity-90" />
            </a>
            
            <a 
              href="#demo" 
              className="group relative overflow-hidden rounded-full border-2 border-border bg-background/80 backdrop-blur-sm px-8 py-4 text-base font-medium text-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:bg-accent/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Demo
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlatformScreenshots;