import { motion, AnimatePresence } from "framer-motion";

interface ImageHolderProps {
    img: any,
    className?: any
}

const TRANSITION_TIME_OPACITY_S = 1;
const TRANSITION_TIME_ROTATE_S = { MIN: 1.5, MAX: 2.5 };

const getRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min;
};

const getRandomDelay = (max_s: number) => {
  return Math.random() * max_s;
};

const ImageHolder = ({ img, className }: ImageHolderProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key={img.src}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: [-6, 0, 6] }}
        transition={{
          duration: TRANSITION_TIME_OPACITY_S,
          rotate: {
            yoyo: Infinity,
            duration: getRandomNumberBetween(
              TRANSITION_TIME_ROTATE_S.MIN,
              TRANSITION_TIME_ROTATE_S.MAX
            ),
            delay: getRandomDelay(TRANSITION_TIME_ROTATE_S.MAX),
          },
        }}
        className={className ? className : undefined}
      >
        <img src={img.src} alt={img.alt} />
      </motion.div>
    </AnimatePresence>
  );
};
  
  export default ImageHolder;