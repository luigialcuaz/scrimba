import React from "react";
import Joke from './components/Joke'

export default function App() {
  return (
    <div className="container">
      <Joke Setup='I got my daughter a fridge for her birthday.' Punchline="I can&#39;t wait to see her face light up when she opens it."/>
      <Joke Setup='How did the hacker escape the police?' Punchline='He just ransomware!'/>
      <Joke Setup='Why don&#39;t pirates travel on mountain roads?' Punchline='Scurvy.'/>
      <Joke Punchline='Scurvy.'/>
    </div>
  )
}