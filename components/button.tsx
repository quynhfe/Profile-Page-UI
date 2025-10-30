import React from 'react';
import {
  Button as HeroButton,
  ButtonProps as HeroButtonProps,
} from '@heroui/button';

type ButtonVariant =
  | 'big'
  | 'small-black'
  | 'small-green'
  | 'small-white'
  | 'purple'
  | 'custom';

interface CustomButtonProps extends Omit<HeroButtonProps, 'variant'> {
  variant?: ButtonVariant;
}

export const ButtonCus: React.FC<CustomButtonProps> = ({
  variant = 'big',
  children,
  className = '',
  ...props
}) => {
  const getVariantClasses = (): string => {
    switch (variant) {
      case 'big':
        return 'bg-white bg-clip-padding flex justify-center items-center w-25 h-25 border-5 border-gray-300 rounded-2xxl overflow-hidden';
      case 'small-black':
        return 'rounded-xl w-fit h-fit p-2 flex items-center justify-center gap-2.5 relative';
      case 'small-green':
        return 'rounded-xl w-fit h-fit p-2 flex items-center justify-center gap-2.5 relative';
      case 'purple':
        return 'rounded-xl bg-button-purple text-white py-2 px-3.5 flex items-center justify-center gap-2 w-fit h-fit font-semibold';
      case 'custom':
        return '';
      default:
        return '';
    }
  };

  const baseClasses = getVariantClasses();
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (variant === 'big') {
    return (
      <HeroButton
        className={combinedClasses}
        {...props}>
        {children}
      </HeroButton>
    );
  }

  if (variant === 'purple') {
    return (
      <HeroButton
        className={combinedClasses}
        {...props}>
        {children}
      </HeroButton>
    );
  }

  if (variant === 'custom') {
    return (
      <HeroButton
        className={className}
        {...props}>
        {children}
      </HeroButton>
    );
  }

  if (
    variant === 'small-black' ||
    variant === 'small-green' ||
    variant === 'small-white'
  ) {
    const gradientColor =
      variant === 'small-black'
        ? 'var(--color-stroke-gradient-dark)'
        : variant === 'small-green'
          ? 'var(--color-stroke-gradient-green)'
          : 'var(--color-border-grey)';

    const backgroundColor =
      variant === 'small-black'
        ? 'bg-black-26'
        : variant === 'small-green'
          ? 'bg-green'
          : 'bg-grey';
    return (
      <HeroButton
        className={`${combinedClasses} ${backgroundColor}`}
        {...props}>
        <div className='relative z-10 '>{children}</div>
        <div
          className='absolute inset-0 rounded-xl pointer-events-none'
          style={{
            background: gradientColor,
            padding: '1px',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            zIndex: 1,
          }}
        />
      </HeroButton>
    );
  }

  return (
    <HeroButton
      className={combinedClasses}
      {...props}>
      {children}
    </HeroButton>
  );
};
