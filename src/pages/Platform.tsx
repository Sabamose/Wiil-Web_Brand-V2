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
        <section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          id="hero"
          style={{
            background: 'linear-gradient(180deg, #E5E7EB 0%, #F97316 100%)',
          }}
        >
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-on-scroll" 
            >
              Platform
            </h1>
            
            <p 
              className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed animate-on-scroll max-w-3xl mx-auto"
            >
              Discover how our comprehensive AI platform transforms businesses across industries. 
              From phone systems to analytics, see the complete infrastructure 
              that powers intelligent conversations.
            </p>
          </div>
        </section>

        {/* Professional Phone System */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Professional Phone System
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get instant access to local and toll-free numbers in 60+ countries with multiple provider redundancy and 99.9% uptime guarantee.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Uptime Guarantee</span>
                    <span className="text-2xl font-bold text-pulse-500">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Countries Supported</span>
                    <span className="text-2xl font-bold text-pulse-500">60+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Monthly Cost</span>
                    <span className="text-2xl font-bold text-pulse-500">$1.25</span>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
              <div className="animate-on-scroll">
                <img 
                  src="/hero-image.jpg" 
                  alt="Professional Phone System Dashboard" 
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
                  alt="Omnichannel Communication Platform" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="animate-on-scroll order-1 lg:order-2">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Omnichannel Communication
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  One AI assistant that works seamlessly across voice, web, SMS, and mobile platforms with unified conversation management.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Channels Supported</span>
                    <span className="text-2xl font-bold text-pulse-500">4+ platforms</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Integration Type</span>
                    <span className="text-2xl font-bold text-pulse-500">Universal</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Response Time</span>
                    <span className="text-2xl font-bold text-pulse-500">Instant</span>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligent Routing */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Intelligent Conversation Routing
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Smart AI routing ensures customers connect with the perfect assistant or human expert instantly using natural language processing.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Routing Accuracy</span>
                    <span className="text-2xl font-bold text-pulse-500">95%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Wrong Transfers</span>
                    <span className="text-2xl font-bold text-pulse-500">Zero</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Escalation Speed</span>
                    <span className="text-2xl font-bold text-pulse-500">Instant</span>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
              <div className="animate-on-scroll">
                <img 
                  src="/hero-image.jpg" 
                  alt="Intelligent Routing System" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Analytics & Security */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll order-2 lg:order-1">
                <img 
                  src="/hero-image.jpg" 
                  alt="Analytics and Security Dashboard" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="animate-on-scroll order-1 lg:order-2">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Analytics & Enterprise Security
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Real-time analytics dashboard with complete visibility and industry-standard security practices protecting all conversations and data.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Data Tracking</span>
                    <span className="text-2xl font-bold text-pulse-500">Real-time</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Security Standard</span>
                    <span className="text-2xl font-bold text-pulse-500">SOC 2</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Compliance</span>
                    <span className="text-2xl font-bold text-pulse-500">GDPR Ready</span>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Benefits Overview */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
                Complete AI Infrastructure for Every Business
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                Everything you need to build, deploy, and manage professional AI assistants with enterprise-grade reliability and security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gray-50 animate-on-scroll">
                <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phone System</h3>
                <p className="text-gray-600">Professional telephony infrastructure with global coverage and redundancy.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50 animate-on-scroll">
                <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Omnichannel</h3>
                <p className="text-gray-600">Unified conversations across voice, web, SMS, and mobile platforms.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50 animate-on-scroll">
                <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Routing</h3>
                <p className="text-gray-600">Intelligent conversation routing with natural language processing.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50 animate-on-scroll">
                <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Security</h3>
                <p className="text-gray-600">Real-time insights with enterprise-grade security and compliance.</p>
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