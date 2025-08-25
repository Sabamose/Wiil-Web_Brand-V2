import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface AssistantType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

interface Role {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const AssistantCreationFlow = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    industry: null,
    assistantType: null,
    role: null,
    voice: null
  });

  const industries: Industry[] = [
    {
      id: "healthcare",
      name: "Healthcare",
      icon: <span className="text-lg">🩺</span>,
      description: "Medical practices, hospitals, clinics"
    },
    {
      id: "retail",
      name: "Retail & E-commerce", 
      icon: <span className="text-lg">🛒</span>,
      description: "Online stores, retail businesses"
    },
    {
      id: "finance",
      name: "Finance & Banking",
      icon: <span className="text-lg">💼</span>,
      description: "Banks, insurance, financial services"
    },
    {
      id: "education",
      name: "Education",
      icon: <span className="text-lg">🎓</span>,
      description: "Schools, universities, training centers"
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: <span className="text-lg">🚗</span>,
      description: "Car dealerships, auto services"
    },
    {
      id: "realestate",
      name: "Real Estate",
      icon: <span className="text-lg">🏠</span>,
      description: "Property management, real estate agencies"
    }
  ];

  const assistantTypes: AssistantType[] = [
    {
      id: "phone",
      name: "Phone Assistant",
      icon: <span className="text-xl">📞</span>,
      description: "Handles incoming and outgoing phone calls",
      features: ["Voice conversations", "Call routing", "Real-time responses", "Human handoff"]
    },
    {
      id: "website", 
      name: "Website Assistant",
      icon: <span className="text-xl">🌐</span>,
      description: "Engages visitors on your website via chat",
      features: ["Live chat", "Lead capture", "24/7 availability", "Multi-language support"]
    }
  ];

  const roles: Role[] = [
    {
      id: "support",
      name: "Customer Support",
      icon: <span className="text-lg">🎧</span>,
      description: "Handle customer inquiries and provide technical support"
    },
    {
      id: "sales",
      name: "Sales Representative", 
      icon: <span className="text-lg">💬</span>,
      description: "Qualify leads and guide customers through sales process"
    },
    {
      id: "receptionist",
      name: "Virtual Receptionist",
      icon: <span className="text-lg">👤</span>,
      description: "Greet visitors, schedule appointments, and route calls"
    },
    {
      id: "specialist",
      name: "Industry Specialist",
      icon: <span className="text-lg">👥</span>,
      description: "Provide specialized knowledge for your specific industry"
    }
  ];

  const voices = [
    { id: "sarah", name: "Sarah", accent: "American", description: "Warm and professional" },
    { id: "james", name: "James", accent: "British", description: "Clear and authoritative" },
    { id: "maria", name: "Maria", accent: "Spanish", description: "Friendly and approachable" },
    { id: "alex", name: "Alex", accent: "Canadian", description: "Neutral and versatile" }
  ];

  const handleOptionSelect = (category: string, optionId: string) => {
    setSelectedOptions(prev => ({ ...prev, [category]: optionId }));
  };

  const isReadyToDeploy = () => {
    return selectedOptions.industry && selectedOptions.role && selectedOptions.voice;
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-radial from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/10 via-transparent to-secondary/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-3 rounded-full text-primary text-sm font-medium mb-6 border border-primary/30 shadow-lg backdrop-blur-sm">
            <span className="text-base animate-pulse">🤖</span>
            AI Assistant Creation ⚡
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Custom AI Assistants Made Simple
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Build specialized AI assistants tailored to your industry and business needs in minutes
          </p>
        </div>

        {/* Enhanced Creation Form */}
        <Card className="bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-lg shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="p-8 md:p-12 relative z-10">
            
            {/* Industry Selection */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Choose Your Industry</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {industries.map((industry) => (
                  <Card 
                    key={industry.id} 
                    className={`p-4 cursor-pointer transition-all duration-500 hover-scale group relative overflow-hidden ${
                      selectedOptions.industry === industry.id 
                        ? 'bg-gradient-to-br from-primary/20 to-secondary/20 shadow-xl shadow-primary/25 ring-2 ring-primary/50' 
                        : 'hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 hover:shadow-lg'
                    }`}
                    onClick={() => handleOptionSelect('industry', industry.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="flex items-center gap-3 relative z-10">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        selectedOptions.industry === industry.id 
                          ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg' 
                          : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                      }`}>
                        {industry.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{industry.name}</h4>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>


            {/* Role Selection */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Choose Its Role</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {roles.map((role) => (
                  <Card 
                    key={role.id} 
                    className={`p-4 cursor-pointer transition-all duration-500 hover-scale group relative overflow-hidden ${
                      selectedOptions.role === role.id 
                        ? 'bg-gradient-to-br from-primary/20 to-secondary/20 shadow-xl shadow-primary/25 ring-2 ring-primary/50' 
                        : 'hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 hover:shadow-lg'
                    }`}
                    onClick={() => handleOptionSelect('role', role.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="flex items-center gap-3 relative z-10">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        selectedOptions.role === role.id 
                          ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg' 
                          : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                      }`}>
                        {role.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{role.name}</h4>
                        <p className="text-xs text-muted-foreground">{role.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Voice Selection */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Customize Its Voice</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {voices.map((voice) => (
                  <Card 
                    key={voice.id} 
                    className={`p-4 cursor-pointer transition-all duration-500 hover-scale group relative overflow-hidden ${
                      selectedOptions.voice === voice.id 
                        ? 'bg-gradient-to-br from-primary/20 to-secondary/20 shadow-xl shadow-primary/25 ring-2 ring-primary/50' 
                        : 'hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 hover:shadow-lg'
                    }`}
                    onClick={() => handleOptionSelect('voice', voice.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          selectedOptions.voice === voice.id 
                            ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg' 
                            : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                        }`}>
                          <span className="text-lg">🔊</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{voice.name}</h4>
                          <p className="text-xs text-muted-foreground">{voice.accent} • {voice.description}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="text-xs hover:bg-primary/10 hover:text-primary transition-colors">
                        Preview
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Deploy Section */}
            <div className="text-center pt-8 border-t border-border">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h4 className="font-medium text-sm mb-1">Instant Deployment</h4>
                  <p className="text-xs text-muted-foreground">Goes live immediately</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🕒</span>
                  </div>
                  <h4 className="font-medium text-sm mb-1">24/7 Service</h4>
                  <p className="text-xs text-muted-foreground">Never miss customers</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🤖</span>
                  </div>
                  <h4 className="font-medium text-sm mb-1">Smart Automation</h4>
                  <p className="text-xs text-muted-foreground">Automate complex tasks</p>
                </div>
              </div>
              
              <a href="https://console.wiil.io/dashboard" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className={`text-lg px-8 py-4 transition-all duration-300 ${
                    isReadyToDeploy() 
                      ? 'bg-primary hover:bg-primary/90 text-white shadow-elegant' 
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                  disabled={!isReadyToDeploy()}
                >
                  <span className="text-lg mr-2">➕</span>
                  {isReadyToDeploy() ? 'Create AI Assistant' : 'Complete All Steps Above'}
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AssistantCreationFlow;