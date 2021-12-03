import "./scss/index.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Questions from "./components/Questions";
import Result from "./components/Result";

const data = require("./../questions.json");

const App = () => {
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(true);

  if (!isCompleted) {
    return (
      <Questions
        data={data}
        score={score}
        setScore={setScore}
        setIsCompleted={setIsCompleted}
      />
    );
  }
  return (
    <Result
      score={score}
      setScore={setScore}
      setIsCompleted={setIsCompleted}
      passmark={data.passmark}
    />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
