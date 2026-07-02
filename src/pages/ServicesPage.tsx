import { motion } from 'motion/react';
import { Calendar, ChartLineUp, FacebookLogo, InstagramLogo, PinterestLogo, TiktokLogo, TrendUp, TwitterLogo, VideoCamera, YoutubeLogo } from '@phosphor-icons/react';
import servicesStripVideo from '../../animo-film-strip-720p.webm';

function ServicesMediaStrip() {
  return (
    <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 overflow-hidden bg-white py-2 md:mt-8">
      <video
        className="mx-auto h-[clamp(170px,24vw,330px)] w-full max-w-[1600px] object-cover mix-blend-multiply"
        src={servicesStripVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Animated social media content cards"
        style={{
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      />
    </div>
  );
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Content Creation Schedule',
      desc: 'A clear monthly content plan with posting cadence, captions, hashtags, and scheduling support across your priority platforms.',
      icon: <Calendar size={32} weight="duotone" className="text-[#005BFF]" />
    },
    {
      title: 'Digital Marketing',
      desc: 'Campaign planning, audience targeting, platform growth support, and conversion-focused messaging for organic and paid channels.',
      icon: <TrendUp size={32} weight="duotone" className="text-[#A100FF]" />
    },
    {
      title: 'Video Editing',
      desc: 'Short-form edits built for retention, clarity, and platform-native performance on Reels, TikTok, Shorts, and more.',
      icon: <VideoCamera size={32} weight="duotone" className="text-[#FF00D4]" />
    },
  ];

  const platforms = [
    { name: 'TikTok', icon: <TiktokLogo size={24} weight="fill" /> },
    { name: 'Instagram', icon: <InstagramLogo size={24} weight="fill" /> },
    { name: 'Facebook', icon: <FacebookLogo size={24} weight="fill" /> },
    { name: 'YouTube', icon: <YoutubeLogo size={24} weight="fill" /> },
    { name: 'X', icon: <TwitterLogo size={24} weight="fill" /> },
    { name: 'Pinterest', icon: <PinterestLogo size={24} weight="fill" /> },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      <section className="relative pt-36 md:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(0,210,255,0.13),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(255,0,212,0.11),transparent_25%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-[-0.04em] text-[#1A1A1A] leading-[1.05] mb-6 text-balance">
                Social media services built for consistent growth.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We plan, create, edit, schedule, and support content that helps your brand stay visible and turn attention into action.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative max-w-2xl mx-auto lg:mx-0 w-full">
              <div className="relative aspect-[16/11] rounded-[30px] overflow-hidden border border-white shadow-[0_30px_80px_rgba(76,29,149,0.14)]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=85&w=1400"
                  alt="Team planning social media content on a laptop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3A00FF]/26 via-transparent to-[#FF00D4]/16" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -left-4 top-12 items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/70 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
              >
                <TiktokLogo size={22} weight="fill" className="text-[#1A1A1A]" />
                <span className="text-sm font-semibold text-[#1A1A1A]">Trend capture</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="hidden sm:flex absolute -right-4 bottom-10 items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-md border border-white/70 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
              >
                <ChartLineUp size={22} weight="duotone" className="text-[#3A00FF]" />
                <span className="text-sm font-semibold text-[#1A1A1A]">Growth signals</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 max-w-[1280px] mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F6F8FF] border border-gray-100 p-8 rounded-2xl flex flex-col items-center justify-center text-center min-h-[250px] hover:shadow-[0_18px_45px_rgba(58,0,255,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2937]">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-100 pt-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-7">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] tracking-tight">Platforms Managed</h2>
              <p className="text-gray-500 mt-2">Multi-platform publishing, creative production, scheduling, and optimisation in one clear workflow.</p>
            </div>
          </div>
          <div className="flex flex-nowrap md:justify-between gap-3 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible">
            {platforms.map((platform, i) => (
              <div key={i} className="flex items-center justify-center gap-2 bg-white border border-gray-200 shadow-sm px-5 py-3 rounded-full text-gray-700 font-semibold whitespace-nowrap min-w-max md:flex-1">
                <span className="text-[#1F2937]">{platform.icon}</span>
                {platform.name}
              </div>
            ))}
          </div>
          <ServicesMediaStrip />
        </motion.div>
      </section>
    </div>
  );
}
