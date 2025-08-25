import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Plus, 
  Settings, 
  Play,
  Pause,
  Bot,
  Phone,
  MessageSquare,
  Stethoscope,
  ShoppingCart,
  Briefcase,
  Users,
  MoreHorizontal,
  Activity,
  Globe
} from "lucide-react";

interface Assistant {
  id: string;
  name: string;
  type: 'phone' | 'website';
  industry: string;
  role: string;
  status: 'live' | 'draft' | 'paused';
  conversations: number;
  avgRating: number;
  lastActive: string;
  icon: React.ReactNode;
}

const AssistantManagement = () => {
  const [assistants] = useState<Assistant[]>([
    {
      id: "asst-1",
      name: "Healthcare Receptionist",
      type: "phone",
      industry: "Healthcare", 
      role: "Answers calls and books appointments",
      status: "live",
      conversations: 1247,
      avgRating: 4.8,
      lastActive: "2 minutes ago",
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      id: "asst-2", 
      name: "E-commerce Sales Assistant",
      type: "website",
      industry: "E-commerce",
      role: "Helps customers find and buy products", 
      status: "live",
      conversations: 856,
      avgRating: 4.6,
      lastActive: "5 minutes ago",
      icon: <ShoppingCart className="w-5 h-5" />
    },
    {
      id: "asst-3",
      name: "Customer Support Agent",
      type: "phone", 
      industry: "Technology",
      role: "Provides technical support to customers",
      status: "draft",
      conversations: 0,
      avgRating: 0,
      lastActive: "Never",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: "asst-4",
      name: "Business Development Rep",
      type: "website",
      industry: "Professional Services",
      role: "Qualifies leads and schedules consultations",
      status: "paused",
      conversations: 324,
      avgRating: 4.9,
      lastActive: "1 hour ago",
      icon: <Briefcase className="w-5 h-5" />
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'draft':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'paused':
        return 'bg-muted text-muted-foreground border-muted';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'phone' ? (
      <Phone className="w-4 h-4" />
    ) : (
      <Globe className="w-4 h-4" />
    );
  };

  const stats = {
    totalAssistants: assistants.length,
    liveAssistants: assistants.filter(a => a.status === 'live').length,
    totalConversations: assistants.reduce((sum, a) => sum + a.conversations, 0),
    avgRating: 4.7
  };

  const liveAssistants = assistants.filter(a => a.status === 'live');
  const draftAssistants = assistants.filter(a => a.status === 'draft');
  const pausedAssistants = assistants.filter(a => a.status === 'paused');

  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Build AI Staff That Never Sleep
            </h1>
            <p className="text-lg text-muted-foreground">
              Create AI employees to handle phone calls and website chats 24/7. No training required.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
            <Plus className="w-5 h-5 mr-2" />
            Create Your First AI Employee
          </Button>
        </div>

        {/* Live Assistants */}
        {liveAssistants.length > 0 && (
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {liveAssistants.map((assistant) => (
                <Card key={assistant.id} className="p-8 hover:shadow-lg transition-shadow relative bg-white border border-gray-200 rounded-2xl">
                  {/* Live Status */}
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      LIVE
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-primary text-3xl">
                        {assistant.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4">{assistant.name}</h3>
                    
                    {/* Type */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      {getTypeIcon(assistant.type)}
                      <span className="text-muted-foreground">
                        {assistant.type === 'phone' ? 'Phone Calls' : 'Website Chat'}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">{assistant.role}</p>
                    
                    {/* Industry Tag */}
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm rounded-full">
                      {assistant.industry}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Draft Assistants */}
        {draftAssistants.length > 0 && (
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {draftAssistants.map((assistant) => (
                <Card key={assistant.id} className="p-8 hover:shadow-lg transition-shadow relative bg-white border border-gray-200 rounded-2xl opacity-75">
                  {/* Building Status */}
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                      Building...
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-gray-400 text-3xl">
                        {assistant.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4">{assistant.name}</h3>
                    
                    {/* Type */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      {getTypeIcon(assistant.type)}
                      <span className="text-muted-foreground">
                        {assistant.type === 'phone' ? 'Phone Calls' : 'Website Chat'}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">{assistant.role}</p>
                    
                    {/* Industry Tag */}
                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {assistant.industry}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Paused Assistants */}
        {pausedAssistants.length > 0 && (
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {pausedAssistants.map((assistant) => (
                <Card key={assistant.id} className="p-8 hover:shadow-lg transition-shadow relative bg-white border border-gray-200 rounded-2xl opacity-60">
                  {/* Paused Status */}
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                      Paused
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-gray-400 text-3xl">
                        {assistant.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4">{assistant.name}</h3>
                    
                    {/* Type */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      {getTypeIcon(assistant.type)}
                      <span className="text-muted-foreground">
                        {assistant.type === 'phone' ? 'Phone Calls' : 'Website Chat'}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">{assistant.role}</p>
                    
                    {/* Industry Tag */}
                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {assistant.industry}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Create New Assistant */}
        <div>
          <Card className="p-8 border-dashed border-2 border-gray-300 hover:border-primary transition-colors cursor-pointer group bg-white rounded-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/90 transition-colors">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Add New AI Employee</h3>
              <p className="text-muted-foreground">
                Ready in minutes
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AssistantManagement;