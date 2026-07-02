import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-6"
      >
        ContentFlow Blog
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-500 max-w-2xl mx-auto mb-12"
      >
        Insights on social media algorithms, growth hacks, and conversion strategies are coming soon.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link 
          to="/" 
          className="logo-blend-bg text-white px-8 py-4 rounded-full font-semibold transition-transform hover:scale-[1.02] inline-block"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
