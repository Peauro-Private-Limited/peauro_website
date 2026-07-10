import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';

interface ProductsInfoProps {
  onProductClick: (product: any) => void;
}

export default function ProductsInfo({ onProductClick }: ProductsInfoProps) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="pt-20 pb-20">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#080E1B] py-24 relative overflow-hidden border-b border-slate-900 mb-16 md:mb-24">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Pristine Hydration
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter italic leading-[0.85] mb-8">
              Our <span className="text-emerald-500">Products.</span>
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-3xl mx-auto lg:text-base font-medium">
              Peauro isn't just water—it's a premium portfolio of curated packaged drinking water experiences tailored to your unique hydration needs and preferences. Each Peauro product is meticulously crafted with purity, taste, and wellness in mind. Our packaged drinking water delivers a refreshing escape from the ordinary.
            </p>
          </div>
        </div>

        {/* Product Items */}
        <div id="products-list" className="max-w-6xl mx-auto px-6 space-y-24 md:space-y-40">
          {PRODUCTS.map((product, index) => {
            const isReversed = index % 2 !== 0;
            
            return (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col-reverse ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-32`}
              >
                {/* Text Content */}
                <div className="w-full lg:flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-6">
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-4 bg-black skew-x-[-20deg]" />
                      ))}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl lg:text-5xl font-black text-[#135A6E] mb-6 tracking-tight uppercase">
                    {product.name}
                  </h2>
                  
                  <p className="text-slate-600 text-[13px] md:text-sm leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                    {product.description} Choosing the right water brand makes all the difference. Our {product.category.toLowerCase()} is sourced with care and treated to ensure absolute purity and taste in every sip. With multiple options available, it's important to choose a brand that's known for quality and consistent taste.
                  </p>
                  

                </div>

                {/* Image Container */}
                <div className="w-full lg:flex-1 flex items-center justify-center group relative py-12 lg:py-0">
                  <div className="absolute inset-0 bg-slate-50/50 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
                  <motion.img 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    src={product.image} 
                    alt={product.name}
                    className="w-full max-w-[280px] md:max-w-[340px] h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
