// Card.jsx
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Card = ({ ceilCoordinates }) => {
  const controls = useAnimation();

  const onDragEnd = (event, info) => {
    const dropX = info.point.x;
    const dropY = info.point.y;

    // Update these coordinates based on your layout
    const cellIndex = findCellIndex(dropX, dropY, ceilCoordinates);

    if (cellIndex !== -1) {
      controls.start({ x: ceilCoordinates[cellIndex].x, y: ceilCoordinates[cellIndex].y });
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
      Карточка
    </motion.div>
  );
};

export default Card;
