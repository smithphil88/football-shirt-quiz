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

const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
};

var username;
const shirtimage = document.getElementById("shirt-image");
const answerbtns = document.getElementsByClassName("answer-btns");
const questionbox = document.getElementById("question-box");


let questionNumber = 9;

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
    document.getElementById('next-btn').classList.remove('hidden');

    shirtimage.src = quizData1[questionNumber].question;
    
    quizData1[questionNumber].answers.forEach((o) => {
        document.getElementById('answer-button-1').innerText = quizData1[questionNumber].answers[0]
        document.getElementById('answer-button-2').innerText = quizData1[questionNumber].answers[1]
        document.getElementById('answer-button-3').innerText = quizData1[questionNumber].answers[2]
        document.getElementById('answer-button-4').innerText = quizData1[questionNumber].answers[3]
    });
};



function startGuessShirtYear () {
    document.getElementById('game-choices-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
}