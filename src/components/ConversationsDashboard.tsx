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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Monitor All Customer Conversations
          </h1>
          <p className="text-lg text-muted-foreground">
            Track, analyze, and manage every customer interaction across all channels
          </p>
        </div>


        {/* Search and Filters */}
        <Card className="mb-6">
          <div className="p-6">
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
          </div>
        </Card>

        {/* Conversations Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-medium text-muted-foreground">Customer</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Contact</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Company</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Type</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Duration</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Time</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {conversations.map((conversation) => (
                  <tr key={conversation.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{conversation.customer.name}</p>
                          <p className="text-sm text-muted-foreground">{conversation.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm text-foreground">{conversation.customer.email}</p>
                        <p className="text-sm text-muted-foreground">{conversation.customer.phone}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-foreground">{conversation.customer.company}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {conversation.type === 'phone' ? (
                          <Phone className="w-4 h-4 text-primary" />
                        ) : (
                          <MessageSquare className="w-4 h-4 text-primary" />
                        )}
                        <span className="text-sm capitalize">{conversation.type}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className={getStatusColor(conversation.status)}>
                        {conversation.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-foreground">{conversation.duration}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-muted-foreground">{conversation.timestamp}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
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