import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowRight,
  ArrowLeft,
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
  UserCheck
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
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedVoice, setSelectedVoice] = useState<string>("sarah");

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

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

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedIndustry !== "";
      case 2:
        return selectedType !== "";
      case 3:
        return selectedRole !== "";
      case 4:
        return selectedVoice !== "";
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Choose Your Industry</h2>
              <p className="text-muted-foreground">Select the industry that best describes your business</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry) => (
                <Card
                  key={industry.id}
                  className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                    selectedIndustry === industry.id
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedIndustry(industry.id)}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedIndustry === industry.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{industry.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                  {selectedIndustry === industry.id && (
                    <div className="mt-3">
                      <Badge variant="default" className="bg-primary">
                        <Check className="w-3 h-3 mr-1" />
                        Selected
                      </Badge>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Assistant Type</h2>
              <p className="text-muted-foreground">How will your customers interact with your assistant?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {assistantTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`p-8 cursor-pointer transition-all hover:shadow-lg ${
                    selectedType === type.id
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      selectedType === type.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
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
                    {selectedType === type.id && (
                      <div className="mt-4">
                        <Badge variant="default" className="bg-primary">
                          <Check className="w-3 h-3 mr-1" />
                          Selected
                        </Badge>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Assistant Role</h2>
              <p className="text-muted-foreground">What primary function will your assistant perform?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {roles.map((role) => (
                <Card
                  key={role.id}
                  className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                    selectedRole === role.id
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedRole === role.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {role.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{role.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                      {selectedRole === role.id && (
                        <Badge variant="default" className="bg-primary">
                          <Check className="w-3 h-3 mr-1" />
                          Selected
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Voice & Language</h2>
              <p className="text-muted-foreground">Choose a voice that represents your brand</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {voices.map((voice) => (
                <Card
                  key={voice.id}
                  className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                    selectedVoice === voice.id
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedVoice(voice.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedVoice === voice.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        <Volume2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{voice.name}</h3>
                        <p className="text-sm text-muted-foreground">{voice.accent} • {voice.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                      {selectedVoice === voice.id && (
                        <Badge variant="default" className="bg-primary">
                          <Check className="w-3 h-3" />
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full py-12 bg-background min-h-screen">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Create Custom AI Assistants</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Build specialized AI assistants tailored to your industry and business needs
            </p>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Step {currentStep} of {totalSteps}
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="mb-12">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i + 1 <= currentStep ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          {currentStep < totalSteps ? (
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className="bg-primary hover:bg-primary/90"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              disabled={!canProceed()}
              className="bg-primary hover:bg-primary/90"
            >
              Create Assistant
              <Check className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AssistantCreationFlow;