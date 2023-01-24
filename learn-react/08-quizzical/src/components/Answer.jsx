import React from "react";

//props: key={item.answer} id={item.answer} isSelected={isSelected}
//handleClick={(event) => handleClick(event, item.answer)}
//answer={item.answer} correct={item.correct}
export default function Answer(props) {
  const selected = props.isSelected === props.id;

  return (
    <div
      className="answer"
      style={
        selected ? { backgroundColor: "blue" } : { backgroundColor: "white" }
      }
      onClick={props.handleClick}
    >
      {props.answer}
    </div>
  );
}
