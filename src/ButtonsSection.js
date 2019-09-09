import React from "react";

function ButtonsSection(props) {

  const {incrementScore, incrementQuarter} = props;

  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button
          onClick={() => {
            incrementScore("lions",7);
          }}
          className="homeButtons__touchdown"
        >
          Home Touchdown
        </button>
        <button
          onClick={() => {
            incrementScore("lions",3);
          }}
          className="homeButtons__fieldGoal"
        >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          onClick={() => {
            incrementScore("tigers",7);;
          }}
          className="awayButtons__touchdown"
        >
          Away Touchdown
        </button>
        <button
          onClick={() => {
            incrementScore("tigers",3);
          }}
          className="awayButtons__fieldGoal"
        >
          Away Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          onClick={incrementQuarter}
          className="awayButtons__fieldGoal"
        >
          Increment Quarter
        </button>
      </div>
    </section>
  );
}

export default ButtonsSection;