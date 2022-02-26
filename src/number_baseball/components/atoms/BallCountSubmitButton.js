import React from "react";
import "./BallCountSubmitButton.css";

const BallCountSubmitButton = ({ handleSubmit }) => {
  const onClick = (e) => {
    handleSubmit();
  };

  return (
    <button className='ball-count-submit-button' onClick={onClick}>
      play!
    </button>
  );
};

export default BallCountSubmitButton;
