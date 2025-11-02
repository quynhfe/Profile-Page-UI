import React from 'react';
import clsx from 'clsx';

type GradientVariant = 'dark' | 'tooltip' | 'green' | 'custom';

interface GradientBorderProps {
  variant?: GradientVariant;
  gradient?: string;
  className?: string;
  children?: React.ReactNode;
  rounded?: string;
  padding?: string;
  borderWidth?: string;
}

const GradientBorder: React.FC<GradientBorderProps> = ({
  variant = 'dark',
  gradient,
  className = '',
  children,
  rounded = 'rounded-xl',
  padding = 'p-0',
  borderWidth = '1px',
}) => {
  const variantGradient =
    variant === 'dark'
      ? 'var(--color-stroke-gradient-dark)'
      : variant === 'tooltip'
        ? 'var(--color-stroke-tooltip)'
        : variant === 'green'
          ? 'var(--color-stroke-gradient-green)'
          : gradient || 'var(--color-stroke-gradient-dark)';

  return (
    <div
      className={clsx(
        'relative w-fit h-fit flex items-center justify-center gap-2.5',
        rounded,
        padding,
        className,
      )}>
      <div className='relative z-10'>{children}</div>

      <div
        className={clsx('absolute inset-0 pointer-events-none', rounded)}
        style={{
          background: gradient || variantGradient,
          padding: borderWidth,
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: 1,
        }}
      />
    </div>
  );
};
export default GradientBorder;
