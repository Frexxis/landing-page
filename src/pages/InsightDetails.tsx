import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { insights } from '../data';
import { ArrowLeft } from 'lucide-react';

export default function InsightDetails() {
  const { slug } = useParams();
  const post = insights.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <h1 className="text-4xl font-display italic mb-4">Makale Bulunamadı</h1>
          <Link to="/insights" className="text-muted hover:text-text-primary underline">İçgörülere Dön</Link>
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
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="mb-12">
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-muted hover:text-text-primary mb-12 transition-colors">
            <ArrowLeft size={16} /> Tüm İçgörüler
          </Link>
          
          <div className="flex items-center gap-3 text-sm text-muted mb-6">
            <span className="px-3 py-1 rounded-full border border-stroke bg-surface">{post.category}</span>
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-stroke" />
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Main Image */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video rounded-3xl overflow-hidden mb-16 border border-stroke"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-text-primary/90 font-light leading-relaxed mb-8">
            {post.content}
          </p>
          <p className="text-muted leading-relaxed mb-6">
            Bu makale şablon amaçlıdır. Gerçek bir senaryoda burada detaylı başlıklar, paragraflar, kod blokları veya alıntılar yer alacaktır. Tasarımın estetiğini korumak için tipografi özenle seçilmiş ve satır aralıkları okunabilirliği artıracak şekilde ayarlanmıştır.
          </p>
          <h2 className="text-2xl font-medium mt-12 mb-6 text-text-primary">Geleceğe Bakış</h2>
          <p className="text-muted leading-relaxed mb-6">
            Teknolojinin hızla geliştiği bu dönemde, uyum sağlamak ve yenilikleri takip etmek her zamankinden daha önemli. Falorin olarak, bu değişim rüzgarını arkamıza alarak müşterilerimize en güncel ve etkili çözümleri sunmaya devam ediyoruz.
          </p>
        </div>

      </div>
    </motion.div>
  );
}
