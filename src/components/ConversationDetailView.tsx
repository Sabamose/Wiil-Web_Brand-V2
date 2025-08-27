import React, { useState } from "react";
import { Play, Pause, Mic, Sparkles, Clock, FileText, MessageSquare, List } from "lucide-react";

/**
 * Conversation Monitor — Artistic Reimagining
 * Title updated to be more relevant and straightforward
 */
export default function ConversationMonitorArtistic() {
  const [playing, setPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("transcripts");

  return (
    <section className="relative w-full bg-white py-28">
      <BackdropCanvas />

      <div className="mx-auto max-w-6xl px-6">
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

        {/* Horizontal Tab Buttons */}
        <div className="mt-16 flex justify-center">
          <div className="flex rounded-2xl bg-slate-100 p-2">
            <button
              onClick={() => setActiveTab("transcripts")}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition ${
                activeTab === "transcripts" 
                  ? "bg-white text-teal-600 shadow-sm" 
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <MessageSquare className="size-4" />
              Transcripts
            </button>
            <button
              onClick={() => setActiveTab("summary")}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition ${
                activeTab === "summary" 
                  ? "bg-white text-teal-600 shadow-sm" 
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileText className="size-4" />
              Summary
            </button>
            <button
              onClick={() => setActiveTab("details")}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition ${
                activeTab === "details" 
                  ? "bg-white text-teal-600 shadow-sm" 
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <List className="size-4" />
              Details
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-12">
          {activeTab === "transcripts" && <TranscriptsContent />}
          {activeTab === "summary" && <SummaryContent />}
          {activeTab === "details" && <DetailsContent />}
        </div>
      </div>
    </section>
  );
}

/* --- Tab Content Components --- */
function TranscriptsContent() {
  return (
    <div className="relative mx-auto max-w-3xl">
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
        <Bubble who="Customer">Thank you! When will the changes take effect?</Bubble>
        <Bubble who="Assistant" teal>
          The changes are immediate. You'll see the updated billing on your next statement.
        </Bubble>
      </div>
    </div>
  );
}

function SummaryContent() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute inset-0 -z-10 mx-auto h-full w-full rounded-3xl bg-gradient-to-br from-blue-50 to-white blur-2xl" />
      <div className="rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Conversation Summary</h3>
        <div className="space-y-4 text-slate-700">
          <p><strong>Issue:</strong> Customer inquired about unexpected charges on their account</p>
          <p><strong>Resolution:</strong> Charges were identified as premium features from a recent upgrade. Customer requested to remove extras while keeping the base plan.</p>
          <p><strong>Action Taken:</strong> Assistant adjusted the subscription settings to remove premium features, maintaining the base plan.</p>
          <p><strong>Outcome:</strong> Customer satisfied with resolution. Changes applied immediately with next billing cycle reflection.</p>
          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-200">
            <span className="text-sm text-slate-500">Duration: 4:32</span>
            <span className="text-sm text-slate-500">Resolution Time: 2 minutes</span>
            <span className="text-sm text-green-600 font-medium">Status: Resolved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailsContent() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute inset-0 -z-10 mx-auto h-full w-full rounded-3xl bg-gradient-to-br from-purple-50 to-white blur-2xl" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3">Call Information</h4>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Date:</span>
              <span>Jan 15, 2024</span>
            </div>
            <div className="flex justify-between">
              <span>Time:</span>
              <span>2:30 PM EST</span>
            </div>
            <div className="flex justify-between">
              <span>Duration:</span>
              <span>4:32</span>
            </div>
            <div className="flex justify-between">
              <span>Channel:</span>
              <span>Phone Support</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3">Customer Details</h4>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Customer ID:</span>
              <span>CX-7849</span>
            </div>
            <div className="flex justify-between">
              <span>Plan:</span>
              <span>Professional</span>
            </div>
            <div className="flex justify-between">
              <span>Account Age:</span>
              <span>8 months</span>
            </div>
            <div className="flex justify-between">
              <span>Previous Calls:</span>
              <span>3</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm border border-slate-200 md:col-span-2">
          <h4 className="font-semibold text-slate-900 mb-3">Analytics</h4>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-teal-600">98%</div>
              <div className="text-xs text-slate-500">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">2min</div>
              <div className="text-xs text-slate-500">Resolution Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">First Call</div>
              <div className="text-xs text-slate-500">Resolution Rate</div>
            </div>
          </div>
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