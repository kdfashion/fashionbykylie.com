'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', children, variant = 'primary', size = 'md', href, fullWidth = false, ...props }, ref) => {
    // Base styles
    let buttonClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold-light focus:ring-offset-2';
    
    // Variant styles
    if (variant === 'primary') {
      buttonClasses += ' bg-gold-primary text-soft-black hover:bg-gold-dark';
    } else if (variant === 'secondary') {
      buttonClasses += ' bg-royal-purple text-cream hover:bg-opacity-90';
    } else if (variant === 'outline') {
      buttonClasses += ' bg-transparent border-2 border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-soft-black';
    } else if (variant === 'ghost') {
      buttonClasses += ' bg-transparent text-foreground hover:bg-muted';
    }
    
    // Size styles
    if (size === 'sm') {
      buttonClasses += ' text-sm px-3 py-1.5 rounded';
    } else if (size === 'md') {
      buttonClasses += ' text-base px-4 py-2 rounded';
    } else if (size === 'lg') {
      buttonClasses += ' text-lg px-6 py-3 rounded-md';
    }
    
    // Full width
    if (fullWidth) {
      buttonClasses += ' w-full';
    }
    
    // Combine with any additional classes
    buttonClasses += ` ${className}`;
    
    // If href is provided, render as Link
    if (href) {
      return (
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      );
    }
    
    // Otherwise render as button
    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;