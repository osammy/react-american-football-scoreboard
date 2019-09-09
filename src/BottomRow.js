import React, {useState} from "react";
import "./App.css";

const BottomRow = (props) => {
const {quarter} = props;
const [downValue,incrementDownValue] = useState(0);
const [togoValue,incrementTogoValue] = useState(0);
const [ballOnValue,incrementBallOnValue] = useState(0);
// const [quarterValue,incrementquarterValue] = useState(0);
 
// const handleIncrementDownValue = () => {
//   incrementDownValue(downValue + 1);
// }

// const handleIncrementTogoValue = () => {
//   incrementTogoValue(togoValue + 1);
// }

// const handleIncrementBallOnValue = () => {
//   incrementDownValue(ballOnValue + 1);
// }






  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downValue}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{togoValue}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOnValue}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
