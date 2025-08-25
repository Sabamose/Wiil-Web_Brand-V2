import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Phone, MessageSquare, User, Bot, MoreHorizontal, TrendingUp, Users, Clock } from "lucide-react";

interface ConversationMessage {
  id: string;
  sender: 'customer' | 'bot' | 'agent';
  message: string;
  timestamp: string;
  status?: 'delivered' | 'read' | 'typing';
}

interface ConversationDemo {
  id: string;
  title: string;
  description: string;
  scenario: string;
  messages: ConversationMessage[];
  metrics: {
    responseTime: string;
    satisfaction: number;
    resolution: boolean;
  };
}

const InteractiveConversationDemo = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [typingIndicator, setTypingIndicator] = useState(false);

  const conversationDemos: ConversationDemo[] = [
    {
      id: "billing-inquiry",
      title: "Billing Inquiry Resolution",
      description: "AI handles complex billing questions with instant access to customer data",
      scenario: "Customer calls about unexpected charges on their account",
      messages: [
        { id: "1", sender: "customer", message: "Hi, I see some charges on my account that I don't recognize", timestamp: "2:31 PM" },
        { id: "2", sender: "bot", message: "I'd be happy to help you review your recent charges. Let me pull up your account details.", timestamp: "2:31 PM" },
        { id: "3", sender: "bot", message: "I can see the charges you're referring to. They appear to be for premium features activated on March 15th. Would you like me to explain each charge?", timestamp: "2:32 PM" },
        { id: "4", sender: "customer", message: "Yes, please break them down for me", timestamp: "2:32 PM" },
        { id: "5", sender: "bot", message: "Of course! Here's the breakdown:\n• Advanced Analytics: $29.99\n• Priority Support: $19.99\n• Additional Storage: $9.99\n\nThese were activated when you upgraded your plan. Would you like me to show you how to manage these features?", timestamp: "2:33 PM" }
      ],
      metrics: {
        responseTime: "< 2s",
        satisfaction: 94,
        resolution: true
      }
    },
    {
      id: "technical-support",
      title: "Technical Support Escalation",
      description: "Seamless handoff from AI to human expert when needed",
      scenario: "Customer experiencing connectivity issues requiring specialist help",
      messages: [
        { id: "1", sender: "customer", message: "My internet keeps disconnecting every few minutes", timestamp: "3:15 PM" },
        { id: "2", sender: "bot", message: "I'm sorry to hear about the connectivity issues. Let me run some quick diagnostics on your connection.", timestamp: "3:15 PM" },
        { id: "3", sender: "bot", message: "I've detected intermittent signal drops on your line. This requires our technical specialist. I'm connecting you with Sarah from our engineering team now.", timestamp: "3:16 PM" },
        { id: "4", sender: "agent", message: "Hi! This is Sarah from technical support. I can see the diagnostics from our AI. Let me check your line configuration directly.", timestamp: "3:17 PM" },
        { id: "5", sender: "customer", message: "Thank you! This started happening after the storm yesterday", timestamp: "3:17 PM" }
      ],
      metrics: {
        responseTime: "< 1s",
        satisfaction: 97,
        resolution: true
      }
    },
    {
      id: "order-tracking",
      title: "Order Tracking & Updates",
      description: "Real-time order information with proactive notifications",
      scenario: "Customer checking order status and delivery updates",
      messages: [
        { id: "1", sender: "customer", message: "Can you check the status of my order #12345?", timestamp: "1:45 PM" },
        { id: "2", sender: "bot", message: "Let me check that for you right away!", timestamp: "1:45 PM" },
        { id: "3", sender: "bot", message: "Great news! Your order #12345 is currently out for delivery and should arrive today between 2-4 PM. You'll receive a notification when it's 30 minutes away.", timestamp: "1:46 PM" },
        { id: "4", sender: "customer", message: "Perfect! Can I change the delivery address?", timestamp: "1:46 PM" },
        { id: "5", sender: "bot", message: "Since your package is already out for delivery, I'll connect you with our logistics team who can coordinate with the driver for an address change.", timestamp: "1:47 PM" }
      ],
      metrics: {
        responseTime: "< 1s",
        satisfaction: 92,
        resolution: true
      }
    }
  ];

  const currentDemo = conversationDemos[activeDemo];
  const visibleMessages = currentDemo.messages.slice(0, currentMessageIndex + 1);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentMessageIndex < currentDemo.messages.length - 1) {
      interval = setTimeout(() => {
        setTypingIndicator(true);
        
        setTimeout(() => {
          setTypingIndicator(false);
          setCurrentMessageIndex(prev => prev + 1);
        }, 1500);
      }, 2000);
    } else if (currentMessageIndex >= currentDemo.messages.length - 1) {
      setIsPlaying(false);
    }

    return () => clearTimeout(interval);
  }, [isPlaying, currentMessageIndex, currentDemo.messages.length]);

  const startDemo = () => {
    setCurrentMessageIndex(0);
    setIsPlaying(true);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentMessageIndex(0);
    setTypingIndicator(false);
  };

  const switchDemo = (index: number) => {
    setActiveDemo(index);
    resetDemo();
  };

  return (
    <section className="w-full py-20 sm:py-32 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Bot className="w-4 h-4 mr-2" />
            Interactive Demo
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-6">
            See Conversations in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience how our AI handles real customer conversations with intelligent responses and seamless human handoffs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Selector */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Choose a Scenario</h3>
            {conversationDemos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => switchDemo(index)}
                className={`w-full p-4 rounded-lg text-left transition-all duration-300 border-2 ${
                  index === activeDemo
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <h4 className="font-semibold text-foreground mb-2">{demo.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{demo.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {demo.metrics.responseTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {demo.metrics.satisfaction}%
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Conversation Interface */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl shadow-elegant overflow-hidden">
              {/* Chat Header */}
              <div className="bg-primary/5 border-b border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{currentDemo.title}</h4>
                      <p className="text-sm text-muted-foreground">{currentDemo.scenario}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                      Online
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={isPlaying ? resetDemo : startDemo}
                      className="text-primary hover:text-primary hover:bg-primary/10"
                    >
                      {isPlaying ? "Reset" : "Start Demo"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-muted/20">
                {visibleMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 animate-fade-in-right ${
                      message.sender === 'customer' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.sender !== 'customer' && (
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'bot' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {message.sender === 'bot' ? (
                          <Bot className="w-4 h-4" />
                        ) : (
                          <User className="w-4 h-4" />
                        )}
                      </div>
                    )}
                    
                    <div className={`max-w-xs lg:max-w-md ${
                      message.sender === 'customer' ? 'order-first' : ''
                    }`}>
                      <div className={`rounded-2xl px-4 py-3 ${
                        message.sender === 'customer'
                          ? 'bg-primary text-primary-foreground ml-auto'
                          : message.sender === 'bot'
                          ? 'bg-muted text-muted-foreground'
                          : 'bg-accent text-accent-foreground'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.message}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 px-2">
                        {message.timestamp}
                      </p>
                    </div>

                    {message.sender === 'customer' && (
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {typingIndicator && (
                  <div className="flex gap-3 justify-start animate-fade-in">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Metrics Footer */}
              <div className="bg-muted/30 border-t border-border p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-foreground">{currentDemo.metrics.responseTime}</div>
                    <div className="text-xs text-muted-foreground">Avg Response</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">{currentDemo.metrics.satisfaction}%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                    <Progress value={currentDemo.metrics.satisfaction} className="w-full mt-1 h-1" />
                  </div>
                  <div>
                    <div className={`text-lg font-bold ${currentDemo.metrics.resolution ? 'text-green-600' : 'text-yellow-600'}`}>
                      {currentDemo.metrics.resolution ? 'Resolved' : 'In Progress'}
                    </div>
                    <div className="text-xs text-muted-foreground">Status</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveConversationDemo;