import { motion } from 'framer-motion';
import { jobs } from '../data';
import { ArrowRight } from 'lucide-react';

export default function Careers() {
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
        <div className="mb-24 text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Kariyer</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
            Ekibimize <span className="font-display italic">Katılın</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Yaratıcı, yenilikçi ve tutkulu insanlarla birlikte geleceğin dijital ürünlerini inşa ediyoruz. Sınırları zorlamaya hazır mısınız?
          </p>
        </div>

        {/* Culture Image */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-24 border border-stroke relative"
        >
          <img 
            src="https://picsum.photos/seed/office/1600/900" 
            alt="Falorin Office Culture" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl md:text-5xl font-display italic mb-12">Açık Pozisyonlar</h2>
          <div className="flex flex-col gap-4">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 bg-surface border border-stroke rounded-3xl hover:border-text-primary/50 transition-colors cursor-pointer"
              >
                <div>
                  <h3 className="text-2xl font-medium mb-2 group-hover:text-[#89AACC] transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                    <span className="px-3 py-1 rounded-full border border-stroke">{job.department}</span>
                    <span className="flex items-center gap-2">• {job.type}</span>
                    <span className="flex items-center gap-2">• {job.location}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-stroke flex items-center justify-center group-hover:bg-text-primary group-hover:text-bg transition-colors shrink-0">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
