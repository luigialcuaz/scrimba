import React from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";

export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);
  const [quiz, setQuiz] = React.useState([]);

  //quiz returns an array of 5 objects
  //{category: "", type: "", difficulty: "", question: "", correct_answer: "", incorrect_answers: ['', '', '']}
  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&encode=base64"
    )
      .then((res) => res.json())
      .then((data) =>
        setQuiz(
          data.results.map((item) => ({
            category: atob(item.category),
            type: atob(item.type),
            difficulty: atob(item.difficulty),
            question: atob(item.question),
            correct_answer: atob(item.correct_answer),
            incorrect_answers: [
              atob(item.incorrect_answers[0]),
              atob(item.incorrect_answers[1]),
              atob(item.incorrect_answers[2]),
            ],
          }))
        )
      );
  }, []);

  function handleClick() {
    setStartQuiz((prevState) => !prevState);
  }

  return (
    <div className="container">
      {!startQuiz ? <Start handleClick={handleClick} /> : <Quiz quiz={quiz} />}
    </div>
  );
}
