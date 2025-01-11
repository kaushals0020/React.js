import { useState } from "react";

export default function State7() {
  const [bill, setBill] = useState(0);

  const updateBill = () => {
    setBill((bill) => bill + 1); //Confusion
  };

  const addRs1 = () => {
    updateBill();
  };
  const addRs3 = () => {
    updateBill();
    updateBill();
    updateBill();
  };
  const addRs5 = () => {
    updateBill();
    updateBill();
    updateBill();
    updateBill();
    updateBill();
  };

  return (
    <>
      <h1>Bill = {bill}</h1>
      <br />
      <br />
      Add tip Amount <br />
      <button onClick={addRs1}>+1</button>
      <button onClick={addRs3}>+3</button>
      <button onClick={addRs5}>+5</button>
    </>
  );
}
