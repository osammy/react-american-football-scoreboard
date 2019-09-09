//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import ButtonsSection from "./ButtonsSection";
import ScoreBoard from "./ScoreBoard";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const [timer, setTimer] = useState("00:00");



  useEffect(start);

  const incrementScore = (team, amount) => {
    team = team.toLowerCase();
    const teams = ["tigers", "lions"];
    if (!teams.includes(team)) alert("You passed in a wrong team!");

    if (team === "tigers") setAwayScore(awayScore + amount);
    else setHomeScore(homeScore + amount);
  };
  function start() {
    setTimeout(handleIncrementTimer, 1000);
  }
  function handleIncrementTimer() {
    const minAndSec = timer.split(":");
    const sec = minAndSec[1];
    const min = minAndSec[0];

    let secInNum = Number(sec);
    let minInNum = Number(min);

    if (secInNum < 60) {
      secInNum += 1;
      if (secInNum < 10) minAndSec[1] = "0" + secInNum;
      else minAndSec[1] = secInNum;
    } else {
      minAndSec[1] = "00";
      if (minInNum < 60) {
        minInNum += 1;
        if (minInNum < 10) minAndSec[0] = "0" + minInNum;
        else minAndSec[0] = minInNum;
      }
      secInNum = 0;
      minInNum += 1;
    }

    const newTime = `${minAndSec[0]}:${minAndSec[1]}`;

    setTimer(newTime);
  }

  return (
    <div className="container">
      <ScoreBoard homeScore={homeScore} awayScore={awayScore} timer={timer} />
      <ButtonsSection  incrementScore={incrementScore} />
    </div>
  );
}

export default App;
