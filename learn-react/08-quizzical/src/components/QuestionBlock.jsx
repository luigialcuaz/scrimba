import React, { useState } from "react";
import Answer from "./Answer";

//props: key={item.question} question={item.question} answers={answersArray}
export default function Question(props) {
  const [isSelected, setIsSelected] = useState("");

  function shuffle(arr) {
    let currentIndex = arr.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  }

  function handleClick(event, id) {
    setIsSelected(id);
  }

  const shuffledAnswers = shuffle(props.answers);
  const answerElements = shuffledAnswers.map((item) => (
    <Answer
      key={item.answer}
      id={item.answer}
      isSelected={isSelected}
      handleClick={(event) => handleClick(event, item.answer)}
      answer={item.answer}
      correct={item.correct}
    />
  ));

  return (
    <section className="question-block">
      <h2>{props.question}</h2>
      <div className="answer-row">{answerElements}</div>
    </section>
  );
}
