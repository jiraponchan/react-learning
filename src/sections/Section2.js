import React from "react";
import Square from "../More/Square";
import "../Tic-tac.css";

function Section2() {
  const Board = () => {
    return (
      <div className="board">
        <div className="row">
          <Square value={"X"} />
          <Square value={"X"} />
          <Square value={"X"} />
        </div>
        <div className="row">
          <Square value={"X"} />
          <Square value={"X"} />
          <Square value={"X"} />
        </div>
        <div className="row">
          <Square value={"X"} />
          <Square value={"X"} />
          <Square value={"X"} />
        </div>
      </div>
    );
  };

  return (
    <div className="box">
      <Board value={"X"} />
    </div>
  );
}

export default Section2;
