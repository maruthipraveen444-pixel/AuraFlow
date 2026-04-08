import React from 'react';
import { motion } from 'framer-motion';
import bathtubImg from '../assets/bathtub.png';
import showerImg from '../assets/shower.png';
import sinkImg from '../assets/sink.png';
import faucetImg from '../assets/faucet.png';

const collections = [
  { name: "Serenity Bathtub", category: "Bath", img: bathtubImg, price: "$4,200", finish: "Matte White" },
  { name: "Zenith Shower", category: "Shower", img: showerImg, price: "$1,850", finish: "Brushed Gold" },
  { name: "Obsidian Sink", category: "Basin", img: sinkImg, price: "$2,100", finish: "Slate Stone" },
  { name: "Metric Faucet", category: "Kitchen", img: faucetImg, price: "$980", finish: "Midnight Black" }
];

const ProductCards = () => {
  return (
    <section id="collections" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tight mb-8">Curated Collections</h2>
            <p className="text-lg text-black/50">Each piece is a dialogue between form and function, crafted to transform daily rituals into moments of sublime elevation.</p>
          </div>
          <button className="text-sm uppercase tracking-widest border-b border-black pb-2 hover:text-luxury-gold hover:border-luxury-gold transition-colors">
            View All Series
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-luxury-white mb-6 rounded-2xl">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center text-xs uppercase tracking-[0.2em]">
                      <span>In Stock</span>
                      <span>Ships in 2 Days</span>
                    </div>
                    <button className="w-full py-4 bg-white text-black text-xs uppercase font-bold tracking-widest hover:bg-luxury-gold hover:text-white transition-colors">
                      Quick Shop
                    </button>
                  </motion.div>
                </div>

                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-outfit font-medium">{item.name}</h4>
                  <span className="font-medium">{item.price}</span>
                </div>
                <p className="text-sm text-black/40 uppercase tracking-widest">{item.finish}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
