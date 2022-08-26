import React, { useState } from "react";

export default function App() {
  const questionsArr = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(e) {
    e.preventDefault();
    setCurrentQuestion(currentQuestion + 1);
    questionsArr[currentQuestion].answerOptions.forEach((answer) => {
      if (answer.isCorrect && answer.answerText === e.target.value) {
        setScore(score + 1);
      }
    });
  }

  return (
    <div className="app">
      {currentQuestion === questionsArr.length ? (
        <div className="score-section">
          You scored {score} out of {questionsArr.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion}</span>/{questionsArr.length}
            </div>
            <div className="question-text">
              {questionsArr[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questionsArr[currentQuestion].answerOptions.map(
              (answer, index) => {
                return (
                  <div key={index}>
                    <input
                      type="radio"
                      name={`answer${index}`}
                      id={`answer${index}`}
                      onClick={handleAnswer}
                      value={answer.answerText}
                    />
                    <label htmlFor={`answer${index}`}>
                      {answer.answerText}
                    </label>
                  </div>
                );
              }
            )}
          </div>
        </>
      )}
    </div>
  );
}
