import React from "react";
import { useState } from "react";

function About() {

  const [cout, setCout] = useState(0);
  // const [myStr,setMyStr] = useState('')
  
  // console.log(myStr)
 
  const compa = () => {
   let str='ABCD'
    const an = "ABCD";
    let sum2 = 0;
    for (let i = 0; i < 4; i++) {
      let a = str.charAt(i) == an.charAt(i) ? 1 : 0;
      // console.log("มาจาก a " + a);
      sum2 += a;
    }
    console.log("ตำแหน่งถูก " + sum2);
    setCout(cout + 1);
    

    let sumCout = cout+1
    // let arr = "ADCR";
    // let re = "ABCD";
    let sum1 = 0
    for(let i =0;i<4;i++){
      const inc =  str.includes(an.charAt(i)) ? 1 : 0
      sum1 += inc
      
    }
    console.log('ตัวที่ถูก '+ sum1)
    let win = sum2 === 4 ? 'Jirapon' : ''
    console.log(win)
    console.log('จำนวนครั้งที่กด '+ sumCout)

    console.log('-------------')
   
  };


  return (
    <div>
      <div className="randomInput">
        <p>{cout}</p>
        <button>click</button>
        <p>สุ่ม</p>
        {/* <input type="text" onChange={(e)=> setMyStr(e.target.value)} /> */}
        <button onClick={compa}>Submit</button>
      </div>
      <div className="result">
        <table>
          <thead>
          <tr>
            <th>คำตอบ</th>
            <th>สุ่ม</th>
            <th>ตัวที่ถูก</th>
            <th>ตำแหน่งที่ถูก</th>
            <th>ครั้งที่</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>ABCD</td>
            <td>AAAA</td>
            <td>1</td>
            <td>{compa.sum2}</td>
            <td>{cout}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;
