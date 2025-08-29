import React, { useRef, useEffect, useState } from 'react';

const InteractiveParticleAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const particlesArrayRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: undefined as number | undefined, y: undefined as number | undefined, radius: 120 });
  const frameRef = useRef(0);
  const animationIdRef = useRef<number>();

  const maxParticles = 8000; // Doubled quantity
  const baseParticles = 4000; // Doubled quantity
  const colors = ['#0f766e', '#0d9488', '#14b8a6', '#5eead4']; // Added a darker teal

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateCanvasSize();

    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      angle: number;
      baseRadius: number;
      density: number;
      offset: number;
      isActive: boolean;

      constructor(x: number, y: number, size: number, color: string, angle: number, baseRadius: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.angle = angle;
        this.baseRadius = baseRadius;
        this.density = (Math.random() * 40) + 5;
        this.offset = Math.random() * 1000;
        this.isActive = false;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!this.isActive) return;

        const mouse = mouseRef.current;
        if (mouse.x !== undefined && mouse.y !== undefined) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            let force = (mouse.radius - distance) / mouse.radius;
            force = force * force;
            
            const repulsionX = forceDirectionX * force * this.density * 0.08;
            const repulsionY = forceDirectionY * force * this.density * 0.08;
            
            const swirlX = -forceDirectionY * force * this.density * 0.06;
            const swirlY = forceDirectionX * force * this.density * 0.06;

            this.x -= (repulsionX + swirlX);
            this.y -= (repulsionY + swirlY);
          }
        }

        const mainPulse = Math.sin(frameRef.current * 0.01 + this.offset * 0.01) * 15; // Increased strength
        const secondaryPulse = Math.sin(frameRef.current * 0.03 + this.offset) * 8; // Increased strength
        const dynamicRadius = this.baseRadius + mainPulse + secondaryPulse;
        
        const targetX = canvas.width / 2 + Math.cos(this.angle) * dynamicRadius;
        const targetY = canvas.height / 2 + Math.sin(this.angle) * dynamicRadius;

        let returnDx = this.x - targetX;
        let returnDy = this.y - targetY;
        this.x -= returnDx / 20;
        this.y -= returnDy / 20;
        
        this.draw();
      }
    }

    const initParticles = () => {
      particlesArrayRef.current = [];
      for (let i = 0; i < maxParticles; i++) {
        let size = Math.random() * 0.8 + 0.2; // Made particles smaller
        
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.sqrt(Math.random()) * (canvas.width / 2.2); // Changed divisor from 2.5 to 2.2 to increase the circle size
        
        let x = canvas.width / 2 + Math.cos(angle) * radius;
        let y = canvas.height / 2 + Math.sin(angle) * radius;
        
        let color = colors[Math.floor(Math.random() * colors.length)];
        particlesArrayRef.current.push(new Particle(x, y, size, color, angle, radius));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const breathCycle = (Math.sin(frameRef.current * 0.01) + 1) / 2;
      const activeCount = baseParticles + (breathCycle * (maxParticles - baseParticles));

      for (let i = 0; i < maxParticles; i++) {
        if (particlesArrayRef.current[i]) {
          particlesArrayRef.current[i].isActive = i < activeCount;
          particlesArrayRef.current[i].update();
        }
      }

      frameRef.current++;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Mouse events
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = undefined;
      mouseRef.current.y = undefined;
    };

    // Window resize
    const handleResize = () => {
      updateCanvasSize();
      initParticles();
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    initParticles();
    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white">
      <div 
        ref={containerRef}
        className="relative w-[500px] h-[500px] flex justify-center items-center cursor-pointer"
        onClick={handlePlayPause}
      >
        <canvas 
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div 
            className={`w-[70px] h-[70px] rounded-full flex justify-center items-center transition-transform duration-300 ${
              'bg-teal-600/10 backdrop-blur-[10px] border border-white/10 shadow-[0_8px_32px_0_rgba(20,184,166,0.1)]'
            } hover:scale-110`}
          >
            <div className="w-5 h-5 relative transition-all duration-300">
              {!isPlaying ? (
                <div 
                  className="absolute left-0.5 border-l-[20px] border-l-teal-800 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"
                />
              ) : (
                <>
                  <div className="absolute left-[-6px] w-2 h-5 bg-teal-800" />
                  <div className="absolute left-[10px] w-2 h-5 bg-teal-800" />
                </>
              )}
            </div>
          </div>
          <p className="mt-4 text-teal-800 text-sm font-medium" style={{textShadow: '0px 0px 8px rgba(255, 255, 255, 0.8)'}}>
            Listen to a Conversation
          </p>
        </div>
      </div>

      <audio 
        ref={audioRef}
        src="https://storage.googleapis.com/gemini-prod/audios/2024/05/11/133036_a90035.mp3"
        preload="auto"
        onEnded={handleAudioEnded}
      />
    </section>
  );
};

export default InteractiveParticleAnimation;