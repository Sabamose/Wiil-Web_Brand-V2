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
          <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all">
            <Plus className="w-5 h-5 mr-2" />
            Create Your First AI Employee
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.totalAssistants}</p>
                <p className="text-sm text-muted-foreground">Total Assistants</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.liveAssistants}</p>
                <p className="text-sm text-muted-foreground">Live Now</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-6 border border-blue-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.totalConversations.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Conversations</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 rounded-xl p-6 border border-amber-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 font-bold">★</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.avgRating}</p>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Assistants */}
        {liveAssistants.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold text-foreground">Live Assistants</h2>
              <Badge className="bg-green-500/10 text-green-600 border-green-500/20">{liveAssistants.length}</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveAssistants.map((assistant) => (
                <Card key={assistant.id} className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white to-green-50/30 border-green-200/50">
                  <div className="p-6">
                    {/* Status & Metrics */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-green-600">LIVE</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground">{assistant.conversations}</p>
                        <p className="text-xs text-muted-foreground">conversations</p>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="text-center mb-4">
                      <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/25 transition-colors">
                        {assistant.icon}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{assistant.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {getTypeIcon(assistant.type)}
                        <span className="text-xs font-medium text-muted-foreground">
                          {assistant.type === 'phone' ? 'Phone Calls' : 'Website Chat'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{assistant.role}</p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                        {assistant.industry}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-amber-500">★</span>
                        <span className="text-sm font-medium">{assistant.avgRating}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Draft Assistants */}
        {draftAssistants.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold text-foreground">In Development</h2>
              <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">{draftAssistants.length}</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {draftAssistants.map((assistant) => (
                <Card key={assistant.id} className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-amber-50/30 border-amber-200/50">
                  <div className="p-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-amber-500/15 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-amber-500/25 transition-colors">
                        {assistant.icon}
                      </div>
                      <h3 className="text-md font-bold text-foreground mb-1">{assistant.name}</h3>
                      <span className="inline-block px-2 py-1 bg-amber-500/10 text-amber-600 text-xs rounded-md font-medium mb-2">
                        Building...
                      </span>
                      <p className="text-xs text-muted-foreground">{assistant.industry}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Paused Assistants */}
        {pausedAssistants.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <h2 className="text-2xl font-bold text-foreground">Paused</h2>
              <Badge className="bg-gray-100 text-gray-600 border-gray-200">{pausedAssistants.length}</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pausedAssistants.map((assistant) => (
                <Card key={assistant.id} className="group hover:shadow-lg transition-all duration-300 opacity-75 hover:opacity-100">
                  <div className="p-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-gray-200 transition-colors">
                        {assistant.icon}
                      </div>
                      <h3 className="text-md font-bold text-foreground mb-1">{assistant.name}</h3>
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium mb-2">
                        Paused
                      </span>
                      <p className="text-xs text-muted-foreground">{assistant.industry}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Create New Assistant */}
        <div className="mt-12">
          <Card className="border-dashed border-2 border-primary/30 hover:border-primary/60 transition-all cursor-pointer group bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Plus className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Create New AI Employee</h3>
              <p className="text-muted-foreground mb-4">
                Launch your next AI assistant in just minutes. No coding required.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AssistantManagement;