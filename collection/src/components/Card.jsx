// Card.jsx
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Card = ({ ceilCoordinates }) => {
  const controls = useAnimation();

  const onDragEnd = (event, info) => {
    const dropX = info.point.x;
    const dropY = info.point.y;

    const cellIndex = findCellIndex(dropX, dropY, ceilCoordinates);

    if (cellIndex !== -1) {
      const { left, top } = ceilCoordinates[cellIndex];
      controls.start({ x: left, y: top, position: 'absolute', top: '0', left: '0'});
    }
    else {
      controls.start({ position: 'relative'});
    }
  };
  
  const findCellIndex = (dropX, dropY, coordinates) => {
    for (let i = 0; i < coordinates.length; i++) {
      const { left, right, top, bottom } = coordinates[i];
      if (dropX > left && dropX < right && dropY > top && dropY < bottom) {
        return i;
      }
    }
    return -1;
  };

  return (
    <motion.div
      className='card'
      drag
      dragSnapToOrigin
      animate={controls}
      onDragEnd={onDragEnd}
    >
      Ячейка
    </motion.div>
  );
};

export default Card;
