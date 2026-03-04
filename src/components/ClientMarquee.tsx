import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { clients } from '../data';

export default function ClientMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full py-12 border-y border-stroke bg-surface overflow-hidden flex flex-col items-center">
      <span className="text-xs text-muted uppercase tracking-[0.2em] mb-8">Güvenen Markalar</span>
      <div className="w-full overflow-hidden whitespace-nowrap flex">
        <div ref={marqueeRef} className="flex items-center gap-16 md:gap-32 px-8">
          {/* Double the array for seamless looping */}
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="text-2xl md:text-4xl font-display italic text-text-primary/40 hover:text-text-primary transition-colors cursor-default">
              {client}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
