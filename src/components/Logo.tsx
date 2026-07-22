import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  variant?: 'default' | 'white' | 'glow';
}

export default function Logo({ className = "h-8", showText = true, textColor, variant = 'default' }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <img 
        src="/LOGO.jpg-removebg-preview.png"
        alt="Peauro Logo" 
        className="h-full w-auto object-contain rounded"
        loading="eager"
        decoding="async"
      />
      {showText && (
        <span 
          className="font-black tracking-tighter lowercase"
          style={{ 
            color: variant === 'white' ? 'white' : textColor || '#1a1a1a',
            fontSize: '1.5em',
            fontFamily: "'Figtree', sans-serif",
            fontWeight: 900,
            letterSpacing: '-0.05em'
          }}
        >
          peauro
        </span>
      )}
    </div>
  );
}

