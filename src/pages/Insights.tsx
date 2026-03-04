import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { insights } from '../data';

export default function Insights() {
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
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">İçgörüler & Blog</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
            Dijital <span className="font-display italic">Düşünceler</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Tasarım trendleri, yazılım mimarileri ve dijital stratejiler üzerine derinlemesine makaleler ve analizler.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {insights.map((post, i) => (
            <Link to={`/insights/${post.slug}`} key={post.slug}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 border border-stroke bg-surface">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-bg/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-stroke z-10">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-stroke" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-[#89AACC] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-muted line-clamp-3 text-sm">
                    {post.content}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
