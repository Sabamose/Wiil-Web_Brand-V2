import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <main className="space-y-4 sm:space-y-8">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Header-background.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight animate-on-scroll">
              The Complete AI Assistant Platform
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-on-scroll">
              Everything you need to build, deploy, and manage professional AI assistants. From infrastructure to analytics, we've got every detail covered.
            </p>
            <div className="space-x-4 animate-on-scroll">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Multi-Provider Phone System */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Professional Phone That Never Fails
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get instant access to local and toll-free numbers in 60+ countries with multiple provider redundancy.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">Instant number provisioning in minutes</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">Automatic failover between providers</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">99.9%</div>
                    <div className="text-sm text-gray-600">uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">60+</div>
                    <div className="text-sm text-gray-600">countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">$1.25/month</div>
                    <div className="text-sm text-gray-600">cost</div>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
              <div className="animate-on-scroll">
                <img 
                  src="/hero-image.jpg" 
                  alt="Phone System Dashboard" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Omnichannel Communication */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll order-2 lg:order-1">
                <img 
                  src="/hero-image.jpg" 
                  alt="Omnichannel Communication" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="animate-on-scroll order-1 lg:order-2">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Meet Customers Where They Are
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  One AI assistant that works seamlessly across voice, web, SMS, and mobile platforms.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">All conversations in one unified inbox</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">Seamless handoffs between channels</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">4+</div>
                    <div className="text-sm text-gray-600">channels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">Universal</div>
                    <div className="text-sm text-gray-600">integration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">Instant</div>
                    <div className="text-sm text-gray-600">response</div>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized AI Assistants */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Tailored to Your Needs
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Create specialized AI assistants with unique personalities, knowledge, and capabilities.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">Multiple assistant roles and personalities</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">Complete customization and branding</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">20+</div>
                    <div className="text-sm text-gray-600">templates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">5 min</div>
                    <div className="text-sm text-gray-600">setup</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">Unlimited</div>
                    <div className="text-sm text-gray-600">roles</div>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
              <div className="animate-on-scroll">
                <img 
                  src="/hero-image.jpg" 
                  alt="AI Assistants" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intelligent Conversation Routing */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll order-2 lg:order-1">
                <img 
                  src="/hero-image.jpg" 
                  alt="Conversation Routing" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="animate-on-scroll order-1 lg:order-2">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Right Expert, Every Time
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Smart AI routing ensures customers connect with the perfect assistant or human expert instantly.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">Intent recognition from natural language</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">Priority routing for VIP customers</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">85%</div>
                    <div className="text-sm text-gray-600">accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">Zero wrong</div>
                    <div className="text-sm text-gray-600">transfers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">Seamless</div>
                    <div className="text-sm text-gray-600">escalation</div>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics & Insights */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Data-Driven Optimization
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Real-time analytics dashboard gives you complete visibility into AI assistant performance.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">Conversation analytics and trends</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">Response time monitoring</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">Real-time</div>
                    <div className="text-sm text-gray-600">tracking</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">Automated</div>
                    <div className="text-sm text-gray-600">reports</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">Actionable</div>
                    <div className="text-sm text-gray-600">insights</div>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
              <div className="animate-on-scroll">
                <img 
                  src="/hero-image.jpg" 
                  alt="Analytics Dashboard" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll order-2 lg:order-1">
                <img 
                  src="/hero-image.jpg" 
                  alt="Security & Compliance" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="animate-on-scroll order-1 lg:order-2">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Reliable Protection
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your conversations and data are protected with industry-standard security practices.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">Privacy compliance</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                    <p className="text-gray-700">Secure infrastructure</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">Protected</div>
                    <div className="text-sm text-gray-600">privacy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">99.9%</div>
                    <div className="text-sm text-gray-600">uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pulse-500">Global</div>
                    <div className="text-sm text-gray-600">compliance</div>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-pulse-500">
          <div className="section-container text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-on-scroll">
              Ready to build your AI assistant platform?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto animate-on-scroll">
              Start with a free trial or speak with our experts to see the complete platform in action.
            </p>
            <div className="space-x-4 animate-on-scroll">
              <button className="bg-white text-pulse-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors">
                Talk to Expert
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platform;