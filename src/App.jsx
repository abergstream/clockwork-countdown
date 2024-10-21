import React, { useEffect, useState } from "react";
import "./App.css";
import useTimer from "easytimer-react-hook";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./Pages/Start/Start";
import TimerStart from "./Pages/TimerStart/TimerStart";
import Nav from "./Componens/Nav/Nav";
import Pause from "./Pages/Pause/Pause";
import AnalogTimer from "./Pages/AnalogTimer/AnalogTimer";

function App() {
  const [timer, isTargetAchieved] = useTimer({
    updateWhenTargetAchieved: true,
  });
  const [intervalMode, setIntervalMode] = useState(false);
  const [pauseMode, setPauseMode] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const pauseValue = 3;
  const [timerValue, setTimerValue] = useState(5);

  const startTimer = () => {
    timer.start({
      countdown: true,
      startValues: { minutes: isPause ? pauseValue : timerValue },
    });
    if (intervalMode) {
      setTimeout(
        () => {
          setIsPause(!isPause);
        },
        isPause ? `${pauseValue}000` : `${timerValue}000`
      );
    }
  };

  useEffect(() => {
    if (isTargetAchieved && intervalMode) {
      startTimer();
    }
  }, [isTargetAchieved]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Start />} />
          <Route
            path={"/timerStart"}
            element={
              <TimerStart
                timerValue={timerValue}
                setTimerValue={setTimerValue}
                intervalMode={intervalMode}
                setIntervalMode={setIntervalMode}
                pauseMode={pauseMode}
                setPauseMode={setPauseMode}
                timer={timer}
                startTimer={startTimer}
                isPause={isPause}
              />
            }
          />
          <Route path="/pause" element={<Pause />} />
          <Route path="/analogTimer" element={<AnalogTimer timer={timer} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
