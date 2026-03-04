import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SelectedWorks from '../components/SelectedWorks';
import Journal from '../components/Journal';
import Explorations from '../components/Explorations';
import Stats from '../components/Stats';
import ClientMarquee from '../components/ClientMarquee';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ClientMarquee />
      <SelectedWorks />
      <Testimonials />
      <Journal />
      <Explorations />
      <Stats />
    </motion.div>
  );
}
