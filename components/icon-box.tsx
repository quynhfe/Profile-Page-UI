import React from 'react';
import clsx from 'clsx';

interface IconBoxProps {
  className?: string;
  children: React.ReactNode;
}

const IconBox: React.FC<IconBoxProps> = ({ className, children }) => {
  return (
    <div className={clsx('flex justify-center items-center', className)}>
      {children}
    </div>
  );
};

export default IconBox;
