import "./scss/index.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Questions from "./components/Questions";
import Result from "./components/Result";


const App = () => {
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  
    if (!isCompleted) {
        return <Questions score={score} setScore={setScore} setIsCompleted={setIsCompleted} />;
    }
    return <Result score={score} setScore={setScore} setIsCompleted={setIsCompleted}/>
};




ReactDOM.render(<App />, document.getElementById("container"));