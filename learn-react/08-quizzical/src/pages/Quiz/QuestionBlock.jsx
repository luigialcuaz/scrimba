import React, { useState } from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";

//props: key={item.question} question={item.question} answers={answersArray}
export default function Question(props) {
  const [isSelected, setIsSelected] = useState("");

  function handleClick(event, id) {
    setIsSelected(id);
  }

  const answerElements = props.answers.map((item) => {
    const id = nanoid();
    return (
      <Answer
        key={id}
        id={id}
        isSelected={isSelected}
        handleClick={(event) => handleClick(event, id)}
        answer={item.answer}
        correct={item.correct}
        quizIsOver={props.quizIsOver}
      />
    );
  });

  return (
    <section className="question-block">
      <h2>{props.question}</h2>
      <div className="answer-row">{answerElements}</div>
    </section>
  );
}
