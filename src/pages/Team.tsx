import { motion } from 'framer-motion';
import { team } from '../data';

export default function Team() {
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
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Ekibimiz</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
            Yaratıcı <span className="font-display italic">Zihinler</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Her biri kendi alanında uzman, tutkulu ve vizyoner ekibimizle tanışın. Birlikte harika işler başarıyoruz.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-square mb-6 border border-stroke bg-surface">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-medium mb-1">{member.name}</h3>
                <p className="text-[#89AACC] font-display italic text-lg">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
