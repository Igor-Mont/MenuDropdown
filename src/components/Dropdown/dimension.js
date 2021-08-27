import React, { useCallback, useLayoutEffect, useState } from 'react';

const getDimensions = element => element.getBoundingClientRect()

export function useDimensions(responsive = true) {
  const [dimensions, setDimensions] = useState(null);
  const [element, setElement] = useState(null);

  const hook = useCallback(e => setElement(e), []);

  useLayoutEffect(() => {
    if (element) {
      const uptadeDimensions = () => {
        window.requestAnimationFrame(() => {
          setDimensions(getDimensions(element))
        })
      }

      uptadeDimensions();

      if(responsive) {
        window.addEventListener('resize', uptadeDimensions);

        return () => {
          window.removeEventListener('resize', uptadeDimensions)
        }
      }
    }
  }, [responsive, element, hook, responsive, setDimensions]);

  return [hook, dimensions, element];
}