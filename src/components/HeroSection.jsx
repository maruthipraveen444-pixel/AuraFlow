import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../assets/bathtub.png';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);

  return (
    <section ref={containerRef} className="relative h-[120vh] w-full overflow-hidden bg-luxury-white">
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={heroImg} 
          alt="Luxury Bathtub" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          style={{ y: textY, opacity }}
          className="max-w-4xl"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-luxury-gold uppercase tracking-[0.5em] font-medium mb-6"
          >
            The Essence of Purity
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-6xl md:text-9xl font-outfit font-light tracking-tighter leading-none mb-10 text-balance"
          >
            Architectural <br /> 
            <span className="italic font-normal">Sanctuary</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center gap-4"
          >
            <button className="px-10 py-5 bg-black text-white text-sm uppercase tracking-widest hover:bg-luxury-gold transition-all duration-500 rounded-full group">
              Explore Collection
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
            <div className="mt-20 flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">Scroll to Explore</span>
              <div className="w-[1px] h-12 bg-black/20 relative overflow-hidden">
                <motion.div 
                  initial={{ top: "-100%" }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-1/2 bg-luxury-gold"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-luxury-white to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
