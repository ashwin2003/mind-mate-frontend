import React, { useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import Link from "next/link";

const questions = [
  {
    _id: "63b871fd3d731b590637c0dc",
    question:
      "Do you experience intense or excessive worry that interferes with your daily life?",
    d_id: "63b874073d731b590637c0dd",
  },
  {
    _id: "63b87b483d731b590637c0e4",
    question: "Do you have difficulty controlling your worry?",
    d_id: "63b874073d731b590637c0dd",
  },
  {
    _id: "63b87b723d731b590637c0e5",
    question:
      "Do you experience physical symptoms such as heart palpitations or difficulty breathing when you are anxious?",
    d_id: "63b874073d731b590637c0dd",
  },
  {
    _id: "63b87b9c3d731b590637c0e6",
    question:
      "Do you experience persistent feelings of sadness or hopelessness?",
    d_id: "63b87a7d3d731b590637c0df",
  },
  {
    _id: "63b87bbf3d731b590637c0e7",
    question:
      "Do you have difficulty finding enjoyment in activities that you used to enjoy?",
    d_id: "63b87a7d3d731b590637c0df",
  },
  {
    _id: "63b87bd63d731b590637c0e8",
    question:
      "Do you experience significant changes in appetite or sleep patterns?",
    d_id: "63b87a7d3d731b590637c0df",
  },
  {
    _id: "63b87bf23d731b590637c0e9",
    question:
      "Do you experience flashbacks or intrusive memories related to a traumatic event?",
    d_id: "63b87a9b3d731b590637c0e0",
  },
  {
    _id: "63b87c1c3d731b590637c0ea",
    question:
      "Do you avoid activities or situations that remind you of the traumatic event?",
    d_id: "63b87a9b3d731b590637c0e0",
  },
  {
    _id: "63b87c343d731b590637c0eb",
    question:
      "Do you have physical symptoms such as increased heart rate or difficulty breathing when you are reminded of the traumatic event?",
    d_id: "63b87a9b3d731b590637c0e0",
  },
  {
    _id: "63b87c6a3d731b590637c0ec",
    question:
      "Do you use substances such as drugs or alcohol in a way that causes problems in your daily life?",
    d_id: "63b87aaf3d731b590637c0e1",
  },
  {
    _id: "63b87c9a3d731b590637c0ed",
    question:
      "Do you have difficulty stopping or controlling your substance use?",
    d_id: "63b87aaf3d731b590637c0e1",
  },
  {
    _id: "63b87cb13d731b590637c0ee",
    question:
      "Do you experience withdrawal symptoms when you stop using substances?",
    d_id: "63b87aaf3d731b590637c0e1",
  },
  {
    _id: "63b87cef3d731b590637c0ef",
    question:
      "Do you have difficulty maintaining stable and healthy relationships?",
    d_id: "63b87abe3d731b590637c0e2",
  },
  {
    _id: "63b87d0c3d731b590637c0f0",
    question:
      "Do you have a distorted sense of self or difficulty identifying your own emotions?",
    d_id: "63b87abe3d731b590637c0e2",
  },
  {
    _id: "63b87d1b3d731b590637c0f1",
    question:
      "Do you engage in impulsive or risky behaviors that cause problems in your daily life?",
    d_id: "63b87abe3d731b590637c0e2",
  },
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

  // Get the current question based on the current question index
  const currentQuestion = questions[currentQuestionIndex];

  const onNext = (answer: string, qid: string) => {
    if (answer == "yes") {
      setSelectedQuestions((prev) => [...prev, qid]);
      // console.log(selectedQuestions);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      {/* Render the "Next" button if there are more questions, otherwise render the "Submit" button */}
      {currentQuestionIndex < questions.length - 1 ? (
        <>
          <QuestionCard question={currentQuestion} onNext={onNext} />
        </>
      ) : (
        <Link
          href={{
            pathname: "result",
            query: {
              selectedQuestions: selectedQuestions,
            },
          }}
        >
          Submit
        </Link>
      )}
    </div>
  );
}

export default Quiz;
