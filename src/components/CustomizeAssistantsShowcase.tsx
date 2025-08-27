import React from "react";
import { motion } from "framer-motion";
import { Headphones, Phone, MessageSquare, Briefcase, Building2, HeartPulse, ShoppingBag, Car, Home, GraduationCap, Calendar, CalendarClock } from "lucide-react";

export default function CustomizeAssistantsShowcase() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white py-10">
      <DottedBackdrop />
      <Connectors />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-teal-600">Setup in minutes</p>
          <h2 className="mt-1 text-[clamp(24px,3.5vw,32px)] font-display font-semibold tracking-tight text-slate-900">
            Customize Assistants <span className="text-teal-600">with a few clicks</span>
          </h2>
          <p className="mt-1 max-w-xl text-sm text-slate-500">Four simple choices. Endless possibilities.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Step 1 - Role */}
          <div className="order-1">
            <SideLabel title="Pick a Role" copy="Choose what your assistant does best—from reception to scheduling." />
          </div>
          <div className="order-2">
            <Glow intensity="sm">
              <StepCard title="Step 1 · Role" index={1}>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  <GhostOption label="Receptionist" icon={<Phone className="size-4 text-teal-700" />} />
                  <GhostOption label="Support" icon={<Headphones className="size-4 text-teal-700" />} />
                  <GhostOption label="Sales" icon={<MessageSquare className="size-4 text-teal-700" />} />
                  <GhostOption label="Concierge" icon={<Briefcase className="size-4 text-teal-700" />} />
                  <GhostOption label="Booking" icon={<Calendar className="size-4 text-teal-700" />} />
                  <GhostOption label="Scheduler" icon={<CalendarClock className="size-4 text-teal-700" />} />
                </div>
              </StepCard>
            </Glow>
          </div>

          {/* Step 2 - Language */}
          <div className="order-3 lg:order-4">
            <Glow intensity="sm">
              <StepCard title="Step 2 · Language" index={2}>
                <div className="flex flex-wrap gap-1.5">
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
          </div>
          <div className="order-4 lg:order-3">
            <SideLabel title="Select Language" copy="Choose the primary language or let us auto-detect from conversations." />
          </div>

          {/* Step 3 - Voice */}
          <div className="order-5">
            <SideLabel title="Give it a Voice" copy="Preview tones and pick a voice that matches your brand." />
          </div>
          <div className="order-6">
            <Glow intensity="sm">
              <StepCard title="Step 3 · Voice" index={3}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <VoiceChip name="Sarah" desc="Warm • Professional" gender="female" look="sarah" />
                  <VoiceChip name="James" desc="Clear • Assured" gender="male" look="james" />
                  <VoiceChip name="Maria" desc="Friendly • Light" gender="female" look="maria" />
                  <VoiceChip name="Alex" desc="Neutral • Versatile" gender="male" look="alex" />
                </div>
              </StepCard>
            </Glow>
          </div>

          {/* Step 4 - Industry */}
          <div className="order-7 lg:order-8">
            <Glow intensity="sm">
              <StepCard title="Step 4 · Industry" index={4}>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <IconTile icon={<HeartPulse className="size-4 text-teal-700" />} label="Healthcare" />
                  <IconTile icon={<ShoppingBag className="size-4 text-teal-700" />} label="Retail" />
                  <IconTile icon={<Building2 className="size-4 text-teal-700" />} label="Professional" />
                  <IconTile icon={<GraduationCap className="size-4 text-teal-700" />} label="Education" />
                  <IconTile icon={<Car className="size-4 text-teal-700" />} label="Auto" />
                  <IconTile icon={<Home className="size-4 text-teal-700" />} label="Real Estate" />
                </div>
              </StepCard>
            </Glow>
          </div>
          <div className="order-8 lg:order-7">
            <SideLabel title="Choose an Industry" copy="We'll tailor knowledge, tone, and automations for your space." />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">Role • Language • Voice • Industry — set once, refine anytime.</p>
          <button className="h-9 rounded-full bg-teal-600 px-4 text-xs font-medium text-white shadow-sm">Create Your Assistant</button>
        </div>
      </div>
    </section>
  );
}

function StepCard({ title, index, children }: { title: string; index: number; children: React.ReactNode }) {
  return (
    <div className="relative rounded-xl border border-slate-200 bg-white/90 p-3 shadow-sm">
      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[10px] font-medium text-teal-700">
        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-teal-600"></span>
        {title}
      </div>
      {children}
      <div className="pointer-events-none absolute -left-2 -top-2 h-8 w-8 rounded-full bg-teal-200/20 blur-xl" />
    </div>
  );
}

function Glow({ children, intensity = "sm" }: { children: React.ReactNode; intensity?: "sm" | "md" | "lg" }) {
  const size = intensity === "lg" ? "h-24 w-24" : intensity === "md" ? "h-20 w-20" : "h-16 w-16";
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-2 -z-10">
        <div className={`absolute -top-4 left-6 ${size} rounded-full bg-teal-200/20 blur-2xl`} />
      </div>
      {children}
    </div>
  );
}

function GhostOption({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
      <div className="rounded-lg bg-slate-50 p-1.5 ring-1 ring-slate-200">{icon}</div>
      <div>
        <div className="text-xs font-medium text-slate-900">{label}</div>
        <div className="text-[10px] text-slate-400">Illustrative</div>
      </div>
    </div>
  );
}

function VoiceChip({ name, desc, gender, look }: { name: string; desc: string; gender: "male" | "female"; look?: "sarah" | "james" | "maria" | "alex" }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
        <AvatarFace variant={look || (gender === "female" ? "maria" : "james")} size="small" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-xs font-medium text-slate-900">{name}</div>
        <div className="truncate text-[10px] text-slate-400">{desc}</div>
      </div>
    </div>
  );
}

function AvatarFace({ variant = "maria", size = "normal" }: { variant?: "sarah" | "james" | "maria" | "alex"; size?: "small" | "normal" }) {
  const palettes: Record<string, { skin: string; hair: string; bg: string }> = {
    sarah: { skin: "#F6D7C3", hair: "#2F2F2F", bg: "#E6FFFB" },
    james: { skin: "#E8C39E", hair: "#0B3B34", bg: "#EAF7F5" },
    maria: { skin: "#F1C7B4", hair: "#5A3825", bg: "#F3FFFD" },
    alex: { skin: "#E9BFA1", hair: "#234F4A", bg: "#EFFCF9" },
  };
  const p = palettes[variant];
  const dimensions = size === "small" ? { width: "24", height: "24", cx: "12", cy: "12", r: "12" } : { width: "36", height: "36", cx: "18", cy: "18", r: "18" };
  
  return (
    <svg width={dimensions.width} height={dimensions.height} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} className="rounded-full shadow-[inset_0_0_0_2px_rgba(20,184,166,0.15)]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`r-${variant}-${size}`}><circle cx={dimensions.cx} cy={dimensions.cy} r={dimensions.r}/></clipPath>
      </defs>
      <rect width={dimensions.width} height={dimensions.height} rx={dimensions.r} fill={p.bg} />
      <g clipPath={`url(#r-${variant}-${size})`}>
        {size === "small" ? (
          <>
            <circle cx="12" cy="11" r="7" fill={p.hair} />
            <ellipse cx="12" cy="12.5" rx="5.5" ry="6" fill={p.skin} />
            <circle cx="9.5" cy="12" r="0.8" fill="#1F2937" />
            <circle cx="14.5" cy="12" r="0.8" fill="#1F2937" />
            <path d="M9 14.2c0.8 1 4.4 1 5.2 0" stroke="#0f766e" strokeWidth="1" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            <circle cx="18" cy="16" r="11" fill={p.hair} />
            <ellipse cx="18" cy="18.5" rx="8.5" ry="9" fill={p.skin} />
            <circle cx="14.5" cy="18" r="1.2" fill="#1F2937" />
            <circle cx="21.5" cy="18" r="1.2" fill="#1F2937" />
            <path d="M13.8 21.4c1.3 1.6 7.1 1.6 8.4 0" stroke="#0f766e" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          </>
        )}
      </g>
    </svg>
  );
}

function FlagChip({ flag, label, muted }: { flag: string; label: string; muted?: boolean }) {
  return (
    <div className={`${muted ? "bg-slate-100 text-slate-500 ring-slate-200" : "bg-slate-50 text-slate-700 ring-slate-200"} inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs ring-1`}>
      <span className="text-sm">{flag}</span>
      <span className="leading-none">{label}</span>
    </div>
  );
}

function IconTile({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
      <div className="rounded-lg bg-slate-50 p-1.5 ring-1 ring-slate-200">{icon}</div>
      <div className="text-[10px] font-medium text-slate-700">{label}</div>
    </div>
  );
}

function SideLabel({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/70 p-3 text-center shadow-sm sm:text-left">
      <div className="text-xs font-medium text-slate-900">{title}</div>
      <p className="text-[10px] text-slate-500">{copy}</p>
    </div>
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