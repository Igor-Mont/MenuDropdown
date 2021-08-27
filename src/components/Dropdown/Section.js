import React, { useContext } from 'react';
import { Context } from './Provider';
import { motion } from 'framer-motion'

// import { Container } from './styles';

export function DropdownSection({ option }) {
  const { updateOptionProps, cachedId } = useContext(Context);

  const { id, optionDimension, contentDimensions, optionCenterX } = option;

  const contentWidth = contentDimensions?.width || 0;
  const x = optionCenterX - contentWidth / 2;

  const isActive = cachedId == id;

  return (
    <motion.div 
      className="dropdown-section"
      initial={{
        x,
      }}
      animate={{
        x,
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? "unset" : 'none'
      }}
      transition={{
        ease: 'easeOut',
        opacity: { duration: 0.2 }
      }}
    >
      <option.WrappedContent />
    </motion.div>
  );
}
