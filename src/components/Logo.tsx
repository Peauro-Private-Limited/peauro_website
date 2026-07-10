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
    <div className={`inline-flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Peauro - Pure Mineral Water" 
        className="h-full w-auto object-contain"
        style={getFilterStyle()}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

