import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const firstValue = dice[0].value;
    const allHeld = dice.every((die) => die.isHeld);
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    } else {
      setTenzies(false);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const numArray = [];
    while (numArray.length < 10) {
      numArray.push(generateNewDie());
    }

    return numArray;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((die) => (die.isHeld ? { ...die } : generateNewDie()))
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      holdDice={() => holdDice(die.id)}
      key={die.id}
      isHeld={die.isHeld}
      value={die.value}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <section className="dice-grid">{diceElements}</section>
      <button onClick={rollDice} className="dice-roll">
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
