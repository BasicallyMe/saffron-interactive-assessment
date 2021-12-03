import React from "react";
import "./../scss/Result.scss";

const Result = (props) => {
  const { score, setScore, setIsCompleted, passmark } = props;

  let result = "";

  if (score >= passmark) {
    result = "You have passed the quiz";
  } else {
    result = "Sorry you have to try again";
  }

  return (
    <div id="result">
      <header>
        <h1>{result}</h1>
      </header>

      <section id="score-div">
        <p>Your score is {score} </p>
      </section>

      <footer>
        <button
          onClick={() => {
            setIsCompleted(false);
            setScore(0);
          }}
        >
          Try again
        </button>
      </footer>
    </div>
  );
};

export default Result;
