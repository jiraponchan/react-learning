import React from "react";


function Contact() {
  const RandomStr = () => {
    let setRandom = "ABCDEFG";
    let str = "";
    let count = 0;
    const name = "Jirapon";

    let winnig = true;
    do {
      let s = "";
      let setLenght = setRandom.length;
      for (let i = 0; i < 4; i++) {
        s += setRandom.charAt(Math.floor(Math.random() * setLenght));
        str = s;
      }
      var result = checkWin(str);
      count++;
      if (result) {
        console.log(`ชื่อ : ${name} สุ่มไปทั้งหมด ${count} ครั้ง`);
        winnig = false;
      } else {
        winnig = true;
      }
    } while (winnig);
  };

  const checkWin = (str) => {
    let an = "ABCD";
    let sumCheck = 0;
    // let countCheck = 0;
    for (let i = 0; i < 4; i++) {
      let countCheck = str.charAt(i) == an.charAt(i) ? 1 : 0;
      sumCheck += countCheck;

      // if (str.charAt(i) === an.charAt(i)) {
      //   sumCheck++;
      // }
    }
    if (sumCheck === 4) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      {/* <p>{cout}</p> */}
      <input type="text" />
      <button onClick={RandomStr}>ตรวจ</button>
      {/* <p>{this.sum1}</p>
            <p>{this.sum2}</p> */}
      <input type="text" name="random" id="1" />
    </div>
  );
}

export default Contact;
