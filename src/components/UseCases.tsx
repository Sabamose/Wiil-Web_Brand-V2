import React, { useEffect, useMemo, useRef, useState } from "react";

export default function AssistantUseCasesSlideshowV2() {
  const items: Slide[] = useMemo(
    () => [
      {
        emoji: "💳",
        title: "AI Sales Assistant for Credit & Finance",
        blurb: "Qualifies borrowers, answers FAQs and routes hot leads.",
        images: [
          "/lovable-uploads/0f7e61ef-7ccc-4d98-9027-d81175e0668b.png",
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80"
        ],
        stats: [
          { k: "Lead response", v: "<1s" },
          { k: "Availability", v: "24/7" },
        ],
        audio: "/audio/sales.mp3",
      },
      {
        emoji: "🎧",
        title: "24/7 Customer Support Assistant",
        blurb: "Resolves common issues, gathers context, escalates cleanly.",
        images: [
          "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
        ],
        stats: [
          { k: "Tickets deflected", v: "68%" },
          { k: "CSAT lift", v: "+14%" },
        ],
        audio: "/audio/support.mp3",
      },
      {
        emoji: "🏥",
        title: "Virtual Receptionist for Clinics",
        blurb: "Books and manages appointments; answers pre‑visit questions.",
        images: [
          "https://images.unsplash.com/photo-1584811649383-fb3f0b7d1a2b?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=80"
        ],
        stats: [
          { k: "No‑shows reduced", v: "‑32%" },
          { k: "Reminders", v: "Auto" },
        ],
        audio: "/audio/clinic.mp3",
      },
      {
        emoji: "🍽️",
        title: "Smart Reservation Assistant for Restaurants",
        blurb: "Takes reservations, changes, and cancellations without hold time.",
        images: [
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80"
        ],
        stats: [
          { k: "Calls automated", v: "100%" },
          { k: "Wait time", v: "0 min" },
        ],
        audio: "/audio/restaurant.mp3",
      },
      {
        emoji: "💸",
        title: "Automated Payment & Billing Assistant",
        blurb: "Collects payments, verifies identity, sends receipts and reminders.",
        images: [
          "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1605901309584-818e25960a8b?auto=format&fit=crop&w=1600&q=80"
        ],
        stats: [
          { k: "Recovery uplift", v: "+22%" },
          { k: "PCI-safe", v: "Yes" },
        ],
        audio: "/audio/billing.mp3",
      },
      {
        emoji: "🛎️",
        title: "AI Concierge for Hotels & Hospitality",
        blurb: "Answers guest questions, books amenities, handles special requests.",
        images: [
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1501117716987-c8e3f4f04954?auto=format&fit=crop&w=1600&q=80"
        ],
        stats: [
          { k: "Upsell lift", v: "+15%" },
          { k: "Coverage", v: "24/7" },
        ],
        audio: "/audio/concierge.mp3",
      },
      {
        emoji: "📦",
        title: "Order Management & Fulfillment Assistant",
        blurb: "Tracks orders, updates ETAs, and resolves delivery issues.",
        images: [
          "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1600&q=80"
        ],
        stats: [
          { k: "Status calls cut", v: "‑70%" },
          { k: "NPS", v: "+9" },
        ],
        audio: "/audio/order.mp3",
      },
      {
        emoji: "🛠️",
        title: "Technical Support Assistant",
        blurb: "Guides troubleshooting, gathers logs, and files clean tickets.",
        images: [
          "https://images.unsplash.com/photo-1581091870622-1e7c1c5e8b3f?auto=format&fit=crop&w=1600&q=80&v=2",
          "https://images.unsplash.com/photo-1581091870622-1e7c1c5e8b3f?auto=format&fit=crop&w=1600&q=80&v=2"
        ],
        stats: [
          { k: "First‑contact fix", v: "+24%" },
          { k: "AHT", v: "‑31%" },
        ],
        audio: "/audio/tech.mp3",
      },
      {
        emoji: "🚚",
        title: "Delivery & Logistics Assistant",
        blurb: "Confirms addresses, schedules drop‑offs, and sends updates.",
        images: [
          "https://images.unsplash.com/photo-1549921296-3b4a6b2b06b8?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
        ],
        stats: [
          { k: "Failed deliveries", v: "‑28%" },
          { k: "Reattempts", v: "‑36%" },
        ],
        audio: "/audio/logistics.mp3",
      },
      {
        emoji: "🏡",
        title: "Real Estate Inquiry Assistant",
        blurb: "Answers listing questions and books showings instantly.",
        images: [
          "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80"
        ],
        stats: [
          { k: "Lead-to-tour", v: "2x" },
          { k: "Coverage", v: "24/7" },
        ],
        audio: "/audio/realestate.mp3",
      },
      {
        emoji: "📅",
        title: "Appointment Scheduling Assistant",
        blurb: "Books, reschedules, and reminds—across phone, chat, and web.",
        images: [
          "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1600&q=80"
        ],
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
  emoji: string;
  title: string;
  blurb: string;
  images: string[];
  stats: { k: string; v: string }[];
  audio: string;
};

function Carousel({ items }: { items: Slide[] }) {
  const [idx, setIdx] = useState(0);
  const timer = useRef<number | null>(null);

  const go = (n: number) => setIdx((p) => (p + n + items.length) % items.length);
  const to = (n: number) => setIdx(((n % items.length) + items.length) % items.length);

  // Auto-progression removed - slides only change on manual navigation

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
        <ImageWithFallback sources={s.images} alt="" />
      </div>
      <div className="flex min-h-[320px] flex-col justify-between p-6 sm:p-8">
        <div>
          <h3 className="font-brockmann text-[clamp(20px,2.6vw,28px)] font-semibold leading-tight text-slate-900">
            <span className="mr-2 align-[-2px]">{s.emoji}</span>
            {s.title}
          </h3>
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

function ImageWithFallback({ sources, alt }: { sources: string[]; alt: string }) {
  const [srcIdx, setSrcIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const src = sources[srcIdx];

  return (
    <div className="absolute inset-0">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-teal-50 to-white" />
      )}
      {src ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setSrcIdx((i) => (i + 1 < sources.length ? i + 1 : i))}
          loading="lazy"
          decoding="async"
          crossOrigin="anonymous"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-teal-50 to-white">
          <div className="h-40 w-40 rounded-full bg-teal-100/70 blur-2xl" />
        </div>
      )}
    </div>
  );
}