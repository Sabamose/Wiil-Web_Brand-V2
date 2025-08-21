import React from "react";

const PlatformScreenshots = () => {
  const screenshots = [
    {
      id: 1,
      title: "Analytics Dashboard",
      subtitle: "Real-time insights and performance tracking",
      description: "Monitor your AI assistants with comprehensive analytics including conversation metrics, global deployment tracking, and detailed response data to optimize performance across all channels.",
      image: "/lovable-uploads/f0ac3dc8-c76e-419a-88b5-f02af3e5d8e2.png",
      metrics: [
        { value: "41.3K", label: "responses" },
        { value: "507.3K", label: "minutes" },
        { value: "78", label: "deployments" }
      ]
    },
    {
      id: 2,
      title: "Conversation Monitoring",
      subtitle: "Inbound and outbound phone calls",
      description: "Building AI conversations has never been easier with our no-code, drag and drop UI that comes pre-baked with A/B testing. Create sophisticated conversation flows that handle complex customer interactions.",
      image: "/lovable-uploads/989120b3-bf7e-486f-bda2-9c919e3a5d68.png",
      features: ["No-code conversation builder", "Drag & drop interface", "Built-in A/B testing"]
    },
    {
      id: 3,
      title: "Agent Customization",
      subtitle: "Customizable AI agents & One-Time Training",
      description: "Equip your AI agents with initial call recordings and knowledge bases, and they'll remain continuously updated without further training. Customize personality traits, voices, and behavior to match your brand.",
      image: "/lovable-uploads/79feed46-52a7-41ab-85ac-9d02ef0bfa46.png",
      features: ["Voice customization", "Personality traits", "Continuous learning"]
    }
  ];

  return (
    <section className="w-full py-20 sm:py-32 bg-white" id="platform-screenshots">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-gray-900 mb-6">
            See the platform in action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the intuitive interface and powerful features that make our platform 
            the choice for businesses scaling their AI operations.
          </p>
        </div>

        {/* Screenshots */}
        <div className="space-y-32">
          {screenshots.map((screenshot, index) => (
            <div 
              key={screenshot.id}
              className="animate-on-scroll"
            >
              {/* Content Header */}
              <div className="mb-12">
                {screenshot.subtitle && (
                  <p className="text-green-600 text-lg font-medium mb-4">{screenshot.subtitle}</p>
                )}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                  {screenshot.title}
                </h3>
                <p className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-8">
                  {screenshot.description}
                </p>
                
                {/* Features */}
              </div>

              {/* Screenshot */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={screenshot.image}
                    alt={`${screenshot.title} interface`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformScreenshots;