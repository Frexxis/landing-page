import { motion } from 'framer-motion';
import { stats } from '../data';

export default function Stats() {
  return (
    <section id="resume" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">İstatistikler & Gerçekler</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
            Etki <span className="font-display italic">Yaratmak</span>
          </h2>
          <p className="text-muted max-w-md">
            Yolculuğumu tanımlayan sayılara ve her projeye kattığım değere hızlı bir bakış.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className={`flex flex-col ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter mb-6">
                {stat.number}
              </div>
              <div className="w-full h-px bg-stroke mb-6" />
              <div className="text-xl md:text-2xl font-bold mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
