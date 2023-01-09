import React from "react";

export default function Joke(props) {
  return (
    <div className="joke">
      <p className="joke--line">{props.Setup}</p>
      <p className="joke--line">{props.Punchline}</p>
    </div>
  )
}