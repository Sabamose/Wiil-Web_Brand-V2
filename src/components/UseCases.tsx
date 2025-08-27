import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause } from "lucide-react";

interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string };
  };
  audioUrl?: string; // Will be added when audio files are available
}

const useCases: UseCase[] = [
  {
    id: "sales",
    title: "Voice bot for sales",
    description: "Automatic outbound calling for lead qualification and appointment setting. Intelligent conversation flow adapts to customer responses.",
    image: "/lovable-uploads/9da631c1-782b-4654-9878-179f6335f54b.png",
    stats: {
      primary: { value: "300%", label: "increase in qualified leads" },
      secondary: { value: "85%", label: "customer satisfaction rate" }
    }
  },
  {
    id: "technical-support",
    title: "Technical support assistant",
    description: "AI-powered first-line support for common technical issues with intelligent escalation to human agents when needed.",
    image: "/lovable-uploads/cc9e283f-ecdf-4842-af7b-87a98d6f9185.png",
    stats: {
      primary: { value: "60%", label: "issues resolved automatically" },
      secondary: { value: "24/7", label: "availability" }
    }
  },
  {
    id: "appointment-booking",
    title: "Appointment booking",
    description: "Seamless scheduling system that checks availability, books appointments, and sends confirmations automatically.",
    image: "/lovable-uploads/dc88150f-e898-4c4b-9685-7484e19637e4.png",
    stats: {
      primary: { value: "90%", label: "booking success rate" },
      secondary: { value: "50%", label: "reduction in no-shows" }
    }
  },
  {
    id: "appointment-reminders",
    title: "Appointment reminders",
    description: "Automated reminder calls and messages to reduce no-shows and improve customer experience.",
    image: "/lovable-uploads/75781844-c8c0-4667-a56d-9ca6a232163c.png",
    stats: {
      primary: { value: "75%", label: "reduction in no-shows" },
      secondary: { value: "95%", label: "reminder delivery rate" }
    }
  },
  {
    id: "loan-collector",
    title: "Loan collection assistant",
    description: "Professional and empathetic debt collection calls with compliance monitoring and flexible payment options.",
    image: "/lovable-uploads/9da631c1-782b-4654-9878-179f6335f54b.png",
    stats: {
      primary: { value: "40%", label: "improvement in collection rate" },
      secondary: { value: "100%", label: "compliance adherence" }
    }
  },
  {
    id: "restaurant-reservations",
    title: "Restaurant reservations",
    description: "Handle table bookings, special requests, and waitlist management with natural conversation flow.",
    image: "/lovable-uploads/cc9e283f-ecdf-4842-af7b-87a98d6f9185.png",
    stats: {
      primary: { value: "200%", label: "increase in bookings" },
      secondary: { value: "30%", label: "higher table turnover" }
    }
  },
  {
    id: "bank-issue-resolve",
    title: "Banking issue resolution",
    description: "Handle common banking inquiries, account issues, and transaction disputes with secure authentication.",
    image: "/lovable-uploads/75781844-c8c0-4667-a56d-9ca6a232163c.png",
    stats: {
      primary: { value: "80%", label: "issues resolved on first call" },
      secondary: { value: "3min", label: "average call duration" }
    }
  }
];

const UseCases = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = () => {
    // Audio playback functionality will be implemented when audio files are provided
    setIsPlaying(!isPlaying);
  };

  const useCase = useCases[currentCase];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Use Ready-Made Templates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our proven use cases or customize for your specific needs
          </p>
        </div>

        {/* Use Case Navigation Dots */}
        <div className="flex justify-center mb-8 space-x-2">
          {useCases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCase(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentCase ? 'bg-primary' : 'bg-muted'
              }`}
              aria-label={`View use case ${index + 1}`}
            />
          ))}
        </div>

        {/* Main Use Case Card */}
        <Card className="overflow-hidden max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative">
              <img
                src={useCase.image}
                alt={useCase.title}
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Audio Player */}
                <div className="mb-8">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handlePlayAudio}
                    className="w-full sm:w-auto"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 mr-2" />
                    ) : (
                      <Play className="w-4 h-4 mr-2" />
                    )}
                    Listen to an example dialogue
                  </Button>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold mb-1">
                      {useCase.stats.primary.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {useCase.stats.primary.label}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold mb-1">
                      {useCase.stats.secondary.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {useCase.stats.secondary.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Template Button */}
              <div className="flex justify-end">
                <Button variant="link" className="text-primary">
                  Use template →
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Navigation Instructions */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          Click the dots above to explore different use cases
        </div>
      </div>
    </section>
  );
};

export default UseCases;