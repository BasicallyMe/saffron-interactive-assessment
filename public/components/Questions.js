import React, { useState } from "react"; 
import "./../scss/Questions.scss"; //importing the respective scss file
import { VscChevronLeft } from "react-icons/vsc"; //importing the back button icon

const Questions = (props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { data, answer, setAnswer, setIsCompleted } = props; //destructuring the props object to have better usability

  //inline css styling to set the width of the progress bar according to the question number 
  const progressBarStyle = {
    width: `${((questionNumber + 1) / data.questions.length) * 100}%`, //width = (currentQuestionNumber / totalQuestions) * 100
  };

  //renders the options associated with each question as an array of buttons
  const optionsList = data.questions[questionNumber].options.map((option) => (
    <button
      onClick={changeQuestion} //passed a function to each button to move to the next question onClick
      value={option.isCorrect}
      key={option.label}
    >
      {option.label}
    </button>
  ));

  //function to move to the previous question
  function goBack() {
    if (questionNumber !== 0) {
      setQuestionNumber(questionNumber - 1);
      setAnswer(() => {
        answer.pop();
        return answer;
      });
    }
  }

  //function used by the buttons to store the answer and move to the next question
  function changeQuestion(e) {
    setAnswer(() => {
      answer.push(e.target.value); //function to push the current answer into the array and return it. setAnswer takes this new array
      //and assigns it to the old array
      return answer;
    });
    if (questionNumber === data.questions.length - 1) {
      setIsCompleted(true); //when the final question is answered the isCompleted variable is set to true which renders the result page
    } else {
      setQuestionNumber(questionNumber + 1); //if final wuestion is not reached that move to the next question
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
