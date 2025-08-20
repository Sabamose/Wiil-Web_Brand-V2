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
              AI Platform
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-on-scroll">
              Build, deploy, and scale AI assistants across all your business channels with our comprehensive platform
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors animate-on-scroll">
              Explore Platform
            </button>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
                Everything you need to build AI conversations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                Our platform provides all the tools and infrastructure to create, train, and deploy AI assistants that work across every channel your customers use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gray-50 animate-on-scroll">
                <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Smart AI Training</h3>
                <p className="text-gray-600">Train your AI assistant with your business data, processes, and knowledge base for accurate responses.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50 animate-on-scroll">
                <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Channel Deploy</h3>
                <p className="text-gray-600">Deploy across voice calls, web chat, SMS, mobile apps, and social media from one platform.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50 animate-on-scroll">
                <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Analytics</h3>
                <p className="text-gray-600">Monitor performance, track conversations, and optimize your AI assistants with detailed insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-16 sm:py-24 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: "url('/background-section2.png')" }}
          />
          <div className="relative section-container">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
                Built for enterprise scale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                Handle millions of conversations with enterprise-grade security, reliability, and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-on-scroll">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pulse-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
                    <p className="text-gray-600">SOC 2 compliant with end-to-end encryption and advanced security controls.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pulse-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
                    <p className="text-gray-600">Sub-second response times with global edge deployment and smart caching.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pulse-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Built for Scale</h3>
                    <p className="text-gray-600">Auto-scaling infrastructure that grows with your business needs.</p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll">
                <img 
                  src="/hero-image.jpg" 
                  alt="Platform Dashboard" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
                Seamless integrations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                Connect with your existing tools and workflows. Our platform integrates with 100+ business applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {['CRM', 'Slack', 'Teams', 'Salesforce', 'HubSpot', 'Zendesk'].map((integration, index) => (
                <div key={integration} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm font-medium text-gray-700">{integration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-pulse-500">
          <div className="section-container text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-on-scroll">
              Ready to transform your business conversations?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto animate-on-scroll">
              Join thousands of businesses using our platform to automate and enhance their customer interactions.
            </p>
            <button className="bg-white text-pulse-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors animate-on-scroll">
              Start Free Trial
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platform;