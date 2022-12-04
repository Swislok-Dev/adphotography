import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollingText({ id, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.figcaption style={{ opacity, x }} id={id}>
        {title}
      </motion.figcaption>
    </div>
  );
}

export default ScrollingText;
