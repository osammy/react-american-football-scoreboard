import React, {useState} from "react";
import BottomRow from "./BottomRow";

function ScoreBoard(props) {
  const [quarter, incrementQuarter] = useState(1);

  const handleIncrementquarterValue = () => {
    incrementQuarter(quarter + 1);
  };

  const { homeScore, awayScore, timer } = props;

  return (
    <section className="scoreboard">
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>

          {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <div className="home__score">{homeScore}</div>
        </div>
        <div className="timer">{timer}</div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{awayScore}</div>
        </div>
      </div>
      <BottomRow quarter={quarter} />
    </section>
  );
}

export default ScoreBoard;
