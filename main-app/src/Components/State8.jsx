import { useState } from "react";

export default function State8() {
  const [bill, setBill] = useState(0);

  const updateBill = (inc) => { //Parameter as increment
    setBill(bill => bill + inc);
  };

  const addRs1 = () => {
    updateBill(1);
  };

  const addRs3 = () => {
    updateBill(3);
  };

  const addRs5 = () => {
    updateBill(5);
  };

  const addRs100 = () => {
    updateBill(100);
  };

  const addRs1000 = () =>{
    updateBill(1000);
  }

  return (
    <>
      <h1>Bill = {bill}</h1>
      <br /><br />
      Add Tip Amount <br />
      <button onClick={addRs1}>+1</button>
      <button onClick={addRs3}>+3</button>
      <button onClick={addRs5}>+5</button>
      <button onClick={addRs100}>+100</button>
      <button onClick={addRs1000}>+1000</button>
    </>
  );
}
