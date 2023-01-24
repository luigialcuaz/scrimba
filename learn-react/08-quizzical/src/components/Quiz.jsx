import React from "react";
import QuestionBlock from "./QuestionBlock";

//quiz returns an array of 5 objects
//{category: "", type: "", difficulty: "", question: "", correct_answer: "", incorrect_answers: ['', '', '']}
export default function Quiz(props) {
  const qbElements = props.quiz.map((item) => {
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
      {qbElements}
      <div className="check-answers-div">
        <button className="quiz-btn">Check Answers</button>
      </div>
    </main>
  );
}
