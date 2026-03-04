import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data';

export default function WorkDetails() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <h1 className="text-4xl font-display italic mb-4">Proje Bulunamadı</h1>
          <Link to="/work" className="text-muted hover:text-text-primary underline">Projelere Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen bg-bg"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-16">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-text-primary mb-12 transition-colors">
            <span>←</span> Tüm Projeler
          </Link>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8">
            {project.title.split(' ')[0]} <span className="font-display italic">{project.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-stroke">
            <div>
              <div className="text-xs text-muted uppercase tracking-[0.2em] mb-2">Müşteri</div>
              <div className="font-medium">{project.client}</div>
            </div>
            <div>
              <div className="text-xs text-muted uppercase tracking-[0.2em] mb-2">Kategori</div>
              <div className="font-medium">{project.category}</div>
            </div>
            <div>
              <div className="text-xs text-muted uppercase tracking-[0.2em] mb-2">Rol</div>
              <div className="font-medium">{project.role}</div>
            </div>
            <div>
              <div className="text-xs text-muted uppercase tracking-[0.2em] mb-2">Yıl</div>
              <div className="font-medium">{project.year}</div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video rounded-3xl overflow-hidden mb-20 border border-stroke"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <p className="text-xl md:text-3xl leading-relaxed text-text-primary/90 font-light">
            {project.description}
          </p>
        </div>

        {/* Gallery */}
        <div className="flex flex-col gap-8 md:gap-12">
          {project.gallery.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full rounded-3xl overflow-hidden border border-stroke bg-surface"
            >
              <img src={img} alt={`${project.title} gallery ${i + 1}`} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
