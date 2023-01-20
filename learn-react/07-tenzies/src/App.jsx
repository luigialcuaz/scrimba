import React from "react";
import Die from "./components/Die";

export default function App() {
  return (
    <main>
      <section className="dice--grid">
        <Die value={Math.floor(Math.random() * 6) + 1} />
        <Die value={Math.floor(Math.random() * 6) + 1} />
        <Die value={Math.floor(Math.random() * 6) + 1} />
        <Die value={Math.floor(Math.random() * 6) + 1} />
        <Die value={Math.floor(Math.random() * 6) + 1} />
        <Die value={Math.floor(Math.random() * 6) + 1} />
        <Die value={Math.floor(Math.random() * 6) + 1} />
        <Die value={Math.floor(Math.random() * 6) + 1} />
        <Die value={Math.floor(Math.random() * 6) + 1} />
        <Die value={Math.floor(Math.random() * 6) + 1} />
      </section>
    </main>
  );
}
