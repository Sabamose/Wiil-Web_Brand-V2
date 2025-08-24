
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip bg-teal-600/10 border border-teal-600/20">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white mr-2">3</span>
              <span className="text-teal-600">Specs</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-500/80 via-teal-600 via-teal-600 via-teal-600/90 via-teal-700/80 to-teal-600/70">
              Create intelligent AI assistants that automate customer support inquiries across all channels—so you can focus on what matters most: being present with your customers.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
