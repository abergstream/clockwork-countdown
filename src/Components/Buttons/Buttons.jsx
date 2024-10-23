import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const ButtonAbort = ({ timerFunctions }) => {
  const { timer, setIsPause, setIsStarted } = timerFunctions;
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (isClicked) {
      timer.stop();
      setIsPause(false);
      setIsStarted(false);
      navigate("/timerStart");
    }
  }, [isClicked]);
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      transition={{ ease: "easeOut", duration: 0.15 }}
      className="abort-button"
      onClick={() => {
        setIsClicked(true);
      }}
    >
      ABORT TIMER
    </motion.button>
  );
};

export default ButtonAbort;
