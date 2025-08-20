import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UseCases = () => {
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
              Use Cases
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-on-scroll">
              Discover how AI assistants transform businesses across industries. From sales automation to customer support, see the specific solutions that drive real results.
            </p>
          </div>
        </section>

        {/* Sales & Lead Management */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Never Miss Another Sale
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Transform your sales process with AI assistants that capture leads, qualify prospects, and schedule meetings 24/7.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Leads Captured</span>
                    <span className="text-2xl font-bold text-pulse-500">90% more</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Time Saved</span>
                    <span className="text-2xl font-bold text-pulse-500">15h/week</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Revenue Increase</span>
                    <span className="text-2xl font-bold text-pulse-500">35%</span>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
              <div className="animate-on-scroll">
                <img 
                  src="/hero-image.jpg" 
                  alt="Sales Dashboard" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Support */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll order-2 lg:order-1">
                <img 
                  src="/hero-image.jpg" 
                  alt="Customer Support" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="animate-on-scroll order-1 lg:order-2">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Delight Customers 24/7
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Provide instant, accurate support across all channels while your human agents focus on complex issues.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Issues Resolved</span>
                    <span className="text-2xl font-bold text-pulse-500">90% instantly</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Time Saved</span>
                    <span className="text-2xl font-bold text-pulse-500">25h/week</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Retention Boost</span>
                    <span className="text-2xl font-bold text-pulse-500">40%</span>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Operations & Scheduling */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Streamline Operations
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Automate scheduling, order processing, and operational workflows with intelligent AI assistants.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Process Automation</span>
                    <span className="text-2xl font-bold text-pulse-500">Scheduling & Orders</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Time Saved</span>
                    <span className="text-2xl font-bold text-pulse-500">20h/week</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Efficiency Gain</span>
                    <span className="text-2xl font-bold text-pulse-500">25%</span>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
              <div className="animate-on-scroll">
                <img 
                  src="/hero-image.jpg" 
                  alt="Operations Dashboard" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Personal Assistant */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll order-2 lg:order-1">
                <img 
                  src="/hero-image.jpg" 
                  alt="Personal Assistant" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="animate-on-scroll order-1 lg:order-2">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Your Personal AI Secretary
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Executive-level organization and management with an AI assistant that handles your calendar, communications, and tasks.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Organization Level</span>
                    <span className="text-2xl font-bold text-pulse-500">Executive-level</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Time Saved</span>
                    <span className="text-2xl font-bold text-pulse-500">12h/week</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Professional Impact</span>
                    <span className="text-2xl font-bold text-pulse-500">Image Boost</span>
                  </div>
                </div>
                <button className="text-pulse-500 font-semibold hover:underline">Learn More →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Overview */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
                AI Solutions for Every Business Need
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
                Transform your business operations with intelligent AI assistants that work around the clock to drive results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gray-50 animate-on-scroll">
                <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sales Growth</h3>
                <p className="text-gray-600">Increase revenue with automated lead capture and qualification systems.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50 animate-on-scroll">
                <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Satisfaction</h3>
                <p className="text-gray-600">Deliver exceptional 24/7 support that delights your customers.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50 animate-on-scroll">
                <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Time Efficiency</h3>
                <p className="text-gray-600">Save hours every week with intelligent automation and scheduling.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gray-50 animate-on-scroll">
                <div className="w-16 h-16 bg-pulse-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Excellence</h3>
                <p className="text-gray-600">Streamline workflows and boost efficiency across all departments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-pulse-500">
          <div className="section-container text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-on-scroll">
              Ready to implement AI assistants in your business?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto animate-on-scroll">
              Start with a free trial or speak with our experts to customize the perfect solution for your needs.
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

export default UseCases;