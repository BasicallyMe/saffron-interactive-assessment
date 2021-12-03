import React from "react";
import "./../scss/Result.scss";
import Image from './../assets/25.png' //imports an image for the result screen


const Result = (props) => {

  const { answer, setIsCompleted, passmark } = props;
  let score = 0; //initially sets the score to 0
  let status = ""; //initialise the result status to an empty string

  for(let i = 0; i < answer.length; i++) { //loops through the entire array of answers
    if (answer[i] == 'true') { //if the value at the current index is 'true', increase the score by 20 points
      score+=20
    }
  }

  //sets the status to a custom message depending on the score
  if (score >= passmark) {
    status = "You have passed the quiz";
  } else {
    status = "Sorry you have to try again";
  }

  return (
    <div id="result">
      <header>
        <h1>Quiz completed</h1>
        <img src={Image}></img>
      </header>

      <section id="status">
        <p><span>{status}.</span><span>Your score was <span id="score">{score}</span></span></p>
      </section>

      <footer>
        <button
          onClick={() => {
            setIsCompleted(false);
          }}
        >
          Try again
        </button>
      </footer>
    </div>
  );
};

export default Result;
