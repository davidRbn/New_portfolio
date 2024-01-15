import { motion } from "framer-motion";

const AnimationScroll = ({ children, delayAnim = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 0.8,
          delay: delayAnim,
        },
      }}
      viewport={{ once: false }}
      transition={{ delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationScroll;
