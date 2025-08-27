import React, { useState } from "react";
import { Play, Pause, Mic, Sparkles, Clock } from "lucide-react";

/**
 * Conversation Monitor — Artistic Reimagining
 * Title updated to be more relevant and straightforward
 */
export default function ConversationMonitorArtistic() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative w-full bg-white py-28">
      <BackdropCanvas />

      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Hero Title */}
        <h1 className="text-6xl font-display font-light tracking-tight text-slate-900">
          Monitor <span className="text-teal-600">Conversations</span>
        </h1>
        <p className="mt-4 text-base text-slate-500">Clarity, precision, and insights from every interaction.</p>

        {/* Waveform framed like art */}
        <div className="mt-20 flex items-center justify-center">
          <div className="relative rounded-[2rem] border-4 border-teal-600/30 bg-gradient-to-b from-white to-teal-50 p-10 shadow-2xl">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setPlaying((p) => !p)}
                className="rounded-full bg-teal-600 p-6 text-white shadow-lg transition hover:bg-teal-700"
              >
                {playing ? <Pause className="size-6" /> : <Play className="size-6" />}
              </button>
              <Waveform />
              <span className="ml-6 flex items-center gap-1 text-sm text-slate-400"><Clock className="size-4" /> 4:32</span>
            </div>
          </div>
        </div>

        {/* Value as Exhibit Labels */}
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <Exhibit icon={<Mic className="size-6 text-teal-600" />} title="Sound" subtitle="Pristine Clarity" />
          <Exhibit icon={<Sparkles className="size-6 text-teal-600" />} title="Meaning" subtitle="AI‑crafted Summaries" />
          <Exhibit icon={<Clock className="size-6 text-teal-600" />} title="Time" subtitle="Instant Review" />
        </div>

        {/* Floating Transcript */}
        <div className="relative mx-auto mt-24 max-w-3xl">
          <div className="absolute inset-0 -z-10 mx-auto h-full w-full rounded-3xl bg-gradient-to-br from-teal-50 to-white blur-2xl" />
          <div className="space-y-4">
            <Bubble who="Customer">I noticed unexpected charges on my account.</Bubble>
            <Bubble who="Assistant" teal>
              Those are premium features from your upgrade. Let me explain.
            </Bubble>
            <Bubble who="Customer">Got it. Can we remove extras but keep the plan?</Bubble>
            <Bubble who="Assistant" teal>
              Done. I've adjusted your subscription.
            </Bubble>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Components --- */
function Exhibit({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-teal-200">
      {/* Conversation Summary Card */}
      <div className="space-y-4">
        {/* Header with call info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
              {icon}
            </div>
            <div>
              <h4 className="font-medium text-slate-900">{title}</h4>
              <p className="text-xs text-slate-500">{subtitle}</p>
            </div>
          </div>
          <div className="text-xs text-slate-400">3 min call</div>
        </div>

        {/* Mini conversation snippet */}
        <div className="space-y-2 border-l-2 border-teal-100 pl-4">
          <div className="text-xs">
            <span className="font-medium text-slate-600">Customer:</span>
            <span className="ml-1 text-slate-500">"Need help with billing..."</span>
          </div>
          <div className="text-xs">
            <span className="font-medium text-teal-600">Assistant:</span>
            <span className="ml-1 text-slate-500">"I'll check that right away."</span>
          </div>
        </div>

        {/* Script guidance */}
        <div className="rounded-lg bg-gradient-to-r from-teal-50 to-blue-50 p-3">
          <div className="flex items-start gap-2">
            <Sparkles className="mt-0.5 h-3 w-3 text-teal-500 flex-shrink-0" />
            <div className="text-xs">
              <p className="font-medium text-slate-700 mb-1">Suggested Script:</p>
              <p className="text-slate-600 leading-relaxed">
                "Thank you for calling [Company]. I understand you have a billing question. 
                Let me pull up your account to assist you better."
              </p>
            </div>
          </div>
        </div>

        {/* Call outcome */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
            Resolved
          </span>
          <span className="text-xs text-slate-400">Rating: 4.8/5</span>
        </div>
      </div>
    </div>
  );
}

function Bubble({ children, who, teal }: { children: React.ReactNode; who: string; teal?: boolean }) {
  return (
    <div className={`max-w-[80%] rounded-2xl px-5 py-3 text-left text-sm leading-relaxed shadow-sm ${
      teal ? "ml-auto bg-teal-600 text-white" : "mr-auto bg-slate-100 text-slate-800"
    }`}>
      <div className="mb-1 text-xs uppercase tracking-wider opacity-70">{who}</div>
      {children}
    </div>
  );
}

function Waveform() {
  const bars = Array.from({ length: 60 }, (_, i) => 10 + Math.round(40 * Math.abs(Math.sin(i / 5))));
  return (
    <div className="flex h-28 items-end gap-[5px]">
      {bars.map((h, i) => (
        <div key={i} className="w-[3px] rounded-full bg-teal-500/70" style={{ height: `${h}px` }} />
      ))}
    </div>
  );
}

function BackdropCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
      <div className="h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-teal-100/40 to-teal-200/30 blur-3xl" />
    </div>
  );
}