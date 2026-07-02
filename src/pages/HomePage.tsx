import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { XCircle, ArrowRight, ChartBar, Users, Camera, Star, MonitorPlay, Crosshair, Target, Check } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { GalleryGrid } from './GalleryPage';

const heroVideoUrl = 'https://pub-9f4f9c9b1b3e477aba4991ccfd92f1ae.r2.dev/content%20flow.mp4';

const trustedLogos = [
  { name: 'Northline', className: 'font-black italic tracking-[-0.06em]' },
  { name: 'Wayfind', className: 'font-extrabold tracking-[-0.05em]' },
  { name: 'Southpeak', className: 'font-black tracking-[-0.06em]' },
  { name: 'Union&Co', className: 'font-serif font-bold italic tracking-[-0.03em]' },
  { name: 'Crescent', className: 'font-black tracking-[-0.05em]' },
  { name: 'KiwiHaus', className: 'font-serif font-black tracking-[-0.04em]' },
  { name: 'Luma Studio', className: 'font-bold italic tracking-[-0.04em]' },
  { name: 'Chevra', className: 'font-black tracking-[-0.05em]' },
  { name: 'At Home', className: 'font-semibold tracking-[-0.03em]' },
  { name: 'Mackenzie', className: 'font-serif font-semibold tracking-[0.08em] uppercase' },
];

const reviews = [
  { text: "ContentFlow doubled our engagement in the first 30 days. Unbelievable results.", name: "Sarah Jenkins", role: "CMO, TechNova", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "Finally, an agency that understands how to make B2B content go viral.", name: "Mark Roberts", role: "Founder, GrowthEngine", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "Their video editing and strategy is unmatched. We are getting daily inbound leads.", name: "Jessica Alba", role: "CEO, GlowBeauty", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "Best ROI we've seen from any marketing channel this year. Highly recommended.", name: "David Chen", role: "Director, Apex Solutions", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" },
  { text: "The team is professional, fast, and the quality is absolutely top-tier.", name: "Amanda Smith", role: "VP Marketing, Stellar", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150" },
];

const socialBadges = {
  problem: [
    { label: 'TikTok', className: 'right-5 top-5 rotate-3' },
    { label: 'IG', className: 'left-5 bottom-5 -rotate-3' },
  ],
  solution: [
    { label: 'Pinterest', className: 'right-5 top-5 rotate-3' },
    { label: 'YouTube', className: 'left-5 bottom-5 -rotate-3' },
  ],
  process: [
    { label: 'Plan', className: 'right-5 top-5 rotate-2' },
    { label: 'Post', className: 'left-5 bottom-5 -rotate-2' },
  ],
  why: [
    { label: 'Strategy', className: 'right-5 top-5 rotate-2' },
    { label: 'Growth', className: 'left-5 bottom-5 -rotate-2' },
  ],
  services: [
    { label: 'TikTok', className: 'right-5 top-5 rotate-3' },
    { label: 'Instagram', className: 'left-5 bottom-5 -rotate-3' },
  ],
};

function FloatingImageBadges({ badges }: { badges: Array<{ label: string; className: string }> }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden sm:block">
      {badges.map((badge, index) => (
        <motion.span
          key={badge.label}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4 + index * 0.45, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute rounded-2xl border border-white/60 bg-white/86 px-4 py-2 text-xs font-black text-[#111827] shadow-[0_18px_42px_rgba(58,0,255,0.18)] backdrop-blur-md ${badge.className}`}
        >
          {badge.label}
        </motion.span>
      ))}
    </div>
  );
}

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
              We run your presence across TikTok, Instagram, Facebook, YouTube, X, and Pinterest with strategic, high-performing content that turns visibility into real business growth.
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

      {/* 2. TRUSTED BY STRIP */}
      <section className="relative overflow-hidden bg-white pt-8 pb-9 md:pt-9 md:pb-10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:repeating-radial-gradient(ellipse_at_center,rgba(58,0,255,0.08)_0,rgba(58,0,255,0.08)_1px,transparent_2px,transparent_16px)]" />
        <div className="relative z-10 mb-7 text-center">
          <h2 className="text-lg font-extrabold tracking-[-0.02em] text-[#111827] md:text-xl">
            Trusted by growing brands
          </h2>
        </div>
        <div className="relative z-10 w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-28" />
          <div className="flex w-max animate-marquee-left items-center gap-10 md:gap-16">
            {[...trustedLogos, ...trustedLogos].map((logo, index) => (
              <span
                key={`${logo.name}-${index}`}
                className={`shrink-0 text-2xl leading-none text-[#1A1A1A]/72 grayscale md:text-4xl ${logo.className}`}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.86fr_1.14fr] gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="section-kicker mb-4 !text-sm md:!text-base">The Problem</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-8 text-balance">Most businesses struggle with content.</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { title: "Posting inconsistently", desc: "Your audience does not hear from you often enough.", icon: <XCircle size={30} weight="duotone" /> },
                  { title: "Low engagement", desc: "People see the content but do not respond.", icon: <MonitorPlay size={30} weight="duotone" /> },
                  { title: "No clear content strategy", desc: "Posts go out without a clear direction.", icon: <Crosshair size={30} weight="duotone" /> },
                  { title: "Wasting time with no results", desc: "Too much effort goes in with little return.", icon: <ChartBar size={30} weight="duotone" /> }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.55 }}
                    className="bg-[#F6F8FF] rounded-[22px] p-5 border border-[#E8ECFF] shadow-[0_16px_42px_rgba(17,24,39,0.04)] flex flex-col items-start"
                  >
                    <div className="mb-4 text-[#3A00FF]">{item.icon}</div>
                    <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h4>
                    <p className="text-[15px] text-gray-600 leading-relaxed mt-auto">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative lg:pt-12"
            >
              <div className="relative h-[330px] overflow-hidden rounded-[30px] shadow-[0_32px_80px_rgba(58,0,255,0.14)] sm:h-[380px] lg:h-[560px] xl:h-[580px]">
                <img
                  src="/problem-social-media-struggle.png"
                  alt="Business owner reviewing difficult social media performance on a laptop"
                  className="w-full h-full object-cover object-[center_42%] brightness-[1.06] saturate-[1.12] contrast-[1.04]"
                />
                <FloatingImageBadges badges={socialBadges.problem} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section className="py-20 md:py-24 bg-[#F6F8FF]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="section-kicker mb-4 !text-sm md:!text-base">The Solution</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6 lg:leading-tight">Grow with better content.</h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">We build a clear system for planning, creating, posting, and improving your content.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { title: 'Building a clear content strategy', desc: 'We plan your content around your goals, audience, and brand so every post has purpose and direction.', icon: <Target size={24} weight="fill" /> },
                  { title: 'Creating consistent, high-quality posts', desc: 'We design and produce content that looks professional, stays on-brand, and keeps your audience engaged.', icon: <Camera size={24} weight="fill" /> },
                  { title: 'Managing scheduling and posting', desc: 'We handle the full posting process so your social media stays active, consistent, and stress-free.', icon: <Users size={24} weight="fill" /> },
                  { title: 'Optimising for reach and engagement', desc: 'We refine content and timing to help your posts reach more people and drive better interaction over time.', icon: <ChartBar size={24} weight="fill" /> }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="bg-white rounded-[24px] p-6 border border-[#E8ECFF] hover:border-[#A100FF]/35 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(58,0,255,0.08)] transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#F0F3FF] text-[#3A00FF] flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-base font-bold text-[#1A1A1A] mb-2 leading-snug">{feature.title}</h4>
                    <p className="text-[15px] text-gray-600 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative rounded-[30px] overflow-hidden bg-white shadow-[0_30px_80px_rgba(17,24,39,0.10)]"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=90&w=1400"
                alt="Team planning social media content strategy"
                className="h-[390px] w-full object-cover brightness-[1.06] saturate-[1.12] contrast-[1.04] sm:h-[480px] lg:h-[560px] xl:h-[590px]"
              />
              <FloatingImageBadges badges={socialBadges.solution} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section id="process" className="py-20 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">How It Works</h2>
            <p className="text-lg text-gray-500">A simple process for steady, professional content.</p>
          </div>

          <div className="grid lg:grid-cols-[0.98fr_1.02fr] gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative rounded-[30px] overflow-hidden shadow-[0_30px_80px_rgba(17,24,39,0.10)]"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=90&w=1400"
                alt="Team mapping a social media content plan"
                className="h-[500px] w-full object-cover brightness-[1.06] saturate-[1.1] contrast-[1.04]"
              />
              <FloatingImageBadges badges={socialBadges.process} />
            </motion.div>

            <div className="space-y-5">
              {[
                { num: '01', title: 'We understand your business', desc: 'We learn your audience, goals, and brand voice' },
                { num: '02', title: 'We build your content strategy', desc: 'We design a posting plan tailored to your niche' },
                { num: '03', title: 'We manage everything', desc: 'We create, schedule, and optimise your content' }
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
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A]">{step.title}</h3>
                    <p className="mt-1 text-[15px] text-gray-500">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY SECTION */}
      <section className="py-20 md:py-24 bg-[#F6F8FF]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-8">Why businesses work with us</h2>
              <div className="space-y-4">
                {[
                  'We focus on consistency, not random posting',
                  'Every post is tied to a strategy, not guesswork',
                  'We optimise content for engagement + growth',
                  'We act like your in-house social media team'
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="flex items-start gap-4 rounded-[22px] border border-[#E8ECFF] bg-white p-5 shadow-[0_14px_40px_rgba(17,24,39,0.04)]"
                  >
                    <span className="logo-blend-bg mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                      <Check size={14} weight="bold" />
                    </span>
                    <p className="font-semibold text-[#1A1A1A]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative rounded-[30px] overflow-hidden shadow-[0_30px_80px_rgba(17,24,39,0.10)]"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=90&w=1400"
                alt="Creative team working together on a content strategy"
                className="h-[500px] w-full object-cover brightness-[1.06] saturate-[1.1] contrast-[1.04]"
              />
              <FloatingImageBadges badges={socialBadges.why} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. EXPERTISE SECTION */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-5">Services</h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-xl mb-8">Content planning, social media management, video editing, and digital marketing in one place.</p>

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
                    className="bg-[#F6F8FF] border border-[#E8ECFF] rounded-[22px] p-6 flex flex-col shadow-[0_14px_40px_rgba(17,24,39,0.04)] hover:border-[#A100FF]/35 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="text-[#00D2FF] mb-4">{service.icon}</div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{service.title}</h3>
                    <p className="text-[15px] text-gray-600 leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex justify-start">
                <Link to="/services" className="text-[#3A00FF] font-medium flex items-center hover:text-[#A100FF] transition-colors group">
                  Explore All Services <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[340px] overflow-hidden rounded-[28px] border border-white shadow-[0_30px_80px_rgba(17,24,39,0.10)] sm:h-[470px] lg:h-[560px] xl:h-[600px]">
                <img
                  src="/hero-bg.png"
                  alt="Social media management dashboard and content planning session"
                  className="w-full h-full object-cover brightness-[1.06] saturate-[1.12] contrast-[1.04]"
                />
                <FloatingImageBadges badges={socialBadges.services} />
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
