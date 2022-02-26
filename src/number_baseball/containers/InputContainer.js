import React, { useState } from "react";
import BallCountSubmitButton from "../components/atoms/BallCountSubmitButton";
import InputNumberBox from "../components/atoms/InputNumberBox";
import "./InputContainer.css";
const InputContainer = () => {
  const [ballCounts, setBallCounts] = useState([0, 0, 0, 0]);

  const handleSubmit = () => {
    console.log("submmit : " + ballCounts);
  };

  const handleInput = (inputNumber, id) => {
    let newBallCounts = ballCounts;
    newBallCounts[id] = +inputNumber;
    setBallCounts(newBallCounts);
    console.log(ballCounts);
  };
  return (
    <div>
      <InputNumberBox id='0' handleInput={handleInput} />
      <InputNumberBox id='1' handleInput={handleInput} />
      <InputNumberBox id='2' handleInput={handleInput} />
      <InputNumberBox id='3' handleInput={handleInput} />
      <BallCountSubmitButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default InputContainer;
