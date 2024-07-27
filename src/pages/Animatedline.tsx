import React from 'react';

const AnimatedLine: React.FC = () => {
  return (
    <div className="relative h-8 w-full">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 w-full bg-black rounded-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-full bg-black transform skew-x-12 animate-line"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-black transform skew-x-12 -translate-x-full animate-line-reverse"></div>
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-4 w-4 bg-black rounded-full animate-circle"></div>
    </div>
  );
};

export default AnimatedLine;
