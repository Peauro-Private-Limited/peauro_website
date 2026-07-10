import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, Send, Upload, TrendingUp, Rocket, HeartPulse, Handshake, Trophy } from 'lucide-react';

const LIFE_FEATURES = [
  {
    icon: TrendingUp,
    title: "Wealth Growth",
    description: "Build your future with competitive equity and performance milestones."
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description: "Fast-track your potential in an environment that scales with your ambition."
  },
  {
    icon: HeartPulse,
    title: "Health & Fitness",
    description: "Comprehensive wellness plans because your vitality is our priority."
  },
  {
    icon: Handshake,
    title: "Respect & Culture",
    description: "A sanctuary of mutual respect where every voice is heard and valued."
  },
  {
    icon: Trophy,
    title: "Recognition",
    description: "Celebrate every win with rewards that mirror your exceptional impact."
  }
];

const JOBS = [
  {
    id: '1',
    title: 'Operations Manager',
    location: 'Bhopal, India',
    type: 'Full-time',
    description: 'Lead our distribution network and ensure quality standards across all touchpoints.'
  },
  {
    id: '2',
    title: 'Sales Executive',
    location: 'Indore, India',
    type: 'Full-time',
    description: 'Drive growth and build relationships with households and corporate clients.'
  },
  {
    id: '4',
    title: 'Delivery Partner',
    location: 'Patna, India',
    type: 'Flexible',
    description: 'Join our frontline delivery fleet ensuring pure hydration reaches every doorstep efficiently.'
  },
  {
    id: '5',
    title: 'Back Office Co-ordinator',
    location: 'Patna, India',
    type: 'Full-time',
    description: 'Manage administrative tasks and coordinate logistics from our regional hub.'
  },
  {
    id: '3',
    title: 'Content Creator',
    location: 'Remote',
    type: 'Contract',
    description: 'Craft visual stories and digital content that resonates with our brand values.'
  }
];

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application! Our team will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', position: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="pt-32">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#080E1B] py-24 border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Join the Movement
              </div>
              <h1 className="text-4xl md:text-6xl font-sans font-black text-white mb-8 uppercase tracking-tighter italic">
                Careers at <span className="text-emerald-500">Peauro.</span>
              </h1>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10 max-w-2xl">
                We're looking for passionate individuals who believe that access to pure water is a fundamental right. Join us in our mission to redefine hydration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grow With Us / Life @ Peauro Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <div className="text-[10px] uppercase tracking-[0.4em] font-black text-emerald-600 mb-4">Life @ Peauro</div>
              <h2 className="text-4xl font-sans font-black text-slate-900 uppercase tracking-tighter italic">Grow With Us</h2>
            </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LIFE_FEATURES.map((feature, idx) => {
                const getVariant = () => {
                  switch(feature.title) {
                    case "Wealth Growth": return { hovered: { y: [0, -10, 0], scale: [1, 1.2, 1], transition: { repeat: Infinity, duration: 1.5 } } };
                    case "Career Growth": return { hovered: { y: [0, -15, 0], x: [0, 5, 0], transition: { repeat: Infinity, duration: 0.8, ease: "easeInOut" } } };
                    case "Health & Fitness": return { hovered: { scale: [1, 1.3, 1.1, 1.4, 1], transition: { repeat: Infinity, duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] } } };
                    case "Respect & Culture": return { hovered: { rotate: [-15, 15], transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 0.4 } } };
                    case "Recognition": return { hovered: { rotateY: 360, scale: [1, 1.1, 1], transition: { rotateY: { repeat: Infinity, duration: 2, ease: "linear" }, scale: { repeat: Infinity, duration: 2 } } } };
                    default: return {};
                  }
                };

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover="hovered"
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-emerald-500 transition-all duration-500 group shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500 overflow-hidden">
                      <motion.div variants={getVariant()}>
                        <feature.icon size={28} strokeWidth={1.5} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight italic group-hover:text-emerald-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-widest font-medium">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Opportunities section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-sans font-bold text-slate-900 mb-16 uppercase tracking-tight">Open Opportunities</h2>
            <div className="grid gap-8">
              {JOBS.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-slate-100 p-8 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                      <div className="flex gap-6 text-xs text-slate-400 font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-2"><MapPin size={14} /> {job.location}</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> {job.type}</span>
                      </div>
                    </div>
                    <p className="text-slate-500 font-light text-sm max-w-md">{job.description}</p>
                    <button className="px-8 py-3 bg-slate-900 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl font-sans font-black mb-8 uppercase tracking-tighter">Can't find a role?<br/><span className="text-emerald-400">Tell us about yourself.</span></h2>
                <p className="text-slate-400 font-light leading-relaxed mb-8 uppercase tracking-widest text-sm">
                  We are always on the lookout for exceptional talent. If you don't see a position that fits your skills, reach out anyway.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-emerald-400">
                    <div className="w-10 h-10 border border-emerald-500/30 flex items-center justify-center rounded-full">
                      <Send size={16} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">talent@peauro.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3rem]">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-slate-800 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-slate-800 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-transparent border-b border-slate-800 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="+91 000 000 0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400">Desired Position</label>
                      <select 
                        required
                        value={formData.position}
                        onChange={(e) => setFormData({...formData, position: e.target.value})}
                        className="w-full bg-transparent border-b border-slate-800 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-slate-900 text-slate-400">Select Role</option>
                        <option value="operations" className="bg-slate-900 text-white">Operations Manager</option>
                        <option value="sales" className="bg-slate-900 text-white">Sales Executive</option>
                        <option value="delivery" className="bg-slate-900 text-white">Delivery Partner (Patna)</option>
                        <option value="coordinator" className="bg-slate-900 text-white">Back Office Co-ordinator (Patna)</option>
                        <option value="content" className="bg-slate-900 text-white">Content Creator</option>
                        <option value="other" className="bg-slate-900 text-white">Other (Specify in message)</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400">Message / Cover Letter</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full bg-transparent border-b border-slate-800 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Why do you want to join Peauro?"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400 flex items-center gap-2 cursor-pointer hover:text-emerald-400 transition-colors">
                      <Upload size={14} /> Upload Resume (PDF)
                      <input type="file" className="hidden" accept=".pdf" />
                    </label>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-emerald-700 transition-all rounded-lg"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
