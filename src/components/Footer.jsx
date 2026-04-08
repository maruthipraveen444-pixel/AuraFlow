import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Share2, Globe, Mail, Droplet } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-white pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8 col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Droplet className="w-8 h-8 text-luxury-gold" />
              <span className="text-2xl font-outfit font-bold tracking-tighter uppercase">
                Aura<span className="text-luxury-gold">Flow</span>
              </span>
            </div>
            <p className="text-black/50 text-sm leading-relaxed max-w-xs">
              Redefining the architecture of water. We create sensory experiences that elevate the ritual of living.
            </p>
            <div className="flex gap-4">
              {[MessageSquare, Share2, Globe, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8">Collections</h5>
            <ul className="space-y-4 text-sm text-black/40">
              <li><a href="#" className="hover:text-black transition-colors">The Aurora Series</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Onyx Kitchen</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Rainfall Systems</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Vessel Artistry</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8">Showroom</h5>
            <ul className="space-y-4 text-sm text-black/40">
              <li><a href="#" className="hover:text-black transition-colors">London Flagship</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Milan Studio</a></li>
              <li><a href="#" className="hover:text-black transition-colors">NYC Gallery</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Find a Boutique</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-8">Inquiries</h5>
            <div className="space-y-4">
              <p className="text-sm text-black/40">Stay updated with our latest architectural releases.</p>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-black/10 py-3 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-wider text-luxury-gold">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-medium text-black/30">
          <span>© 2026 AuraFlow Sanitaryware. All Rights Reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Sustainability Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
