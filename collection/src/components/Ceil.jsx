// Ceil.jsx
import React, { useRef, useEffect } from 'react';

const Ceil = ({ onCeilLayout }) => {
  const ceilRef = useRef();

  useEffect(() => {
    if (ceilRef.current && onCeilLayout) {
      const rect = ceilRef.current.getBoundingClientRect();
      onCeilLayout(rect);
    }
  }, [onCeilLayout]);

  return (
    <div className='ceil' ref={ceilRef}>
      Ячейка
    </div>
  );
};

export default Ceil;
