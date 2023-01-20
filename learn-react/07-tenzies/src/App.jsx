import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const numArray = [];
    while (numArray.length < 10) {
      numArray.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }

    return numArray;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} isHeld={die.isHeld} value={die.value} />
  ));

  console.log(nanoid());

  return (
    <main>
      <section className="dice-grid">{diceElements}</section>
      <button onClick={rollDice} className="dice-roll">
        Roll
      </button>
    </main>
  );
}
