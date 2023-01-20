import React from "react";
import Dice from "./components/Dice";

export default function App() {
  return (
    <main>
      <section className="dice--grid">
        <Dice value="1" />
        <Dice value="1" />
        <Dice value="1" />
        <Dice value="1" />
        <Dice value="1" />
        <Dice value="1" />
        <Dice value="1" />
        <Dice value="1" />
        <Dice value="1" />
      </section>
    </main>
  );
}
