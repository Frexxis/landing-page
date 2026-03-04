import { motion } from 'framer-motion';
import Stats from '../components/Stats';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen bg-bg"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Hero */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Hakkımızda</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-12">
            Biz <span className="font-display italic">Falorin'iz.</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl text-muted leading-relaxed">
            <p>
              Falorin, dijital dünyada sınırları zorlayan, yaratıcı ve yenilikçi çözümler üreten bir tasarım ve teknoloji stüdyosudur. Amacımız, markaların hikayelerini en etkili ve estetik şekilde anlatmalarına yardımcı olmaktır.
            </p>
            <p>
              Kullanıcı deneyimini merkeze alan yaklaşımımızla, sadece güzel görünen değil, aynı zamanda işlevsel ve akılda kalıcı dijital ürünler tasarlıyoruz. Her projede, markanın özünü yansıtan benzersiz bir dijital kimlik oluşturmayı hedefliyoruz.
            </p>
          </div>
        </div>

        {/* Image */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-24 border border-stroke relative group"
        >
          <img 
            src="https://picsum.photos/seed/team/1600/900" 
            alt="Falorin Team" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 halftone-overlay opacity-30 mix-blend-multiply" />
        </motion.div>

        {/* Philosophy */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-display italic mb-12 text-center">Felsefemiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Estetik ve İşlev", desc: "Tasarımın sadece göze hitap etmesi yetmez; aynı zamanda kusursuz çalışmalı ve kullanıcıya değer katmalıdır." },
              { title: "Sürekli İnovasyon", desc: "Teknolojinin hızına ayak uydurmakla kalmıyor, yeni trendleri belirliyor ve projelerimize entegre ediyoruz." },
              { title: "İnsan Odaklılık", desc: "Geliştirdiğimiz her ürünün merkezinde insan var. Empati kurarak, gerçek sorunlara gerçek çözümler üretiyoruz." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-surface border border-stroke hover:border-text-primary/50 transition-colors"
              >
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Stats Section */}
      <Stats />
    </motion.div>
  );
}
