import React, { useState } from "react";
import BallCountSubmitButton from "../components/atoms/BallCountSubmitButton";
import InputNumberBox from "../components/atoms/InputNumberBox";
import "./InputContainer.css";
const InputContainer = ({ addBallCount }) => {
  const [ballCountArray, setBallCountArray] = useState([0, 0, 0, 0]);

  const handleSubmit = () => {
    let ballCount = "";
    for (let i = 0; i < 4; i++) {
      ballCount = ballCount + ballCountArray[i];
    }
    addBallCount(ballCount);
  };

  const handleInput = (inputNumber, id) => {
    let newBallCounts = ballCountArray;
    newBallCounts[id] = +inputNumber;
    setBallCountArray(newBallCounts);
    console.log(ballCountArray);
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
