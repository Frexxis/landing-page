import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data';

export default function Works() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen bg-bg"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Tüm Projeler</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
            Yaratıcı <span className="font-display italic">Arşivimiz</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Farklı sektörlerden markalar için geliştirdiğimiz dijital deneyimler, görsel kimlikler ve yaratıcı çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <Link to={`/work/${project.slug}`} key={project.slug}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 border border-stroke bg-surface">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 halftone-overlay opacity-20 mix-blend-multiply" />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                </div>
                
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display italic mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#89AACC] group-hover:to-[#4E85BF] transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:bg-text-primary group-hover:text-bg transition-colors duration-300">
                    <span>↗</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
