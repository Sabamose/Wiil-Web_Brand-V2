import React from "react";
const ImageShowcaseSection = () => {
  return <section className="w-full pt-0 pb-8 sm:pb-12 bg-white relative" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative">
        
        {/* CTA Button - Top Right Corner */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
          <button className="relative h-11 rounded-full bg-teal-50/20 backdrop-blur-md border border-teal-200/30 px-5 text-sm font-medium text-teal-800 shadow-[0_8px_32px_0_rgba(20,184,166,0.25)] hover:bg-teal-100/30 transition-all duration-300 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/30 via-teal-500/20 to-teal-600/30 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <span className="relative z-10 bg-gradient-to-r from-teal-700 to-teal-900 bg-clip-text text-transparent font-semibold">+Create Assistant</span>
          </button>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">Built for automating customer conversations</h2>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img src="/lovable-uploads/926c1b21-af4f-449c-a7d7-b0976891088f.png" alt="Dashboard interface showing AI assistant management with create and analytics features" loading="lazy" className="w-full h-auto object-cover" />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next Generation AI Platform</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Our conversational AI platform is designed to transform how businesses interact with customers across all communication channels.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ImageShowcaseSection;