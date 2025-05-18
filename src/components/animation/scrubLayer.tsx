import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollFeature = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // control scrub range
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]); // scroll scrub effect
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0]);

  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
};

export default ScrollFeature;
