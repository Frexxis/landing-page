import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Tasarım", "Üretim", "İlham"];

  useEffect(() => {
    let startTime: number;
    const duration = 2700;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Falorin
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <div className="h-20 overflow-hidden relative w-full flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={wordIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 absolute"
            >
              {words[wordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col items-end gap-4">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
          {String(count).padStart(3, "0")}
        </div>
        <div className="w-full h-[3px] bg-stroke/50 relative overflow-hidden rounded-full">
          <div
            className="absolute inset-y-0 left-0 accent-gradient origin-left"
            style={{
              width: '100%',
              transform: `scaleX(${count / 100})`,
              boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
