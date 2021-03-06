import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Button from "./Button";
import Clock from "./Clock";
import CasetteButtons from "./CasetteButtons";
import dingaling from "../assets/sounds/dingaling.mp3";

import {
  POMODORO,
  TWENTY_FIVE_MIN,
  settings,
  SHORT_BREAK,
  LONG_BREAK,
} from "./constants";

const Pomos = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(TWENTY_FIVE_MIN);
  const [mode, setMode] = useState(POMODORO);
  const notification = new Audio(dingaling);

  const [pomodoros, setPomodoros] = useState(4);

  const setNextMode = (mode) => {
    setTime(settings[mode].time);
    setStart(false);
    setMode(mode);
  };

  useEffect(() => {
    if (start) {
      let id = setInterval(() => {
        if (time - 1 === 0) {
          notification.play();
          let nextMode;
          if (mode !== POMODORO) {
            nextMode = POMODORO;
          } else {
            if (pomodoros > 1) {
              nextMode = SHORT_BREAK;
              setPomodoros(pomodoros - 1);
            } else {
              nextMode = LONG_BREAK;
              setPomodoros(4);
            }
          }

          setNextMode(nextMode);
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
      <div className="mb-5">
        <YouTube
          videoId="5qap5aO4i9A"
          opts={{
            height: "350",
            width: "600",
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          }}
        />
      </div>
      <CasetteButtons {...{ mode, setNextMode }} />
      <Clock
        time={time}
        background={settings[mode].frontBackground}
        textColor={settings[mode].textColor}
      />
      <div className="m-10">
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
