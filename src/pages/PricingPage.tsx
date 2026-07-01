import { motion } from 'motion/react';
import { CheckCircle } from '@phosphor-icons/react';
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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Pricing Packages
          </h1>
        </motion.div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-8 relative flex flex-col ${
                plan.popular 
                  ? 'border-2 border-[#7A2CF3] shadow-xl md:-translate-y-4' 
                  : 'border border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00C2FF] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-xl font-bold text-[#1F2937] mb-6">{plan.name}</h3>
              
              <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-gray-100">
                <span className="text-4xl font-extrabold text-[#1F2937]">{plan.price}</span>
                <span className="text-gray-500 font-medium">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} weight="fill" className="text-[#28C7F7] shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className={`w-full mt-auto ${plan.popular ? '' : 'border-gray-200 hover:border-gray-300'}`}
              >
                Choose Package
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
