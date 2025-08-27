import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string };
  };
  audioUrl?: string;
}

const useCases: UseCase[] = [
  {
    id: "sales",
    title: "Voice bot for credit sales",
    description: "Automatic client outreach with credit offers from bank database.",
    image: "/lovable-uploads/9da631c1-782b-4654-9878-179f6335f54b.png",
    stats: {
      primary: { value: "500,000", label: "calls made in 5 days" },
      secondary: { value: ">70%", label: "makes up a business dial-up" }
    }
  },
  {
    id: "technical-support",
    title: "Robot for a mobile operator",
    description: "Notify customers about better tariff plans and assist with switching.",
    image: "/lovable-uploads/cc9e283f-ecdf-4842-af7b-87a98d6f9185.png",
    stats: {
      primary: { value: "100,000", label: "calls are made weekly" },
      secondary: { value: ">10%", label: "agree to change the tariff" }
    }
  },
  {
    id: "appointment-booking",
    title: "Appointment booking system",
    description: "Check availability, book appointments, and send confirmations automatically.",
    image: "/lovable-uploads/dc88150f-e898-4c4b-9685-7484e19637e4.png",
    stats: {
      primary: { value: "90%", label: "booking success rate" },
      secondary: { value: "24/7", label: "availability" }
    }
  },
  {
    id: "appointment-reminders",
    title: "Smart appointment reminders",
    description: "Automated reminders to reduce no-shows and improve customer experience.",
    image: "/lovable-uploads/75781844-c8c0-4667-a56d-9ca6a232163c.png",
    stats: {
      primary: { value: "75%", label: "reduction in no-shows" },
      secondary: { value: "95%", label: "reminder delivery rate" }
    }
  },
  {
    id: "loan-collector",
    title: "Robot collector",
    description: "Professional debt collection conversations with payment encouragement.",
    image: "/lovable-uploads/dc88150f-e898-4c4b-9685-7484e19637e4.png",
    stats: {
      primary: { value: "up to 1,000", label: "simultaneous calls within Russia" },
      secondary: { value: "0", label: "complaints from the customer" }
    }
  },
  {
    id: "restaurant-reservations",
    title: "Restaurant reservation assistant",
    description: "Handle bookings, special requests, and waitlist management naturally.",
    image: "/lovable-uploads/cc9e283f-ecdf-4842-af7b-87a98d6f9185.png",
    stats: {
      primary: { value: "200%", label: "increase in bookings" },
      secondary: { value: "30%", label: "higher table turnover" }
    }
  },
  {
    id: "bank-issue-resolve",
    title: "Robot for the collection department in a bank",
    description: "Notify debtors about late payments and provide repayment incentives.",
    image: "/lovable-uploads/75781844-c8c0-4667-a56d-9ca6a232163c.png",
    stats: {
      primary: { value: "70%", label: "level of reaching the customer base" },
      secondary: { value: "up to 1,000", label: "simultaneous calls within Russia" }
    }
  }
];

const UseCases = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const nextCase = () => {
    setIsAutoPlay(false);
    setCurrentCase((prev) => (prev + 1) % useCases.length);
  };

  const prevCase = () => {
    setIsAutoPlay(false);
    setCurrentCase((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const goToCase = (index: number) => {
    setIsAutoPlay(false);
    setCurrentCase(index);
  };

  const useCase = useCases[currentCase];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            USE READY-MADE TEMPLATES
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our proven use cases designed for maximum efficiency and customer satisfaction
          </p>
        </div>

        {/* Main Slideshow Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-card shadow-2xl">
            {/* Slide Content */}
            <div className="relative min-h-[600px] lg:min-h-[500px]">
              <div className="grid lg:grid-cols-2 h-full">
                {/* Image Section */}
                <div className="relative order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 z-10" />
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                    style={{ 
                      filter: 'brightness(0.9) contrast(1.1)',
                      transform: `scale(${1 + currentCase * 0.02})` 
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="relative order-1 lg:order-2 p-8 lg:p-12 xl:p-16 flex flex-col justify-center items-center text-center bg-gradient-to-br from-background via-background to-muted/30">
                  <div className="space-y-8">
                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                      {useCase.title}
                    </h3>

                    {/* Round Play Button */}
                    <div className="flex flex-col items-center space-y-3">
                      <button
                        onClick={handlePlayAudio}
                        className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center group shadow-lg"
                        aria-label="Listen to example dialogue"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300" />
                        {isPlaying ? (
                          <Pause className="w-8 h-8 lg:w-10 lg:h-10 text-primary relative z-10" />
                        ) : (
                          <Play className="w-8 h-8 lg:w-10 lg:h-10 text-primary relative z-10 ml-1" />
                        )}
                      </button>
                      <p className="text-sm text-foreground font-medium">Click to listen Sample Dialogs</p>
                    </div>

                    {/* Compact Statistics */}
                    <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
                      <div>
                        <div className="text-2xl lg:text-3xl font-bold mb-1 text-white">
                          {useCase.stats.primary.value}
                        </div>
                        <div className="text-xs lg:text-sm text-white/70 font-medium">
                          {useCase.stats.primary.label}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl lg:text-3xl font-bold mb-1 text-white">
                          {useCase.stats.secondary.value}
                        </div>
                        <div className="text-xs lg:text-sm text-white/70 font-medium">
                          {useCase.stats.secondary.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevCase}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-all duration-200 hover:scale-110"
              aria-label="Previous use case"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextCase}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-all duration-200 hover:scale-110"
              aria-label="Next use case"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCase(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentCase 
                    ? 'w-12 h-3 bg-primary' 
                    : 'w-3 h-3 bg-muted hover:bg-muted-foreground/30'
                }`}
                aria-label={`Go to use case ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCases;