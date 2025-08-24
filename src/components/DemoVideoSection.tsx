import React, { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";

const DemoVideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !videoRef.current) return;

      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      videoRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      if (!videoRef.current) return;
      videoRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);

  const handlePlayClick = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      if (isPlaying) {
        iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0');
      } else {
        iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="overflow-hidden relative bg-hero-gradient py-20" id="demo-video">
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight text-teal-800 mb-6">
              See AI Assistants in Action
            </h2>
          </div>

          <div className="relative" ref={containerRef}>
            <div className="absolute inset-0 bg-dark-900 rounded-2xl sm:rounded-3xl -z-10 shadow-xl"></div>
            <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <div ref={videoRef} className="w-full aspect-[16/10] transition-transform duration-500 ease-out bg-gray-100 flex items-center justify-center" style={{
                transformStyle: 'preserve-3d'
              }}>
                <div className="text-center">
                  <div className="bg-gray-200 rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                    <Play className="w-8 h-8 text-gray-600" fill="currentColor" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Demo Video</h3>
                  <p className="text-gray-500 text-sm">Video will be available soon</p>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'url("/hero-image.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.5
              }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default DemoVideoSection;