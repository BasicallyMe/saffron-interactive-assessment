import "./scss/index.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Questions from "./components/Questions";
import Result from "./components/Result";

const data = require("./../questions.json");

const App = () => {
  const [answer, setAnswer] = useState([])
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isCompleted) {
    return (
      <Questions
        data={data}
        answer={answer}
        setAnswer={setAnswer}
        setIsCompleted={setIsCompleted}
      />
    );
  }
  return (
    <Result
      answer={answer}
      setIsCompleted={setIsCompleted}
      passmark={data.passmark}
    />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
