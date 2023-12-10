import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './styles/App.css'

const App = () => {
   const controls = useAnimation();

   const onDragEnd = (event, info) => {
      const dropX = info.point.x;
      const dropY = info.point.y;

      if (dropX > 0 && dropX < 100 && dropY > 0 && dropY < 100) {
        controls.start({ x: 0, y: 0 }); // Reset card position
      }

      if (dropX > 120 && dropX < 220 && dropY > 0 && dropY < 100) {
        controls.start({ x: 120, y: 0 }); // Set card position for Cell 2
      }
   };

   return (
      <div style={{ display: 'flex' }}>
         <motion.div className="cell">
            Cell 1
         </motion.div>
         <motion.div className="cell">
            Cell 2
         </motion.div>
         <motion.div className="card" 
            drag
            dragSnapToOrigin
            animate={controls}
            onDragEnd={onDragEnd}>
            Drag me!
         </motion.div>
      </div>
   );
};

export default App;