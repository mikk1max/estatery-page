import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ value, imageSrc, alt, size = 72 }) => {
  return (
    <div style={{ width: `${size}px`, height: `${size}px`, position: 'relative' }}>
      <CircularProgressbar
        value={value}
        maxValue={100}
        styles={{
          path: {
            strokeWidth: 3,
            stroke: '#6851ff',
            strokeLinecap: 'round',
            transition: 'stroke-dashoffset 2s ease-out',
          },
          trail: {
            stroke: '#f4effe',
            strokeWidth: 3
          },
        }}
      />
      <img
        src={imageSrc['1x']}
        srcSet={`${imageSrc['1x']} 1x, ${imageSrc['2x']} 2x`}
        alt={alt}
        style={{
          width: '85%',
          height: '85%',
          borderRadius: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default CircularProgress;
