import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <button
      className="abort-button"
      onClick={() => {
        setIsClicked(true);
      }}
    >
      ABORT TIMER
    </button>
  );
};

export default ButtonAbort;
