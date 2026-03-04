import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { insights } from '../data';

export default function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">İçgörüler</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
              Güncel <span className="font-display italic">Düşünceler</span>
            </h2>
            <p className="text-muted max-w-md">
              Tasarım, geliştirme ve web'in geleceği üzerine makaleler, düşünceler ve fikirler koleksiyonu.
            </p>
          </div>
          <Link to="/insights" className="hidden md:inline-flex items-center gap-2 rounded-full px-6 py-3 bg-surface border border-stroke hover:border-transparent accent-gradient-border text-sm transition-colors">
            Tümünü Gör <span>→</span>
          </Link>
        </motion.div>

        <div className="flex flex-col gap-4">
          {insights.slice(0, 4).map((entry, i) => (
            <Link to={`/insights/${entry.slug}`} key={i}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col sm:flex-row items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full cursor-pointer transition-colors"
              >
                <div className="w-24 h-24 sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden shrink-0 border border-transparent group-hover:border-stroke transition-colors">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <h3 className="text-lg md:text-2xl font-medium text-center sm:text-left transition-transform duration-300 group-hover:translate-x-1">
                  {entry.title}
                </h3>
                
                <div className="hidden sm:block flex-grow h-px bg-stroke/30 border-t border-dashed border-stroke/50" />
                
                <div className="flex items-center gap-2 text-sm text-muted shrink-0">
                  <span>{entry.readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-stroke" />
                  <span>{entry.date}</span>
                </div>
                
                <div className="w-10 h-10 rounded-full border border-stroke shrink-0 flex items-center justify-center transition-colors duration-300 group-hover:bg-text-primary group-hover:text-bg">
                  <span className="text-lg">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
