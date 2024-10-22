import React from "react";
import Header from "../../Components/Header/Header";
import ButtonAbort from "../../Components/Buttons/Buttons";

const DigitalTimer = ({ timerFunctions }) => {
  const { timer } = timerFunctions;

  return (
    <div className="container">
      <h3>
        {timer.getTimeValues().minutes}:{timer.getTimeValues().seconds}
      </h3>
      <ButtonAbort timerFunctions={timerFunctions} />
    </div>
  );
};

export default DigitalTimer;
