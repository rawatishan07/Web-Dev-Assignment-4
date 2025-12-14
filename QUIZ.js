const quizQuestions = [
  { question: "What is the capital of Morocco?", answer: "Rabat" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is 24 + 43?", answer: "67" },
  { question: "Who is the Prime Minister of India?", answer: "Narendra Modi" },
  { question: "Which language is used for styling webpages?", answer: "CSS" },
];

function runQuiz() {
  alert("Hello! Welcome to the Quick Quiz");
  let score = 0; // variable to track score

  for (let i = 0; i < quizQuestions.length; i++) {
    const ques = quizQuestions[i].question;
    const correctAns = quizQuestions[i].answer; 
    const lowerAns = correctAns.toLowerCase(); 

    const userAnswer = prompt(ques);

    if (userAnswer && userAnswer.toLowerCase().trim() == lowerAns) {
      alert("Correct Answer");
      score++;
    } else {

      alert(`Wrong Answer. The Correct Answer is ${correctAns}`);
    }
  }

  alert(
    `Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`
  );
}

runQuiz();