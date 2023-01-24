import React, { useState } from "react";
import QuestionBlock from "./QuestionBlock";

export default function Quiz(props) {
  const [quiz, setQuiz] = useState([]);

  //quiz returns an array of 5 objects
  //{category: "", type: "", difficulty: "", question: "", correct_answer: "", incorrect_answers: ['', '', '']}
  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&encode=base64"
    )
      .then((res) => res.json())
      .then((data) =>
        setQuiz(
          data.results.map((item) => {
            return {
              question: atob(item.question),
              correct_answer: atob(item.correct_answer),
              incorrect_answers: [
                atob(item.incorrect_answers[0]),
                atob(item.incorrect_answers[1]),
                atob(item.incorrect_answers[2]),
              ],
            };
          })
        )
      );
  }, []);

  const questionBlockElements = quiz.map((item) => {
    console.log("test");
    let answersArray = item.incorrect_answers.map((answer) => ({
      answer,
      correct: false,
    }));

    answersArray.push({
      answer: item.correct_answer,
      correct: true,
    });

    return (
      <QuestionBlock
        key={item.question}
        question={item.question}
        answers={answersArray}
      />
    );
  });

  return (
    <main>
      {questionBlockElements}
      <div className="check-answers-div">
        {!props.quizComplete ? (
          <button className="quiz-btn" onClick={props.checkAnswers}>
            Check Answers
          </button>
        ) : (
          <button className="quiz-btn" onClick={props.playAgain}>
            Play again
          </button>
        )}
      </div>
    </main>
  );
}
