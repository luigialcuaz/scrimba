import React from "react";

export default function Start(props) {
  return (
    <div id="start-page">
      <h1 id="title">Quizzical</h1>
      <p>Blah blah description</p>
      <button className="quiz-btn" onClick={props.handleClick}>
        Start Quiz
      </button>
    </div>
  );
}
