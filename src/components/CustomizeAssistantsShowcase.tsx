import React from "react";
import { motion } from "framer-motion";
import { Headphones, Phone, MessageSquare, Briefcase, Building2, HeartPulse, ShoppingBag, Car, Home, GraduationCap, Calendar, Settings } from "lucide-react";

export default function CustomizeAssistantsShowcase() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white py-16">
      <DottedBackdrop />
      <Connectors />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-teal-600">Setup in minutes</p>
          <h2 className="mt-1 text-[clamp(28px,4vw,40px)] font-display font-semibold tracking-tight text-slate-900">
            Customize Assistants <span className="text-teal-600">with a few clicks</span>
          </h2>
          <p className="mt-2 max-w-xl text-slate-500">Four simple choices. Endless possibilities.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            <Glow intensity="md">
              <StepCard title="Step 1 · Role" index={1}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <GhostOption label="Receptionist" icon={<span className="text-xl">📞</span>} />
                  <GhostOption label="Support" icon={<span className="text-xl">🎧</span>} />
                  <GhostOption label="Sales" icon={<span className="text-xl">💬</span>} />
                  <GhostOption label="Concierge" icon={<span className="text-xl">🏨</span>} />
                  <GhostOption label="Service Booking" icon={<span className="text-xl">📅</span>} />
                  <GhostOption label="Tech Support" icon={<span className="text-xl">⚙️</span>} />
                </div>
              </StepCard>
            </Glow>

            <SideLabel title="Give it a Voice" copy="Preview tones and pick a voice that matches your brand." />

            <Glow intensity="md">
              <StepCard title="Step 3 · Voice" index={3}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <VoiceChip name="Sarah" desc="Warm • Professional" gender="female" look="sarah" />
                  <VoiceChip name="James" desc="Clear • Assured" gender="male" look="james" />
                  <VoiceChip name="Maria" desc="Friendly • Light" gender="female" look="maria" />
                  <VoiceChip name="Alex" desc="Neutral • Versatile" gender="male" look="alex" />
                </div>
              </StepCard>
            </Glow>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            <SideLabel title="Pick a Role" copy="Choose what your assistant does best—calls, support, sales, or concierge." />

            <Glow intensity="sm">
              <StepCard title="Step 2 · Language" index={2}>
                <div className="flex flex-wrap gap-2">
                  {[
                    { t: "English", f: "🇺🇸" },
                    { t: "Español", f: "🇪🇸" },
                    { t: "Français", f: "🇫🇷" },
                    { t: "Deutsch", f: "🇩🇪" },
                    { t: "Português", f: "🇵🇹" },
                    { t: "日本語", f: "🇯🇵" },
                    { t: "中文", f: "🇨🇳" },
                  ].map((x) => (
                    <FlagChip key={x.t} flag={x.f} label={x.t} />
                  ))}
                  <FlagChip flag="🌐" label="Auto‑detect" muted />
                </div>
              </StepCard>
            </Glow>


            <Glow intensity="lg">
              <StepCard title="Step 4 · Industry" index={4}>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  <IconTile icon={<HeartPulse className="size-5 text-teal-700" />} label="Healthcare" />
                  <IconTile icon={<ShoppingBag className="size-5 text-teal-700" />} label="Retail" />
                  <IconTile icon={<Building2 className="size-5 text-teal-700" />} label="Professional" />
                  <IconTile icon={<GraduationCap className="size-5 text-teal-700" />} label="Education" />
                  <IconTile icon={<Car className="size-5 text-teal-700" />} label="Auto" />
                  <IconTile icon={<Home className="size-5 text-teal-700" />} label="Real Estate" />
                </div>
              </StepCard>
            </Glow>

            <SideLabel title="Choose an Industry" copy="We'll tailor knowledge, tone, and automations for your space." />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">Role • Language • Voice • Industry — set once, refine anytime.</p>
          <button className="h-11 rounded-full bg-teal-600 px-5 text-sm font-medium text-white shadow-sm">Create Your Assistant</button>
        </div>
      </div>
    </section>
  );
}

function StepCard({ title, index, children }: { title: string; index: number; children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white/90 p-4 sm:p-5 shadow-sm">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-[11px] font-medium text-teal-700">
        <span className="inline-flex h-2 w-2 rounded-full bg-teal-600"></span>
        {title}
      </div>
      {children}
      <div className="pointer-events-none absolute -left-3 -top-3 h-14 w-14 rounded-full bg-teal-200/20 blur-2xl" />
    </div>
  );
}

function Glow({ children, intensity = "sm" }: { children: React.ReactNode; intensity?: "sm" | "md" | "lg" }) {
  const size = intensity === "lg" ? "h-40 w-40" : intensity === "md" ? "h-32 w-32" : "h-24 w-24";
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-4 -z-10">
        <div className={`absolute -top-6 left-10 ${size} rounded-full bg-teal-200/30 blur-3xl`} />
      </div>
      {children}
    </div>
  );
}

function GhostOption({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="rounded-xl bg-slate-50 p-2 ring-1 ring-slate-200">{icon}</div>
      <div>
        <div className="text-sm font-medium text-slate-900">{label}</div>
        <div className="text-xs text-slate-400">Illustrative</div>
      </div>
    </div>
  );
}

function VoiceChip({ name, desc, gender, look }: { name: string; desc: string; gender: "male" | "female"; look?: "sarah" | "james" | "maria" | "alex" }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
        <AvatarFace variant={look || (gender === "female" ? "maria" : "james")} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-slate-900">{name}</div>
        <div className="truncate text-xs text-slate-400">{desc}</div>
      </div>
    </div>
  );
}

function AvatarFace({ variant = "maria" }: { variant?: "sarah" | "james" | "maria" | "alex" }) {
  const isFemaleName = variant === "sarah" || variant === "maria";
  
  if (isFemaleName) {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative"
      >
        <motion.svg 
          width="36" 
          height="36" 
          viewBox="0 0 36 36" 
          className="rounded-full shadow-lg"
          animate={{ 
            rotateY: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Female avatar with longer hair and softer features */}
          <defs>
            <linearGradient id={`female-bg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdf2f8" />
              <stop offset="100%" stopColor="#fce7f3" />
            </linearGradient>
            <linearGradient id={`female-hair-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5a2b" />
              <stop offset="100%" stopColor="#6b4423" />
            </linearGradient>
          </defs>
          
          <circle cx="18" cy="18" r="18" fill={`url(#female-bg-${variant})`} />
          
          {/* Long flowing hair */}
          <path d="M8 12 Q18 5 28 12 Q26 8 18 6 Q10 8 8 12 Z" fill={`url(#female-hair-${variant})`} />
          <ellipse cx="18" cy="14" rx="12" ry="8" fill={`url(#female-hair-${variant})`} />
          
          {/* Face */}
          <ellipse cx="18" cy="20" rx="7" ry="8" fill="#f3d5c0" />
          
          {/* Eyes with lashes */}
          <ellipse cx="15" cy="19" rx="1.5" ry="1" fill="#1f2937" />
          <ellipse cx="21" cy="19" rx="1.5" ry="1" fill="#1f2937" />
          <path d="M13.5 17.5 Q15 16.5 16.5 17.5" stroke="#1f2937" strokeWidth="0.8" fill="none" />
          <path d="M19.5 17.5 Q21 16.5 22.5 17.5" stroke="#1f2937" strokeWidth="0.8" fill="none" />
          
          {/* Soft smile with lipstick */}
          <path d="M15 22.5 Q18 24.5 21 22.5" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          
          {/* Blush */}
          <ellipse cx="13" cy="21" rx="1.5" ry="1" fill="#fbb6ce" opacity="0.6" />
          <ellipse cx="23" cy="21" rx="1.5" ry="1" fill="#fbb6ce" opacity="0.6" />
        </motion.svg>
        
        {/* Subtle sparkle animation */}
        <motion.div
          className="absolute -top-1 -right-1 text-pink-400"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✨
        </motion.div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative"
      >
        <motion.svg 
          width="36" 
          height="36" 
          viewBox="0 0 36 36" 
          className="rounded-full shadow-lg"
          animate={{ 
            rotateY: [0, -5, 0, 5, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Male avatar with shorter hair and stronger features */}
          <defs>
            <linearGradient id={`male-bg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eff6ff" />
              <stop offset="100%" stopColor="#dbeafe" />
            </linearGradient>
            <linearGradient id={`male-hair-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
          </defs>
          
          <circle cx="18" cy="18" r="18" fill={`url(#male-bg-${variant})`} />
          
          {/* Short hair */}
          <path d="M10 15 Q18 8 26 15 Q24 12 18 10 Q12 12 10 15 Z" fill={`url(#male-hair-${variant})`} />
          <ellipse cx="18" cy="14" rx="9" ry="5" fill={`url(#male-hair-${variant})`} />
          
          {/* Face with more angular features */}
          <path d="M11 18 Q18 28 25 18 Q23 24 18 24 Q13 24 11 18 Z" fill="#e8c39e" />
          
          {/* Eyes */}
          <ellipse cx="15" cy="19" rx="1.2" ry="0.8" fill="#1f2937" />
          <ellipse cx="21" cy="19" rx="1.2" ry="0.8" fill="#1f2937" />
          
          {/* Eyebrows */}
          <path d="M13.5 17 Q15 16.5 16.5 17" stroke="#1f2937" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M19.5 17 Q21 16.5 22.5 17" stroke="#1f2937" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          
          {/* Confident smile */}
          <path d="M15.5 22 Q18 23.5 20.5 22" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          
          {/* Subtle beard shadow */}
          <ellipse cx="18" cy="23.5" rx="3" ry="1.5" fill="#374151" opacity="0.2" />
        </motion.svg>
        
        {/* Subtle tech animation */}
        <motion.div
          className="absolute -top-1 -right-1 text-blue-500"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💼
        </motion.div>
      </motion.div>
    );
  }
}

function FlagChip({ flag, label, muted }: { flag: string; label: string; muted?: boolean }) {
  return (
    <div className={`${muted ? "bg-slate-100 text-slate-500 ring-slate-200" : "bg-slate-50 text-slate-700 ring-slate-200"} inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm ring-1`}>
      <span className="text-lg">{flag}</span>
      <span className="leading-none">{label}</span>
    </div>
  );
}

function IconTile({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <div className="rounded-xl bg-slate-50 p-2 ring-1 ring-slate-200">{icon}</div>
      <div className="text-xs font-medium text-slate-700">{label}</div>
    </div>
  );
}

function SideLabel({ title, copy }: { title: string; copy: string }) {
  return (
    <motion.div 
      className="group relative rounded-2xl border border-teal-100/60 bg-gradient-to-br from-white/80 to-teal-50/30 p-5 text-center shadow-lg shadow-teal-100/20 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-teal-100/30 sm:text-left"
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/0 to-teal-100/0 opacity-0 transition-opacity duration-300 group-hover:from-teal-50/20 group-hover:to-teal-100/10 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-2 text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition-colors duration-200">{title}</div>
        <p className="text-xs leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-200">{copy}</p>
      </div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-teal-200 opacity-60" />
    </motion.div>
  );
}

function DottedBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#CBD5E1" opacity="0.35" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

function Connectors() {
  return (
    <svg className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full md:block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#99f6e4" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      <g stroke="url(#g)" strokeOpacity="0.25" strokeDasharray="4 6" fill="none" strokeWidth="2">
        <path d="M12,220 C240,200 380,280 620,260" />
        <path d="M12,420 C240,400 380,480 620,460" />
      </g>
    </svg>
  );
}