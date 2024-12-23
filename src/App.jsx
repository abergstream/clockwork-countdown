import React, { useEffect, useState } from "react";
import "./App.css";
import useTimer from "easytimer-react-hook";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AnalogTimer from "./Pages/AnalogTimer/AnalogTimer";
import DigitalTimer from "./Pages/DigitalTimer/DigitalTimer";
import TimesUp from "./Pages/TimesUp/TimesUp";
import TimerPause from "./Pages/TimerPause/TimerPause";
import TextTimer from "./Pages/TextTimer/TextTimer";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/LadingPage/LandingPage";
import SetTimer from "./Pages/SetTimer/SetTimer";

function App() {
  const navigate = useNavigate();
  const [timer, isTargetAchieved] = useTimer({
    updateWhenTargetAchieved: true,
  });
  const [intervalMode, setIntervalMode] = useState(false);
  const [pauseMode, setPauseMode] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [startPath, setStartPath] = useState("/analogTimer");
  const [timerValue, setTimerValue] = useState(5);
  const [isStarted, setIsStarted] = useState(false);
  const location = useLocation();
  const pauseValue = 5;
  const startTimer = () => {
    setIsStarted(true);
    timer.start({
      countdown: true,
      // startValues: { seconds: isPause ? pauseValue : timerValue },
      startValues: { minutes: isPause ? pauseValue : timerValue },
    });
  };

  useEffect(() => {
    if (isTargetAchieved && intervalMode) {
      if (pauseMode) {
        setIsPause((prev) => !prev);
      } else {
        startTimer();
      }
    }
    if (isTargetAchieved && !intervalMode) {
      setIsStarted(false);
      navigate("/timesUp");
    }
  }, [isTargetAchieved]);

  useEffect(() => {
    if (isStarted) {
      if (isPause) {
        navigate("/pause");
      } else {
        navigate(startPath ? startPath : "/analogTimer");
      }
      startTimer();
    }
  }, [isPause]);

  useEffect(() => {
    if (startPath && isStarted && !isPause) {
      navigate(startPath);
    }
  }, [startPath]);

  const timerFunctions = {
    timer: timer,
    setIsPause: setIsPause,
    setIsStarted: setIsStarted,
  };
  return (
    <>
      {location.pathname != "/" &&
        location.pathname != "/timesUp" &&
        location.pathname != "/pause" && (
          <Header
            intervalMode={intervalMode}
            startPath={startPath}
            setStartPath={setStartPath}
          />
        )}
      <Routes>
        <Route index element={<LandingPage />} />
        <Route
          path={"/timerStart"}
          element={
            <SetTimer
              timerValue={timerValue}
              setTimerValue={setTimerValue}
              intervalMode={intervalMode}
              setIntervalMode={setIntervalMode}
              pauseMode={pauseMode}
              setPauseMode={setPauseMode}
              startTimer={startTimer}
              startPath={startPath}
            />
          }
        />
        <Route
          path="/analogTimer"
          element={<AnalogTimer timerFunctions={timerFunctions} />}
        />
        <Route
          path="/digitalTimer"
          element={<DigitalTimer timerFunctions={timerFunctions} />}
        />
        <Route
          path="/textTimer"
          element={<TextTimer timerFunctions={timerFunctions} />}
        />
        <Route
          path="/timesUp"
          element={<TimesUp timerFunctions={timerFunctions} />}
        />
        <Route
          path="/pause"
          element={<TimerPause timerFunctions={timerFunctions} />}
        />
      </Routes>
    </>
  );
}

export default App;
