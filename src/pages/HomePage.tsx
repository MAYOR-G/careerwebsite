import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import { XCircle, ArrowRight, ChartBar, Users, Camera, Star, MonitorPlay, Crosshair, Target, Check, InstagramLogo, TiktokLogo, YoutubeLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const reviews = [
  { text: "ContentFlow doubled our engagement in the first 30 days. Unbelievable results.", name: "Sarah Jenkins", role: "CMO, TechNova", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "Finally, an agency that understands how to make B2B content go viral.", name: "Mark Roberts", role: "Founder, GrowthEngine", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "Their video editing and strategy is unmatched. We are getting daily inbound leads.", name: "Jessica Alba", role: "CEO, GlowBeauty", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "Best ROI we've seen from any marketing channel this year. Highly recommended.", name: "David Chen", role: "Director, Apex Solutions", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "The team is professional, fast, and the quality is absolutely top-tier.", name: "Amanda Smith", role: "VP Marketing, Stellar", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150" },
];

export default function HomePage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const bgImages = ['/hero-bg.png', '/hero-bg-2.png', '/hero-bg-3.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="w-full bg-white selection:bg-[#00C2FF] selection:text-white">
      {/* 1. HERO SECTION */}
      <section 
        className="relative pt-32 pb-32 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]"
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={bgIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              src={bgImages[bgIndex]} 
              alt="Content creation" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
        {/* Clear Overlay for visibility, no blur */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 w-full flex justify-center">
          <motion.div 
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-4xl flex flex-col items-center text-center"
          >
            <motion.h1 variants={fadeUpVariants} className="text-5xl md:text-7xl lg:text-[88px] font-extrabold tracking-[-0.04em] text-[#1A1A1A] leading-[1.05] mb-8">
              Turn Social Media Content Into <span className="relative inline-block text-[#00C2FF]">Paying Customers<svg className="absolute w-full h-3 -bottom-1 left-0 text-[#00C2FF]/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/></svg></span>
            </motion.h1>
            
            <motion.p variants={fadeUpVariants} className="text-xl md:text-2xl text-[#1A1A1A] font-semibold mb-12 max-w-2xl leading-relaxed">
              We manage TikTok, Instagram, Facebook, YouTube, X, and Pinterest with high-performing content designed for growth and conversions.
            </motion.p>
            
            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-md mx-auto sm:max-w-none">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full h-14">
                  Get Your Free Growth Plan
                </Button>
              </Link>
              <Link to="/gallery" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full h-14 group border-gray-300 bg-white/50 backdrop-blur-sm hover:bg-white">
                  View Our Work
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={fadeUpVariants} className="flex flex-col items-center gap-4">
              <p className="text-sm font-bold text-[#1A1A1A] tracking-widest uppercase">TRUSTED BY 50+ FAST-GROWING BRANDS</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="text-xl font-black tracking-tighter text-gray-700">ACME.</div>
                <div className="text-xl font-bold tracking-widest text-gray-700">GLOBEX</div>
                <div className="text-xl font-serif italic text-gray-700">Soylent</div>
                <div className="text-xl font-bold tracking-tight text-gray-700">Hooli</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. BRAND LOGO STRIP */}
      <section className="py-12 border-y border-gray-100 bg-white overflow-hidden relative w-full">
        <div className="flex w-max animate-marquee-left opacity-40 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-around w-1/2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <span key={i} className="mx-12 md:mx-16 text-2xl font-black text-[#1A1A1A] uppercase tracking-tighter">
                PARTNER{i}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-around w-1/2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <span key={`clone-${i}`} className="mx-12 md:mx-16 text-2xl font-black text-[#1A1A1A] uppercase tracking-tighter">
                PARTNER{i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-[#00C2FF] tracking-[0.1em] uppercase mb-4">The Problem</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">Most businesses struggle with:</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Posting inconsistent content", desc: "Sporadic uploads kill algorithmic momentum and trust.", icon: <XCircle size={32} weight="duotone" className="text-red-400" /> },
              { title: "Low engagement", desc: "High production value means nothing without psychological hooks.", icon: <MonitorPlay size={32} weight="duotone" className="text-red-400" /> },
              { title: "No leads or sales from social media", desc: "Views aren't translating into measurable revenue.", icon: <ChartBar size={32} weight="duotone" className="text-red-400" /> },
              { title: "No strategy behind content", desc: "Random trends don't build authority or drive sales.", icon: <Crosshair size={32} weight="duotone" className="text-red-400" /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-[24px] p-8 border-t-2 border-[#FEE2E2] shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col items-start"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed mt-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section className="py-32 bg-[#F8F9FC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
            
            <div className="w-full lg:w-[40%] flex flex-col justify-center">
              <h2 className="text-sm font-bold text-[#00C2FF] tracking-[0.1em] uppercase mb-4">The Solution</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6 lg:leading-tight">We fix this by building a full content growth system:</h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">Our strategies turn your social profiles into automated lead generation engines, combining organic reach with conversion psychology.</p>
              
              {/* Massive Metric */}
              <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] mt-auto mb-8 lg:mb-0">
                <div className="text-6xl font-black text-[#00C2FF] tracking-tight mb-2">+300%</div>
                <div className="text-gray-500 font-medium">Average increase in organic reach</div>
              </div>
            </div>

            <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Viral short-form videos', icon: <MonitorPlay size={24} weight="fill" /> },
                { title: 'Strategic content planning', icon: <Target size={24} weight="fill" /> },
                { title: 'Multi-platform posting', icon: <Users size={24} weight="fill" /> },
                { title: 'Engagement optimization', icon: <Star size={24} weight="fill" /> },
                { title: 'Conversion-focused content funnels', icon: <ChartBar size={24} weight="fill" /> }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-[24px] p-8 border border-[rgba(0,0,0,0.06)] hover:border-[#00C2FF] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,194,255,0.08)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-3">{feature.title}</h4>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section id="process" className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">How It Works</h2>
            <p className="text-lg text-gray-500">We don't just guess. We follow a strict operational framework to ensure your brand grows predictably.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { num: '01', title: 'We analyse your business + competitors' },
              { num: '02', title: 'We create a content growth strategy' },
              { num: '03', title: 'We produce and post content daily' },
              { num: '04', title: 'We optimise for engagement + conversions' },
              { num: '05', title: 'You get leads and customers consistently' }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] overflow-hidden group hover:border-[#00C2FF]/30 transition-colors"
              >
                <div className="absolute -top-4 -right-4 text-[120px] font-black text-gray-100 opacity-50 group-hover:text-[#00C2FF]/5 transition-colors duration-500 select-none pointer-events-none">
                  {step.num}
                </div>
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXPERTISE SECTION (Dark) */}
      <section className="py-32 bg-[#4C1D95] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C2FF] rounded-full blur-[200px] opacity-[0.08] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Services</h2>
              <p className="text-lg text-gray-400">Everything you need to dominate social media, all in one place.</p>
            </div>
            <Link to="/services" className="text-white font-medium flex items-center hover:text-[#00C2FF] transition-colors group">
              Explore All Services <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Content Schedule', desc: 'Daily posting schedules optimized for algorithmic reach and engagement peaks.', icon: <ChartBar size={32} /> },
              { title: 'Digital Marketing', desc: 'Comprehensive strategies bridging organic reach with targeted paid campaigns.', icon: <Target size={32} /> },
              { title: 'Video Editing', desc: 'High-retention, fast-paced edits designed specifically to go viral on short-form.', icon: <Camera size={32} /> }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-transparent border border-white/10 rounded-[24px] p-10 hover:border-white/40 hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="text-[#00C2FF] mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRICING SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">Pricing Packages</h2>
            <p className="text-lg text-gray-500 mb-10">Choose the growth tier that fits your brand's ambitions.</p>
            
            {/* Toggle */}
            <div className="inline-flex items-center p-1 bg-gray-100 rounded-full">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${!isAnnual ? 'bg-white shadow-sm text-[#1A1A1A]' : 'text-gray-500 hover:text-[#1A1A1A]'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${isAnnual ? 'bg-white shadow-sm text-[#1A1A1A]' : 'text-gray-500 hover:text-[#1A1A1A]'}`}
              >
                Quarterly <span className="ml-1 text-[#00C2FF] text-xs">Save 10%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
            {[
              { name: 'Starter Growth', price: 199, highlight: false, features: ['3 platforms', '8–12 posts/month', 'Caption + hashtag optimisation', 'Monthly content plan'] },
              { name: 'Growth Engine', price: 599, highlight: false, features: ['5 platforms', '20–25 posts/month', '8–12 short videos', 'Weekly content strategy', 'Profile optimisation'] },
              { name: 'Sales Accelerator', price: 1499, highlight: true, features: ['All 6 platforms', 'Daily posting', '30–45 content pieces/month', 'Viral content strategy', 'Funnel integration', 'Lead conversion scripts'] },
              { name: 'Elite Growth System', price: 3000, highlight: false, features: ['Full content + funnel system', 'Daily high-volume posting', 'Trend-based viral content', 'Dedicated strategist', 'Conversion optimisation', 'Priority support'] }
            ].map((pkg, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-[24px] p-10 bg-white border transition-all duration-300 ${
                  pkg.highlight 
                    ? 'border-[#00C2FF] shadow-[0_24px_48px_rgba(0,194,255,0.12)] lg:scale-105 z-10 relative' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00C2FF] text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${pkg.highlight ? 'text-[#00C2FF]' : 'text-gray-500'}`}>{pkg.name}</h3>
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-4xl font-bold text-[#1A1A1A]">£{isAnnual ? Math.floor(pkg.price * 0.9) : pkg.price}{pkg.name.includes('Elite') && '+'}</span>
                  <span className="text-gray-500 mb-1">/mo</span>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={16} weight="bold" className="text-[#00C2FF]" />
                      <span className="text-gray-600 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <Button variant={pkg.highlight ? 'primary' : 'outline'} className="w-full">Get Started</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-32 bg-[#F5F5F7] overflow-hidden relative">
        {/* Decorative Quote Mark */}
        <div className="absolute top-10 left-10 text-[300px] font-serif text-gray-200 opacity-50 leading-none select-none pointer-events-none">"</div>
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">Reviews</h2>
          <p className="text-lg text-gray-500">Hear from the brands we've scaled.</p>
        </div>
        
        <div className="relative w-full overflow-hidden group">
          <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused] py-8">
            <div className="flex w-1/2">
              {reviews.map((review, i) => (
                <div key={i} className="w-[400px] mx-3 bg-white p-10 rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 shrink-0 flex flex-col">
                  <div className="flex text-[#F59E0B] mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} weight="fill" size={16} />)}
                  </div>
                  <p className="text-[#1A1A1A] text-lg mb-8 leading-relaxed font-medium flex-grow">"{review.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] text-sm">{review.name}</h4>
                      <p className="text-gray-500 text-sm">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex w-1/2">
              {reviews.map((review, i) => (
                <div key={`clone-${i}`} className="w-[400px] mx-3 bg-white p-10 rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 shrink-0 flex flex-col">
                  <div className="flex text-[#F59E0B] mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} weight="fill" size={16} />)}
                  </div>
                  <p className="text-[#1A1A1A] text-lg mb-8 leading-relaxed font-medium flex-grow">"{review.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] text-sm">{review.name}</h4>
                      <p className="text-gray-500 text-sm">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="pt-32 pb-32 bg-[#4C1D95] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            {/* Animated subtle floating orbs */}
            <motion.div 
              animate={{ x: [0, 50, 0], y: [0, 30, 0] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-96 h-96 bg-[#00C2FF] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3" 
            />
            <motion.div 
              animate={{ x: [0, -30, 0], y: [0, -50, 0] }} 
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-[#28C7F7] rounded-full blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/3" 
            />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Ready to turn content into customers?</h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                <p className="text-xl text-white/90 m-0">
                  Join 10,000+ founders who are building their audience and revenue with ContentFlow.
                </p>
                {/* Animated Social Icons */}
                <div className="flex gap-4 items-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <InstagramLogo weight="fill" className="text-white w-6 h-6" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.3, ease: "easeInOut" }}
                    className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <TiktokLogo weight="fill" className="text-white w-6 h-6" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.6, ease: "easeInOut" }}
                    className="w-10 h-10 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <YoutubeLogo weight="fill" className="text-white w-6 h-6" />
                  </motion.div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full h-14 px-8 bg-white text-[#1A1A1A] hover:bg-gray-100 shadow-none">
                    Book a free strategy call today
                  </Button>
                </Link>
                <Link to="/pricing" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full h-14 px-8 text-white border-white/20 hover:bg-white/10 hover:text-white">
                    View Pricing
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-white/60 font-medium">
                <span className="flex items-center gap-2"><Check size={16} /> Free 15-min call</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2"><Check size={16} /> No commitment</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2"><Check size={16} /> Custom strategy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
