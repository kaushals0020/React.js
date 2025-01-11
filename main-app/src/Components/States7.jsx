import { useState } from "react";

export default function States7() {
  const [bill, setBill] = useState(0);

  const addRs1 = () => {
    setBill(bill + 1);
  };
  const addRs3 = () => {
    setBill(bill + 3);
  };
  const addRs5 = () => {
    setBill(bill + 5);
  };
  const addRs1000 = () => {
    setBill(bill + 1000);
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
      <button onClick={addRs1000}>+1000</button>
    </>
  );
}
