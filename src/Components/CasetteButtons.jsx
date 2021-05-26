import React, { useState, useEffect } from "react";
import Button from "./Button";
import { POMODORO, SHORT_BREAK, LONG_BREAK } from "./constants";

const CasetteButtons = ({ mode, setNextMode }) => {
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
          setNextMode(POMODORO);
          changeMode(POMODORO);
        }}
        pressedParent={pomoPressed}
      >
        Pomodoro
      </Button>
      <Button
        onClickHandler={() => {
          setNextMode(SHORT_BREAK);
          changeMode(SHORT_BREAK);
        }}
        pressedParent={shortPressed}
      >
        Short Break
      </Button>
      <Button
        onClickHandler={() => {
          setNextMode(LONG_BREAK);
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
