import React, { useEffect, useState } from "react";
import "./App.css";
import useTimer from "easytimer-react-hook";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./Pages/Start/Start";
import TimerStart from "./Pages/TimerStart/TimerStart";

function App() {
  const [timer, isTargetAchieved] = useTimer({
    updateWhenTargetAchieved: true,
  });
  const [isIntervalMode, setIsIntervalMode] = useState(true);
  const [isPauseBetweenIntervals, setIsPauseBetweenIntervals] = useState(true);
  const [isPause, setIsPause] = useState(false);
  const [pauseValue, setpauseValue] = useState(3);
  const [timerValue, setTimerValue] = useState(5);

  const startTimer = () => {
    timer.start({
      countdown: true,
      startValues: { seconds: isPause ? pauseValue : timerValue },
    });
    setTimeout(
      () => {
        setIsPause(!isPause);
      },
      isPause ? `${pauseValue}000` : `${timerValue}000`
    );
  };

  useEffect(() => {
    if (isTargetAchieved && isIntervalMode) {
      startTimer();
    }
  }, [isTargetAchieved]);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Start />} />
        <Route path={"/timer"} element={<TimerStart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
