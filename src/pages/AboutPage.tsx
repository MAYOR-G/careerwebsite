import { motion } from 'motion/react';
import { InstagramLogo, Lightbulb, MonitorPlay, Target, TrendUp, Users, YoutubeLogo } from '@phosphor-icons/react';

export default function AboutPage() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <div className="w-full bg-white selection:bg-[#3A00FF] selection:text-white pt-24 md:pt-28 pb-16">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 pb-20 md:pb-24 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(0,210,255,0.12),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(255,0,212,0.11),transparent_26%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center"
          >
            <div className="text-center lg:text-left">
              <motion.h1 variants={fadeUpVariants} className="text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-[-0.04em] text-[#1A1A1A] leading-[1.05] mb-7 text-balance">
                We build content systems that <span className="logo-blend-text">grow brands.</span>
              </motion.h1>
              <motion.p variants={fadeUpVariants} className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                CONTENTFLOW MEDIA helps businesses plan, create, edit, and publish social media content with a clearer strategy behind every post.
              </motion.p>
            </div>

            <motion.div variants={fadeUpVariants} className="relative max-w-2xl mx-auto lg:mx-0 w-full">
              <div className="relative aspect-[16/11] rounded-[28px] overflow-hidden shadow-[0_28px_70px_rgba(76,29,149,0.16)] border border-white">
                <img
                  src="/hero-bg-3.png"
                  alt="Social media strategy dashboard and content planning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3A00FF]/24 via-transparent to-[#FF00D4]/14" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -left-5 top-10 items-center gap-2 rounded-2xl bg-white/88 backdrop-blur-md border border-white/70 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
              >
                <InstagramLogo size={22} weight="fill" className="text-[#E1306C]" />
                <span className="text-sm font-semibold text-[#1A1A1A]">Content queue</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="hidden sm:flex absolute -right-4 bottom-12 items-center gap-2 rounded-2xl bg-white/88 backdrop-blur-md border border-white/70 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
              >
                <YoutubeLogo size={22} weight="fill" className="text-[#FF0000]" />
                <span className="text-sm font-semibold text-[#1A1A1A]">Short-form edits</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="hidden md:flex absolute right-16 -top-5 w-14 h-14 rounded-2xl bg-[#1A1A1A] text-white items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
              >
                <MonitorPlay size={26} weight="duotone" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.08)] border border-gray-100">
                <img 
                  src="/hero-bg-2.png" 
                  alt="Video content production team in a studio" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <h2 className="section-kicker mb-4">Our Mission</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-8 leading-[1.1]">Bridge the gap between scrolling and buying.</h3>
              
              <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                <p>
                  At <strong className="text-[#1A1A1A]">CONTENTFLOW MEDIA</strong>, we help businesses grow their brand through professional social media management, creative content creation, video editing, and digital marketing. We manage TikTok, Instagram, Facebook, YouTube, X (Twitter), and Pinterest, creating engaging content that increases brand awareness, attracts customers, and supports business growth.
                </p>
                <p>
                  From content strategy and video production to publishing, digital marketing, and performance tracking, we provide complete solutions that help businesses build a strong online presence and connect with the right audience. Our mission is to deliver creative, results-driven marketing that helps your business grow with confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-[#070817] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(0,210,255,0.18),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(255,0,212,0.16),transparent_30%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Core Values</h2>
            <p className="text-xl text-white/70">The principles that drive every piece of content we produce.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Data Over Ego', desc: 'We let the analytics dictate our creative decisions, not our personal preferences.', icon: <TrendUp size={40} /> },
              { title: 'Relentless Quality', desc: 'Every frame, caption, and thumbnail is optimized for maximum retention and impact.', icon: <Target size={40} /> },
              { title: 'Speed to Market', desc: 'Trends move fast. We operate with aggressive speed to capitalize on viral moments.', icon: <Lightbulb size={40} /> },
              { title: 'True Partnership', desc: 'We act as an extension of your internal team, fully aligned with your revenue goals.', icon: <Users size={40} /> }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-transparent border border-white/10 rounded-[24px] p-10 hover:border-white/40 hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="text-[#00D2FF] mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
