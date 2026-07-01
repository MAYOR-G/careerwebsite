import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4C1D95] pt-16 pb-8 relative mt-12 md:mt-24">
      {/* SVG Wave Divider at the top, pointing up */}
      <div className="absolute bottom-[calc(100%-1px)] left-0 w-full leading-none rotate-180 pointer-events-none">
        <svg className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#4C1D95"></path>
        </svg>
      </div>

      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00C2FF] rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Stay ahead of the algorithm.
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
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
            <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">COMPANY</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">SERVICES</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Social Media Management</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Short-Form Video</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Content Strategy</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Paid Advertising</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">RESOURCES</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm tracking-wide">LEGAL</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <img src="/logo-transparent.png" alt="CONTENTFLOW MEDIA" className="h-16 md:h-24 w-auto object-contain scale-125 origin-left" />
            <p className="text-sm text-gray-500">
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

