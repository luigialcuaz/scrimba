import React, { useState } from "react";
import shuffleAnswers from "../../util/shuffleAnswers";
import decodeAnswers from "../../util/decodeAnswers";
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
              answers: shuffleAnswers(
                decodeAnswers(item.incorrect_answers),
                atob(item.correct_answer)
              ),
            };
          })
        )
      );
  }, []);

  const questionBlockElements = quiz.map((item) => {
    return (
      <QuestionBlock
        key={item.question}
        question={item.question}
        answers={item.answers}
        quizComplete={props.quizComplete}
      />
    );
  });

  const playAgainElements = (
    <button className="quiz-btn" onClick={props.playAgain}>
      Play again
    </button>
  );

  return (
    <main>
      {questionBlockElements}
      <div className="check-answers-div">
        {!props.quizComplete ? (
          <button className="quiz-btn" onClick={props.checkAnswers}>
            Check Answers
          </button>
        ) : (
          playAgainElements
        )}
      </div>
    </main>
  );
}
