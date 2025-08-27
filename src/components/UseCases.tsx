import React, { useEffect, useMemo, useRef, useState } from "react";

/* Tailwind font setup (same as earlier):
  theme.extend.fontFamily.brockmann = ["Brockmann","ui-sans-serif","system-ui"]
  @font-face { font-family:Brockmann; src:url('/fonts/Brockmann-Regular.woff2') format('woff2'); font-weight:400; font-style:normal; font-display:swap }
  @font-face { font-family:Brockmann; src:url('/fonts/Brockmann-Semibold.woff2') format('woff2'); font-weight:600; font-style:normal; font-display:swap }
*/

export default function AssistantUseCasesSlideshow() {
  const items: Slide[] = useMemo(
    () => [
      {
        title: "AI Sales Assistant for Credit & Finance",
        blurb: "Qualifies borrowers, answers FAQs and routes hot leads.",
        image: "https://images.unsplash.com/photo-1523285333936-4f1901e0b5b8?q=80&w=1400&auto=format&fit=crop",
        stats: [
          { k: "Lead response", v: "<1s" },
          { k: "Availability", v: "24/7" },
        ],
        audio: "/audio/sales.mp3",
      },
      {
        title: "24/7 Customer Support Assistant",
        blurb: "Resolves common issues, gathers context, escalates cleanly.",
        image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1400&auto=format&fit=crop",
        stats: [
          { k: "Tickets deflected", v: "68%" },
          { k: "CSAT lift", v: "+14%" },
        ],
        audio: "/audio/support.mp3",
      },
      {
        title: "Virtual Receptionist for Clinics",
        blurb: "Books and manages appointments; answers pre‑visit questions.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
        stats: [
          { k: "No‑shows reduced", v: "‑32%" },
          { k: "Reminders", v: "Auto" },
        ],
        audio: "/audio/clinic.mp3",
      },
      {
        title: "Smart Reservation Assistant for Restaurants",
        blurb: "Takes reservations, changes, and cancellations without hold time.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop",
        stats: [
          { k: "Calls automated", v: "100%" },
          { k: "Wait time", v: "0 min" },
        ],
        audio: "/audio/restaurant.mp3",
      },
      {
        title: "Automated Payment & Billing Assistant",
        blurb: "Collects payments, verifies identity, sends receipts and reminders.",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1400&auto=format&fit=crop",
        stats: [
          { k: "Recovery uplift", v: "+22%" },
          { k: "PCI-safe", v: "Yes" },
        ],
        audio: "/audio/billing.mp3",
      },
      {
        title: "AI Concierge for Hotels & Hospitality",
        blurb: "Answers guest questions, books amenities, handles special requests.",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop",
        stats: [
          { k: "Upsell lift", v: "+15%" },
          { k: "Coverage", v: "24/7" },
        ],
        audio: "/audio/concierge.mp3",
      },
      {
        title: "Order Management & Fulfillment Assistant",
        blurb: "Tracks orders, updates ETAs, and resolves delivery issues.",
        image: "https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=1400&auto=format&fit=crop",
        stats: [
          { k: "Status calls cut", v: "‑70%" },
          { k: "NPS", v: "+9" },
        ],
        audio: "/audio/order.mp3",
      },
      {
        title: "Technical Support Assistant",
        blurb: "Guides troubleshooting, gathers logs, and files clean tickets.",
        image: "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1400&auto=format&fit=crop",
        stats: [
          { k: "First‑contact fix", v: "+24%" },
          { k: "AHT", v: "‑31%" },
        ],
        audio: "/audio/tech.mp3",
      },
      {
        title: "Delivery & Logistics Assistant",
        blurb: "Confirms addresses, schedules drop‑offs, and sends updates.",
        image: "https://images.unsplash.com/photo-1549921296-3b4a6b2b06b8?q=80&w=1400&auto=format&fit=crop",
        stats: [
          { k: "Failed deliveries", v: "‑28%" },
          { k: "Reattempts", v: "‑36%" },
        ],
        audio: "/audio/logistics.mp3",
      },
      {
        title: "Real Estate Inquiry Assistant",
        blurb: "Answers listing questions and books showings instantly.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop",
        stats: [
          { k: "Lead-to-tour", v: "2x" },
          { k: "Coverage", v: "24/7" },
        ],
        audio: "/audio/realestate.mp3",
      },
      {
        title: "Appointment Scheduling Assistant",
        blurb: "Books, reschedules, and reminds—across phone, chat, and web.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1400&auto=format&fit=crop",
        stats: [
          { k: "No‑shows", v: "‑25%" },
          { k: "Channels", v: "Omni" },
        ],
        audio: "/audio/scheduling.mp3",
      },
    ],
    []
  );

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-6 sm:mb-8">
          <h2 className="font-brockmann text-[clamp(28px,4vw,44px)] font-semibold tracking-tight text-slate-900">Use Cases</h2>
          <p className="mt-2 max-w-2xl text-slate-500">Explore assistants built for real work. Subtle teal accents, minimal noise.</p>
        </header>
        <Carousel items={items} />
      </div>
    </section>
  );
}

type Slide = {
  title: string;
  blurb: string;
  image: string;
  stats: { k: string; v: string }[];
  audio: string;
};

function Carousel({ items }: { items: Slide[] }) {
  const [idx, setIdx] = useState(0);
  const timer = useRef<number | null>(null);

  const go = (n: number) => setIdx((p) => (p + n + items.length) % items.length);
  const to = (n: number) => setIdx(((n % items.length) + items.length) % items.length);

  useEffect(() => {
    stop();
    timer.current = window.setInterval(() => {
      setIdx((p) => (p + 1) % items.length);
    }, 5000);
    return stop;
  }, [items.length]);

  const stop = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl ring-1 ring-slate-200">
        {items.map((s, i) => (
          <SlideCard key={i} s={s} active={i === idx} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button aria-label="Previous" onClick={() => go(-1)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-teal-700 ring-1 ring-teal-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button aria-label="Next" onClick={() => go(1)} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-teal-700 ring-1 ring-teal-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6l6 6-6 6" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {items.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => to(i)} className={`h-2.5 w-2.5 rounded-full transition ${i === idx ? "bg-teal-600" : "bg-teal-200"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideCard({ s, active }: { s: Slide; active: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!active && playing && audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
    }
  }, [active, playing]);

  return (
    <div className={`grid grid-cols-1 overflow-hidden bg-white transition-opacity duration-500 sm:grid-cols-2 ${active ? "opacity-100" : "hidden opacity-0"}`}>
      <div className="relative h-56 sm:h-[420px]">
        <img src={s.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/0 via-teal-900/0 to-teal-900/0" />
      </div>
      <div className="flex min-h-[320px] flex-col justify-between p-6 sm:p-8">
        <div>
          <h3 className="font-brockmann text-[clamp(20px,2.6vw,28px)] font-semibold leading-tight text-slate-900">{s.title}</h3>
          <p className="mt-2 max-w-[52ch] text-slate-600">{s.blurb}</p>
          <div className="mt-6 flex items-center gap-4">
            <button onClick={() => {
              const a = audioRef.current; if (!a) return; if (playing) { a.pause(); setPlaying(false); } else { a.currentTime = 0; a.play(); setPlaying(true); a.onended = () => setPlaying(false); }
            }} aria-label={playing ? "Pause sample dialog" : "Play sample dialog"} className="relative inline-grid size-16 place-items-center rounded-full bg-white text-teal-700 shadow-sm ring-1 ring-teal-200">
              {playing ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="4" height="14" rx="1.5" fill="#0f766e" /><rect x="14" y="5" width="4" height="14" rx="1.5" fill="#0f766e" /></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6.5v11l9-5.5-9-5.5Z" fill="#0f766e"/></svg>
              )}
              <span className="pointer-events-none absolute inset-0 rounded-full ring-8 ring-teal-100/70" />
              <span className="pointer-events-none absolute -inset-2 rounded-full ring-8 ring-teal-50" />
            </button>
            <div className="text-sm text-slate-500">Listen to a sample dialog</div>
            <audio ref={audioRef} src={s.audio} preload="none" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-0">
          {s.stats.map((x, i) => (
            <div key={i} className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-200">
              <div className="font-brockmann text-xl font-semibold text-slate-900">{x.v}</div>
              <div className="text-xs text-slate-500">{x.k}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}