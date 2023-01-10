import React from "react";
import Joke from "./components/Joke";
import jokesData from "./jokesData";

export default function App() {
  const jokeElements = jokesData.map((joke) => (
    <Joke setup={joke.setup} punchline={joke.punchline} />
  ));
  return <div className="container">{jokeElements}</div>;
}
