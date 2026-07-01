import { motion } from 'motion/react';
import { CheckCircle } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter Growth',
      price: '£199',
      period: '/month',
      features: [
        '3 platforms',
        '8–12 posts/month',
        'Caption + hashtag optimisation',
        'Monthly content plan'
      ],
      popular: false,
    },
    {
      name: 'Growth Engine',
      price: '£599',
      period: '/month',
      features: [
        '5 platforms',
        '20–25 posts/month',
        '8–12 short videos',
        'Weekly content strategy',
        'Profile optimisation'
      ],
      popular: false,
    },
    {
      name: 'Sales Accelerator',
      price: '£1,499',
      period: '/month',
      features: [
        'All 6 platforms',
        'Daily posting',
        '30–45 content pieces/month',
        'Viral content strategy',
        'Funnel integration: landing page / WhatsApp',
        'Lead conversion scripts'
      ],
      popular: true,
    },
    {
      name: 'Elite Growth System',
      price: '£3,000+',
      period: '/month',
      features: [
        'Full content + funnel system',
        'Daily high-volume posting',
        'Trend-based viral content',
        'Dedicated strategist',
        'Conversion optimisation',
        'Priority support'
      ],
      popular: false,
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      <section className="relative pt-36 md:pt-40 pb-12 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,194,255,0.12),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(76,29,149,0.10),transparent_25%)] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-[#1A1A1A] leading-[1.05] mb-6 text-center text-balance">
            Pricing Packages
          </h1>
          <p className="text-xl text-gray-600 text-center leading-relaxed">
            Choose the same growth tier from our homepage, with clearer package detail for comparison.
          </p>
        </motion.div>
      </section>

      <section className="py-10 px-6 lg:px-8 max-w-[1440px] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-[28px] p-8 lg:p-9 relative flex flex-col min-h-[600px] transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-[#00C2FF] shadow-[0_28px_70px_rgba(0,194,255,0.16)] xl:-translate-y-3' 
                  : 'border border-gray-200 shadow-[0_14px_40px_rgba(15,23,42,0.05)] hover:border-[#00C2FF]/35 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00C2FF] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.14em] shadow-md whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              
              <div className="min-h-[72px]">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-3 leading-tight">{plan.name}</h3>
                <p className="inline-flex rounded-full bg-[#00C2FF]/10 px-3 py-1 text-xs font-bold text-[#008FC0]">
                  50% off for the first three months
                </p>
              </div>
              
              <div className="flex items-baseline gap-1 mt-8 mb-8 pb-8 border-b border-gray-100">
                <span className="text-5xl xl:text-[52px] font-extrabold tracking-tight text-[#1F2937]">{plan.price}</span>
                <span className="text-gray-500 font-medium">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-9 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} weight="fill" className="text-[#28C7F7] shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="mt-auto">
                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  className={`w-full ${plan.popular ? '' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  Choose Package
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
