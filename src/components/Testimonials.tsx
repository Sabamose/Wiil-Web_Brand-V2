
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Our AI assistant handles 90% of customer inquiries instantly, allowing our team to focus on complex issues. Customer satisfaction improved by 35% in just two months.",
  author: "Sarah Chen",
  role: "VP of Customer Success, TechFlow Solutions",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "Implementing AI assistants across our sales channels captured 90% more leads and reduced response time to under 5 seconds. Revenue increased by 40% this quarter.",
  author: "Michael Rodriguez",
  role: "Director of Sales, GlobalConnect",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "The no-code platform made deployment incredibly simple. Our support team now handles 3x more conversations with better accuracy and customer satisfaction.",
  author: "Dr. Amara Patel",
  role: "Head of Operations, ServicePro",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "As a mid-size business, AI assistants transformed our customer service without requiring technical expertise. Setup took just 5 minutes and results were immediate.",
  author: "Jason Lee",
  role: "CEO, Innovative Solutions Inc.",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="rounded-lg p-8 h-full flex flex-col justify-between text-teal-800 relative overflow-hidden bg-gradient-to-br from-white via-teal-50 to-teal-600/20 shadow-[0_8px_32px_rgba(13,148,136,0.15),_inset_0_0_32px_rgba(13,148,136,0.1)] border border-teal-200/50">
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/80 backdrop-blur-sm z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-teal-600">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip bg-teal-600/10 border border-teal-600/20">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white mr-2">04</span>
            <span className="text-teal-600">Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">Success stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
