import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, Users, Calendar } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aman Sharma",
    role: "Marathon Organizer",
    image: "https://i.pravatar.cc/150?u=aman",
    content: "We partnered with Peauro for our community marathon. The hydration stations were professional, and the water quality was exceptional.",
    rating: 5
  },
  {
    id: 2,
    name: "Sneha Kapur",
    role: "Health Enthusiast",
    image: "https://i.pravatar.cc/150?u=sneha",
    content: "Finding pure water was a challenge until I found Peauro. Their subscription service is seamless and the glass bottles look beautiful.",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Owner, Dynamic Gym",
    image: "https://i.pravatar.cc/150?u=vikram",
    content: "Our members appreciate the mineral-rich taste. It feels premium and the sustainability mission resonates with our brand.",
    rating: 5
  },
  {
    id: 4,
    name: "Dr. Rajesh Mehta",
    role: "City Hospital Admin",
    image: "https://i.pravatar.cc/150?u=rajesh",
    content: "In a medical facility, purity is non-negotiable. Peauro has been our trusted partner for consistent, high-standard hydration.",
    rating: 5
  },
  {
    id: 5,
    name: "Rahul Khurana",
    role: "Facility Manager, Tech Corp",
    image: "https://i.pravatar.cc/150?u=rahul",
    content: "Our corporate offices have switched entirely to Peauro. The employee feedback has been fantastic regarding the taste and service.",
    rating: 5
  },
  {
    id: 6,
    name: "Sanjay Tiwari",
    role: "Political Event Coordinator",
    image: "https://i.pravatar.cc/150?u=sanjay",
    content: "Managing large scale political rallies requires reliable logistics. Peauro handles our massive hydration needs with zero delays.",
    rating: 5
  }
];

const stats = [
  { label: "Vendors", value: "500+", icon: Users },
  { label: "Online Booking", value: "25%", icon: Calendar },
  { label: "Purity Checks", value: "100%", icon: CheckCircle2 }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-6 group hover:bg-slate-900 transition-colors duration-500 shadow-xl shadow-slate-200/40"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-emerald-600 group-hover:text-emerald-400 group-hover:bg-slate-800 transition-colors shadow-sm">
                <stat.icon size={32} />
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 group-hover:text-white uppercase italic tracking-tighter transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-slate-400 group-hover:text-slate-500 uppercase tracking-[0.2em] transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter italic leading-[0.9] mb-8">
            Trusted by <span className="text-emerald-600">Pure</span> Seekers
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium mb-8">
            We started with a simple promise: purity without compromise. Today, we're proud to serve a growing community of health-conscious individuals and local partners.
          </p>
        </div>

        {/* Sliding Testimonials Container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ 
                x: [0, -1800] 
              }}
              transition={{ 
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-6 whitespace-nowrap py-10 px-4"
              style={{ width: "fit-content" }}
            >
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={`${testimonial.id}-${idx}`}
                  className="w-[350px] p-8 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col justify-between group hover:border-emerald-500 transition-all shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 shrink-0 whitespace-normal"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="bg-emerald-50 text-emerald-600 p-3 rounded-2xl">
                        <Quote size={20} className="fill-emerald-600" />
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed uppercase tracking-widest font-light mb-8 italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-slate-50 group-hover:border-emerald-500 transition-colors">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">{testimonial.name}</h4>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient Overlays for the slider */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
