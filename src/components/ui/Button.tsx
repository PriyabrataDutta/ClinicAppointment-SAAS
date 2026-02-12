import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// DEFINING THE MISSING PROPS HERE
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'link'; // Added 'link'
  size?: 'sm' | 'md' | 'lg' | 'icon';                 // Added 'size'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          
          // Variants
          variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
          variant === 'outline' && 'border border-slate-200 bg-transparent hover:bg-slate-100 text-slate-900',
          variant === 'ghost' && 'bg-transparent hover:bg-slate-100 text-slate-700',
          variant === 'link' && 'bg-transparent underline-offset-4 hover:underline text-blue-600 p-0 h-auto',

          // Sizes
          size === 'sm' && 'h-9 px-3 text-xs',
          size === 'md' && 'h-10 px-4 py-2',
          size === 'lg' && 'h-12 px-8 text-lg',
          size === 'icon' && 'h-10 w-10 p-0',
          
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export { Button };