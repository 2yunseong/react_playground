import React, { useEffect, useState } from "react";
import InputContainer from "./containers/InputContainer";

const NUMBER_OF_BALL = 4;

const makeRandomNumber = () => {
  const usingNumberArray = [];
  let iterCount = 0;
  let numberString = "";
  while (iterCount !== NUMBER_OF_BALL) {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber === 0) {
      continue;
    }
    console.log(usingNumberArray.find((e) => e === randomNumber));
    if (usingNumberArray.find((e) => e === randomNumber)) {
      console.log("randomNumber already exist :" + randomNumber);
      continue;
    }
    console.log("push");
    usingNumberArray.push(randomNumber);
    numberString += randomNumber;
    iterCount++;
  }
  return numberString;
};
const GameBoard = () => {
  const [gameNumber, setGameNumber] = useState("");

  useEffect(() => {
    setGameNumber(makeRandomNumber());
  }, []);

  return (
    <div>
      <h1>숫자 야구</h1>
      <p>{gameNumber}</p>
      <InputContainer />
    </div>
  );
};

export default GameBoard;
