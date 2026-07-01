import { motion } from 'motion/react';
import { Calendar, TrendUp, VideoCamera, TiktokLogo, InstagramLogo, FacebookLogo, YoutubeLogo, TwitterLogo, PinterestLogo } from '@phosphor-icons/react';

export default function ServicesPage() {
  const services = [
    { title: 'Content Creation Schedule', icon: <Calendar size={32} weight="duotone" className="text-[#28C7F7]" /> },
    { title: 'Digital Marketing', icon: <TrendUp size={32} weight="duotone" className="text-[#7A2CF3]" /> },
    { title: 'Video Editing', icon: <VideoCamera size={32} weight="duotone" className="text-[#4F6EF7]" /> },
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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            This website is about 30 days social media content creation and video creations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F5F7FB] border border-gray-100 p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2937]">{service.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-100 pt-16"
        >
          <h2 className="text-2xl font-bold text-[#1F2937] mb-8">Platforms Managed</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-full text-gray-700 font-medium">
                <span className="text-[#1F2937]">{platform.icon}</span>
                {platform.name}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
