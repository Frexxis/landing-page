import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen bg-bg"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">İletişim</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
              Merhaba <span className="font-display italic">Deyin.</span>
            </h1>
            <p className="text-muted text-lg mb-12 max-w-md">
              Yeni bir proje, iş birliği veya sadece kahve içmek için bizimle iletişime geçmekten çekinmeyin.
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-sm text-muted uppercase tracking-widest mb-2">E-posta</h3>
                <a href="mailto:hello@falorin.com" className="text-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#89AACC] hover:to-[#4E85BF] transition-all">
                  hello@falorin.com
                </a>
              </div>
              <div>
                <h3 className="text-sm text-muted uppercase tracking-widest mb-2">Ofis</h3>
                <p className="text-xl text-text-primary">
                  Levent, Büyükdere Cd.<br />
                  34330 Beşiktaş/İstanbul
                </p>
              </div>
              <div>
                <h3 className="text-sm text-muted uppercase tracking-widest mb-2">Sosyal Medya</h3>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map(social => (
                    <a key={social} href="#" className="text-text-primary hover:text-[#89AACC] transition-colors underline decoration-stroke underline-offset-4">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-surface p-8 md:p-12 rounded-[40px] border border-stroke relative overflow-hidden">
            <div className="absolute inset-0 halftone-overlay opacity-10 mix-blend-multiply pointer-events-none" />
            
            <h2 className="text-3xl font-display italic mb-8 relative z-10">Projenizi Anlatın</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-muted">Adınız</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="bg-bg border border-stroke rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-[#89AACC] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-muted">E-posta Adresiniz</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="bg-bg border border-stroke rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-[#89AACC] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-muted">Mesajınız</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="bg-bg border border-stroke rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-[#89AACC] transition-colors resize-none"
                  placeholder="Projenizden bahsedin..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-4 accent-gradient-border rounded-full text-sm px-7 py-4 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isSubmitting ? 'Gönderiliyor...' : isSuccess ? 'Mesaj Gönderildi ✓' : 'Mesajı Gönder'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
