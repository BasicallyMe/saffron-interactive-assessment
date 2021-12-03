import React, { useState } from "react";
import './../scss/Questions.scss'
import { VscChevronLeft } from "react-icons/vsc";



const Questions = (props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { data, score, setScore, setIsCompleted } = props

  const optionsList = data.questions[questionNumber].options.map((option) => (
    <button
      onClick={changeQuestion}
      value={option.isCorrect}
      key={option.label}
    > 
      {option.label}
    </button>
  ));

  function goBack() {
    if (questionNumber !== 0) {
      setQuestionNumber(questionNumber - 1)
    }
  }
  function changeQuestion(e) {
    if (e.target.value == "true") {
      setScore(score + 20);
    }
    if (questionNumber === data.questions.length - 1) {
      setIsCompleted(true)
    } else {
      setQuestionNumber(questionNumber + 1);
    }
  }

  return (
    <div id="container">
      <section id="top">
        <header>
          <div id="icon">
            <VscChevronLeft className="back-button" onClick={goBack} />
          </div>
          <div id="question-numbers">
            <span id="current-question">0{questionNumber + 1}</span>
            <span id="total-questions">/0{data.questions.length}</span>
          </div>
        </header>
        <div id="progress-bar" className="outer-bar">
            <div id="progress" className="inner-bar"></div>
        </div>
        <div id="question">
          <p>{data.questions[questionNumber].question}</p>
        </div>
        <footer>About our world</footer>
      </section>
      <section id="bottom">{optionsList}</section>
    </div>
  );
};

export default Questions;
