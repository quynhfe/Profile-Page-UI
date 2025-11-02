import React from 'react';

interface LineProps {
  totalHeight: number;
  color?: string;
  gap?: number;
  rounded?: string;
  className?: string;
}

const Line: React.FC<LineProps> = ({
  totalHeight,
  color = '#3E3E3E',
  gap = 4,
  rounded = 'rounded-full',
  className,
}) => {
  const calculateDashes = () => {
    let bestCount = 1;
    let bestDashHeight = 1;

    for (let dashHeight = 4; dashHeight <= 20; dashHeight++) {
      const totalDashes = Math.floor(totalHeight / (dashHeight + gap));

      if (totalDashes >= 2) {
        const actualHeight =
          (totalDashes - 1) * dashHeight +
          2 * (dashHeight / 2) +
          totalDashes * gap;

        if (Math.abs(actualHeight - totalHeight) < dashHeight + gap) {
          bestCount = totalDashes;
          bestDashHeight = dashHeight;
          break;
        }
      }
    }

    return { count: bestCount, dashHeight: bestDashHeight };
  };

  const { count, dashHeight } = calculateDashes();

  return (
    <div
      className={`flex flex-col items-center ${className}`}
      style={{ gap }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`w-px ${rounded}`}
          style={{
            height: i === 0 || i === count - 1 ? dashHeight / 2 : dashHeight,
            background: color,
            // width: '1px',
          }}
        />
      ))}
    </div>
  );
};

export default Line;
