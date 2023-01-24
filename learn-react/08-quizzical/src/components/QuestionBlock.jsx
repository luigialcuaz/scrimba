import React from "react";
import Answer from "./Answer";
//quiz returns an array of 5 objects
//{category: "", type: "", difficulty: "", question: "", correct_answer: "", incorrect_answers: ['', '', '']}
export default function Question(props) {
  const [selected, setSelected] = React.useState(false);

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

  function handleClick(event, answer) {
    // setSelected
  }

  const answerElements = shuffle(props.answers).map((answer) => (
    <Answer
      selected={selected}
      key={answer.answer}
      handleClick={(event) => handleClick(event, answer.correct)}
      answer={answer.answer}
      correct={answer.correct}
    />
  ));

  return (
    <section className="question-block">
      <h2>{props.question}</h2>
      <div className="answer-row">{answerElements}</div>
    </section>
  );
}
