import React from "react";
import Question from "./Question";

// {category: "", type: "", difficulty: "", question: "", correct_answer: ""}
export default function Quiz(props) {
  return (
    <main>
      <Question question={props.quiz[0]} />
      <Question question={props.quiz[1]} />
      <Question question={props.quiz[2]} />
      <Question question={props.quiz[3]} />
      <Question question={props.quiz[4]} />
      <button>Check Answers</button>
    </main>
  );
}
