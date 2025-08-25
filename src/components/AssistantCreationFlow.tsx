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
    <section className="w-full py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Create Your Custom AI Assistants
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Build specialized AI assistants tailored to your industry and business needs in minutes
          </p>
        </div>

        {/* Section 1: Choose Your Industry */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Choose Your Industry</h2>
            <p className="text-lg text-muted-foreground">Select the industry that best describes your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Card key={industry.id} className="p-6 hover:shadow-lg transition-all border-border hover:border-primary/50">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{industry.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 2: Choose Assistant Type */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Choose Assistant Type</h2>
            <p className="text-lg text-muted-foreground">How will your customers interact with your assistant?</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {assistantTypes.map((type) => (
              <Card key={type.id} className="p-8 hover:shadow-lg transition-all border-border hover:border-primary/50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{type.name}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
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
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Choose Its Role</h2>
            <p className="text-lg text-muted-foreground">What primary function will your assistant perform?</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {roles.map((role) => (
              <Card key={role.id} className="p-6 hover:shadow-lg transition-all border-border hover:border-primary/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {role.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{role.name}</h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 4: Customize Its Voice */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Customize Its Voice</h2>
            <p className="text-lg text-muted-foreground">Choose a voice that represents your brand</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {voices.map((voice) => (
              <Card key={voice.id} className="p-6 hover:shadow-lg transition-all border-border hover:border-primary/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Volume2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{voice.name}</h3>
                      <p className="text-sm text-muted-foreground">{voice.accent} • {voice.description}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Preview
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 5: Deploy and Serve */}
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Deploy and Serve Your Customers</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Your AI assistant will be ready to serve customers and automate tasks in minutes
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Instant Deployment</h3>
              <p className="text-sm text-muted-foreground">Your assistant goes live immediately after creation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">24/7 Customer Service</h3>
              <p className="text-sm text-muted-foreground">Never miss a customer inquiry again</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Task Automation</h3>
              <p className="text-sm text-muted-foreground">Automate bookings, support, and sales processes</p>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
            <Plus className="w-5 h-5 mr-2" />
            Start Building Your AI Assistant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssistantCreationFlow;