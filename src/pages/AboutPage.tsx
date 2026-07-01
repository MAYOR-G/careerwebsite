import { motion } from 'motion/react';
import { Target, Lightbulb, Users, TrendUp } from '@phosphor-icons/react';

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
    <div className="w-full bg-white selection:bg-[#00C2FF] selection:text-white pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.h1 variants={fadeUpVariants} className="text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-[-0.04em] text-[#1A1A1A] leading-[1.05] mb-8">
              We engineer <span className="relative inline-block text-[#00C2FF]">attention.<svg className="absolute w-full h-3 -bottom-1 left-0 text-[#00C2FF]/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/></svg></span>
            </motion.h1>
            <motion.p variants={fadeUpVariants} className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              We're not just content creators. We are growth architects obsessed with turning views into verifiable revenue for modern brands.
            </motion.p>
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Our Team" 
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
              <h2 className="text-sm font-bold text-[#00C2FF] tracking-[0.1em] uppercase mb-4">Our Mission</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-8 leading-[1.1]">Bridge the gap between scrolling and buying.</h3>
              
              <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                <p>
                  At <strong className="text-[#1A1A1A]">CONTENTFLOW MEDIA</strong>, we realized that the "old way" of social media management—posting random graphics three times a week—was completely broken. It generates zero engagement, zero leads, and wastes your marketing budget.
                </p>
                <p>
                  We built this agency to change that. We specialize in high-retention short-form video, aggressive multi-platform distribution, and conversion-focused funnels. 
                </p>
                <p>
                  Whether it's TikTok, Instagram Reels, YouTube Shorts, or LinkedIn, we create the kind of content that algorithms love and customers actually want to watch. We don't just build audiences; we build businesses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-[#4C1D95] text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00C2FF] rounded-full blur-[200px] opacity-[0.08] pointer-events-none" />
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
                <div className="text-[#00C2FF] mb-6">{value.icon}</div>
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
