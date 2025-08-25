import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Check,
  Stethoscope,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  Car,
  Home,
  Phone,
  Globe,
  Volume2,
  Users,
  Headphones,
  MessageSquare,
  UserCheck,
  Plus,
  Activity,
  Bot
} from "lucide-react";

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
      icon: <Stethoscope className="w-5 h-5" />,
      description: "Medical practices, hospitals, clinics"
    },
    {
      id: "retail",
      name: "Retail & E-commerce", 
      icon: <ShoppingCart className="w-5 h-5" />,
      description: "Online stores, retail businesses"
    },
    {
      id: "finance",
      name: "Finance & Banking",
      icon: <Briefcase className="w-5 h-5" />,
      description: "Banks, insurance, financial services"
    },
    {
      id: "education",
      name: "Education",
      icon: <GraduationCap className="w-5 h-5" />,
      description: "Schools, universities, training centers"
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: <Car className="w-5 h-5" />,
      description: "Car dealerships, auto services"
    },
    {
      id: "realestate",
      name: "Real Estate",
      icon: <Home className="w-5 h-5" />,
      description: "Property management, real estate agencies"
    }
  ];

  const assistantTypes: AssistantType[] = [
    {
      id: "phone",
      name: "Phone Assistant",
      icon: <Phone className="w-6 h-6" />,
      description: "Handles incoming and outgoing phone calls",
      features: ["Voice conversations", "Call routing", "Real-time responses", "Human handoff"]
    },
    {
      id: "website", 
      name: "Website Assistant",
      icon: <Globe className="w-6 h-6" />,
      description: "Engages visitors on your website via chat",
      features: ["Live chat", "Lead capture", "24/7 availability", "Multi-language support"]
    }
  ];

  const roles: Role[] = [
    {
      id: "support",
      name: "Customer Support",
      icon: <Headphones className="w-5 h-5" />,
      description: "Handle customer inquiries and provide technical support"
    },
    {
      id: "sales",
      name: "Sales Representative", 
      icon: <MessageSquare className="w-5 h-5" />,
      description: "Qualify leads and guide customers through sales process"
    },
    {
      id: "receptionist",
      name: "Virtual Receptionist",
      icon: <UserCheck className="w-5 h-5" />,
      description: "Greet visitors, schedule appointments, and route calls"
    },
    {
      id: "specialist",
      name: "Industry Specialist",
      icon: <Users className="w-5 h-5" />,
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
    return selectedOptions.industry && selectedOptions.assistantType && selectedOptions.role && selectedOptions.voice;
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
            <Bot className="w-4 h-4" />
            AI Assistant Creation
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Custom AI Assistants Made Simple
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Build specialized AI assistants tailored to your industry and business needs in minutes
          </p>
        </div>

        {/* Simplified Creation Form */}
        <Card className="bg-card/60 backdrop-blur-sm shadow-elegant overflow-hidden">
          <div className="p-8 md:p-12">
            
            {/* Industry Selection */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Choose Your Industry</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {industries.map((industry) => (
                  <Card 
                    key={industry.id} 
                    className={`p-4 cursor-pointer transition-all duration-300 hover-scale ${
                      selectedOptions.industry === industry.id 
                        ? 'bg-primary/5 shadow-elegant' 
                        : 'hover:bg-primary/5'
                    }`}
                    onClick={() => handleOptionSelect('industry', industry.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        selectedOptions.industry === industry.id 
                          ? 'bg-primary text-white' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {industry.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{industry.name}</h4>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Assistant Type Selection */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Choose Assistant Type</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {assistantTypes.map((type) => (
                  <Card 
                    key={type.id} 
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      selectedOptions.assistantType === type.id 
                        ? 'bg-primary/5 shadow-elegant' 
                        : 'hover:bg-primary/5'
                    }`}
                    onClick={() => handleOptionSelect('assistantType', type.id)}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        selectedOptions.assistantType === type.id 
                          ? 'bg-primary text-white' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {type.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{type.name}</h4>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {type.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 text-primary" />
                          {feature}
                        </div>
                      ))}
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
                    className={`p-4 cursor-pointer transition-all duration-300 ${
                      selectedOptions.role === role.id 
                        ? 'bg-primary/5 shadow-elegant' 
                        : 'hover:bg-primary/5'
                    }`}
                    onClick={() => handleOptionSelect('role', role.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        selectedOptions.role === role.id 
                          ? 'bg-primary text-white' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {role.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{role.name}</h4>
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
                    className={`p-4 cursor-pointer transition-all duration-300 ${
                      selectedOptions.voice === voice.id 
                        ? 'bg-primary/5 shadow-elegant' 
                        : 'hover:bg-primary/5'
                    }`}
                    onClick={() => handleOptionSelect('voice', voice.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          selectedOptions.voice === voice.id 
                            ? 'bg-primary text-white' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          <Volume2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{voice.name}</h4>
                          <p className="text-xs text-muted-foreground">{voice.accent} • {voice.description}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="text-xs">
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
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-sm mb-1">Instant Deployment</h4>
                  <p className="text-xs text-muted-foreground">Goes live immediately</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-sm mb-1">24/7 Service</h4>
                  <p className="text-xs text-muted-foreground">Never miss customers</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Bot className="w-6 h-6 text-primary" />
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
                  <Plus className="w-5 h-5 mr-2" />
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