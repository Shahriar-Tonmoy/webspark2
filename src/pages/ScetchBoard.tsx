import React from 'react';
import { SketchField, Tools } from 'react-sketch';

const Sketchboard = () => {
  return (
    <div className='bg-white h-screen w-screen'>
    <SketchField
      width="1024px"
      height="768px"
      tool={Tools.Pencil}
      lineColor="black"
      lineWidth={3}
    />
    </div>
  );
};

export default Sketchboard;
