import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { XCircle, ArrowRight, ChartBar, Users, Camera, Star, MonitorPlay, Crosshair, Target, Check } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { GalleryGrid } from './GalleryPage';
import heroStripVideo from '../../hero video.webm';

const heroVideoUrl = 'https://pub-9f4f9c9b1b3e477aba4991ccfd92f1ae.r2.dev/content%20flow.mp4';

const reviews = [
  { text: "ContentFlow doubled our engagement in the first 30 days. Unbelievable results.", name: "Sarah Jenkins", role: "CMO, TechNova", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "Finally, an agency that understands how to make B2B content go viral.", name: "Mark Roberts", role: "Founder, GrowthEngine", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "Their video editing and strategy is unmatched. We are getting daily inbound leads.", name: "Jessica Alba", role: "CEO, GlowBeauty", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "Best ROI we've seen from any marketing channel this year. Highly recommended.", name: "David Chen", role: "Director, Apex Solutions", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "The team is professional, fast, and the quality is absolutely top-tier.", name: "Amanda Smith", role: "VP Marketing, Stellar", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150" },
];

export default function HomePage() {
  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="w-full bg-white selection:bg-[#3A00FF] selection:text-white">
      {/* 1. HERO SECTION */}
      <section 
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070817] pt-32 pb-20 lg:pt-[168px] lg:pb-24"
      >
        <div className="absolute inset-0">
          <video
            src={heroVideoUrl}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="ContentFlow social media content background video"
          />
        </div>
        <div className="absolute inset-0 bg-[#070817]/24"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,23,0.18),rgba(7,8,23,0.12)_54%,rgba(7,8,23,0.35))]"></div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 w-full flex justify-center">
          <motion.div 
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-4xl flex flex-col items-center text-center"
          >
            <motion.h1 variants={fadeUpVariants} className="text-5xl md:text-7xl lg:text-[88px] font-extrabold tracking-[-0.04em] text-white leading-[1.05] mb-8 text-balance">
              Turn Social Media Content Into <span className="logo-blend-text">Paying Customers</span>
            </motion.h1>
            
            <motion.p variants={fadeUpVariants} className="text-xl md:text-2xl text-white/88 font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              We manage TikTok, Instagram, Facebook, YouTube, X, and Pinterest with high-performing content designed for growth and conversions.
            </motion.p>
            
            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-9 w-full max-w-md mx-auto sm:max-w-none">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full h-14">
                  Get Your Free Growth Plan
                </Button>
              </Link>
              <Link to="/gallery" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full h-14 group border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/14 hover:text-white">
                  View Our Work
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white/86 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              {['Content planning', 'Video editing', 'Daily posting', 'Digital marketing'].map((item) => (
                <span key={item} className="rounded-full border border-white/18 bg-white/10 px-4 py-2 backdrop-blur-md">
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SOCIAL MEDIA VIDEO STRIP */}
      <section className="relative overflow-hidden bg-white py-2 md:py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <video
          src={heroStripVideo}
          className="mx-auto h-[clamp(92px,12vw,155px)] w-full max-w-[1600px] object-cover object-center mix-blend-multiply"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Animated social media platform cards"
          style={{
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        />
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.04fr_0.96fr] gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="section-kicker mb-4">The Problem</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-8 text-balance">Most businesses struggle with content.</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { title: "Posting is not consistent", desc: "Some weeks are active. Other weeks go quiet.", icon: <XCircle size={30} weight="duotone" /> },
                  { title: "Low engagement", desc: "People see the content but do not respond.", icon: <MonitorPlay size={30} weight="duotone" /> },
                  { title: "No leads from social media", desc: "Views are not turning into real enquiries.", icon: <ChartBar size={30} weight="duotone" /> },
                  { title: "No clear plan", desc: "Random posts make it hard to grow.", icon: <Crosshair size={30} weight="duotone" /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.55 }}
                    className="bg-[#F6F8FF] rounded-[22px] p-6 border border-[#E8ECFF] shadow-[0_16px_42px_rgba(17,24,39,0.04)] flex flex-col items-start"
                  >
                    <div className="mb-5 text-[#3A00FF]">{item.icon}</div>
                    <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm mt-auto">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-[5/6] rounded-[30px] overflow-hidden shadow-[0_32px_80px_rgba(58,0,255,0.14)]">
                <img
                  src="/problem-social-media-struggle.png"
                  alt="Business owner reviewing difficult social media performance on a laptop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#070817]/44 via-transparent to-[#FF00D4]/18" />
              </div>
              <div className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-white/30 bg-white/88 backdrop-blur-md px-5 py-4 shadow-[0_20px_50px_rgba(17,24,39,0.12)]">
                <p className="text-sm font-semibold text-[#111827]">A better plan makes content easier to manage.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section className="py-20 md:py-24 bg-[#F6F8FF]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
            
            <div className="w-full lg:w-[40%] flex flex-col justify-center">
              <h2 className="section-kicker mb-4">The Solution</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6 lg:leading-tight">Grow with better content.</h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">We help you plan, create, post, and improve content so your social pages can bring in more customers.</p>
              
              <div className="bg-white rounded-[24px] p-8 border border-[#E8ECFF] shadow-[0_18px_50px_rgba(58,0,255,0.06)] mt-auto mb-8 lg:mb-0">
                <div className="text-3xl font-black logo-blend-text tracking-tight mb-2">Plan. Create. Post.</div>
                <div className="text-gray-500 font-medium">Simple steps for better social media content.</div>
              </div>
            </div>

            <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Short videos', icon: <MonitorPlay size={24} weight="fill" /> },
                { title: 'Content planning', icon: <Target size={24} weight="fill" /> },
                { title: 'Post on every platform', icon: <Users size={24} weight="fill" /> },
                { title: 'Get more engagement', icon: <Star size={24} weight="fill" /> },
                { title: 'Turn views into leads', icon: <ChartBar size={24} weight="fill" /> }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`bg-white rounded-[24px] p-8 border border-[#E8ECFF] hover:border-[#A100FF]/35 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(58,0,255,0.08)] transition-all duration-300 ${i === 4 ? 'sm:col-span-2 sm:max-w-[calc(50%-0.75rem)] sm:mx-auto sm:w-full' : ''}`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#F0F3FF] text-[#3A00FF] flex items-center justify-center mb-6">
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
      <section id="process" className="py-20 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">How It Works</h2>
            <p className="text-lg text-gray-500">We use a simple process to plan, create, post, and improve your content.</p>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative rounded-[30px] overflow-hidden shadow-[0_30px_80px_rgba(17,24,39,0.10)]"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=85&w=1400"
                alt="Team planning a social media content workflow"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#070817]/56 via-transparent to-[#00D2FF]/18" />
            </motion.div>

            <div className="space-y-4">
              {[
                { num: '01', title: 'We learn your business' },
                { num: '02', title: 'We make a content plan' },
                { num: '03', title: 'We create and post content' },
                { num: '04', title: 'We improve what works' },
                { num: '05', title: 'You get more leads' }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="grid grid-cols-[68px_1fr] items-center gap-5 rounded-[22px] border border-[#E8ECFF] bg-white p-5 shadow-[0_14px_40px_rgba(17,24,39,0.04)] hover:border-[#A100FF]/35 transition-colors"
                >
                  <div className="logo-blend-bg flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-black text-white">
                    {step.num}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A]">{step.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPERTISE SECTION (Dark) */}
      <section className="py-20 md:py-24 bg-[#070817] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(0,210,255,0.18),transparent_28%),radial-gradient(circle_at_88%_28%,rgba(255,0,212,0.16),transparent_30%),radial-gradient(circle_at_55%_100%,rgba(58,0,255,0.18),transparent_34%)] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">Services</h2>
              <p className="text-lg text-white/68 leading-relaxed max-w-xl mb-8">Content planning, social media management, video editing, and digital marketing in one place.</p>

              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-5">
                {[
                  { title: 'Content Creation Schedule', desc: 'A clear plan for what to post and when to post it.', icon: <ChartBar size={28} /> },
                  { title: 'Digital Marketing', desc: 'Simple campaigns that help the right people find you.', icon: <Target size={28} /> },
                  { title: 'Video Editing', desc: 'Clean short videos made for social media.', icon: <Camera size={28} /> }
                ].map((service, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="bg-white/[0.055] border border-white/10 rounded-[22px] p-6 flex flex-col hover:border-white/35 hover:bg-white/[0.085] transition-all duration-300"
                  >
                    <div className="text-[#00D2FF] mb-4">{service.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-white/64 leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex justify-start">
                <Link to="/services" className="text-white font-medium flex items-center hover:text-[#00D2FF] transition-colors group">
                  Explore All Services <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[5/4] rounded-[28px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
                <img
                  src="/hero-bg.png"
                  alt="Social media management dashboard and content planning session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3A00FF]/46 via-transparent to-[#FF00D4]/18" />
              </div>
              <div className="absolute -left-4 bottom-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-3 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <MonitorPlay size={22} weight="duotone" className="text-[#00D2FF]" />
                <span className="text-sm font-semibold">Daily creative workflow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALLERY SECTION */}
      <section className="py-20 md:py-24 bg-[#F6F8FF]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">Gallery</h2>
              <p className="text-lg text-gray-600 max-w-2xl">A quick look at content, videos, and social media work.</p>
            </div>
            <Link to="/gallery" className="inline-flex items-center font-semibold text-[#3A00FF] group">
              View full gallery <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <GalleryGrid compact />
        </div>
      </section>

      {/* 8. PRICING SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">Pricing</h2>
            <p className="text-lg text-gray-500 mb-10">Choose the plan that matches your content growth goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
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
                className={`rounded-[24px] p-10 bg-white border transition-all duration-300 flex flex-col h-full ${
                  pkg.highlight 
                    ? 'border-transparent logo-blend-border shadow-[0_24px_48px_rgba(58,0,255,0.14)] lg:scale-105 z-10 relative' 
                    : 'border-gray-200 hover:border-[#A100FF]/35 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 logo-blend-bg text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${pkg.highlight ? 'logo-blend-text' : 'text-gray-500'}`}>{pkg.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold text-[#1A1A1A]">£{pkg.price.toLocaleString('en-GB')}{pkg.name.includes('Elite') && '+'}</span>
                  <span className="text-gray-500 mb-1">/mo</span>
                </div>
                <p className="inline-flex w-fit rounded-full bg-[#A100FF]/10 px-3 py-1 text-xs font-bold text-[#3A00FF] mb-8">
                  50% off for the first three months
                </p>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={16} weight="bold" className="text-[#3A00FF]" />
                      <span className="text-gray-600 text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="mt-auto">
                  <Button variant={pkg.highlight ? 'primary' : 'outline'} className="w-full">Get Started</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. REVIEWS SECTION */}
      <section className="py-20 md:py-24 bg-[#F6F8FF] overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">Reviews</h2>
          <p className="text-lg text-gray-500">What clients said about the content work.</p>
        </div>
        
        <div className="relative w-full overflow-hidden group">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F6F8FF] to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F6F8FF] to-transparent md:w-32" />
          <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused] py-6">
            {[...reviews, ...reviews].map((review, i) => (
              <article key={`${review.name}-${i}`} className="mx-3 flex w-[330px] shrink-0 flex-col rounded-[24px] border border-white/80 bg-white p-7 shadow-[0_18px_55px_rgba(17,24,39,0.08)] md:w-[410px] md:p-9">
                <div className="flex text-[#A100FF] mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} weight="fill" size={16} />)}
                </div>
                <p className="text-[#1A1A1A] text-base md:text-lg mb-7 leading-relaxed font-medium flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-sm">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="pt-24 pb-28 bg-[#070817] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,210,255,0.18),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(255,0,212,0.16),transparent_30%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">Ready to turn content into customers?</h2>
              
              <p className="text-xl text-white/74 mx-auto mb-12 max-w-2xl leading-relaxed">
                Book a free strategy call and get a practical plan for your next month of social media content.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full h-14 px-8">
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
