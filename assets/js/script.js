var quizData1 = [
    {
        question: "assets/images/Marseille1990-91Home.png",
        answers: ["Lyon", "PSG", "Marseille", "Montpellier"],
        correct: "Marseille",
    },
    {
        question: "assets/images/ger94.webp",
        answers: ["Germany", "Belgium", "England", "Denmark"],
        correct: "Germany",
    },
    {
        question: "assets/images/Newcastle 91.png",
        answers: ["West Ham", "Norwich", "Newcastle", "Ipswich"],
        correct: "Newcastle",
    },
    {
        question: "assets/images/Nigeria1994WorldCupAway.png",
        answers: ["Cameroon", "Nigeria", "Ivory Coast", "South Africa"],
        correct: "Nigeria",
    },
    {
        question: "assets/images/Wolves 97.png",
        answers: ["Swindon", "West Brom", "Oldham", "Wolves"],
        correct: "Wolves",
    },
];

const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
};

var username;
const shirtimage = document.getElementById("shirt-image");
const answerbtns = document.getElementById("answer-btns");
const questionbox = document.getElementById("question-box");


let questionNumber = 0;

document.getElementById("user-submit").onclick = function() {
    username = document.getElementById("username").value;
    document.getElementById("welcome-message").textContent = `Welcome ${username}, are you ready to play? Click the button below to choose your game mode.`
    document.getElementById('next-choose-container').classList.remove('hidden');
}
document.getElementById('game-choices-btn').addEventListener('click', gameType);

function gameType () {
    document.getElementById('rules-container').classList.add('hidden');
    document.getElementById('game-choices-container').classList.remove('hidden');
    document.getElementById('game-choices-btn').classList.add('hidden');
}

document.getElementById('guess-shirt-start-btn').addEventListener('click', startGuessShirtTeam);
document.getElementById('guess-year-start-btn').addEventListener('click', startGuessShirtYear);

function startGuessShirtTeam () {
    document.getElementById('game-choices-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');

    shirtimage.src = quizData1[questionNumber].question;
}



function startGuessShirtYear () {
    document.getElementById('game-choices-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
}