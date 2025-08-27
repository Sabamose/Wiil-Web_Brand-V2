import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssistantManagement from "@/components/AssistantManagement";
import CustomizeAssistantsShowcase from "@/components/CustomizeAssistantsShowcase";
import ConversationsDashboard from "@/components/ConversationsDashboard";
import ConversationDetailView from "@/components/ConversationDetailView";
import PlatformScreenshots from "@/components/PlatformScreenshots";

interface LottieData {
  [key: string]: any;
}

export default function PlatformPage() {
  const [animationData, setAnimationData] = useState<LottieData | null>(null);
  const isMobile = useIsMobile();
  const heroImageRef = useRef<HTMLDivElement>(null);

  // Animation observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Load Lottie animation
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch("/loop-header.lottie");
        if (response.ok) {
          const data = await response.json();
          setAnimationData(data);
        }
      } catch (error) {
        console.error("Failed to load Lottie animation:", error);
      }
    };

    loadAnimation();
  }, []);

  // Mouse tilt effect for hero image
  useEffect(() => {
    if (isMobile || !heroImageRef.current) return;

    const heroImage = heroImageRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroImage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      heroImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      heroImage.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    heroImage.addEventListener("mousemove", handleMouseMove);
    heroImage.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      heroImage.removeEventListener("mousemove", handleMouseMove);
      heroImage.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              AI Platform <span className="text-teal-600">Overview</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Discover how our AI assistant platform transforms customer interactions with intelligent automation and human-like conversations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                Watch Demo
              </button>
            </div>
          </div>
          <div 
            ref={heroImageRef}
            className="mt-16 flow-root sm:mt-24 transition-transform duration-300 ease-out"
          >
            <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="/hero-image.jpg"
                alt="Platform Overview"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-slate-900/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="animate-on-scroll">
        <AssistantManagement />
      </div>
      <div className="animate-on-scroll">
        <CustomizeAssistantsShowcase />
      </div>
      <div className="animate-on-scroll">
        <ConversationsDashboard />
      </div>
      <div className="animate-on-scroll">
        <ConversationDetailView />
      </div>
      <div className="animate-on-scroll">
        <PlatformScreenshots />
      </div>

      <Footer />
    </div>
  );
}