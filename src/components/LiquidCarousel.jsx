import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import bathtubImg from '../assets/bathtub.png';
import showerImg from '../assets/shower.png';
import sinkImg from '../assets/sink.png';
import faucetImg from '../assets/faucet.png';

const products = [
  {
    id: 1,
    title: "Freestanding Bathtub",
    name: "AURORA",
    description: "A sculptural masterpiece of pure porcelain, designed to cradle the body in weightless tranquility.",
    image: bathtubImg,
    color: "#E5E7EB", // Soft White/Gray
    accent: "#000000"
  },
  {
    id: 2,
    title: "Rainfall Shower",
    name: "CASCADE",
    description: "Engineered precision meets organic flow. A sensory experience of gentle tropical downpour.",
    image: showerImg,
    color: "#D4AF37", // Gold
    accent: "#FFFFFF"
  },
  {
    id: 3,
    title: "Vessel Sink",
    name: "BASIN",
    description: "Hand-carved from deep volcanic slate. A raw intersection of stone and modern geometry.",
    image: sinkImg,
    color: "#2C3E50", // Slate
    accent: "#FFFFFF"
  },
  {
    id: 4,
    title: "Designer Faucet",
    name: "FLOW",
    description: "The pinnacle of minimalist control. Matte black finish with silent aerodynamic water delivery.",
    image: faucetImg,
    color: "#1A1A1A", // Black
    accent: "#D4AF37"
  }
];

const LiquidCarousel = () => {
  const [index, setIndex] = useState(0);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  
  // SVG paths for morphing transition
  const paths = {
    initial: "M0,0 L100,0 L100,100 L0,100 Z",
    ripple: "M0,0 Q50,0 100,0 L100,100 Q50,100 0,100 Z",
    wash: "M0,0 C20,40 80,40 100,0 L100,100 C80,60 20,60 0,100 Z"
  };

  const handleNext = () => {
    const nextIndex = (index + 1) % products.length;
    animateTransition(nextIndex);
  };

  const handlePrev = () => {
    const nextIndex = (index - 1 + products.length) % products.length;
    animateTransition(nextIndex);
  };

  const animateTransition = (nextIndex) => {
    const tl = gsap.timeline({
      onComplete: () => setIndex(nextIndex)
    });

    tl.to(pathRef.current, {
      duration: 0.6,
      attr: { d: "M0,0 C50,20 100,20 100,0 L100,100 C100,80 50,80 0,100 Z" },
      ease: "power2.in"
    })
    .to(pathRef.current, {
      duration: 0.6,
      attr: { d: paths.initial },
      ease: "power3.out"
    });
  };

  return (
    <section className="relative h-auto min-h-screen w-full flex items-center overflow-hidden bg-luxury-cream py-16 md:py-24">
      {/* Background SVG Morph */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg 
          ref={svgRef}
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full opacity-10"
        >
          <path 
            ref={pathRef}
            d={paths.initial} 
            fill={products[index].color} 
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-6 md:space-y-8 order-2 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={products[index].id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <h3 className="text-luxury-gold tracking-[0.4em] uppercase text-xs mb-2">{products[index].title}</h3>
              <h2 className="text-5xl sm:text-7xl md:text-9xl font-outfit font-bold tracking-tighter mb-4 md:mb-6">{products[index].name}</h2>
              <p className="text-lg md:text-xl text-black/60 max-w-md leading-relaxed mb-6 md:mb-10">
                {products[index].description}
              </p>
              
              <div className="flex items-center gap-4 md:gap-8">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group text-sm md:text-base"
                >
                  <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group text-sm md:text-base"
                >
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <div className="h-[1px] flex-grow bg-black/10 hidden md:block" />
                <span className="text-xl md:text-2xl font-light italic">
                  0{index + 1} / 0{products.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative h-[35vh] md:h-[80vh] w-full flex items-center justify-center order-1 md:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={products[index].id}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img 
                src={products[index].image} 
                alt={products[index].name} 
                className="w-full h-full object-contain drop-shadow-2xl max-h-[30vh] md:max-h-full"
              />
              {/* Product floating decoration */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 md:-top-10 md:-right-10 w-20 h-20 md:w-32 md:h-32 rounded-full border border-luxury-gold/20 flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-luxury-gold text-center px-2 md:px-4">Limited Edition</span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LiquidCarousel;
