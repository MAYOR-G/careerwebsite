import { motion } from 'motion/react';

export const galleryItems = [
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
];

export function GalleryGrid({ compact = false }: { compact?: boolean }) {
  const rows = compact
    ? [
        galleryItems.slice(0, 5),
        galleryItems.slice(5, 10),
        galleryItems.slice(8, 13),
      ]
    : [
        galleryItems.slice(0, 6),
        galleryItems.slice(5, 11),
        galleryItems.slice(7, 13),
      ];

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F6F8FF] to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F6F8FF] to-transparent md:w-32" />

      <div className="space-y-4 md:space-y-5">
        {rows.map((row, rowIndex) => {
          const rowItems = [...row, ...row, ...row];
          const directionClass = rowIndex === 1 ? 'gallery-loop-row-left' : 'gallery-loop-row-right';

          return (
            <div key={rowIndex} className="overflow-hidden">
              <div className={`gallery-loop-row ${directionClass}`} style={{ animationDelay: rowIndex === 2 ? '-18s' : rowIndex === 1 ? '-10s' : '0s' }}>
                {rowItems.map((src, idx) => (
                  <figure
                    key={`${rowIndex}-${src}-${idx}`}
                    className="group relative h-[240px] w-[178px] shrink-0 overflow-hidden rounded-[22px] border border-white/70 bg-white shadow-[0_18px_55px_rgba(17,24,39,0.10)] md:h-[330px] md:w-[245px]"
                  >
                    <img
                      src={src}
                      alt="Social media content production and digital marketing work"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070817]/58 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                      Content sample
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="w-full bg-[#F6F8FF] min-h-screen overflow-hidden">
      <section className="relative pt-36 md:pt-40 pb-14 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,210,255,0.13),transparent_28%),radial-gradient(circle_at_84%_8%,rgba(255,0,212,0.12),transparent_27%)] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-[#111827] mb-5">
            Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed">
            A visual look at content planning, production, editing, and social media growth work.
          </p>
        </motion.div>
      </section>

      <section className="px-6 lg:px-8 pb-24 max-w-[1280px] mx-auto">
        <GalleryGrid />
      </section>
    </div>
  );
}
