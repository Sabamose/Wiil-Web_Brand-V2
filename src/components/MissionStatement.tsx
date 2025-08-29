import React, { useRef } from "react";
interface MissionValue {
  title: string;
  description: string;
}
const missionValues: MissionValue[] = [{
  title: "Democratize AI",
  description: "Powerful AI technology accessible to every business, regardless of size or expertise."
}, {
  title: "Human-Centered AI",
  description: "AI that enhances human capabilities and empowers teams to focus on what matters."
}, {
  title: "Effortless Innovation",
  description: "No-code solutions that make advanced AI simple and accessible to everyone."
}, {
  title: "Scale with Purpose",
  description: "Automate conversations that matter and create genuine connections at scale."
}];
const MissionStatement = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return <section className="py-12 bg-white relative" id="mission" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip bg-teal-600/10 border border-teal-600/20">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white mr-2">04</span>
            <span className="text-teal-600">Our Mission</span>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-5xl font-display font-bold mb-6 text-left">Our Mission </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            We're on a mission to make AI-powered customer conversations accessible to every business. 
            Our vision is a world where technology enhances human connection, not replaces it.
          </p>
        </div>
        
        <div className="mt-16 flex justify-center">
          <img src="/lovable-uploads/2e37e38b-9885-4e58-83c1-28f146f40a90.png" alt="Isometric office environment showing various business departments using AI-powered conversational interfaces" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>;
};
export default MissionStatement;