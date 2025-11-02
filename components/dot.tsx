import React from 'react';
import Border from './border';

type DotVariant = 'red' | 'black';

interface DotProps {
  variant?: DotVariant;
  className?: string;
  width?: string;
  height?: string;
  background?: string;
}

export const Dot: React.FC<DotProps> = ({
  variant = 'red',
  className = '',
  width = '16px',
  height = '16px',
  background,
}) => {
  const getBg = () => {
    switch (variant) {
      case 'red':
        return 'dark:bg-[#332020] bg-[#ECC4BF]';
      case 'black':
        return 'dark:bg-[#363636] bg-[#36363633]';
      default:
        return '';
    }
  };

  const getDotDark = () => {
    switch (variant) {
      case 'red':
        return 'bg-[#FF9090]  shadow-[0_1.5px_6.75px_0_rgba(255,96,96,1)]';
      case 'black':
        return 'bg-white';
      default:
        return '';
    }
  };

  const getDotLight = () => {
    switch (variant) {
      case 'red':
        return 'bg-[#FC3131]';
      case 'black':
        return 'bg-[#989898]';
      default:
        return '';
    }
  };

  return (
    <>
      <Border
        variant={variant}
        backgroundColor={background || getBg()}
        borderWidth='1px'
        width={width}
        height={height}
        className='hidden dark:block'>
        <div
          style={{
            width: `calc(${width}/2.0)`,
            height: `calc(${width}/2.0)`,
          }}
          className={`rounded-full ${getDotDark()}`}></div>
      </Border>
      <div
        style={{
          width: `${width}`,
          height: `${width}`,
        }}
        className={`rounded-full flex dark:hidden justify-center items-center ${getBg()} ${className}`}>
        <div
          style={{
            width: `calc(${width}/2.0)`,
            height: `calc(${width}/2.0)`,
          }}
          className={`rounded-full ${getDotLight()}`}></div>
      </div>
    </>
  );
};

export default Dot;
