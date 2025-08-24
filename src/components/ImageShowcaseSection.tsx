import React from "react";
const ImageShowcaseSection = () => {
  return <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">Built for automating customer conversations</h2>
          <p className="text-base sm:text-lg text-gray-600">Our  conversational AI platform is designed to transform how businesses interact with customers across all communication channels.</p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img src="/lovable-uploads/926c1b21-af4f-449c-a7d7-b0976891088f.png" alt="Dashboard interface showing AI assistant management with create and analytics features" className="w-full h-auto object-cover" />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next Generation AI Platform</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Built with advanced natural language processing and multi-channel deployment, 
              our AI assistants seamlessly integrate into various business environments, 
              from customer service to sales, providing intelligent automation and enriching customer experiences.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ImageShowcaseSection;