import React from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";

export default function App() {
  const [start, setStart] = React.useState("false");
  const [quiz, setQuiz] = React.useState([]);

  //quiz returns an array of 5 objects
  //{category: "", type: "", difficulty: "", question: "", correct_answer: "", incorrect_answers: ['', '', '']}
  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiplehttps://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuiz(data.results));
  }, []);

  console.log(quiz);

  function handleClick() {
    setStart((prevState) => !prevState);
  }
  return (
    <div className="container">
      {start && <Start handleClick={handleClick} />}
      {!start && <Quiz quiz={quiz} />}
    </div>
  );
}
