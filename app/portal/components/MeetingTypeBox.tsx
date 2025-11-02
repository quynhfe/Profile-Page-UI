import React from 'react';
import GradientBorder from '@/components/gradient-border';
import Dot from '@/components/dot';
import IconBox from '@/components/icon-box';

export type MeetingTypeBoxVariant = 'format' | 'status';

interface MeetingTypeBoxProps {
  variant?: MeetingTypeBoxVariant;
  label: string;
  icon?: React.ReactNode;
  dotColor?: string;
  backgroundDark?: string;
  backgroundLight?: string;
  gradientDark?: string;
  gradientLight?: string;
}

export default function MeetingTypeBox({
  variant = 'status',
  label,
  icon,
  dotColor = 'bg-[#522525]',
  backgroundDark,
  backgroundLight,
  gradientDark,
  gradientLight,
}: MeetingTypeBoxProps) {
  const darkGradient =
    gradientDark ||
    (variant === 'status'
      ? 'linear-gradient(135deg,rgba(119,40,40,1),rgba(137,27,27,0))'
      : 'linear-gradient(135deg,rgba(46,46,46,1),rgba(0,0,0,0))');

  const lightGradient =
    gradientLight || (variant === 'status' ? 'none' : 'none');

  const darkBg =
    backgroundDark ||
    (variant === 'status' ? 'bg-[rgba(242,39,39,0.16)]' : 'bg-[#36363799]');
  const lightBg =
    backgroundLight ||
    (variant === 'status' ? 'bg-[#FFEEEC]' : 'bg-[#8969FA1F]');

  return (
    <>
      <GradientBorder
        rounded='rounded-lg'
        gradient={darkGradient}
        className='hidden dark:block'>
        <div
          className={`flex gap-1 justify-center items-center py-1 px-2 ${darkBg} rounded-lg w-fit h-fit`}>
          {variant === 'status' ? (
            <Dot
              background={dotColor}
              variant='red'
              width='12px'
              height='12px'
            />
          ) : (
            icon && <IconBox className='size-3.5'>{icon}</IconBox>
          )}
          <p className='text-xs font-normal'>{label}</p>
        </div>
      </GradientBorder>

      <GradientBorder
        rounded='rounded-lg'
        gradient={lightGradient}
        className='block dark:hidden'>
        <div
          className={`flex gap-1 justify-center items-center py-1 px-2 ${lightBg} rounded-lg w-fit h-fit`}>
          {variant === 'status' ? (
            <Dot
              variant='red'
              width='12px'
              height='12px'
              className='bg-[#FFD1CC]'
            />
          ) : (
            icon && <IconBox className='size-3.5'>{icon}</IconBox>
          )}
          <p className='text-xs font-normal'>{label}</p>
        </div>
      </GradientBorder>
    </>
  );
}
