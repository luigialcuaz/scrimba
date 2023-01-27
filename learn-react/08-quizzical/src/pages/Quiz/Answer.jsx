import React from "react";

//F8BCBC incorrect color 94D7A2 correct color
export default function Answer(props) {
  const selected = props.isSelected === props.id;

  // if answer selected and is correct -> color selected to green
  // if answer selected and is incorrect -> color selected to red, correct answer to green
  // if answer selected -> blue
  const color = () => {
    if (selected && props.correct) {
      return "answer correct";
    } else if (selected && !props.correct) {
      return "answer incorrect";
    } else {
      return "answer neutral";
    }
  };

  return (
    <div>
      <div
        className={
          !selected && !props.quizIsOver ? "answer neutral" : "answer selected"
        }
        onClick={props.handleClick}
      >
        {props.answer}
      </div>
    </div>
  );
}
