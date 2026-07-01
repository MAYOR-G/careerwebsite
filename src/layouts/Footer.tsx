import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react';

const footerColumns = [
  {
    title: 'COMPANY',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Work', to: '/gallery' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'SERVICES',
    links: [
      { label: 'Social Media Management', to: '/services' },
      { label: 'Short-Form Video', to: '/services' },
      { label: 'Content Strategy', to: '/services' },
      { label: 'Paid Advertising', to: '/services' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'Case Studies', to: '/gallery' },
      { label: 'Help Center', to: '/contact' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
      { label: 'Cookie Policy', to: '#' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4C1D95] pt-14 pb-8 relative mt-10 md:mt-18">
      {/* SVG Wave Divider at the top, pointing up */}
      <div className="absolute bottom-[calc(100%-1px)] left-0 w-full leading-none rotate-180 pointer-events-none">
        <svg className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#4C1D95"></path>
        </svg>
      </div>

      <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00C2FF] rounded-full blur-[140px] opacity-16 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-5 text-balance">
              Stay ahead of the algorithm.
            </h2>
            <p className="text-base md:text-lg text-white/68 mb-7 max-w-lg leading-relaxed">
              Get weekly insights on social media growth and conversion strategies delivered straight to your inbox.
            </p>
            <form className="relative max-w-md w-full">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full pl-6 pr-32 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00C2FF] focus:bg-white/10 transition-all"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 bg-[#00C2FF] text-white font-medium px-6 rounded-full hover:bg-[#009BCC] transition-colors flex items-center justify-center"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-white/42 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-12">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-white mb-5 text-xs tracking-[0.16em]">{column.title}</h4>
              <ul className="space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-white/58 hover:text-white transition-colors text-sm md:text-base">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-7 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-5 text-center sm:text-left">
            <img src="/logo-transparent.png" alt="CONTENTFLOW MEDIA" className="h-16 md:h-20 w-auto object-contain" />
            <p className="text-sm text-white/44 sm:pt-7">
              &copy; {currentYear} ContentFlow. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00C2FF] hover:text-white transition-colors border border-white/10">
              <TwitterLogo size={20} weight="fill" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00C2FF] hover:text-white transition-colors border border-white/10">
              <LinkedinLogo size={20} weight="fill" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00C2FF] hover:text-white transition-colors border border-white/10">
              <InstagramLogo size={20} weight="fill" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00C2FF] hover:text-white transition-colors border border-white/10">
              <FacebookLogo size={20} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
