import React, { useState } from "react";
import "./../scss/Questions.scss";
import { VscChevronLeft } from "react-icons/vsc";

const Questions = (props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { data, answer, setAnswer, setIsCompleted } = props;

  const progressBarStyle = {
    width: `${((questionNumber + 1) / data.questions.length) * 100}%`,
  };

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
      setQuestionNumber(questionNumber - 1);
      setAnswer(() => {
        answer.pop()
        return answer
      })
    }
  }
  
  function changeQuestion(e) {
    setAnswer(() => {
      answer.push(e.target.value)
      return answer
    })
    if (questionNumber === data.questions.length - 1) {
      setIsCompleted(true);
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
        <section id="outer-progress-bar">
          <div id="inner-progress-bar" style={progressBarStyle}></div>
        </section>
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
