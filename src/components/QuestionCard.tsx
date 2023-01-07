import React, { useState, useEffect } from "react";

function QuestionCard({ question, onNext }) {
  const [answerSelected, setAnswerSelected] = useState("");

  useEffect(() => {
    setAnswerSelected("");
  }, [question]);

  return (
    <div className="bg-blue-500 rounded-lg p-4 shadow-lg">
      <h3 className="text-2xl font-bold text-white">{question.question}</h3>
      <div className="mt-4">
        <label className="block text-gray-300">
          <input
            type="radio"
            name={question._id}
            className="mr-2 leading-tight"
            onChange={() => setAnswerSelected("yes")}
            checked={answerSelected === "yes"}
          />
          Yes
        </label>
        <label className="block text-gray-300 mt-2">
          <input
            type="radio"
            name={question._id}
            className="mr-2 leading-tight"
            onChange={() => setAnswerSelected("no")}
            checked={answerSelected === "no"}
          />
          No
        </label>
        <button
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => onNext(answerSelected, question._id)}
          disabled={answerSelected === ""}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
