import React from "react";
import { useState } from "react";
import Section1 from "../sections/Section1";

function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("hello handle click");
  };
  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };

  const justClick = (just, e) => {
    console.log("just click " + just, e.target);
  };

  //  State
  let nameA = "Mario";
  const changeA = () => {
    nameA = "Orio";
    console.log(nameA);
  };

  const [nameB, setNameB] = useState("I'll Change when you click");
  const [age, setAge] = useState(25);

  const changeB = () => {
    setNameB("Im Change !");
    setAge(26);
  };
  return (
    <div>
      <div className="section">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={handleClick}>Hand Click</button>
      </div>

      <div className="section">
        <p>On click รับพารามิเตอร์ </p>
        <button onClick={() => handleClickAgain("jirapon")}>
          Click me pass parameter
        </button>
        <button onClick={(e) => justClick("just", e)}>Just click</button>
        <p>About state</p>
        <button onClick={changeA}>This not change on page </button>
        <button onClick={changeB}>This Change on Page</button>
        <p>
          This Change :{" "}
          <span>
            {nameB} / My Age :{age}
          </span>
        </p>
      </div>
      <div className="section">
            <h2>Outputting List </h2>
            <Section1/>
      </div>
    </div>
  );
}

export default Home;
