import { motion } from 'framer-motion';
import { services } from '../data';
import * as Icons from 'lucide-react';

export default function Services() {
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
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Hizmetlerimiz</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
            Dijital <span className="font-display italic">Çözümler</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Markanızı geleceğe taşımak için strateji, tasarım ve teknolojiyi bir araya getiren uçtan uca hizmetler sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-surface border border-stroke hover:border-text-primary/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-bg border border-stroke flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="text-[#89AACC]" size={24} />
                </div>
                <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}
