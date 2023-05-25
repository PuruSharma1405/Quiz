import React, { useEffect, useState, useRef } from "react";

function Timer(props) {
  const [time, setTime] = useState(props.mins * 60 + props.secs);
  const intervalRef = useRef();

  const handleTick = () => {
    setTime((prevTime) => {
      if (prevTime === 0) {
        props.submithandler();
        return prevTime;
      }
      return prevTime - 1;
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleTick, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      props.submithandler();
    }

    return () => {
      if (window.performance && performance.navigation.type === 1) {
        alert("Page reloaded, submitting the test");
        props.submithandler();
      }
    };
  }, [time]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return { minutes, seconds };
  };

  const { minutes, seconds } = formatTime(time);

  return (
    <div
      style={{
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "rgb(26, 26, 26, 0.5)",
          color: "white",
          padding: "2% 2% 2% 2%",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2.5em" }}>{minutes}</h1>
      </div>
      <div
        style={{
          background: "rgb(26, 26, 26, 0.5)",
          color: "white",
          padding: "2% 2% 2% 2%",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2.5em" }}>:</h1>
      </div>
      <div
        style={{
          background: "rgb(26, 26, 26, 0.5)",
          color: "white",
          padding: "2% 2% 2% 2%",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2.5em" }}>{seconds}</h1>
      </div>
    </div>
  );
}

export default Timer;
