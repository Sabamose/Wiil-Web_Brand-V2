import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Bot, 
  Plus, 
  MessageSquare, 
  ArrowRight, 
  Settings, 
  Play,
  Pause,
  RotateCcw,
  Mic,
  Volume2,
  Users,
  Zap,
  Target
} from "lucide-react";

interface ConversationNode {
  id: string;
  type: 'greeting' | 'question' | 'response' | 'action' | 'handoff';
  title: string;
  content: string;
  connections: string[];
  position: { x: number; y: number };
}

interface Template {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  nodes: ConversationNode[];
  category: 'customer-service' | 'sales' | 'support' | 'onboarding';
}

const ConversationBuilderInterface = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [previewStep, setPreviewStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const templates: Template[] = [
    {
      id: 'customer-service',
      name: 'Customer Service Flow',
      description: 'Handle general inquiries with smart routing',
      icon: <MessageSquare className="w-5 h-5" />,
      category: 'customer-service',
      nodes: [
        {
          id: '1',
          type: 'greeting',
          title: 'Welcome Message',
          content: 'Hi! I\'m here to help. What can I assist you with today?',
          connections: ['2'],
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'question',
          title: 'Intent Recognition',
          content: 'Analyzing customer request...',
          connections: ['3', '4', '5'],
          position: { x: 300, y: 100 }
        },
        {
          id: '3',
          type: 'response',
          title: 'Billing Support',
          content: 'I can help with billing questions. Let me pull up your account.',
          connections: [],
          position: { x: 500, y: 50 }
        },
        {
          id: '4',
          type: 'response',
          title: 'Technical Support',
          content: 'For technical issues, I\'ll run some diagnostics first.',
          connections: [],
          position: { x: 500, y: 100 }
        },
        {
          id: '5',
          type: 'handoff',
          title: 'Human Handoff',
          content: 'Let me connect you with a specialist.',
          connections: [],
          position: { x: 500, y: 150 }
        }
      ]
    },
    {
      id: 'sales-flow',
      name: 'Sales Qualification',
      description: 'Qualify leads and schedule demos',
      icon: <Target className="w-5 h-5" />,
      category: 'sales',
      nodes: [
        {
          id: '1',
          type: 'greeting',
          title: 'Sales Greeting',
          content: 'Welcome! I\'d love to learn about your business needs.',
          connections: ['2'],
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'question',
          title: 'Qualification',
          content: 'What\'s your company size and current challenges?',
          connections: ['3', '4'],
          position: { x: 300, y: 100 }
        },
        {
          id: '3',
          type: 'response',
          title: 'Enterprise Track',
          content: 'Perfect for enterprise! Let me schedule a demo.',
          connections: [],
          position: { x: 500, y: 80 }
        },
        {
          id: '4',
          type: 'response',
          title: 'SMB Track',
          content: 'Great for small business! Here\'s how we can help.',
          connections: [],
          position: { x: 500, y: 120 }
        }
      ]
    },
    {
      id: 'onboarding',
      name: 'User Onboarding',
      description: 'Guide new users through setup',
      icon: <Users className="w-5 h-5" />,
      category: 'onboarding',
      nodes: [
        {
          id: '1',
          type: 'greeting',
          title: 'Welcome New User',
          content: 'Welcome to our platform! Let\'s get you set up.',
          connections: ['2'],
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'action',
          title: 'Account Setup',
          content: 'I\'ll help you configure your account preferences.',
          connections: ['3'],
          position: { x: 300, y: 100 }
        },
        {
          id: '3',
          type: 'action',
          title: 'Feature Tour',
          content: 'Let me show you the key features you\'ll use most.',
          connections: [],
          position: { x: 500, y: 100 }
        }
      ]
    }
  ];

  const selectedTemplateData = templates.find(t => t.id === selectedTemplate);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && selectedTemplateData && previewStep < selectedTemplateData.nodes.length - 1) {
      interval = setTimeout(() => {
        setPreviewStep(prev => prev + 1);
      }, 2000);
    } else if (previewStep >= (selectedTemplateData?.nodes.length || 0) - 1) {
      setIsPlaying(false);
    }

    return () => clearTimeout(interval);
  }, [isPlaying, previewStep, selectedTemplateData]);

  const startPreview = () => {
    setPreviewStep(0);
    setIsPlaying(true);
    setIsPreviewMode(true);
  };

  const resetPreview = () => {
    setIsPlaying(false);
    setPreviewStep(0);
    setIsPreviewMode(false);
  };

  const getNodeTypeColor = (type: ConversationNode['type']) => {
    switch (type) {
      case 'greeting': return 'from-blue-500 to-blue-600';
      case 'question': return 'from-purple-500 to-purple-600';
      case 'response': return 'from-green-500 to-green-600';
      case 'action': return 'from-orange-500 to-orange-600';
      case 'handoff': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getNodeTypeIcon = (type: ConversationNode['type']) => {
    switch (type) {
      case 'greeting': return <MessageSquare className="w-4 h-4" />;
      case 'question': return <Bot className="w-4 h-4" />;
      case 'response': return <MessageSquare className="w-4 h-4" />;
      case 'action': return <Zap className="w-4 h-4" />;
      case 'handoff': return <Users className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  return (
    <section className="w-full py-20 sm:py-32 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Bot className="w-4 h-4 mr-2" />
            No-Code Builder
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-6">
            Build Conversations Visually
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Create sophisticated conversation flows with our drag-and-drop interface. No coding required.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Template Gallery */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Templates</h3>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Custom
              </Button>
            </div>

            <div className="space-y-3">
              {templates.map((template) => (
                <Card
                  key={template.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-elegant ${
                    selectedTemplate === template.id
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {template.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{template.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{template.description}</p>
                        <Badge variant="secondary" className="text-xs">
                          {template.nodes.length} steps
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Voice Settings */}
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  Voice Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Voice Type</label>
                  <select className="w-full p-2 border border-border rounded-lg bg-background text-foreground">
                    <option>Professional Female</option>
                    <option>Friendly Male</option>
                    <option>Neutral AI</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Speaking Speed</label>
                  <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-full" />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Mic className="w-4 h-4 mr-2" />
                  Test Voice
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Conversation Builder */}
          <div className="lg:col-span-8">
            <Card className="h-[600px] relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="flex items-center gap-2">
                  {selectedTemplateData ? (
                    <>
                      {selectedTemplateData.icon}
                      {selectedTemplateData.name}
                    </>
                  ) : (
                    'Select a Template'
                  )}
                </CardTitle>
                
                {selectedTemplateData && (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetPreview}
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={isPlaying ? () => setIsPlaying(false) : startPreview}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Preview
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </CardHeader>

              <CardContent className="h-full p-6">
                {selectedTemplateData ? (
                  <div className="relative w-full h-full bg-gradient-to-br from-muted/10 to-muted/30 rounded-lg p-6 overflow-hidden">
                    {/* Flow Visualization */}
                    <div className="relative h-full">
                      {selectedTemplateData.nodes.map((node, index) => (
                        <div
                          key={node.id}
                          className={`absolute transition-all duration-500 ${
                            isPreviewMode && index <= previewStep 
                              ? 'opacity-100 scale-100' 
                              : isPreviewMode 
                              ? 'opacity-30 scale-95' 
                              : 'opacity-100 scale-100'
                          }`}
                          style={{
                            left: `${(node.position.x / 600) * 100}%`,
                            top: `${(node.position.y / 300) * 100}%`,
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          <div className={`p-4 rounded-xl border-2 bg-card shadow-lg min-w-[200px] ${
                            isPreviewMode && index === previewStep 
                              ? 'border-primary bg-primary/5 shadow-primary/25' 
                              : 'border-border'
                          }`}>
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`p-1.5 rounded-lg bg-gradient-to-r ${getNodeTypeColor(node.type)} text-white`}>
                                {getNodeTypeIcon(node.type)}
                              </div>
                              <h4 className="font-semibold text-sm text-foreground">{node.title}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground">{node.content}</p>
                            
                            {isPreviewMode && index === previewStep && (
                              <div className="mt-2">
                                <Badge className="bg-primary text-primary-foreground text-xs">
                                  Current Step
                                </Badge>
                              </div>
                            )}
                          </div>

                          {/* Connections */}
                          {node.connections.map((connectionId) => {
                            const targetNode = selectedTemplateData.nodes.find(n => n.id === connectionId);
                            if (!targetNode) return null;

                            return (
                              <div
                                key={`${node.id}-${connectionId}`}
                                className="absolute top-1/2 left-full w-12 h-0.5 bg-border"
                                style={{
                                  transform: 'translateY(-50%)',
                                }}
                              >
                                <ArrowRight className="w-3 h-3 text-muted-foreground absolute -right-1 -top-1" />
                              </div>
                            );
                          })}
                        </div>
                      ))}

                      {/* Progress Indicator */}
                      {isPreviewMode && (
                        <div className="absolute top-4 left-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <span className="text-foreground font-medium">
                              Step {previewStep + 1} of {selectedTemplateData.nodes.length}
                            </span>
                          </div>
                          <div className="mt-2 w-32 h-1 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary transition-all duration-500"
                              style={{ width: `${((previewStep + 1) / selectedTemplateData.nodes.length) * 100}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-center">
                    <div className="max-w-md">
                      <Bot className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">Select a Template</h3>
                      <p className="text-muted-foreground">
                        Choose a conversation template from the left panel to start building your AI assistant flow.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationBuilderInterface;