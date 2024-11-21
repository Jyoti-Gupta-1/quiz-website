const questions = [
  {
    question: " Which Indian sportsperson is known as the Master Blaster?",
    options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Kapil Dev"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "What is the national bird of India?",
    options: ["Peacock", "Sparrow", "Parrot", "Eagle"],
    answer: "Peacock"
  },
  {
    question: " Which state is known as the Land of Five Rivers?",
    options: [ "Rajasthan", "Kerala","Punjab", "Gujarat"],
    answer: "Punjab"
  },
  {
    question: " Which is the longest river in India?",
    options: [ "Yamuna", "Brahmaputra", "Godavari","Ganga"],
    answer: "Ganga"
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const restartBtn = document.getElementById('restart-btn');

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultEl.classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  startTimer(30);
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const li = document.createElement('li');
    li.textContent = option;
    li.onclick = () => selectOption(option);
    optionsEl.appendChild(li);
  });
}

function selectOption(selected) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selected === currentQuestion.answer) score++;
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function startTimer(duration) {
  let time = duration;
  timerEl.textContent = `Time Left: ${time}s`;
  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    timerEl.textContent = `Time Left: ${time}s`;
    if (time <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById('quiz-container').classList.add('hidden');
  resultEl.classList.remove('hidden');
  scoreEl.textContent = `Your score is ${score} out of ${questions.length}.`;
}

nextBtn.onclick = () => {
  if (currentQuestionIndex < questions.length) showQuestion();
};

restartBtn.onclick = startQuiz;

startQuiz();
