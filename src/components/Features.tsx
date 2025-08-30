
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import noCodeSetupIcon from "@/assets/no-code-setup-transparent.png";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-teal-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center text-teal-600 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Professional features for <br className="hidden sm:block" />every conversation
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Built with enterprise-grade technology to handle sales, support, and operations across all channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<img src="/lovable-uploads/cf8bf532-5c0f-429d-b86a-36d70f9c0fb3.png" alt="Voice Calls" className="w-40 h-40 sm:w-48 sm:h-48 object-contain" />}
            title="Voice Calls"
            description="Handle unlimited voice conversations with natural speech recognition and synthesis across global phone networks."
            index={0}
          />
          <FeatureCard
            icon={<img src="/lovable-uploads/4cf6d69a-d90c-4237-9784-bafdde55fceb.png" alt="Web Chat" className="w-40 h-40 sm:w-48 sm:h-48 object-contain" />}
            title="Web Chat"
            description="Deploy intelligent chat widgets on any website with seamless integration and customizable branding."
            index={1}
          />
          <FeatureCard
            icon={<img src="/lovable-uploads/3b43f743-0330-4e15-ab8e-933ae81bec49.png" alt="SMS" className="w-40 h-40 sm:w-48 sm:h-48 object-contain" />}
            title="SMS"
            description="Reach customers via text messaging in 160+ countries with intelligent conversation routing."
            index={2}
          />
          <FeatureCard
            icon={<img src="/lovable-uploads/640d3ebc-ffee-4bd9-b6d8-6c4d44e4ceed.png" alt="Mobile Apps" className="w-40 h-40 sm:w-48 sm:h-48 object-contain" />}
            title="Mobile Apps"
            description="Native iOS and Android support with push notifications and offline conversation handling."
            index={3}
          />
          <FeatureCard
            icon={<img src="/lovable-uploads/895ad6e2-82c9-4a14-b30d-a0d048ccb553.png" alt="No-Code Setup" className="w-40 h-40 sm:w-48 sm:h-48 object-contain" />}
            title="No-Code Setup"
            description="Build and deploy AI assistants in 5 minutes without any programming knowledge or technical skills."
            index={4}
          />
          <FeatureCard
            icon={<img src="/lovable-uploads/e7638423-6cb2-4acb-a167-caf0b6fed534.png" alt="90% Automation" className="w-40 h-40 sm:w-48 sm:h-48 object-contain" />}
            title="90% Automation"
            description="Achieve up to 90% automation rate with intelligent conversation routing and response generation."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
