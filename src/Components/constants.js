export const TWENTY_FIVE_MIN = 25 * 60;
export const FIVE_MIN = 5 * 60;
export const FIFTEEN_MIN = 15 * 60;

export const POMODORO = "POMODORO";
export const SHORT_BREAK = "SHORT_BREAK";
export const LONG_BREAK = "LONG_BREAK";

export const settings = {
  [POMODORO]: {
    time: TWENTY_FIVE_MIN,
    background: "#F3E4C0",
    frontBackground: "#FB6A69",
    textColor: "#FFFFFF",
  },
  [SHORT_BREAK]: {
    time: FIVE_MIN,
    background: "#DCE4E8",
    frontBackground: "#FFD65A",
    textColor: "#FFFFFF",
  },
  [LONG_BREAK]: {
    time: FIFTEEN_MIN,
    background: "#91B4E8",
    frontBackground: "#FDFDFD",
    textColor: "#34363C",
  },
};
