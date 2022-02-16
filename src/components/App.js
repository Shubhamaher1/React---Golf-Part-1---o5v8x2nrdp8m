import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";
// import React from 'react'

function App() {
  const [renderBall, setRenderBall] = useState(false);
  const [position, setPosition] = useState(0);
  const [ballPosition, setBallPosition] = useState({ left: 0 });
  function buttonClickHandler() {
    setRenderBall(true);
  }
  function updateBall(event) {
    if (event.key === "ArrowRight") {
      setBallPosition((prev) => ({ left: prev.left + 5 }));
    }
  }
  function renderBallOrButton() {
    if (renderBall) {
      return (
        <div
          className="ball"
          style={{ position: "absolute", left: ballPosition.left }}
        ></div>
      );
    } else {
      return <button onClick={buttonClickHandler}>Click For One Ball</button>;
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", updateBall);
  }, []);
  return <div className="playground">{renderBallOrButton()}</div>;
}

export default App;
