import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const Loader = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Motion values for smooth number animation
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 20 });
  const animatedPercent = useTransform(springValue, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onFinish, 800); 
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onFinish]);

  // update motion value when percent changes
  useEffect(() => {
    motionValue.set(percent);
  }, [percent, motionValue]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.p
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span>{animatedPercent}</motion.span>%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
