const Clock = ({ time, background, textColor }) => {
  const seconds = time % 60;

  return (
    <div
      className="bg-red-400 text-white flex justify-center items-center rounded-xl font-bold text-9xl w-96 h-60"
      style={{
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
        background: background,
        color: textColor,
      }}
    >
      <div>{Math.floor(time / 60)}:</div>
      <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
    </div>
  );
};

export default Clock;
