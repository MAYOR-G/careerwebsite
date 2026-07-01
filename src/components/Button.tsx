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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C2FF]';
  
  const variants = {
    primary: 'bg-[#00C2FF] text-white hover:bg-[#009BCC] shadow-[0_4px_14px_rgba(0,194,255,0.3)] hover:shadow-[0_6px_20px_rgba(0,194,255,0.4)]',
    secondary: 'bg-[#1A1A1A] text-white hover:bg-black',
    outline: 'bg-transparent text-[#1A1A1A] border border-gray-200 hover:border-gray-300 hover:bg-gray-50',
    ghost: 'bg-transparent text-[#1A1A1A] hover:bg-gray-50',
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
