import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Yaratıcı", "Fullstack", "Kurumsal", "Akademik"];

  useEffect(() => {
    const video = videoRef.current;
    const src = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (video) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const tl = gsap.timeline({ ease: "power3.out" });
    tl.fromTo(".name-reveal", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
    );
    tl.fromTo(".blur-in",
      { opacity: 0, filter: "blur(10px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
      "-=0.8"
    );
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="min-w-full min-h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          FALORIN '26
        </div>
        
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Falorin
        </h1>
        
        <div className="blur-in text-xl md:text-2xl lg:text-3xl mb-8">
          Falorin, <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">{roles[roleIndex]}</span> dijital çözümler sunar.
        </div>
        
        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12">
          Sistemlere hayat veren benzersiz nüanslara odaklanarak kusursuz dijital etkileşimler tasarlıyoruz.
        </p>
        
        <div className="blur-in flex flex-col sm:flex-row items-center gap-4">
          <button className="accent-gradient-border rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-transform bg-text-primary text-bg hover:bg-bg hover:text-text-primary">
            Projeleri Gör
          </button>
          <button className="accent-gradient-border rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-transform border-2 border-stroke bg-bg text-text-primary hover:border-transparent">
            İletişime Geç...
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
