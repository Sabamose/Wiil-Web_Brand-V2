import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Phone, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Clock, 
  User, 
  MapPin,
  Mail,
  Building2,
  Calendar,
  ExternalLink
} from "lucide-react";

const ConversationDetailView = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState("1.0x");

  const conversationData = {
    id: "CONV-7F3A-B29C-E145",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com", 
      phone: "+1 (555) 123-4567",
      company: "TechCorp Solutions",
      location: "San Francisco, CA"
    },
    call: {
      duration: "4:32",
      status: "Completed",
      date: "March 15, 2024",
      time: "2:31 PM PST",
      type: "Inbound"
    },
    summary: {
      intent: "Billing inquiry about unexpected charges",
      outcome: "Resolved - Charges explained and customer satisfied",
      sentiment: "Positive",
      tags: ["billing", "charges", "premium-features"]
    },
    waveformData: Array.from({length: 120}, (_, i) => 
      Math.sin(i * 0.1) * 30 + 40 + Math.random() * 20
    )
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSpeedChange = () => {
    const speeds = ["0.5x", "1.0x", "1.5x", "2.0x"];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIndex]);
  };

  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Monitor Conversations in Real-Time
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Deep insights into every customer interaction with detailed analytics and playback controls
            </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  <Phone className="w-3 h-3 mr-1" />
                  {conversationData.id}
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {conversationData.call.status}
                </Badge>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Audio Player & Waveform */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Audio Recording</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {conversationData.call.duration}
                  </Badge>
                </div>
              </div>

              {/* Waveform Visualization */}
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <div className="flex items-end justify-center h-32 gap-1">
                  {conversationData.waveformData.map((height, index) => (
                    <div
                      key={index}
                      className={`w-1 rounded-sm transition-colors duration-200 ${
                        isPlaying && index < 40 
                          ? 'bg-primary' 
                          : 'bg-muted-foreground/40'
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Audio Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    onClick={togglePlayback}
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </Button>
                  <Button variant="outline" size="sm">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleSpeedChange}
                  >
                    {playbackSpeed}
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                  <div className="w-20 h-1 bg-muted rounded-full">
                    <div className="w-3/4 h-full bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Tabs Content */}
            <Card>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-muted/30">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="transcription">Transcription</TabsTrigger>
                  <TabsTrigger value="client-data">Client data</TabsTrigger>
                  <TabsTrigger value="phone-call">Phone call</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Call Summary</h4>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-muted-foreground leading-relaxed">
                          Customer called regarding unexpected charges on their account. AI assistant successfully 
                          identified the charges as premium features activated during plan upgrade. Provided detailed 
                          breakdown and explanation, resulting in customer satisfaction and issue resolution.
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Intent Analysis</h5>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {conversationData.summary.intent}
                        </Badge>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Sentiment</h5>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {conversationData.summary.sentiment}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-foreground mb-2">Tags</h5>
                      <div className="flex flex-wrap gap-2">
                        {conversationData.summary.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="transcription" className="p-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Full Transcript</h4>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Customer • 2:31 PM</div>
                          <p className="text-foreground">Hi, I see some charges on my account that I don't recognize</p>
                        </div>
                      </div>
                      {/* Add more transcript messages here */}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="client-data" className="p-6">
                  <div className="text-center text-muted-foreground py-8">
                    Client data content would go here
                  </div>
                </TabsContent>

                <TabsContent value="phone-call" className="p-6">
                  <div className="text-center text-muted-foreground py-8">
                    Phone call details would go here
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">

            {/* Call Details */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Call Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium text-foreground">{conversationData.call.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium text-foreground">{conversationData.call.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium text-foreground">{conversationData.call.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium text-foreground">{conversationData.call.time}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationDetailView;