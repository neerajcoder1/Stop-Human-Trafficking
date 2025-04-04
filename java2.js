const questions = [
    "Are you aware of human trafficking issues affecting women in India?",
    "Do you think this issue is being adequately addressed?",
    "Have you personally witnessed any signs of human trafficking?",
    "Do you believe awareness can make a difference?",
    "Should stricter laws be implemented?"
  ];
  
  let currentQuestion = 0;
  
  function handleAnswer() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      document.getElementById("question-text").innerText = questions[currentQuestion];
    } else {
      document.getElementById("question-area").style.display = "none";
      document.getElementById("fact-area").style.display = "block";
    }
  }
  
  