import React from "react";

const Result = (props) => {
  return (
    <>
      <h1>Congratulations on completing the quiz</h1>
      <p>Your score is {props.score}</p>
      <button
        onClick={() => {
          props.setIsCompleted(false);
          props.setScore(0)
        }}
      >
        Retake the quiz
      </button>
    </>
  );
};

export default Result;
