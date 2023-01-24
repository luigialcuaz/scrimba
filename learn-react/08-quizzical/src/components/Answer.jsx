import React from "react";

export default function Answer(props) {
  return (
    <div className="answer" onClick={props.handleClick}>
      {props.answer}
    </div>
  );
}
