import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare, Bot, Zap, Shield, BarChart3, Users, Settings, Play, CheckCircle, ArrowRight, Sparkles, Brain, Gauge, Globe } from "lucide-react";

const Platform = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-0">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pulse-50 via-white to-pulse-100">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: "url('/Header-background.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pulse-500/5 via-transparent to-transparent" />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <Badge className="mb-6 animate-on-scroll bg-pulse-100 text-pulse-700 border-pulse-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI Platform
            </Badge>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-on-scroll">
              Build AI Assistants That
              <span className="bg-gradient-to-r from-pulse-500 to-pulse-600 bg-clip-text text-transparent"> Actually Work</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-on-scroll">
              The no-code platform that transforms how businesses interact with customers. 
              Create intelligent phone agents in minutes, not months.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 animate-on-scroll">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2 text-pulse-500" />
                99.9% Uptime
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2 text-pulse-500" />
                Enterprise Security
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2 text-pulse-500" />
                60+ Countries
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
              <Button size="lg" className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Try Interactive Demo
              </Button>
              <Button variant="outline" size="lg" className="border-pulse-200 text-pulse-700 hover:bg-pulse-50 px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Platform Preview Placeholder */}
            <div className="mt-16 animate-on-scroll">
              <div className="relative max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-elegant border border-pulse-100">
                  <div className="h-64 bg-gradient-to-r from-pulse-100 to-pulse-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Bot className="w-16 h-16 mx-auto mb-4 text-pulse-500" />
                      <p className="text-pulse-700 font-medium">Interactive Platform Demo</p>
                      <p className="text-pulse-600 text-sm">High-resolution dashboard preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features from the Future Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <Badge className="mb-4 bg-pulse-100 text-pulse-700 border-pulse-200">
                Platform Capabilities
              </Badge>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Features from the Future
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to create, deploy, and manage AI assistants that deliver exceptional customer experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <Card className="group hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-2 animate-on-scroll border-0 shadow-elegant">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pulse-500 transition-colors">
                    <Phone className="w-6 h-6 text-pulse-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Professional Phone System</h3>
                  <p className="text-gray-600 mb-6">Instant access to local and toll-free numbers in 60+ countries with automatic failover.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      99.9% uptime guarantee
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      Multi-provider redundancy
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-2 animate-on-scroll border-0 shadow-elegant">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pulse-500 transition-colors">
                    <MessageSquare className="w-6 h-6 text-pulse-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Omnichannel Conversations</h3>
                  <p className="text-gray-600 mb-6">Seamless customer experience across voice, web, SMS, and mobile platforms.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      Unified conversation history
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      Context preservation across channels
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-2 animate-on-scroll border-0 shadow-elegant">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pulse-500 transition-colors">
                    <Brain className="w-6 h-6 text-pulse-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Intelligent Routing</h3>
                  <p className="text-gray-600 mb-6">Smart AI routing ensures customers connect with the right expert instantly.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      Natural language intent recognition
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      Priority routing for VIP customers
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-2 animate-on-scroll border-0 shadow-elegant">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pulse-500 transition-colors">
                    <BarChart3 className="w-6 h-6 text-pulse-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Real-time Analytics</h3>
                  <p className="text-gray-600 mb-6">Complete visibility into AI assistant performance with actionable insights.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      Live conversation monitoring
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      Automated performance reports
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-2 animate-on-scroll border-0 shadow-elegant">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pulse-500 transition-colors">
                    <Shield className="w-6 h-6 text-pulse-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                  <p className="text-gray-600 mb-6">Industry-standard security practices protect all conversations and data.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      SOC 2 Type II compliance
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      End-to-end encryption
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-2 animate-on-scroll border-0 shadow-elegant">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-pulse-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pulse-500 transition-colors">
                    <Settings className="w-6 h-6 text-pulse-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Custom AI Personalities</h3>
                  <p className="text-gray-600 mb-6">Create specialized assistants with unique personalities and capabilities.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      Brand voice customization
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3"></div>
                      Industry-specific knowledge bases
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-pulse-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <Badge className="mb-6 bg-white text-pulse-700 border-pulse-200">
                  <Zap className="w-4 h-4 mr-2" />
                  Live Demo
                </Badge>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  See Your AI Assistant in Action
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Watch how our platform handles real customer conversations with natural, intelligent responses that feel genuinely human.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Natural Conversations</h4>
                      <p className="text-gray-600">AI that understands context, nuance, and intent</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Instant Responses</h4>
                      <p className="text-gray-600">Sub-second response times for seamless interactions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Smart Escalation</h4>
                      <p className="text-gray-600">Seamless handoffs to human agents when needed</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="bg-pulse-500 hover:bg-pulse-600 text-white">
                  <Play className="w-5 h-5 mr-2" />
                  Try Interactive Demo
                </Button>
              </div>

              <div className="animate-on-scroll">
                {/* Conversation Demo Mockup */}
                <div className="bg-white rounded-3xl shadow-elegant p-8 max-w-md mx-auto">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-pulse-500 rounded-full flex items-center justify-center mr-3">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">AI Assistant</h4>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-500">Online</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Customer message */}
                    <div className="flex justify-end">
                      <div className="bg-pulse-100 text-pulse-800 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                        <p className="text-sm">Hi, I need help with my recent order. It hasn't arrived yet.</p>
                      </div>
                    </div>

                    {/* AI response */}
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                        <p className="text-sm">I'd be happy to help you track your order! Can you please provide your order number?</p>
                      </div>
                    </div>

                    {/* Customer message */}
                    <div className="flex justify-end">
                      <div className="bg-pulse-100 text-pulse-800 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                        <p className="text-sm">It's #WL-2024-1234</p>
                      </div>
                    </div>

                    {/* AI response */}
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                        <p className="text-sm">Perfect! I found your order. It's currently in transit and should arrive tomorrow by 6 PM. Would you like me to send you a tracking link?</p>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Integration Library */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <Badge className="mb-4 bg-pulse-100 text-pulse-700 border-pulse-200">
                <Globe className="w-4 h-4 mr-2" />
                Integrations & Skills
              </Badge>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Thousands of Pre-built Integrations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with your existing tools and workflows. Our platform integrates seamlessly with the software you already use.
              </p>
            </div>

            {/* Integration Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center animate-on-scroll shadow-elegant border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-pulse-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-pulse-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">CRM & Sales</h3>
                  <p className="text-gray-600 mb-6">Salesforce, HubSpot, Pipedrive, and 50+ CRM platforms</p>
                  <div className="text-2xl font-bold text-pulse-500 mb-2">200+</div>
                  <div className="text-sm text-gray-500">Integrations</div>
                </CardContent>
              </Card>

              <Card className="text-center animate-on-scroll shadow-elegant border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-pulse-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8 text-pulse-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Communication</h3>
                  <p className="text-gray-600 mb-6">Slack, Teams, WhatsApp, and all major platforms</p>
                  <div className="text-2xl font-bold text-pulse-500 mb-2">150+</div>
                  <div className="text-sm text-gray-500">Channels</div>
                </CardContent>
              </Card>

              <Card className="text-center animate-on-scroll shadow-elegant border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-pulse-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Gauge className="w-8 h-8 text-pulse-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Analytics & Data</h3>
                  <p className="text-gray-600 mb-6">Google Analytics, Mixpanel, custom databases</p>
                  <div className="text-2xl font-bold text-pulse-500 mb-2">100+</div>
                  <div className="text-sm text-gray-500">Data Sources</div>
                </CardContent>
              </Card>
            </div>

            {/* Integration Grid Placeholder */}
            <div className="bg-gradient-to-r from-pulse-50 to-pulse-100 rounded-3xl p-12 animate-on-scroll">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-pulse-800 mb-4">Popular Integrations</h3>
                <p className="text-pulse-700">Connect with your favorite tools in one click</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-20">
                    <div className="w-8 h-8 bg-pulse-200 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-pulse-500 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Statistics Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                Trusted by Industry Leaders
              </Badge>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                Built for Scale, Security, and Success
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by thousands of businesses worldwide to handle millions of conversations with reliability and precision.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center animate-on-scroll">
                <div className="text-4xl font-bold text-pulse-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center animate-on-scroll">
                <div className="text-4xl font-bold text-pulse-400 mb-2">10M+</div>
                <div className="text-gray-400">Conversations Handled</div>
              </div>
              <div className="text-center animate-on-scroll">
                <div className="text-4xl font-bold text-pulse-400 mb-2">60+</div>
                <div className="text-gray-400">Countries Supported</div>
              </div>
              <div className="text-center animate-on-scroll">
                <div className="text-4xl font-bold text-pulse-400 mb-2">&lt;200ms</div>
                <div className="text-gray-400">Response Time</div>
              </div>
            </div>

            {/* Security Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 animate-on-scroll">
              <div className="bg-white/10 rounded-2xl p-6 flex items-center space-x-3">
                <Shield className="w-8 h-8 text-pulse-400" />
                <span className="font-semibold">SOC 2 Type II</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 flex items-center space-x-3">
                <Shield className="w-8 h-8 text-pulse-400" />
                <span className="font-semibold">GDPR Compliant</span>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 flex items-center space-x-3">
                <Shield className="w-8 h-8 text-pulse-400" />
                <span className="font-semibold">HIPAA Ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-pulse-500 to-pulse-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 animate-on-scroll">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll">
              Join thousands of businesses already using Wiil to create exceptional AI-powered customer interactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-on-scroll">
              <Button size="lg" className="bg-white text-pulse-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Schedule Expert Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-white/80 text-sm animate-on-scroll">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platform;