import React from "react";

function Myfucn1(props) {
  function Random() {
    // const answer = ["A", "B", "C", "D"];
    const input = ["A", "B", "C", "D", "E", "F", "G"];
    let resultRandom = [];
    const name = "My turn";
    let count = 0;


    let iscorrect = true
    do {
      for (let i = 0; i < 4; i++) {
        let d = "";
        d = input[Math.floor(Math.random() * input.length)];
        resultRandom.push(d);
      }
      var result = Check(resultRandom);
      count++;
      if (result) {
        console.log(`ชื่อ : ${name} สุ่มไปทั้งหมด ${count} ครั้ง`);
        iscorrect = false;
      } else {
        resultRandom = [];
      }
    } while (iscorrect);
  }




  //******************************
  function Check(resultRandom) {
    const answer = ["A", "B", "C", "D"];
    const check = resultRandom;
    let countcheck = 0;
    let count = 0;
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    var unique = resultRandom.filter(onlyUnique);
    // console.log("check",check)
    for (let i = 0; i < unique.length; i++) {
      if (answer[i] === check[i]) {
        countcheck++;
      }
      if (
        unique[i] === "A" ||
        unique[i] === "B" ||
        unique[i] === "C" ||
        unique[i] === "D"
      ) {
        count++;
      }
    }

    if (countcheck === 4 && count === 4) {
      console.log("คำตอบที่ถูกคือ", resultRandom);
      return true;
    } else return false;
  }

  return <div>

      <button onClick={Random}>click</button>
  </div>;
}

export default Myfucn1;
