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
    <section className="relative w-full bg-white py-8 sm:py-12 lg:py-20">
      <BackdropCanvas />

      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 items-start">
          {/* Left: Title and Description */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light tracking-tight text-slate-900 leading-tight">
              Monitor <span className="text-teal-600">Conversations</span>
            </h1>
            <p className="mt-4 lg:mt-6 text-base sm:text-lg text-slate-500 leading-relaxed">
              Clarity, precision, and insights from every interaction. Track, analyze, and optimize your customer conversations.
            </p>
            
            {/* Tab Navigation - Mobile Horizontal Scroll */}
            <div className="mt-8 lg:mt-10">
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                <button
                  onClick={() => setActiveTab("transcripts")}
                  className={`flex items-center gap-3 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium transition whitespace-nowrap min-w-fit ${
                    activeTab === "transcripts" 
                      ? "bg-teal-50 text-teal-700 border-2 border-teal-200" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-2 border-transparent"
                  }`}
                >
                  <MessageSquare className="size-4 sm:size-5 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Live Transcripts</div>
                    <div className="text-xs opacity-70 hidden sm:block">Real-time conversation flow</div>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("summary")}
                  className={`flex items-center gap-3 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium transition whitespace-nowrap min-w-fit ${
                    activeTab === "summary" 
                      ? "bg-teal-50 text-teal-700 border-2 border-teal-200" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-2 border-transparent"
                  }`}
                >
                  <FileText className="size-4 sm:size-5 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">AI Summary</div>
                    <div className="text-xs opacity-70 hidden sm:block">Key insights and outcomes</div>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("details")}
                  className={`flex items-center gap-3 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-left text-sm font-medium transition whitespace-nowrap min-w-fit ${
                    activeTab === "details" 
                      ? "bg-teal-50 text-teal-700 border-2 border-teal-200" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-2 border-transparent"
                  }`}
                >
                  <List className="size-4 sm:size-5 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Analytics</div>
                    <div className="text-xs opacity-70 hidden sm:block">Performance metrics</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Audio Player and Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8 w-full overflow-hidden">
            {/* Audio Waveform Player */}
            <div className="relative rounded-xl lg:rounded-3xl border border-teal-200/50 bg-gradient-to-br from-white to-teal-50/30 p-3 sm:p-4 lg:p-8 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
                <button
                  onClick={() => setPlaying((p) => !p)}
                  className="rounded-full bg-teal-600 p-2 sm:p-3 lg:p-4 text-white shadow-lg transition hover:bg-teal-700 hover:scale-105 flex-shrink-0"
                >
                  {playing ? <Pause className="size-3 sm:size-4 lg:size-5" /> : <Play className="size-3 sm:size-4 lg:size-5" />}
                </button>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <Waveform />
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-slate-500 flex-shrink-0">
                  <Clock className="size-3 sm:size-4" />
                  <span>4:32</span>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] w-full overflow-hidden">
              {activeTab === "transcripts" && <TranscriptsContent />}
              {activeTab === "summary" && <SummaryContent />}
              {activeTab === "details" && <DetailsContent />}
            </div>
          </div>
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
      <div className="absolute inset-0 -z-10 mx-auto h-full w-full rounded-2xl lg:rounded-3xl bg-gradient-to-br from-blue-50 to-white blur-2xl" />
      <div className="rounded-xl lg:rounded-2xl bg-white/80 p-4 sm:p-6 lg:p-8 shadow-lg backdrop-blur-sm border border-slate-200">
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">Conversation Summary</h3>
        <div className="space-y-3 sm:space-y-4 text-slate-700 text-sm sm:text-base">
          <p><strong>Issue:</strong> Customer inquired about unexpected charges on their account</p>
          <p><strong>Resolution:</strong> Charges were identified as premium features from a recent upgrade. Customer requested to remove extras while keeping the base plan.</p>
          <p><strong>Action Taken:</strong> Assistant adjusted the subscription settings to remove premium features, maintaining the base plan.</p>
          <p><strong>Outcome:</strong> Customer satisfied with resolution. Changes applied immediately with next billing cycle reflection.</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-200">
            <span className="text-xs sm:text-sm text-slate-500">Duration: 4:32</span>
            <span className="text-xs sm:text-sm text-slate-500">Resolution Time: 2 minutes</span>
            <span className="text-xs sm:text-sm text-green-600 font-medium">Status: Resolved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailsContent() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute inset-0 -z-10 mx-auto h-full w-full rounded-2xl lg:rounded-3xl bg-gradient-to-br from-purple-50 to-white blur-2xl" />
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div className="rounded-xl lg:rounded-2xl bg-white/80 p-4 sm:p-6 shadow-lg backdrop-blur-sm border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">Call Information</h4>
          <div className="space-y-2 text-xs sm:text-sm text-slate-600">
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
        <div className="rounded-xl lg:rounded-2xl bg-white/80 p-4 sm:p-6 shadow-lg backdrop-blur-sm border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">Customer Details</h4>
          <div className="space-y-2 text-xs sm:text-sm text-slate-600">
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
        <div className="rounded-xl lg:rounded-2xl bg-white/80 p-4 sm:p-6 shadow-lg backdrop-blur-sm border border-slate-200 md:col-span-2">
          <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">Analytics</h4>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div>
              <div className="text-lg sm:text-2xl font-bold text-teal-600">98%</div>
              <div className="text-[10px] sm:text-xs text-slate-500">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-teal-600">2min</div>
              <div className="text-[10px] sm:text-xs text-slate-500">Resolution Time</div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-teal-600">First Call</div>
              <div className="text-[10px] sm:text-xs text-slate-500">Resolution Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ children, who, teal }: { children: React.ReactNode; who: string; teal?: boolean }) {
  return (
    <div className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3 text-left text-xs sm:text-sm leading-relaxed shadow-sm ${
      teal ? "ml-auto bg-teal-600 text-white" : "mr-auto bg-slate-100 text-slate-800"
    }`}>
      <div className="mb-1 text-[10px] sm:text-xs uppercase tracking-wider opacity-70 font-medium">{who}</div>
      <div className="break-words">{children}</div>
    </div>
  );
}

function Waveform() {
  const bars = Array.from({ length: 30 }, (_, i) => 8 + Math.round(20 * Math.abs(Math.sin(i / 3))));
  return (
    <div className="flex h-16 sm:h-20 lg:h-28 items-end gap-[2px] sm:gap-[3px] lg:gap-[5px] overflow-hidden">
      {bars.map((h, i) => (
        <div key={i} className="w-[2px] sm:w-[3px] rounded-full bg-teal-500/70 flex-shrink-0" style={{ height: `${h}px` }} />
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