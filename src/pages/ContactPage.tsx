import { motion } from 'motion/react';
import { EnvelopeSimple, MapPin, Phone, CheckCircle } from '@phosphor-icons/react';
import Button from '../components/Button';

export default function ContactPage() {
  return (
    <div className="w-full bg-white selection:bg-[#3A00FF] selection:text-white pt-24 min-h-screen flex flex-col">
      <section className="flex-1 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(0,210,255,0.13),transparent_28%),radial-gradient(circle_at_10%_88%,rgba(255,0,212,0.10),transparent_30%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Copy & Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#1F2937] tracking-tight mb-6">
                Let's scale your <br/><span className="logo-blend-text">brand.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
                Book a free strategy session. We'll audit your current social media, identify the leaks in your funnel, and show you exactly how we can fix them.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="w-12 h-12 rounded-full bg-[#F0F3FF] flex items-center justify-center text-[#005BFF]">
                    <EnvelopeSimple size={24} weight="duotone" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Email Us</div>
                    <div className="font-semibold">hello@contentflow.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="w-12 h-12 rounded-full bg-[#F7E9FF] flex items-center justify-center text-[#A100FF]">
                    <Phone size={24} weight="duotone" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Call Us</div>
                    <div className="font-semibold">+44 (0) 20 1234 5678</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="w-12 h-12 rounded-full bg-[#F0F3FF] flex items-center justify-center text-[#3A00FF]">
                    <MapPin size={24} weight="duotone" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Visit Us</div>
                    <div className="font-semibold">London, United Kingdom</div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-[#1F2937] text-white p-6 rounded-2xl shadow-xl max-w-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 logo-blend-bg opacity-20 blur-2xl" />
                <div className="flex items-start gap-4 relative z-10">
                  <CheckCircle size={32} weight="fill" className="text-[#00D2FF] shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">No commitment required.</h4>
                    <p className="text-sm text-gray-400">If we don't think we can help you grow, we'll tell you upfront and point you in the right direction.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-8">Get Your Free Growth Plan</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3A00FF]/35 focus:border-[#3A00FF] transition-all bg-gray-50/50 hover:bg-gray-50"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3A00FF]/35 focus:border-[#3A00FF] transition-all bg-gray-50/50 hover:bg-gray-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3A00FF]/35 focus:border-[#3A00FF] transition-all bg-gray-50/50 hover:bg-gray-50"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="business" className="text-sm font-semibold text-gray-700">Tell us about your business</label>
                    <textarea 
                      id="business" 
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3A00FF]/35 focus:border-[#3A00FF] transition-all bg-gray-50/50 hover:bg-gray-50 resize-none"
                      placeholder="What do you do? What are your current bottlenecks?"
                    />
                  </div>

                  <div className="pt-2">
                  <Button variant="primary" className="w-full py-4 text-lg mt-4">
                    Send Message
                  </Button>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                  </div>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
