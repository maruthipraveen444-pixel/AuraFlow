import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, Menu, X, Droplet } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 glass shadow-sm' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Droplet className="w-8 h-8 text-luxury-gold" />
          <span className="text-2xl font-outfit font-bold tracking-tighter uppercase">
            Aura<span className="text-luxury-gold">Flow</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-12 font-outfit text-sm font-medium tracking-widest uppercase">
          {['Collections', 'Showroom', 'Technology', 'About'].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-luxury-gold transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
          </motion.button>
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? '100vh' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden absolute top-full left-0 w-full bg-white flex flex-col items-center justify-center gap-8 overflow-hidden"
      >
        {['Collections', 'Showroom', 'Technology', 'About'].map((item) => (
          <a key={item} href="#" className="text-2xl font-bold font-outfit uppercase tracking-widest" onClick={() => setIsOpen(false)}>
            {item}
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
