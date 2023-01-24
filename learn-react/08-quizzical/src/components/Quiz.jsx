import React, { useState } from "react";
import QuestionBlock from "./QuestionBlock";

export default function Quiz(props) {
  const [quiz, setQuiz] = useState([]);

  //quiz returns an array of 5 objects
  //{category: "", type: "", difficulty: "", question: "", correct_answer: "", incorrect_answers: ['', '', '']}
  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&encode=base64"
    )
      .then((res) => res.json())
      .then((data) =>
        setQuiz(
          data.results.map((item) => ({
            // atob(...item)?
            // category: atob(item.category),
            // type: atob(item.type),
            // difficulty: atob(item.difficulty),
            question: atob(item.question),
            correct_answer: atob(item.correct_answer),
            incorrect_answers: [
              atob(item.incorrect_answers[0]),
              atob(item.incorrect_answers[1]),
              atob(item.incorrect_answers[2]),
            ],
          }))
        )
      );
  }, []);

  function shuffle(arr) {
    let currentIndex = arr.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  }

  const questionBlockElements = quiz.map((item) => {
    let answersArray = item.incorrect_answers.map((answer) => ({
      answer,
      correct: false,
    }));

    answersArray.push({
      answer: item.correct_answer,
      correct: true,
    });

    return (
      <QuestionBlock
        key={item.question}
        question={item.question}
        answers={shuffle(answersArray)}
      />
    );
  });

  return (
    <main>
      {questionBlockElements}
      <div className="check-answers-div">
        <button className="quiz-btn">Check Answers</button>
      </div>
    </main>
  );
}
