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

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">AI Employees</p>
                <p className="text-2xl font-bold text-foreground">{stats.totalAssistants}</p>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Currently Working</p>
                <p className="text-2xl font-bold text-foreground">{stats.liveAssistants}</p>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Customer Conversations</p>
                <p className="text-2xl font-bold text-foreground">{stats.totalConversations.toLocaleString()}</p>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Customer Satisfaction</p>
                <p className="text-2xl font-bold text-foreground">{stats.avgRating}</p>
              </div>
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-lg">⭐</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Assistants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assistants.map((assistant) => (
            <Card key={assistant.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {assistant.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{assistant.name}</h3>
                    <p className="text-sm text-muted-foreground">{assistant.role}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Works on</span>
                  <div className="flex items-center gap-1">
                    {getTypeIcon(assistant.type)}
                    <span className="text-sm capitalize">{assistant.type === 'phone' ? 'Phone calls' : 'Website chat'}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Business type</span>
                  <span className="text-sm text-foreground">{assistant.industry}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Current status</span>
                  <Badge variant="outline" className={getStatusColor(assistant.status)}>
                    {assistant.status === 'live' && (
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                    )}
                    {assistant.status === 'live' ? 'Working now' : assistant.status === 'draft' ? 'Being built' : 'Paused'}
                  </Badge>
                </div>

                {assistant.status !== 'draft' && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Customers helped</span>
                      <span className="text-sm font-medium text-foreground">
                        {assistant.conversations.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Customer happiness</span>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium text-foreground">{assistant.avgRating}</span>
                        <span className="text-muted-foreground">⭐</span>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Last worked</span>
                  <span className="text-sm text-foreground">{assistant.lastActive}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Settings
                </Button>
                <Button 
                  variant={assistant.status === 'live' ? 'destructive' : 'default'}
                  size="sm" 
                  className="flex-1"
                >
                  {assistant.status === 'live' ? (
                    <>
                       <Pause className="w-4 h-4 mr-2" />
                       Stop Working
                    </>
                  ) : (
                    <>
                       <Play className="w-4 h-4 mr-2" />
                       Start Working
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}

          {/* Create New Assistant Card */}
          <Card className="p-6 border-dashed border-2 border-muted-foreground/30 hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="flex flex-col items-center justify-center h-full text-center py-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Plus className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Add Your Next AI Employee</h3>
              <p className="text-sm text-muted-foreground">
                Create an AI that handles customers while you focus on growing your business
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AssistantManagement;