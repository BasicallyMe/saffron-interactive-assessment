import "./scss/index.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Questions from "./components/Questions";
import Result from "./components/Result";

const data = require("./../questions.json"); //imported the questions.json file provided

const App = () => {
  const [answer, setAnswer] = useState([]) //created an array to store user's answers
  const [isCompleted, setIsCompleted] = useState(false); //controls if the quiz is running or completed

  //using conditional rendering to render either Question or Result component
  if (!isCompleted) { //renders the Question component if quiz is not finished
    return (
      <Questions
        data={data}
        answer={answer}
        setAnswer={setAnswer}
        setIsCompleted={setIsCompleted}
      />
    );
  }
  return ( //renders the Result component is quiz is submitted
    <Result
      answer={answer}
      setIsCompleted={setIsCompleted}
      passmark={data.passmark}
    />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
