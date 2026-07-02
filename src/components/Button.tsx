import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({ children, variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A00FF]';
  
  const variants = {
    primary: 'logo-blend-bg text-white shadow-[0_14px_34px_rgba(58,0,255,0.25)] hover:shadow-[0_18px_42px_rgba(255,0,212,0.24)]',
    secondary: 'bg-[#070817] text-white hover:bg-[#111827]',
    outline: 'bg-white text-[#111827] border border-gray-200 hover:border-[#A100FF]/35 hover:bg-[#F6F8FF]',
    ghost: 'bg-transparent text-[#111827] hover:bg-[#F6F8FF]',
  };

  const sizes = {
    sm: 'text-sm px-5 py-2.5',
    md: 'text-base px-7 py-3.5',
    lg: 'text-lg px-8 py-4',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
