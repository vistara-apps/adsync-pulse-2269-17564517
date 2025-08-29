'use client';

import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function CTAButton({ 
  children, 
  variant, 
  onClick, 
  disabled = false, 
  className = '',
  type = 'button'
}: CTAButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-md font-semibold transition-all duration-250 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/20 shadow-card',
    secondary: 'bg-surface border border-border text-text hover:bg-border/50 focus:ring-primary/20'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
