import React, { useState, useEffect } from "react";
import Button from "./Button";
import Clock from "./Clock";
import CasetteButtons from "./CasetteButtons";
import dingaling from "../assets/sounds/dingaling.mp3";

import {
  POMODORO,
  SHORT_BREAK,
  LONG_BREAK,
  FIVE_MIN,
  FIFTEEN_MIN,
  TWENTY_FIVE_MIN,
} from "./constants";

const settings = {
  [POMODORO]: {
    time: TWENTY_FIVE_MIN,
    background: "#F3E4C0",
    frontBackground: "#FB6A69",
    textColor: "#FFFFFF",
    next: SHORT_BREAK,
  },
  [SHORT_BREAK]: {
    time: FIVE_MIN,
    background: "#DCE4E8",
    frontBackground: "#FFD65A",
    textColor: "#FFFFFF",
    next: LONG_BREAK,
  },
  [LONG_BREAK]: {
    time: FIFTEEN_MIN,
    background: "#91B4E8",
    frontBackground: "#FDFDFD",
    textColor: "#34363C",
    next: POMODORO,
  },
};

const Pomos = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(TWENTY_FIVE_MIN);
  const [mode, setMode] = useState(POMODORO);

  const nextMode = (mode) => {
    setTime(settings[mode].time);
    setStart(false);
    setMode(mode);
  };

  useEffect(() => {
    const notification = new Audio(dingaling);
    if (start) {
      let id = setInterval(() => {
        if (time - 1 === 0) {
          notification.play();
          nextMode(settings[mode].next);
        } else {
          setTime(time - 1);
        }
      }, 1000);
      return () => clearInterval(id);
    }
  });

  useEffect(() => {
    setStart(false);
  }, [mode]);

  return (
    <div
      style={{
        backgroundColor: settings[mode].background,
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CasetteButtons {...{ mode, nextMode }} />
      <Clock
        time={time}
        background={settings[mode].frontBackground}
        textColor={settings[mode].textColor}
      />
      <div className="m-5">
        <Button
          onClickHandler={() => {
            setStart(!start);
          }}
          pressedParent={start}
        >
          {start ? "Stop" : "Start"}
        </Button>
      </div>
    </div>
  );
};

export default Pomos;
