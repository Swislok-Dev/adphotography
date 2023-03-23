import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollingText({ id, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.9, 1],
    [0, 1, 0.7, 0]
  );

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.figcaption style={{ opacity }} id={id}>
        {title}
      </motion.figcaption>
    </div>
  );
}

export default ScrollingText;
