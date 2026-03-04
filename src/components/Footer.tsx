import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Hls from 'hls.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

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
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden border-t border-stroke">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="min-w-full min-h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Marquee */}
        <div className="w-full overflow-hidden mb-16 md:mb-24 whitespace-nowrap flex">
          <div ref={marqueeRef} className="flex">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/10 px-4">
                GELECEĞİ İNŞA EDİYORUZ •
              </span>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-4xl font-display italic mb-4 text-[#89AACC]">Falorin</h2>
              <p className="text-muted max-w-sm leading-relaxed">
                Dijital dünyada sınırları zorlayan, yaratıcı ve yenilikçi çözümler üreten tasarım ve teknoloji stüdyosu.
              </p>
            </div>
            
            <div className="max-w-md">
              <h3 className="text-sm font-medium uppercase tracking-widest mb-4">Bültene Katılın</h3>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz" 
                  className="bg-surface border border-stroke rounded-full px-6 py-3 flex-grow focus:outline-none focus:border-[#89AACC] transition-colors text-sm"
                />
                <button type="submit" className="bg-text-primary text-bg rounded-full w-12 h-12 flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Kurumsal</h3>
            <Link to="/about" className="text-muted hover:text-text-primary transition-colors">Hakkımızda</Link>
            <Link to="/services" className="text-muted hover:text-text-primary transition-colors">Hizmetler</Link>
            <Link to="/work" className="text-muted hover:text-text-primary transition-colors">Projeler</Link>
            <Link to="/team" className="text-muted hover:text-text-primary transition-colors">Ekibimiz</Link>
            <Link to="/careers" className="text-muted hover:text-text-primary transition-colors">Kariyer</Link>
          </div>

          {/* Links 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Kaynaklar</h3>
            <Link to="/insights" className="text-muted hover:text-text-primary transition-colors">İçgörüler & Blog</Link>
            <Link to="/contact" className="text-muted hover:text-text-primary transition-colors">İletişim</Link>
            <a href="#" className="text-muted hover:text-text-primary transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-muted hover:text-text-primary transition-colors">Kullanım Şartları</a>
            <a href="#" className="text-muted hover:text-text-primary transition-colors">SSS</a>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 border-t border-stroke pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} Falorin Studio. Tüm hakları saklıdır.
          </div>
          
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted hover:text-text-primary transition-all hover:-translate-y-0.5"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
