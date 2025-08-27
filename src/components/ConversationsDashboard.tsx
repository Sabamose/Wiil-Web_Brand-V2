import React, { useMemo, useState } from "react";
import { Search, Phone, MessageSquare, Eye, Download, Filter, X } from "lucide-react";

/**
 * Engage Section — Elegant Glass Table v2
 * React + TailwindCSS only
 *
 * Refinements vs v1
 * - Lighter, roomier layout
 * - Subtle gradient headline + micro-subheading caps
 * - Glass container with elevated shadow + border fade
 * - Softer wavy-lines background with mask
 * - Chip filters + Export
 * - Animated status pills
 * - Abstract gradient avatars
 * - Minimal preview popover
 */
export default function EngageElegantV2() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "today" | "week" | "missed">("all");
  const [preview, setPreview] = useState<string | null>(null);

  const data = [
    { id: "7F3A", name: "Sarah Johnson", email: "sarah.johnson@email.com", org: "TechCorp Solutions", type: "call", status: "completed", duration: "4:32", time: "2:31 PM" },
    { id: "8G4B", name: "Michael Chen", email: "m.chen@innovate.com", org: "Innovate Inc", type: "chat", status: "in-progress", duration: "1:45", time: "3:15 PM" },
    { id: "9H5C", name: "Emily Davis", email: "emily.davis@startup.io", org: "StartupCo", type: "call", status: "completed", duration: "6:12", time: "1:45 PM" },
    { id: "116D", name: "David Wilson", email: "d.wilson@enterprise.com", org: "Enterprise Corp", type: "call", status: "missed", duration: "0:00", time: "12:30 PM" },
  ] as const;

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return data
      .filter((r) => [r.name, r.email, r.org, r.id].some((v) => v.toLowerCase().includes(q)))
      .filter((r) => (filter === "missed" ? r.status === "missed" : true));
  }, [query, filter]);

  return (
    <section className="relative w-full bg-white py-16">
      {/* Decorative backdrop */}
      <BackdropLines />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl font-display font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Engage With <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Your Audience</span>
        </h2>
        <p className="mt-2 text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-slate-400">
          Omni‑channel conversations · Search · Filter · Export
        </p>

        {/* Controls */}
        <div className="mt-6 sm:mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search conversations…"
              className="h-11 w-full rounded-2xl border border-slate-200/80 bg-white/70 pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-teal-400/60"
            />
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <Chip onClick={() => setFilter("all")} active={filter === "all"}>All</Chip>
            <Chip onClick={() => setFilter("today")} active={filter === "today"}>Today</Chip>
            <Chip onClick={() => setFilter("week")} active={filter === "week"} className="hidden xs:inline-flex">This Week</Chip>
            <Chip onClick={() => setFilter("missed")} active={filter === "missed"}>Missed</Chip>
            <button className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs text-slate-600 shadow-sm transition hover:bg-white">
              <Filter className="size-3.5" /> Filter
            </button>
            <button className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs text-teal-700 shadow-sm transition hover:bg-white">
              <Download className="size-3.5" /> <span className="hidden xs:inline">Export</span>
            </button>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="mt-6 block sm:hidden space-y-4">
          {filtered.map((r) => (
            <div key={r.id} className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 shadow-lg shadow-slate-900/5 backdrop-blur-[2px]">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <AvatarBlob seed={r.id} />
                    <div>
                      <div className="text-sm font-medium text-slate-900">{r.name}</div>
                      <div className="text-xs text-slate-400">{r.id}</div>
                    </div>
                  </div>
                  <StatusPill status={r.status as any} />
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Email:</span>
                    <span className="text-slate-700 truncate max-w-48">{r.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Organization:</span>
                    <span className="text-slate-700">{r.org}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Type:</span>
                    <span className="inline-flex items-center gap-1.5 text-slate-600">
                      {r.type === "call" ? <Phone className="size-3" /> : <MessageSquare className="size-3" />}
                      {r.type === "call" ? "Call" : "Chat"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="text-slate-700">{r.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Time:</span>
                    <span className="text-slate-700">{r.time}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setPreview(r.id)} 
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 py-2 text-sm text-slate-600 shadow-sm transition hover:bg-white"
                >
                  <Eye className="size-4" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="mt-6 hidden sm:block overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 shadow-xl shadow-slate-900/5 backdrop-blur-[2px]">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-slate-500/80">
                  <Th className="min-w-0 w-1/4">Customer</Th>
                  <Th className="min-w-0 w-1/4">Contact</Th>
                  <Th className="min-w-0 w-1/6">Type</Th>
                  <Th className="min-w-0 w-1/6">Status</Th>
                  <Th className="min-w-0 w-1/12">Duration</Th>
                  <Th className="min-w-0 w-1/12">Time</Th>
                  <Th className="min-w-0 w-16 text-center">View</Th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr key={r.id} className="group border-t border-slate-100/80 bg-white/60 transition hover:bg-white">
                    {/* Customer */}
                    <td className="p-3 lg:p-4">
                      <div className="flex items-center gap-3">
                        <AvatarBlob seed={r.id} />
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-slate-900 truncate">{r.name}</div>
                          <div className="text-[10px] text-slate-400">{r.id}</div>
                        </div>
                      </div>
                    </td>

                    {/* Contact */}
                    <td className="p-3 lg:p-4 align-middle">
                      <div className="text-sm text-slate-700 truncate">{r.email}</div>
                      <div className="text-xs text-slate-400 truncate">{r.org}</div>
                    </td>

                    {/* Type */}
                    <td className="p-3 lg:p-4 align-middle">
                      <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                        {r.type === "call" ? <Phone className="size-4" /> : <MessageSquare className="size-4" />}
                        <span className="hidden md:inline">{r.type === "call" ? "Call" : "Chat"}</span>
                      </span>
                    </td>

                    {/* Status */}
                    <td className="p-3 lg:p-4 align-middle">
                      <StatusPill status={r.status as any} />
                    </td>

                    {/* Duration */}
                    <td className="p-3 lg:p-4 align-middle text-sm text-slate-700">{r.duration}</td>

                    {/* Time */}
                    <td className="p-3 lg:p-4 align-middle text-sm text-slate-700">{r.time}</td>

                    {/* View */}
                    <td className="p-3 lg:p-4 text-center">
                      <button onClick={() => setPreview(r.id)} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-600 opacity-80 shadow-sm transition hover:opacity-100">
                        <Eye className="size-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Preview Popover */}
      {preview && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4" onClick={() => setPreview(null)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-slate-100/80 px-4 py-3">
              <div className="text-sm font-medium text-slate-900">Conversation Preview</div>
              <button onClick={() => setPreview(null)} className="rounded-full p-1 text-slate-500 hover:bg-slate-100">
                <X className="size-4" />
              </button>
            </div>
            <div className="px-4 py-4 text-sm text-slate-700">
              <div className="mb-2 text-xs uppercase tracking-widest text-slate-400">Transcript (sample)</div>
              <div className="space-y-2">
                <p><span className="font-medium text-slate-800">Caller:</span> Hi, I'd like to reschedule my appointment.</p>
                <p><span className="font-medium text-slate-800">Wiil:</span> Of course. Which day works best for you?</p>
                <p><span className="font-medium text-slate-800">Caller:</span> Thursday afternoon.</p>
                <p><span className="font-medium text-slate-800">Wiil:</span> I have 3:30 PM available. Shall I book it?</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <th className={`px-4 py-3 ${className}`}>{children}</th>;
}

function Chip({ children, active, onClick, className = "" }: { children: React.ReactNode; active?: boolean; onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs shadow-sm transition ${
        active ? "bg-slate-900 text-white hover:bg-slate-800" : "border border-slate-200 bg-white/70 text-slate-600 hover:bg-white"
      } ${className}`}
    >
      {children}
    </button>
  );
}

function StatusPill({ status }: { status: "completed" | "in-progress" | "missed" }) {
  if (status === "completed") {
    return <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">● Completed</span>;
  }
  if (status === "in-progress") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-200">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
        </span>
        In progress
      </span>
    );
  }
  return <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-rose-600 ring-1 ring-rose-200">○ Missed</span>;
}

function AvatarBlob({ seed }: { seed: string }) {
  const hue = (seed.charCodeAt(0) * 17 + seed.charCodeAt(1) * 7) % 360;
  const hue2 = (hue + 40) % 360;
  const bg = `conic-gradient(from 180deg at 50% 50%, hsl(${hue} 90% 80%), hsl(${hue2} 90% 75%), hsl(${hue} 90% 82%))`;
  return (
    <div className="relative">
      <div className="size-9 rounded-full shadow-sm ring-1 ring-black/5" style={{ backgroundImage: bg }} />
      <div className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-[1px]" />
    </div>
  );
}

function BackdropLines() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[440px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/60 to-transparent" />
      <svg viewBox="0 0 1200 440" className="absolute inset-0 opacity-[0.08]">
        <defs>
          <linearGradient id="w2" x1="0" x2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
          <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopOpacity="1" />
            <stop offset="100%" stopOpacity="0" />
          </linearGradient>
          <mask id="m">
            <rect width="1200" height="440" fill="url(#fade)" />
          </mask>
        </defs>
        <g mask="url(#m)">
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${20 + i * 34} C 320 ${6 + i * 26}, 880 ${38 + i * 24}, 1200 ${20 + i * 34}`}
              fill="none"
              stroke="url(#w2)"
              strokeWidth="1.2"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}