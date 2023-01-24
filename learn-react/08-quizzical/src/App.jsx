import React, { useState } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";

export default function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  function handleClick() {
    setStartQuiz((prevState) => !prevState);
    if (quizComplete) {
      checkAnswers();
    }
  }

  function checkAnswers() {
    setQuizComplete((complete) => !complete);
  }

  return (
    <div className="container">
      {!startQuiz ? (
        <Start handleClick={handleClick} />
      ) : (
        <Quiz
          checkAnswers={checkAnswers}
          quizComplete={quizComplete}
          playAgain={handleClick}
        />
      )}
    </div>
  );
}
