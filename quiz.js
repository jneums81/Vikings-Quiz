const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your score: ${score} / ${questions.length}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    startQuiz(); // Call the function that resets the quiz
}

const questions = [
    {
        question: 'Who scored the game winning touchdown in the Minneapolis Miracle?',
        options: ['Justin Jefferson', 'Stefon Diggs', 'Adam Thielen', 'Kyle Rudolph'],
        correctAnswer: 'Stefon Diggs',
    },
    {
        question: 'What team did the Vikings play in the Wild Card where Blair Walsh missed a game winning 27 yard field goal?',
        options: ['Atlanta Falcons', 'New York Giants', 'Green Bay Packers', 'Seattle Seahawks'],
        correctAnswer: 'Seattle Seahawks',
    },
    {
        question: 'Which head coach got fired in 2013 before Mike Zimmer was hired in 2014?',
        options: ['Leslie Frazier', 'Brad Childress', "Kevin O'Connell", 'Dennis Green'],
        correctAnswer: 'Leslie Frazier',
    },
    {
        question: 'How many division titles do the Vikings have?',
        options: ['21', '15', '20', '18'],
        correctAnswer: '21',
    },
    {
        question: 'Which team did the Vikings not play in the super bowl',
        options: ['Pittsburgh Steelers', 'New England Patriots', 'Oakland Raiers', 'Miami Dolphins'],
        correctAnswer: 'New England Patriots',
    },
    {
        question: 'Who did the Vikings draft with the 32nd pick in 2014?',
        options: ['Teddy Bridgewater', 'Christian Ponder', 'Blake Bortles', 'Johnny Manziel'],
        correctAnswer: 'Teddy Bridgewater',
    },
    {
        question: 'In 2013, the Vikings drafted 3 players in the first round, Cordarelle Patterson, Xavier Rhodes, and __________.',
        options: ['Adam Thielen', 'Matt Kalil', 'Everson Griffen', 'Shariff Floyd'],
        correctAnswer: 'Shariff Floyd',
    },
    {
        question: 'What Vikings player was on the cover of Madden 2002?',
        options: ['Daunte Culpepper', 'Randy Moss', 'Cris Carter', 'John Randle'],
        correctAnswer: 'Daunte Culpepper',
    },
    {
        question: "How much was Kirk Cousins' first contract with the Vikings?",
        options: ['$90 million', '$84 million', '$88 million', '$100 million'],
        correctAnswer: '$84 million',
    },
    {
        question: "In week 11 of the 2016 season, 2 players on the Vikings scored 100+ yard touchdowns against the Cardinals, Cordarelle Patterson and what cornerback?",
        options: ['Xavier Rhodes', 'Captain Munnerlyn', 'Trae Waynes', 'Mackenzie Alexander'],
        correctAnswer: 'Xavier Rhodes',
    }
];

startQuiz();