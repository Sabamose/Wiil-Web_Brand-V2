import React from "react";
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
  const industries: Industry[] = [
    {
      id: "healthcare",
      name: "Healthcare",
      icon: <Stethoscope className="w-6 h-6" />,
      description: "Medical practices, hospitals, clinics"
    },
    {
      id: "retail",
      name: "Retail & E-commerce", 
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Online stores, retail businesses"
    },
    {
      id: "finance",
      name: "Finance & Banking",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Banks, insurance, financial services"
    },
    {
      id: "education",
      name: "Education",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Schools, universities, training centers"
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: <Car className="w-6 h-6" />,
      description: "Car dealerships, auto services"
    },
    {
      id: "realestate",
      name: "Real Estate",
      icon: <Home className="w-6 h-6" />,
      description: "Property management, real estate agencies"
    }
  ];

  const assistantTypes: AssistantType[] = [
    {
      id: "phone",
      name: "Phone Assistant",
      icon: <Phone className="w-8 h-8" />,
      description: "Handles incoming and outgoing phone calls",
      features: ["Voice conversations", "Call routing", "Real-time responses", "Human handoff"]
    },
    {
      id: "website", 
      name: "Website Assistant",
      icon: <Globe className="w-8 h-8" />,
      description: "Engages visitors on your website via chat",
      features: ["Live chat", "Lead capture", "24/7 availability", "Multi-language support"]
    }
  ];

  const roles: Role[] = [
    {
      id: "support",
      name: "Customer Support",
      icon: <Headphones className="w-6 h-6" />,
      description: "Handle customer inquiries and provide technical support"
    },
    {
      id: "sales",
      name: "Sales Representative", 
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Qualify leads and guide customers through sales process"
    },
    {
      id: "receptionist",
      name: "Virtual Receptionist",
      icon: <UserCheck className="w-6 h-6" />,
      description: "Greet visitors, schedule appointments, and route calls"
    },
    {
      id: "specialist",
      name: "Industry Specialist",
      icon: <Users className="w-6 h-6" />,
      description: "Provide specialized knowledge for your specific industry"
    }
  ];

  const voices = [
    { id: "sarah", name: "Sarah", accent: "American", description: "Warm and professional" },
    { id: "james", name: "James", accent: "British", description: "Clear and authoritative" },
    { id: "maria", name: "Maria", accent: "Spanish", description: "Friendly and approachable" },
    { id: "alex", name: "Alex", accent: "Canadian", description: "Neutral and versatile" }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
            <Bot className="w-4 h-4" />
            AI Assistant Creation
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Create Your Custom AI Assistants
          </h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Build specialized AI assistants tailored to your industry and business needs in minutes
          </p>
        </div>

        {/* Section 1: Choose Your Industry */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full text-xs font-medium text-muted-foreground mb-4 border">
              Step 1 of 5
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Choose Your Industry</h2>
            <p className="text-lg text-muted-foreground">Select the industry that best describes your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card 
                key={industry.id} 
                className="group p-6 hover:shadow-elegant transition-all duration-300 border-border hover:border-primary/30 cursor-pointer bg-card/60 backdrop-blur-sm hover:bg-card animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{industry.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 2: Choose Assistant Type */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full text-xs font-medium text-muted-foreground mb-4 border">
              Step 2 of 5
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Choose Assistant Type</h2>
            <p className="text-lg text-muted-foreground">How will your customers interact with your assistant?</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {assistantTypes.map((type, index) => (
              <Card 
                key={type.id} 
                className="group p-8 hover:shadow-elegant transition-all duration-300 border-border hover:border-primary/30 cursor-pointer bg-card/60 backdrop-blur-sm hover:bg-card animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-white shadow-glow group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{type.name}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-in"
                        style={{ animationDelay: `${(index * 150) + (featureIndex * 50)}ms` }}
                      >
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 3: Choose Its Role */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full text-xs font-medium text-muted-foreground mb-4 border">
              Step 3 of 5
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Choose Its Role</h2>
            <p className="text-lg text-muted-foreground">What primary function will your assistant perform?</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {roles.map((role, index) => (
              <Card 
                key={role.id} 
                className="group p-6 hover:shadow-elegant transition-all duration-300 border-border hover:border-primary/30 cursor-pointer bg-card/60 backdrop-blur-sm hover:bg-card animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform duration-300">
                    {role.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{role.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 4: Customize Its Voice */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full text-xs font-medium text-muted-foreground mb-4 border">
              Step 4 of 5
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Customize Its Voice</h2>
            <p className="text-lg text-muted-foreground">Choose a voice that represents your brand</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {voices.map((voice, index) => (
              <Card 
                key={voice.id} 
                className="group p-6 hover:shadow-elegant transition-all duration-300 border-border hover:border-primary/30 cursor-pointer bg-card/60 backdrop-blur-sm hover:bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <Volume2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{voice.name}</h3>
                      <p className="text-sm text-muted-foreground">{voice.accent} • {voice.description}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="group-hover:border-primary/50 transition-colors">
                    Preview
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 5: Deploy and Serve */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full text-xs font-medium text-muted-foreground mb-8 border">
            Step 5 of 5
          </div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text">
            Deploy and Serve Your Customers
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your AI assistant will be ready to serve customers and automate tasks in minutes
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center group animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Instant Deployment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Your assistant goes live immediately after creation</p>
            </div>
            <div className="text-center group animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">24/7 Customer Service</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Never miss a customer inquiry again</p>
            </div>
            <div className="text-center group animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Task Automation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Automate bookings, support, and sales processes</p>
            </div>
          </div>
          <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary-hover text-white text-lg px-8 py-4 shadow-glow hover:shadow-elegant transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: '500ms' }}>
            <Plus className="w-5 h-5 mr-2" />
            Start Building Your AI Assistant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssistantCreationFlow;