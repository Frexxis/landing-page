import { motion } from 'framer-motion';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Müşteri Yorumları</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Bizimle <span className="font-display italic">Çalışanlar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-surface border border-stroke flex flex-col justify-between"
            >
              <div className="text-4xl text-[#89AACC] font-display italic mb-6">"</div>
              <p className="text-lg text-text-primary/90 mb-8 font-light leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-muted">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
