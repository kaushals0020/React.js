import { Star, StarFill } from "react-bootstrap-icons";
import { useState } from "react";
export default function RatingApp() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);

  const updateOne = () => {
    setOne((prev) => !prev);
  };
  const updateTwo = () => {
    setTwo((prev) => !prev);
  };
  const updateThree = () => {
    setThree((prev) => !prev);
  };
  const updateFour = () => {
    setFour((prev) => !prev);
  };
  const updateFive = () => {
    setFive((prev) => !prev);
  };

  return (
    <>
      <h1>
        Rate Us &nbsp; &nbsp;
        <Star color={one ? "green" : "red"} onClick={updateOne}></Star>
        <Star color={two ? "green" : "red"} onClick={updateTwo}></Star>
        <Star color={three ? "green" : "red"} onClick={updateThree}></Star>
        <Star color={four ? "green" : "red"} onClick={updateFour}></Star>
        <Star color={five ? "green" : "red"} onClick={updateFive}></Star>
      </h1>

      <h1>
        Rate Us &nbsp; &nbsp;
        <StarFill color={one ? "green" : "red"} onClick={updateOne}></StarFill>
        <StarFill color={two ? "green" : "red"} onClick={updateTwo}></StarFill>
        <StarFill
          color={three ? "green" : "red"}
          onClick={updateThree}
        ></StarFill>
        <StarFill
          color={four ? "green" : "red"}
          onClick={updateFour}
        ></StarFill>
        <StarFill
          color={five ? "green" : "red"}
          onClick={updateFive}
        ></StarFill>
      </h1>
    </>
  );
}
