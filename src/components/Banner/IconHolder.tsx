import { motion, AnimatePresence } from "framer-motion";
interface IconHolderProps {
    icon: any,
    text: string
}

const ANIMATION_DURATION_S = 0.8;
const IconHolder = ({ icon, text }: IconHolderProps) => {
  return (
    <div className="icon-holder">
      <AnimatePresence>
        <motion.div
          className="icon-holder__icon"
          key={text + "icon"}
          initial={{ y: "-100%", opacity: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION_S, ease: "easeInOut" }}
        >
          <img src={icon.src} alt={icon.alt} />
        </motion.div>
        <motion.h1
          className="icon-holder__text"
          key={text}
          initial={{ y: "100%", opacity: 0 }}
          exit={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: ANIMATION_DURATION_S, ease: "easeInOut" }}
        >
          {text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

export default IconHolder;