var quizData1 = [
    {
        question: "/images/ger94.webp",
        options: ["Germany", "Belgium", "England", "Denmark"],
        correct: "Germany",
    },
    {
        question: "/images/Marseille1990-91Home.png",
        options: ["Lyon", "PSG", "Marseille", "Montpellier"],
        correct: "Marseille",
    },
    {
        question: "/images/Newcastle 91.png",
        options: ["West Ham", "Norwich", "Newcastle", "Ipswich"],
        correct: "Newcastle",
    },
    {
        question: "/images/Nigeria1994WorldCupAway.png",
        options: ["Cameroon", "Nigeria", "Ivory Coast", "South Africa"],
        correct: "Nigeria",
    },
    {
        question: "/images/Wolves 97.png",
        options: ["Swindon", "West Brom", "Oldham", "Wolves"],
        correct: "Wolves",
    },
];

var username;

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
}

function startGuessShirtYear () {
    document.getElementById('game-choices-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
}