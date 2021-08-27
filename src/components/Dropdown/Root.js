import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';

import { Context } from './Provider';
import { DropdownSection } from './Section'

export function DropdownRoot() {
  const { options , cachedId, getOptionById } = useContext(Context);

  const cachedOption = useMemo(() => {
    getOptionById(cachedId)
  }, [cachedId, getOptionById]);

  let [width, height, x] = [0 ,0 ,0];

  if (cachedOption) {
    const { optionCenterX, contentDimensions } = cachedOption;

    width = contentDimensions?.width
    height = contentDimensions?.height
    x = optionCenterX - width / 2;
  }

  return (
    <div className="dropdown-root">
      <motion.div 
        className="dropdown-container"
        animate={{
          x,
          width,
          height,
        }}
      >
        <div>
          {options.map(item => (
            <DropdownSection key={item.id} option={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
