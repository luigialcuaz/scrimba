import React from "react";

export default function Joke(props) {
  return (
    <div className="joke">
      {props.setup && <p className="joke--line">{props.setup}</p>}
      <p className="joke--line">{props.punchline}</p>
    </div>
  );
}
