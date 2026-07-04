import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        const step = prev < 30 ? 1.2 : prev < 75 ? 2.2 : 0.9;
        return Math.min(prev + step, 100);
      });
    }, 28);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (done && onComplete) setTimeout(onComplete, 800);
  }, [done, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ backgroundColor: '#070503' }}
        >
          <div className="flex flex-col items-center gap-6 px-6 text-center">

            {/* Logo */}
            <motion.img
              src={logo}
              alt="Rott City Kennels"
              initial={{ opacity: 0, scale: 0.85, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: 'clamp(140px, 22vw, 260px)', mixBlendMode: 'lighten' }}
            />

            {/* Business name + divider */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-center gap-2"
            >
              <span
                className="gold-gradient font-heading font-bold tracking-[0.25em] uppercase"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}
              >
                Rott City Rottweilers
              </span>

              <div className="flex items-center gap-3">
                <span className="block h-px w-12 gold-bar opacity-60" />
                <span className="block w-1 h-1 rounded-full" style={{ backgroundColor: '#D5A32F' }} />
                <span className="block h-px w-12 gold-bar opacity-60" />
              </div>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col items-center gap-3 w-full"
              style={{ maxWidth: 'clamp(220px, 35vw, 380px)' }}
            >
              <span
                className="font-body font-light tracking-[0.35em] uppercase"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 0.8rem)', color: '#D5A32F' }}
              >
                Loading...
              </span>

              {/* Track */}
              <div
                className="relative w-full rounded-full overflow-hidden"
                style={{ height: '3px', backgroundColor: 'rgba(150,108,27,0.3)' }}
              >
                {/* Fill */}
                <motion.div
                  className="absolute left-0 top-0 h-full gold-bar rounded-full"
                  style={{ width: `${progress}%` }}
                />
                {/* Shimmer */}
                <motion.div
                  className="absolute top-0 h-full w-8 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(240,225,155,0.7), transparent)',
                    left: `${progress - 8}%`,
                  }}
                />
              </div>

              <span
                className="font-body font-light tabular-nums"
                style={{ fontSize: 'clamp(0.6rem, 1vw, 0.72rem)', color: 'rgba(213,177,86,0.6)' }}
              >
                {Math.round(progress)}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
