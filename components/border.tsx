import React from 'react';

type BorderVariant =
  | 'stroke-gradient-dark'
  | 'tooltip'
  | 'green'
  | 'red'
  | 'black';

interface BorderProps {
  variant?: BorderVariant;
  borderWidth?: string;
  width?: string;
  height?: string;
  size?: number;
  colorBorder?: string;
  backgroundColor?: string;
  rounded?: string;
  children?: React.ReactNode;
  degree?: number;
  className?: string;
  borderStyle?: string;
}

const Border: React.FC<BorderProps> = ({
  variant,
  borderWidth = '1px',
  size,
  width = 'fit-content',
  height = 'fit-content',
  colorBorder,
  backgroundColor = 'transparent',
  rounded = 'rounded-[12px]',
  degree = 135,
  borderStyle = 'solid',
  children,
  className = '',
}) => {
  const getColorBorder = () => {
    switch (variant) {
      case 'stroke-gradient-dark':
        return 'var(--color-gradient-black)';
      case 'tooltip':
        return 'var(--color-stroke-tooltip)';
      case 'green':
        return 'var(--color-stroke-gradient-green)';
      case 'red':
        return 'var(--color-gradient-red)';
      case 'black':
        return 'var(--color-gradient-black)';
      default:
        return '';
    }
  };

  return (
    <div
      style={{
        width: `calc(${width} + (${borderWidth} * 2))`,
        height: `calc(${height} + (${borderWidth} * 2))`,
        padding: borderWidth,
        backgroundImage: getColorBorder(),
        borderStyle: borderStyle,
      }}
      className={`${getColorBorder()} ${colorBorder} ${rounded} flex justify-center items-center ${className}`}>
      <div
        className={`${rounded} ${backgroundColor} w-full h-full flex justify-center items-center`}>
        {children}
      </div>
    </div>
  );
};

export default Border;
