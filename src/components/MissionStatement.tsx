
import React, { useRef } from "react";

interface MissionCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const missionValues: MissionCardProps[] = [{
  title: "Democratize AI",
  description: "We believe every business, regardless of size or technical expertise, should have access to powerful AI technology that transforms customer experiences.",
  icon: "🚀",
  gradient: "from-blue-700 via-indigo-800 to-purple-900"
}, {
  title: "Human-Centered AI",
  description: "Our AI assistants are designed to enhance human capabilities, not replace them. We create technology that empowers teams to focus on what matters most.",
  icon: "🤝",
  gradient: "from-indigo-900 via-purple-800 to-orange-500"
}, {
  title: "Effortless Innovation",
  description: "Complex technology should be simple to use. We build no-code solutions that make advanced AI accessible to everyone, everywhere.",
  icon: "⚡",
  gradient: "from-purple-800 via-pink-700 to-red-500"
}, {
  title: "Scale with Purpose",
  description: "We help businesses grow meaningfully by automating conversations that matter, creating genuine connections at scale.",
  icon: "🌟",
  gradient: "from-orange-600 via-red-500 to-purple-600"
}];

const MissionCard = ({
  title,
  description,
  icon
}: MissionCardProps) => {
  return <div className="rounded-lg p-8 h-full flex flex-col justify-between text-teal-800 relative overflow-hidden bg-gradient-to-br from-white via-teal-50 to-teal-600/20 shadow-[0_8px_32px_rgba(13,148,136,0.15),_inset_0_0_32px_rgba(13,148,136,0.1)] border border-teal-200/50">
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/80 backdrop-blur-sm z-10"></div>
      
      <div className="relative z-0">
        <div className="text-4xl mb-6">{icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-teal-900">{title}</h3>
        <p className="text-lg leading-relaxed text-teal-700 pr-8">{description}</p>
      </div>
    </div>;
};

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
          <h2 className="text-5xl font-display font-bold mb-6 text-left">Our Mission & Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            We're on a mission to make AI-powered customer conversations accessible to every business. 
            Our vision is a world where technology enhances human connection, not replaces it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionValues.map((value, index) => <MissionCard key={index} title={value.title} description={value.description} icon={value.icon} gradient={value.gradient} />)}
        </div>
      </div>
    </section>;
};

export default MissionStatement;
