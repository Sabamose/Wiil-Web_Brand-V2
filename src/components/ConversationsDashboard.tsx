import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Phone, 
  MessageSquare, 
  Clock, 
  TrendingUp,
  MoreHorizontal,
  Eye,
  Users,
  Calendar
} from "lucide-react";

interface Conversation {
  id: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    company: string;
  };
  type: 'phone' | 'chat';
  status: 'completed' | 'in-progress' | 'missed';
  duration: string;
  timestamp: string;
  sentiment: 'positive' | 'neutral' | 'negative';
}

const ConversationsDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const conversations: Conversation[] = [
    {
      id: "CONV-7F3A-B29C-E145",
      customer: {
        name: "Sarah Johnson",
        email: "sarah.johnson@email.com",
        phone: "+1 (555) 123-4567",
        company: "TechCorp Solutions"
      },
      type: "phone",
      status: "completed",
      duration: "4:32",
      timestamp: "2:31 PM",
      sentiment: "positive"
    },
    {
      id: "CONV-8G4B-C30D-F256",
      customer: {
        name: "Michael Chen",
        email: "m.chen@innovate.com",
        phone: "+1 (555) 234-5678",
        company: "Innovate Inc"
      },
      type: "chat",
      status: "in-progress",
      duration: "1:45",
      timestamp: "3:15 PM",
      sentiment: "neutral"
    },
    {
      id: "CONV-9H5C-D41E-G367",
      customer: {
        name: "Emily Davis",
        email: "emily.davis@startup.io",
        phone: "+1 (555) 345-6789",
        company: "StartupCo"
      },
      type: "phone",
      status: "completed",
      duration: "6:12",
      timestamp: "1:45 PM",
      sentiment: "positive"
    },
    {
      id: "CONV-1I6D-E52F-H478",
      customer: {
        name: "David Wilson",
        email: "d.wilson@enterprise.com",
        phone: "+1 (555) 456-7890",
        company: "Enterprise Corp"
      },
      type: "phone",
      status: "missed",
      duration: "0:00",
      timestamp: "12:30 PM",
      sentiment: "neutral"
    }
  ];

  const stats = {
    totalConversations: 156,
    todayConversations: 23,
    avgDuration: "3:45",
    satisfaction: 94
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'in-progress':
        return 'bg-muted text-muted-foreground border-muted';
      case 'missed':
        return 'bg-muted text-muted-foreground border-muted';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'text-primary';
      case 'negative':
        return 'text-muted-foreground';
      case 'neutral':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Engage With Your Audience
          </h1>
          <p className="text-lg text-muted-foreground">
            Track, analyze, and manage every customer interaction across all channels
          </p>
        </div>


        {/* Search and Filters */}
        <Card className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                Today
              </Button>
              <Button variant="outline" size="sm">
                This Week
              </Button>
            </div>
          </div>
        </Card>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wide">Customer</th>
                  <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wide">Contact</th>
                  <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wide">Type</th>
                  <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wide">Status</th>
                  <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wide">Duration</th>
                  <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wide">Time</th>
                  <th className="text-left p-3 font-medium text-muted-foreground text-xs uppercase tracking-wide"></th>
                </tr>
              </thead>
              <tbody>
                {conversations.map((conversation) => (
                  <tr key={conversation.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{conversation.customer.name}</p>
                          <p className="text-xs text-muted-foreground font-mono">{conversation.id.split('-')[1]}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div>
                        <p className="text-sm text-foreground">{conversation.customer.email}</p>
                        <p className="text-xs text-muted-foreground">{conversation.customer.company}</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        {conversation.type === 'phone' ? (
                          <Phone className="w-4 h-4 text-primary" />
                        ) : (
                          <MessageSquare className="w-4 h-4 text-primary" />
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge variant="outline" className={`text-xs ${getStatusColor(conversation.status)}`}>
                        {conversation.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <span className="text-sm font-mono text-foreground">{conversation.duration}</span>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-muted-foreground">{conversation.timestamp}</span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ConversationsDashboard;