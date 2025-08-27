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
    description: "Automatic dialing of clients from the bank's database with a credit offer. Interested clients are transferred to the bank's call center.",
    image: "/lovable-uploads/9da631c1-782b-4654-9878-179f6335f54b.png",
    stats: {
      primary: { value: "500,000", label: "calls made in 5 days" },
      secondary: { value: ">70%", label: "makes up a business dial-up" }
    }
  },
  {
    id: "technical-support",
    title: "Robot for a mobile operator",
    description: "Notifying customers about the availability of a more advantageous tariff plan and offering to switch to it",
    image: "/lovable-uploads/cc9e283f-ecdf-4842-af7b-87a98d6f9185.png",
    stats: {
      primary: { value: "100,000", label: "calls are made weekly" },
      secondary: { value: ">10%", label: "agree to change the tariff" }
    }
  },
  {
    id: "appointment-booking",
    title: "Appointment booking system",
    description: "Seamless scheduling system that checks availability, books appointments, and sends confirmations automatically.",
    image: "/lovable-uploads/dc88150f-e898-4c4b-9685-7484e19637e4.png",
    stats: {
      primary: { value: "90%", label: "booking success rate" },
      secondary: { value: "24/7", label: "availability" }
    }
  },
  {
    id: "appointment-reminders",
    title: "Smart appointment reminders",
    description: "Automated reminder calls and messages to reduce no-shows and improve customer experience with intelligent timing.",
    image: "/lovable-uploads/75781844-c8c0-4667-a56d-9ca6a232163c.png",
    stats: {
      primary: { value: "75%", label: "reduction in no-shows" },
      secondary: { value: "95%", label: "reminder delivery rate" }
    }
  },
  {
    id: "loan-collector",
    title: "Robot collector",
    description: "Conducting telephone conversations with debtors: notification of debt, finding out the reason for the delay and encouraging payment",
    image: "/lovable-uploads/dc88150f-e898-4c4b-9685-7484e19637e4.png",
    stats: {
      primary: { value: "up to 1,000", label: "simultaneous calls within Russia" },
      secondary: { value: "0", label: "complaints from the customer" }
    }
  },
  {
    id: "restaurant-reservations",
    title: "Restaurant reservation assistant",
    description: "Handle table bookings, special requests, and waitlist management with natural conversation flow and menu recommendations.",
    image: "/lovable-uploads/cc9e283f-ecdf-4842-af7b-87a98d6f9185.png",
    stats: {
      primary: { value: "200%", label: "increase in bookings" },
      secondary: { value: "30%", label: "higher table turnover" }
    }
  },
  {
    id: "bank-issue-resolve",
    title: "Robot for the collection department in a bank",
    description: "Calling the debtor database: notification of late payment on a car loan and incentives to repay the debt",
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
                <div className="relative order-1 lg:order-2 p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-gradient-to-br from-background via-background to-muted/30">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
                        {useCase.title}
                      </h3>
                      <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>

                    {/* Audio Player with Circular Design */}
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 animate-pulse" />
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={handlePlayAudio}
                          className="relative rounded-full px-8 py-4 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5 mr-3" />
                          ) : (
                            <Play className="w-5 h-5 mr-3" />
                          )}
                          Listen to an example dialogue
                        </Button>
                      </div>
                    </div>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center lg:text-left">
                        <div className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                          {useCase.stats.primary.value}
                        </div>
                        <div className="text-sm lg:text-base text-muted-foreground font-medium">
                          {useCase.stats.primary.label}
                        </div>
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                          {useCase.stats.secondary.value}
                        </div>
                        <div className="text-sm lg:text-base text-muted-foreground font-medium">
                          {useCase.stats.secondary.label}
                        </div>
                      </div>
                    </div>

                    {/* Use Template Button */}
                    <div className="flex justify-center lg:justify-end pt-4">
                      <Button 
                        variant="link" 
                        className="text-primary hover:text-primary/80 text-lg font-medium group"
                      >
                        Use template 
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                      </Button>
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

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {isAutoPlay ? '⏸️ Pause auto-play' : '▶️ Resume auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;