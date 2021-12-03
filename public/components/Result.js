import React from "react";
import "./../scss/Result.scss";
import Image from './../assets/25.png'


const Result = (props) => {
  const { score, setScore, setIsCompleted, passmark } = props;

  let status = "";

  if (score >= passmark) {
    status = "You have passed the quiz";
  } else {
    status = "Sorry you have to try again";
  }

  return (
    <div id="result">
      <header>
        <h1>Finished</h1>
        <img src={Image}></img>
      </header>

      <section id="score-div">
        <p>{status}</p>
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
