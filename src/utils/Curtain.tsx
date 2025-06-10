import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface CurtainProps {
  onAnimationComplete: () => void;
}

const Curtain = ({ onAnimationComplete }: CurtainProps) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(true); // Initial animation state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onAnimationComplete();
    }, 1000); // Matches animation duration

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  useEffect(() => {
    setIsAnimating(true);

    const timer = setTimeout(() => {
      setIsAnimating(false);
      onAnimationComplete();
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname, onAnimationComplete]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ width: "100%" }} // Start fully covered
          animate={{ width: "0%" }} // Animate to hidden
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed top-0 left-0 h-full bg-black z-50"
        />
      )}
    </AnimatePresence>
  );
};

export default Curtain;
