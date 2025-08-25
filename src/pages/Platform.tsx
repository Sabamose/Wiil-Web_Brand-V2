import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Phone, Globe, MessageSquare, BarChart3, Shield, Users, Zap, Clock, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Platform = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              The AI Agent{" "}
              <span className="text-primary">Platform</span>{" "}
              that does it all.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Build and deploy AI customer support assistants across phone, web, and messaging channels. 
              Everything you need in one integrated platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input 
                  type="email" 
                  placeholder="What is your work email?" 
                  className="px-4 py-3 border border-gray-300 rounded-lg w-64 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Good Morning, Welcome Back!
            </h2>
            <p className="text-lg text-gray-600">
              Monitor and manage all your AI assistants from one unified dashboard
            </p>
          </div>
          
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6">
              <CardHeader className="p-0 pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-gray-600">Responses</CardTitle>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">+11%</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-gray-900">41.3K</div>
                <div className="text-xs text-gray-500">responses</div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="p-0 pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-gray-600">Talk Time</CardTitle>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">+6%</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-gray-900">507.3K</div>
                <div className="text-xs text-gray-500">minutes</div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="p-0 pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-gray-600">Deployments</CardTitle>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">+3%</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-gray-900">78</div>
                <div className="text-xs text-gray-500">deployments</div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="p-0 pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-gray-600">Usage</CardTitle>
                  <Button variant="outline" size="sm" className="text-xs">Reports</Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="text-xs text-gray-500 mb-2">54 Active Assistants</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Customer Intake:</span>
                    <span>10.3k Minutes</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Appointment Scheduling:</span>
                    <span>8.5k Minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm text-gray-500 uppercase tracking-wide">Customizable AI Phone Agents</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              <span className="text-blue-500">Features</span> from the{" "}
              <span className="text-primary">Future.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Phone System</h3>
                  <p className="text-gray-600">Get instant access to local and toll-free numbers in 60+ countries. 99.9% uptime guaranteed.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Omnichannel Communication</h3>
                  <p className="text-gray-600">One AI assistant that works across voice, web, SMS, and mobile platforms seamlessly.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Routing</h3>
                  <p className="text-gray-600">Smart AI routing ensures customers connect with the perfect assistant instantly.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium text-gray-900">Speak</span>
              </div>
              <p className="text-gray-600 mb-6">
                Converse with the customer to accurately fulfill their needs to the best of your abilities.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">A/B</span>
                  </div>
                  <span className="font-medium text-gray-900">A/B Test</span>
                </div>
                <p className="text-sm text-gray-600">
                  End the call with asking the customer if they were happy with their experience and if they are willing to fill out a survey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Editor Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-primary font-medium">Inbound and outbound phone calls</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Conversation Editor
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Building AI conversations has never been easier with our no-code, drag and drop UI that comes pre-baked with A/B testing.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Drag and drop conversation builder</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Built-in A/B testing capabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Real-time conversation previews</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-xs font-bold">J</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">"John, do you want me to put the</p>
                    <p className="text-sm text-gray-600">Demo Walk Thru on your Google</p>
                    <p className="text-sm text-gray-600">Calendar?"</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">C</span>
                    </div>
                    <span className="text-sm font-medium">Calendly</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Active</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-orange-600">H</span>
                    </div>
                    <span className="text-sm font-medium">HubSpot</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">90% ▲</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Library Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <span className="text-primary font-medium">Thousands of Integrations</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Skills Library</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                AI agents perform tasks out-of-the-box, integrating directly with your Calendar, CRM and back office tools to follow up on leads, manage claims, schedule appointments, and a lot more.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded mx-auto mb-2 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-xs text-gray-600">Calendar</span>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-100 rounded mx-auto mb-2 flex items-center justify-center">
                    <Users className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-xs text-gray-600">CRM</span>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded mx-auto mb-2 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-xs text-gray-600">Automation</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                One-Time Training
              </h2>
              <span className="text-primary font-medium">As good as your best agent</span>
              <p className="text-lg text-gray-600 mt-4 mb-6">
                Equip your AI agents with initial call recordings and knowledge bases, and they'll remain continuously updated without further training.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Initial setup in minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Continuous learning without retraining</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Enterprise-grade security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Insights Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-primary font-medium">User-friendly reports</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Conversation Insights
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Comprehensive analytics and detailed reports, enabling you to monitor your AI agents' performance and optimize customer interactions continuously.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Real-time performance analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Conversation sentiment analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Customer satisfaction tracking</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-purple-600">CM</span>
                  </div>
                  <span className="font-medium text-gray-900">Coaching Mode</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Here you can give guidelines to train your AI agent's name. Our system will remember the rules you set for future chats and won't repeat the same behaviors.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-xs font-bold text-green-600">✓</span>
                    </div>
                    <span className="text-sm">Open the conversation.</span>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                    <p className="text-xs text-blue-700">
                      <strong>Please:</strong> Please respond with [humor] and be [friendly].
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-3">
                    <p className="text-xs text-orange-700">
                      Please be more [formal].
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The <span className="text-primary">future</span> is here—call it.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The proof is in the pudding—experience how AI is transforming customer interaction with one call.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <input 
              type="email" 
              placeholder="What is your work email?" 
              className="px-4 py-3 border border-gray-300 rounded-lg w-64 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold">
              <Phone className="w-5 h-5" />
              +1 (855) 717-0250
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;