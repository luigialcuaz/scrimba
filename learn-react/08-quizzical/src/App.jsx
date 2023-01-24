import React, { useState } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";

export default function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  function handleClick() {
    setStartQuiz((prevState) => !prevState);
  }

  return (
    <div className="container">
      {!startQuiz ? <Start handleClick={handleClick} /> : <Quiz />}
    </div>
  );
}
