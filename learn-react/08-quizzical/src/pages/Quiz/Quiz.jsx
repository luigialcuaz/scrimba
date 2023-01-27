import React from "react";
import QuestionBlock from "./QuestionBlock";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  const questionBlockElements = props.quizData.map((item) => {
    return (
      <QuestionBlock
        key={nanoid()}
        question={item.question}
        answers={item.answers}
        quizIsOver={props.quiz.isOver}
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
        {!props.quiz.isOver ? (
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
