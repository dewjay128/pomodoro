import React, { useState, useEffect } from "react";
import Button from "./Button";
import {
  POMODORO,
  SHORT_BREAK,
  LONG_BREAK,
  FIVE_MIN,
  FIFTEEN_MIN,
  TWENTY_FIVE_MIN,
} from "./constants";

const CasetteButtons = ({ mode, nextMode }) => {
  const [pomoPressed, setPomoPressed] = useState(true);
  const [shortPressed, setShortPressed] = useState(false);
  const [longPressed, setLongPressed] = useState(false);

  const changeMode = (mode) => {
    setPomoPressed(mode === POMODORO);
    setShortPressed(mode === SHORT_BREAK);
    setLongPressed(mode === LONG_BREAK);
  };

  useEffect(() => {
    changeMode(mode);
  }, [mode]);

  return (
    <div className="m-5">
      <Button
        onClickHandler={() => {
          nextMode(POMODORO);
          changeMode(POMODORO);
        }}
        pressedParent={pomoPressed}
      >
        Pomodoro
      </Button>
      <Button
        onClickHandler={() => {
          nextMode(SHORT_BREAK);
          changeMode(SHORT_BREAK);
        }}
        pressedParent={shortPressed}
      >
        Short Break
      </Button>
      <Button
        onClickHandler={() => {
          nextMode(LONG_BREAK);
          changeMode(LONG_BREAK);
        }}
        pressedParent={longPressed}
      >
        Long Break
      </Button>
    </div>
  );
};

export default CasetteButtons;
