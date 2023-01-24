import React from "react";
import Answer from "./Answer";
// {category: "", type: "", difficulty: "", question: "", correct_answer: ""}
export default function Question(props) {
  return (
    <section className="question-block">
      <h2>{props.question.question}</h2>
      <div className="answer-row">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </section>
  );
}
