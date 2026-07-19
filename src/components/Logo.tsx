import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  variant?: 'default' | 'white' | 'glow';
}

export default function Logo({ className = "h-8", showText = true, textColor, variant = 'default' }: LogoProps) {
  const getFilterStyle = (): React.CSSProperties => {
    if (variant === 'white') {
      return { filter: 'brightness(0) invert(1)', mixBlendMode: 'screen' as const };
    }
    if (variant === 'glow') {
      return { filter: 'drop-shadow(0px 0px 1px #fff) drop-shadow(0px 0px 2px #fff)' };
    }
    return { mixBlendMode: 'multiply' as const };
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <img 
        src="https://res.cloudinary.com/da9xdkqvl/image/upload/v1784093996/LOGO.jpg_cqthwg.jpg"
        alt="Peauro Logo" 
        className="h-full w-auto object-contain rounded"
        style={getFilterStyle()}
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

