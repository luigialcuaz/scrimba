import React, { useState, useEffect } from "react";
import Start from "./pages/Start/Start";
import Quiz from "./pages/Quiz/Quiz";
import shuffleAnswers from "./util/shuffleAnswers";
import decodeAnswers from "./util/decodeAnswers";

export default function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [quiz, setQuiz] = useState({
    isOver: false,
    score: 0,
  });

  const [quizData, setQuizData] = useState([]);

  //quiz returns an array of 5 objects
  //{category: "", type: "", difficulty: "", question: "", correct_answer: "", incorrect_answers: ['', '', '']}
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&encode=base64"
    )
      .then((res) => res.json())
      .then((data) =>
        setQuizData(
          data.results.map((item) => {
            return {
              question: atob(item.question),
              answers: shuffleAnswers(
                decodeAnswers(item.incorrect_answers),
                atob(item.correct_answer)
              ),
            };
          })
        )
      );
  }, []);

  function handleClick() {
    setStartQuiz((prevState) => !prevState);
    if (quiz.isOver) {
      checkAnswers();
    }
  }

  function checkAnswers() {
    setQuiz((prevQuiz) => ({
      ...prevQuiz,
      isOver: prevQuiz.isOver,
    }));
  }

  return (
    <div className="container">
      {!startQuiz ? (
        <Start handleClick={handleClick} />
      ) : (
        <Quiz
          quiz={quiz}
          quizData={quizData}
          checkAnswers={checkAnswers}
          playAgain={handleClick}
        />
      )}
    </div>
  );
}
