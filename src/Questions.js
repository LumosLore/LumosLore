import React, { useState } from 'react';
import './Questions.css'; // Import your CSS file for styling

const QuizApp = () => {
  const questions = [
      "01. What is the capital of Sri Lanka?",
      "02. Which country is the closest to Sri Lanka?",
      "03. What is the highest mountain in Sri Lanka?",
      "04. What is the ancient palace complex located in the ancient city of Polonnaruwa?",
      "05. What is the famous dance festival celebrated in Kandy, Sri Lanka?",
      "06. What is the famous festival celebrated in Sri Lanka to commemorate the rice harvest?",
      "07. Sri Lanka is famous for its traditional:",
      "08. Sri Lanka is famous for its traditional wooden masks used in:",
      "09. What is the traditional Sri Lankan rice and curry dish served on a banana leaf?",
      "10. What is the famous bird sanctuary located in the northwest of Sri Lanka?"
  ];

  const correctAnswers = [
      "Sri Jayawardanapura",
      "India",
      "Pidurutalagala",
      "Sigiriya Rock Fortress",
      "Kandy Esala Perahera",
      "Sinhala and Tamil New Year (Aluth Avurudu)",
      "Batik art",
      "Mask dance",
      "Lamprais",
      "Kumana National Park"
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (event, questionIndex) => {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = event.target.value;
      setAnswers(newAnswers);
  };

  const handleSubmit = () => {
      const newScore = answers.reduce((acc, answer, index) => {
          if (answer.trim().toLowerCase() === correctAnswers[index].toLowerCase()) {
              return acc + 1;
          }
          return acc;
      }, 0);
      setScore(newScore);
      setShowResults(true);
  };

  return (
      <div className="quiz-container">
          <h1>LUMOSLORE</h1>
          {!showResults ? (
              <>
                  {questions.map((question, questionIndex) => (
                      <div key={questionIndex} className="question">
                          <p>{question}</p>
                          <input
                              type="text"
                              value={answers[questionIndex]}
                              onChange={(event) => handleAnswerChange(event, questionIndex)}
                          />
                      </div>
                  ))}
                  <button onClick={handleSubmit}>Show Results</button>
              </>
          ) : (
              <div className="results-feedback-container">
                  <div className="results-container">
                      <h2>Results</h2>
                      <p>You scored {score} out of {questions.length}.</p>
                  </div>
                  <div className="feedback-container">
                      <h2>Feedback</h2>
                      <p>Here is your feedback...</p>
                      {/* Add feedback content here */}
                  </div>
              </div>
          )}
      </div>
  );
};

export default QuizApp;
