import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wind, Zap, Recycle } from 'lucide-react';

const values = [
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Aerodynamic Flow",
    desc: "Engineered to minimize noise and splash, delivering water with surgical precision."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Intelligent Savings",
    desc: "Sensors and smart aerators reduce consumption by up to 40% without losing pressure."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Forever Finish",
    desc: "PVD coating ensures your fixtures remain scratch-less and vibrant for a lifetime."
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Circular Design",
    desc: "100% recyclable ceramic and lead-free brass components for a greener future."
  }
];

const WellnessSection = () => {
  return (
    <section id="technology" className="py-16 md:py-32 bg-luxury-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-luxury-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Innovation Hub</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-outfit font-light tracking-tight leading-[1.1] mb-6 md:mb-10">
                Crafting Wellness <br /> 
                <span className="italic">Through Engineering.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed">
                We don't just create fixtures; we design environments where water, light, and stone coexist in perfect harmony. Every curve is calculated for comfort.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-colors duration-500">
                    {v.icon}
                  </div>
                  <h4 className="text-xl font-medium">{v.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1620626011761-9963d7b69763?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury material detail" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            
            {/* Overlay badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 w-28 h-28 sm:w-40 sm:h-40 bg-luxury-gold flex items-center justify-center rounded-full text-black p-2 sm:p-4 text-center z-20"
            >
              <div className="text-[7px] sm:text-[10px] font-bold uppercase tracking-widest leading-normal">
                Sustainable Luxury Certified 2026
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;
