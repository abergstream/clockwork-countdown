import React from "react";
import { motion } from "framer-motion";
const TimerStart = () => {
  return (
    <div>
      <motion.h3 animate={{ opacity: [0, 1] }}>Timer</motion.h3>
    </div>
  );
};

export default TimerStart;
