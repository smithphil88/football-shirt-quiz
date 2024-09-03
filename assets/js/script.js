var quizData1 = [
    {
        question: "assets/images/accrington-stanley-95-96.jpg",
        answers: ["Accrington Stanley", "Swindon", "Rotherham", "Bristol City"],
        correct: "Accrington Stanley",
    },
    {
        question: "assets/images/arsenal_football_shirt_91-93.jpg",
        answers: ["Arsenal", "Chelsea", "Newcastle", "Liverpool"],
        correct: "Arsenal",
    },
    {
        question: "assets/images/AV93-95.jpg",
        answers: ["West Ham", "Norwich", "Aston Villa", "Ipswich"],
        correct: "Aston Villa",
    },
    {
        question: "assets/images/blackburn-rovers-away-football-shirt-1994-1995-s_3988_1.jpg",
        answers: ["Liverpool", "Blackburn Rovers", "Manchester United", "Southampton"],
        correct: "Blackburn Rovers",
    },
    {
        question: "assets/images/bolton-99-01.jpg",
        answers: ["Swindon", "Bolton", "Oldham", "Wolves"],
        correct: "Bolton",
    },
    {
        question: "assets/images/crystal-palace93-94.jpg",
        answers: ["Tottenham Hotspur", "Arsenal", "Crystal Palace", "Brentford"],
        correct: "Crystal Palace",
    },
    {
        question: "assets/images/ipswich-town92-94.jpg",
        answers: ["Ipswich Town", "Chelsea", "Everton", "Manchester City"],
        correct: "Ipswich Town",
    },
    {
        question: "assets/images/Liverpool-91-92.jpg",
        answers: ["Manchester United", "Liverpool", "Arsenal", "Sheffield United"],
        correct: "Liverpool",
    },
    {
        question: "assets/images/ManU-95-96.jpg",
        answers: ["Leeds", "Manchester United", "Newcastle", "Bradford City"],
        correct: "Manchester United",
    },
    {
        question: "assets/images/TH-95-96.jpg",
        answers: ["Arsenal", "Leeds", "Tottenham Hotspur", "Blackburn Rovers"],
        correct: "Tottenham Hotspur",
    },
];

var username = document.getElementById("username");
const home = document.getElementById('home');
const shirtimage = document.getElementById("shirt-image");
const answerbtns = document.getElementsByClassName("answer-btns");
const questionbox = document.getElementById("question-box");
const maxquestions = 10;

document.getElementById('user-submit').addEventListener('click', confirmUser);

// a function that requires the user to enter in a username
function confirmUser () {
    if (document.getElementById("username").value === ''){
        alert('Please enter a name');
    } else {
    username = document.getElementById("username").value;
    document.getElementById("welcome-message").textContent = `Welcome ${username}, are you ready to play? Click the button below to choose your game mode.`
    document.getElementById('next-choose-container').classList.remove('hidden');
}}

document.getElementById('game-choices-btn').addEventListener('click', gameType);
// a function that hides the rules and adds the game choice selection screen
function gameType () {
    document.getElementById('rules-container').classList.add('hidden');
    document.getElementById('game-choices-container').classList.remove('hidden');
    document.getElementById('game-choices-btn').classList.add('hidden');
}

document.getElementById('guess-shirt-start-btn').addEventListener('click', startGuessShirtTeam);
// function to start the Guess the Shirt type game
function startGuessShirtTeam () {
    document.getElementById('game-choices-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    createQuestion();
    displayNumberOfQuestions();
    showCurrentQuestionNumber();
    questionNumber = 0;
    userScore = 0;
}

let questionNumber = 0;
let userScore = 0;

// a function that displays the shirts from the quiz array and the answers in their boxes.
function createQuestion () {
    
    shirtimage.src = quizData1[questionNumber].question;
    
    quizData1[questionNumber].answers.forEach((o) => {
        document.getElementById('answer-button-1').innerText = quizData1[questionNumber].answers[0]
        document.getElementById('answer-button-2').innerText = quizData1[questionNumber].answers[1]
        document.getElementById('answer-button-3').innerText = quizData1[questionNumber].answers[2]
        document.getElementById('answer-button-4').innerText = quizData1[questionNumber].answers[3]
    });
    document.getElementById('answer-button-1').addEventListener('click', checkAnswer);
    document.getElementById('answer-button-2').addEventListener('click', checkAnswer);
    document.getElementById('answer-button-3').addEventListener('click', checkAnswer);
    document.getElementById('answer-button-4').addEventListener('click', checkAnswer);
};

// function that displays the total number of questions in the quiz
function displayNumberOfQuestions() {
    document.getElementById('number-of-qs').innerText = quizData1.length;
}

// a function that shows the current question number
function showCurrentQuestionNumber() {
    document.getElementById('q-number').innerText = questionNumber + 1;
}

document.getElementById('next-btn').addEventListener('click', nextQuestion);

function nextQuestion () {
    if (questionNumber >= maxquestions - 1) {
        displayQuizResult();
        return;
    }
    questionNumber++;
    createQuestion();
    clearAnswers();
}

function clearAnswers (){
    document.getElementById('answer-button-1').classList.remove('correct', 'incorrect')
    document.getElementById('answer-button-2').classList.remove('correct', 'incorrect')
    document.getElementById('answer-button-3').classList.remove('correct', 'incorrect')
    document.getElementById('answer-button-4').classList.remove('correct', 'incorrect')
}

function checkAnswer (e) {
    let userAnswer = e.target.textContent;
    if (userAnswer === quizData1[questionNumber].correct) {
        userScore++;
        e.target.classList.add("correct");
    } else {
        e.target.classList.add("incorrect");
    }
}

function displayQuizResult() {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
}

document.getElementById('retake-btn').addEventListener('click', resetGame);

function resetGame () {
    
}






















document.getElementById('guess-year-start-btn').addEventListener('click', startGuessShirtYear);

function startGuessShirtYear () {
    document.getElementById('game-choices-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
}