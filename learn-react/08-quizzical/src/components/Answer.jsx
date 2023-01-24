import React from "react";

//props: key={item.answer} id={item.answer} isSelected={isSelected}
//handleClick={(event) => handleClick(event, item.answer)}
//answer={item.answer} correct={item.correct}
//F8BCBC incorrect color 94D7A2 correct color
export default function Answer(props) {
  const selected = props.isSelected === props.id;

  return (
    <div
      className={!selected ? "answer neutral" : "answer selected"}
      onClick={props.handleClick}
    >
      {props.answer}
    </div>
  );
}
