import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data';

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Seçili Projeler</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
              Öne Çıkan <span className="font-display italic">Projeler</span>
            </h2>
            <p className="text-muted max-w-md">
              Konseptten lansmana kadar üzerinde çalıştığım projelerden bir seçki.
            </p>
          </div>
          <Link to="/work" className="hidden md:inline-flex items-center gap-2 rounded-full px-6 py-3 bg-surface border border-stroke hover:border-transparent accent-gradient-border text-sm transition-colors">
            Tüm Projeler <span>→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.slice(0, 4).map((project, i) => {
            const spanClass = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7'][i];
            const aspectClass = 'aspect-[4/3] md:aspect-auto md:h-full';

            return (
              <Link to={`/work/${project.slug}`} key={project.slug} className={`${spanClass} block`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl ${aspectClass} min-h-[300px] md:min-h-[400px] cursor-pointer`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 halftone-overlay opacity-20 mix-blend-multiply" />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 flex items-center justify-center">
                    <div className="px-6 py-3 rounded-full bg-white text-black accent-gradient-border flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-sm font-medium">İncele —</span>
                      <span className="font-display italic text-lg">{project.title}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
