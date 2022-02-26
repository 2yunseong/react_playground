import React, { useState } from "react";
import "./InputNumberBox.css";

const InputNumberBox = ({ id, handleInput }) => {
  const [inputNumber, setInputNumber] = useState(0);

  const onChange = (e, id) => {
    setInputNumber(e.target.value);
    handleInput(e.target.value, id);
  };
  return (
    <input
      type='text'
      className='ball-count-input'
      maxLength='1'
      value={inputNumber}
      onChange={(e) => onChange(e, id)}
    />
  );
};

export default InputNumberBox;
