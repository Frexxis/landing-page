import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { explorations } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      gsap.fromTo(leftColRef.current,
        { y: "10vh" },
        {
          y: "-120vh",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        }
      );

      gsap.fromTo(rightColRef.current,
        { y: "40vh" },
        {
          y: "-100vh",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      
      {/* Layer 1: Pinned Center */}
      <div ref={contentRef} className="h-screen w-full flex flex-col items-center justify-center z-10 pointer-events-none absolute top-0 left-0">
        <div className="text-center px-4 max-w-2xl pointer-events-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Keşifler</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
            Görsel <span className="font-display italic">Oyun Alanı</span>
          </h2>
          <p className="text-muted text-lg mb-8">
            Yaratıcı deneyler, hareket çalışmaları ve görsel keşifler için bir alan.
          </p>
          <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-surface border border-stroke hover:border-transparent accent-gradient-border text-sm transition-colors">
            <span className="w-4 h-4 rounded-full bg-[#ea4c89]" />
            Dribbble'da Görüntüle <span>↗</span>
          </button>
        </div>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto h-full grid grid-cols-2 gap-12 md:gap-40 px-4 md:px-10">
          
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col items-end gap-24 md:gap-40 pointer-events-auto">
            <div className="h-[20vh]" />
            {explorations.filter((_, i) => i % 2 === 0).map((item) => (
              <ExplorationCard key={item.id} item={item} onClick={() => setSelectedImage(item.image)} />
            ))}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col items-start gap-24 md:gap-40 pointer-events-auto">
            <div className="h-[40vh]" />
            {explorations.filter((_, i) => i % 2 !== 0).map((item) => (
              <ExplorationCard key={item.id} item={item} onClick={() => setSelectedImage(item.image)} />
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Exploration"
              className="max-w-full max-h-full aspect-[16/10] object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ExplorationCard({ item, onClick }: { key?: React.Key, item: any, onClick: () => void }) {
  const rotation = (item.id % 2 === 0 ? 1 : -1) * (1.5 + item.id % 3);

  return (
    <div 
      className="relative group cursor-pointer aspect-square max-w-[320px] w-full"
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={onClick}
    >
      <div className="absolute -inset-4 rounded-[40px] border border-stroke bg-surface/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
        <div className="absolute inset-0 halftone-overlay opacity-30 mix-blend-multiply" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <h3 className="text-xl font-display italic text-text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {item.title}
          </h3>
          <p className="text-sm text-muted translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
            {item.category}
          </p>
        </div>
      </div>
    </div>
  );
}
