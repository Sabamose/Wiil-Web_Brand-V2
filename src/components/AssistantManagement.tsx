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
      name: "Phone Receptionist",
      type: "phone",
      industry: "Healthcare", 
      role: "Answers calls, books appointments",
      status: "live",
      conversations: 1247,
      avgRating: 4.8,
      lastActive: "2 minutes ago",
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      id: "asst-2", 
      name: "Website Sales Helper",
      type: "website",
      industry: "E-commerce",
      role: "Helps customers buy products", 
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
      role: "Solves customer problems",
      status: "draft",
      conversations: 0,
      avgRating: 0,
      lastActive: "Never",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: "asst-4",
      name: "Business Advisor",
      type: "website",
      industry: "Professional Services",
      role: "Gives business advice",
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

  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
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

        {/* Assistants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assistants.map((assistant) => (
            <Card key={assistant.id} className="p-8 hover:shadow-lg transition-shadow relative">
              {/* Status Indicator */}
              <div className="absolute top-4 right-4">
                {assistant.status === 'live' ? (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs text-primary font-medium">Live</span>
                  </div>
                ) : assistant.status === 'draft' ? (
                  <span className="text-xs text-muted-foreground">Building...</span>
                ) : (
                  <span className="text-xs text-muted-foreground">Paused</span>
                )}
              </div>

              {/* Icon & Title */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary text-2xl">
                    {assistant.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{assistant.name}</h3>
                <p className="text-sm text-muted-foreground">{assistant.role}</p>
              </div>

              {/* Platform Type */}
              <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-muted/30 rounded-lg">
                {getTypeIcon(assistant.type)}
                <span className="text-sm font-medium">
                  {assistant.type === 'phone' ? 'Phone Calls' : 'Website Chat'}
                </span>
              </div>

              {/* Key Metrics */}
              {assistant.status !== 'draft' && (
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">
                      {assistant.conversations.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground flex items-center justify-center gap-1">
                      {assistant.avgRating}
                      <span className="text-sm">⭐</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              )}

              {/* Industry Tag */}
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {assistant.industry}
                </span>
              </div>
            </Card>
          ))}

          {/* Create New Assistant Card */}
          <Card className="p-8 border-dashed border-2 border-muted-foreground/30 hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Plus className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Add New AI Employee</h3>
              <p className="text-sm text-muted-foreground">
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