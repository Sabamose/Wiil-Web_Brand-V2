import React from "react";

const PlatformScreenshots = () => {
  const screenshots = [
    {
      id: 1,
      title: "Dashboard Analytics",
      description: "Real-time insights and performance metrics",
      image: "/lovable-uploads/926c1b21-af4f-449c-a7d7-b0976891088f.png",
      features: ["Live conversation tracking", "Performance analytics", "Custom reports"]
    },
    {
      id: 2,
      title: "AI Assistant Builder",
      description: "No-code assistant creation and customization",
      image: "/lovable-uploads/926c1b21-af4f-449c-a7d7-b0976891088f.png",
      features: ["Drag & drop interface", "Voice customization", "Knowledge base integration"]
    },
    {
      id: 3,
      title: "Omnichannel Management",
      description: "Unified inbox for all communication channels",
      image: "/lovable-uploads/926c1b21-af4f-449c-a7d7-b0976891088f.png",
      features: ["Multi-channel support", "Seamless handoffs", "Conversation history"]
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-gray-50" id="platform-screenshots">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
            <span>Platform in Action</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <div className="max-w-3xl mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
            See the platform in action
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Experience the intuitive interface and powerful features that make our platform 
            the choice for businesses scaling their AI operations.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="space-y-16 sm:space-y-24">
          {screenshots.map((screenshot, index) => (
            <div 
              key={screenshot.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center animate-on-scroll`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-3">
                    {screenshot.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {screenshot.description}
                  </p>
                </div>
                
                {/* Features List */}
                <div className="space-y-3">
                  {screenshot.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-pulse-500 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshot */}
              <div className="flex-1 max-w-2xl">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src={screenshot.image}
                    alt={`${screenshot.title} - ${screenshot.description}`}
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay gradient for better text visibility if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-24 animate-on-scroll">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-pulse-200 bg-white/80 backdrop-blur-sm">
            <span className="text-gray-700">Ready to see it live?</span>
            <button className="text-pulse-600 font-medium hover:text-pulse-700 transition-colors">
              Request Demo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformScreenshots;