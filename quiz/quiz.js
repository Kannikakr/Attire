const questions = [
    {
        question: "What is the term used to describe clothing made from recycled materials ? ",
        answers: [
            { text: "sustainable", correct: false },
            { text: "Uncycled", correct: true },
            { text: "fair trade", correct: false },
            { text: "organic", correct: false }
        ]
    },
    {
        question: "Which of the following is the negative environmental impact of fast fashion?",
        answers: [
            { text: "improved working condition", correct: false },
            { text: "decreased water production", correct: false },
            { text: "reduced greenhouse gas emission", correct: false },
            { text: "Increased water pollution", correct: true }
        ]
    },
    {
        question: "What does the term carbon footprint refer to ?",
        answers: [
            { text: "The amount of carbon emitted by a person", correct: true },
            { text: "The amount of land required ", correct: false },
            { text: "The number of steps involved", correct: false },
            { text: "the environmental impact", correct: false }
        ]
    },
    {
        question: "Which of the following is Characteristic of sustainable fashion?",
        answers: [
            { text: "Use of harmful chemicals", correct: false },
            { text: "Long-lasting products", correct: true },
            { text: "exploitation of workers", correct: false },
            { text: "focus of trends", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionsIndex = 0;
let score = 0;

function startQuiz()  {
    currentQuestionsIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionsIndex];
    let questionNo = currentQuestionsIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); // Corrected class name
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = 'none'
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect"); 
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionsIndex++;
    if (currentQuestionsIndex < questions.length) {
        showQuestion();

    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionsIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
