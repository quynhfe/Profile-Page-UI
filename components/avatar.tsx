import React from 'react';
import {
  Avatar as HeroAvatar,
  AvatarProps as HeroAvatarProps,
} from '@heroui/avatar';

type AvatarSize = 'sm' | 'md' | 'lg' | number;
type AvatarBorder = 'fallback' | 'user' | 'none' | string;
type AvatarRadius = 'sm' | 'md' | 'lg' | string;

interface CustomAvatarProps extends Omit<HeroAvatarProps, 'radius' | 'size'> {
  size?: AvatarSize;
  border?: AvatarBorder;
  radius?: AvatarRadius;
  background?: string | 'none';
  className?: string;
}

export const AvatarCus: React.FC<CustomAvatarProps> = ({
  size = 'md',
  border = 'none',
  radius = 'md',
  background = 'none',
  className = '',
  classNames,
  style,
  ...props
}) => {
  const getSizeStyle = (): React.CSSProperties => {
    if (typeof size === 'number') {
      const px = `${size * 4}px`;
      return { width: px, height: px, fontSize: `calc(${px}/2)` };
    }
    return {};
  };

  const getBorderClass = (): string => {
    if (
      typeof border === 'string' &&
      !['fallback', 'user', 'none'].includes(border)
    )
      return border;
    switch (border) {
      case 'fallback':
        return 'border border-border-avt';
      case 'user':
        return 'border border-border';
      default:
        return 'border-none';
    }
  };

  const isTailwindBg = background?.startsWith('bg-');
  const backgroundClass = isTailwindBg ? background : '';
  const backgroundStyle =
    !isTailwindBg && background !== 'none'
      ? { backgroundColor: background }
      : {};

  const combinedClassName =
    `${getBorderClass()} ${backgroundClass} ${className}`.trim();

  const mergedClassNames = {
    ...classNames,
    base: `${classNames?.base || ''}`.trim(),
  };

  return (
    <HeroAvatar
      {...props}
      showFallback
      size={typeof size === 'string' ? size : undefined}
      radius={radius as any}
      className={combinedClassName}
      classNames={mergedClassNames}
      style={{ ...getSizeStyle(), ...backgroundStyle, ...style }}
    />
  );
};
