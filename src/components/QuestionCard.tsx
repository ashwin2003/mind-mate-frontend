import React, { useState, useEffect } from "react";
import Header from "../components/Header";

function QuestionCard({ question, onNext }) {
  const [answerSelected, setAnswerSelected] = useState("");

  useEffect(() => {
    setAnswerSelected("");
  }, [question]);

  return (
    <div>
      <Header></Header>
      <div className=" bg-white h-screen flex flex-row justify-center align-middle">
        <div className=" rounded-lg bg-gray-100 p-4 shadow md:h-96 w-3/4 md:mt-28 mt-4">
          <h3 className="text-2xl font-bold text-gray-700 mb-8">
            {question.question}
          </h3>

          <div className="mt-4 ">
            <label className="block bg-gray-50 text-gray-500 p-4 text-lg rounded-md border-2 border-gray-100 hover:border-gray-300">
              <input
                type="radio"
                name={question._id}
                className="mr-2 leading-tight"
                onChange={() => setAnswerSelected("yes")}
                checked={answerSelected === "yes"}
              />
              Yes
            </label>
            <label className="block bg-gray-50 text-gray-500 p-4 text-lg rounded-md border-2 border-gray-100 hover:border-gray-300 mt-4">
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
              className="mt-4 bg-white text-gray-600 font-bold p-4 border-2 rounded w-32 hover:border-gray-500 "
              onClick={() => onNext(answerSelected, question._id)}
              disabled={answerSelected === ""}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
