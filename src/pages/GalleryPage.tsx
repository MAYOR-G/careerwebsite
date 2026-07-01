import { motion } from 'motion/react';
import { CheckCircle } from '@phosphor-icons/react';

// Placeholder vertical videos/images (simulating TikTok/Reels)
const mediaRow1 = [
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop',
];

const mediaRow2 = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
];

const mediaRow3 = [
  'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
];

export default function GalleryPage() {
  return (
    <div className="w-full bg-white min-h-screen overflow-hidden">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-8">
            Gallery
          </h1>
          <div className="text-left bg-[#F5F7FB] p-8 rounded-3xl inline-block shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-[#1F2937] mb-4">Showing images and videos of:</h2>
            <ul className="space-y-3">
              {[
                'Viral shorts',
                'Social media contents',
                'Video creations',
                'Social media content examples'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} weight="fill" className="text-[#28C7F7] shrink-0" />
                  <span className="text-gray-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 flex flex-col gap-6 relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1: Moves Right */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 min-w-max animate-marquee-right">
            {[...mediaRow1, ...mediaRow1].map((src, idx) => (
              <div key={idx} className="w-[200px] md:w-[280px] h-[350px] md:h-[480px] rounded-3xl overflow-hidden shrink-0 shadow-md">
                <img src={src} alt="Gallery item" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves Left */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 min-w-max animate-marquee-left">
            {[...mediaRow2, ...mediaRow2].map((src, idx) => (
              <div key={idx} className="w-[200px] md:w-[280px] h-[350px] md:h-[480px] rounded-3xl overflow-hidden shrink-0 shadow-md">
                <img src={src} alt="Gallery item" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Moves Right */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 min-w-max animate-marquee-right" style={{ animationDelay: '-10s' }}>
            {[...mediaRow3, ...mediaRow3].map((src, idx) => (
              <div key={idx} className="w-[200px] md:w-[280px] h-[350px] md:h-[480px] rounded-3xl overflow-hidden shrink-0 shadow-md">
                <img src={src} alt="Gallery item" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
