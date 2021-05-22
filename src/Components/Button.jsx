import React, { useEffect, useState } from "react";

import pressSound from "../assets/sounds/button-press.wav";
import releaseSound from "../assets/sounds/button-release.wav";

const Button = ({ onClickHandler, pressedParent, children }) => {
  const [pressed, setPressed] = useState(false);

  // raise button if another is pressed
  const styles = pressed
    ? { transform: "translateY(-2px)", transition: "transform 34ms" }
    : {};
  useEffect(() => {
    setPressed(pressedParent);
  }, [pressedParent]);

  const playAudio = () => {
    setPressed(!pressed);
    const release = new Audio(releaseSound);
    const press = new Audio(pressSound);
    pressed ? release.play() : press.play();
  };

  return (
    <button
      onClick={() => {
        onClickHandler();
      }}
      onMouseDown={playAudio}
      className="pushable"
    >
      <span className="shadow"></span>
      <span className={"edge"}></span>
      <span className={"front"} style={styles}>
        {children}
      </span>
    </button>
  );
};

export default Button;
