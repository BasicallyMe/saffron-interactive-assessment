import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

const data = require("./../../questions.json");
console.log(data.questions.length);

const Questions = (props) => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const optionsList = data.questions[questionNumber].options.map((option) => (
    <button
      onClick={changeQuestion}
      value={option.isCorrect}
      key={option.label}
    >
      {option.label}
    </button>
  ));

  function changeQuestion(e) {
    if (questionNumber === data.questions.length - 1) {
      props.setIsCompleted(true)
    } else {
      if (e.target.value == "true") {
        console.log(e.target.value);
        props.setScore(props.score + 20);
      } else {
        console.log(e.target.value);
      }
      //   console.log(`Score is ${props.score}`)
      setQuestionNumber(questionNumber + 1);
    }
    // if (questionNumber <= data.questions.length) {
    //   setQuestionNumber(questionNumber + 1);
    //   if (e.target.value) {
    //     props.setScore(props.score + 20);
    //   }
    // } else {
    //     console.log("finished")
    // }
  }

  return (
    <>
      <section id="top">
        <header id="top-bar">
          <div id="icon">
            <FaAngleLeft />
          </div>
          <div id="question-numbers">
            <span id="current-question">0{questionNumber + 1}</span>
            <span id="total-question">/0{data.questions.length}</span>
          </div>
        </header>
        <div id="question">
          <p>{data.questions[questionNumber].question}</p>
        </div>
        <footer>About our world</footer>
      </section>
      <section id="bottom">{optionsList}</section>
    </>
  );
};

export default Questions;
