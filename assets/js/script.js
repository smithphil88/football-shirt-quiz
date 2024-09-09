var quizData1 = [
    {
        question: "assets/images/team/accrington-stanley-95-96.jpg",
        answers: ["Accrington Stanley", "Swindon", "Rotherham", "Bristol City"],
        correct: "Accrington Stanley",
    },
    {
        question: "assets/images/team/arsenal_football_shirt_91-93.jpg",
        answers: ["Arsenal", "Chelsea", "Newcastle", "Liverpool"],
        correct: "Arsenal",
    },
    {
        question: "assets/images/team/AV93-95.jpg",
        answers: ["West Ham", "Norwich", "Aston Villa", "Ipswich"],
        correct: "Aston Villa",
    },
    {
        question: "assets/images/team/blackburn-rovers-away-football-shirt-1994-1995-s_3988_1.jpg",
        answers: ["Liverpool", "Blackburn Rovers", "Manchester United", "Southampton"],
        correct: "Blackburn Rovers",
    },
    {
        question: "assets/images/team/bolton-99-01.jpg",
        answers: ["Swindon", "Bolton", "Oldham", "Wolves"],
        correct: "Bolton",
    },
    {
        question: "assets/images/team/crystal-palace93-94.jpg",
        answers: ["Tottenham Hotspur", "Arsenal", "Crystal Palace", "Brentford"],
        correct: "Crystal Palace",
    },
    {
        question: "assets/images/team/ipswich-town92-94.jpg",
        answers: ["Ipswich Town", "Chelsea", "Everton", "Manchester City"],
        correct: "Ipswich Town",
    },
    {
        question: "assets/images/team/Liverpool-91-92.jpg",
        answers: ["Manchester United", "Liverpool", "Arsenal", "Sheffield United"],
        correct: "Liverpool",
    },
    {
        question: "assets/images/team/ManU-95-96.jpg",
        answers: ["Leeds", "Manchester United", "Newcastle", "Bradford City"],
        correct: "Manchester United",
    },
    {
        question: "assets/images/team/TH-95-96.jpg",
        answers: ["Arsenal", "Leeds", "Tottenham Hotspur", "Blackburn Rovers"],
        correct: "Tottenham Hotspur",
    },
];

var quizData2 = [
    {
        question: "assets/images/year/Brazil98-00.avif",
        answers: ["1997", "1999", "2002", "1995"],
        correct: "1999",
    },
    {
        question: "assets/images/year/Denmark-92.webp",
        answers: ["1991", "1990", "1995", "1992"],
        correct: "1992",
    },
    {
        question: "assets/images/year/England-90.jpg",
        answers: ["1988", "1993", "1998", "1990"],
        correct: "1990",
    },
    {
        question: "assets/images/year/Fiorentina-98-Batistuta.webp",
        answers: ["2000", "2002", "1998", "1994"],
        correct: "1998",
    },
    {
        question: "assets/images/year/France-98-ZZ.webp",
        answers: ["1996", "1998", "2000", "2004"],
        correct: "1998",
    },
    {
        question: "assets/images/year/Nigeria-96-Jay-Jay.webp",
        answers: ["1996", "1994", "2000", "1990"],
        correct: "1996",
    },
    {
        question: "assets/images/year/Marcel-Desailly-AC-Milan-1993.jpg",
        answers: ["1990", "1995", "1999", "1993"],
        correct: "1993",
    },
    {
        question: "assets/images/year/Sampdoria-91-92.jpg",
        answers: ["1988", "1999", "1991", "1997"],
        correct: "1991",
    },
    {
        question: "assets/images/year/Scotland-98.jpg",
        answers: ["1998", "1996", "2000", "2006"],
        correct: "1998",
    },
    {
        question: "assets/images/year/Utd-98-99.webp",
        answers: ["1999", "2001", "1997", "2002"],
        correct: "1999",
    },
];


var username = document.getElementById("username");
const home = document.getElementById('home');
const shirtimage = document.getElementById("shirt-image");
const answerbtns = document.getElementsByClassName("answer-btns");
const questionbox = document.getElementById("question-box");
const maxquestions = 10;
var questionNumber = 0;
var userScore = 0;
var finalScore = 0;

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
}


// a method to shuffle the question so they do not appear in the same order
const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
}

quizData1 = shuffleArray(quizData1);

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

// a function that displays the next question
function nextQuestion () {
    let allAnswers = document.querySelectorAll('.answer-btns');
    allAnswers.forEach((o) => {
        o.classList.remove('disabled')
    });
    if (questionNumber >= maxquestions - 1) {
        displayQuizResult();
        return;
    }
    questionNumber++;
    createQuestion();
    clearAnswers();
    showCurrentQuestionNumber();
}


// a function to clear the answers from the previous question
function clearAnswers (){
    document.getElementById('answer-button-1').classList.remove('correct', 'incorrect')
    document.getElementById('answer-button-2').classList.remove('correct', 'incorrect')
    document.getElementById('answer-button-3').classList.remove('correct', 'incorrect')
    document.getElementById('answer-button-4').classList.remove('correct', 'incorrect')
}


// the function that displays the current score the user has
function showUserScore () {
    document.getElementById('userScore').innerText = userScore;
}

// a function that check whether or not an answer is correct and to disable the other options
function checkAnswer (e) {
    let userAnswer = e.target.textContent;
    if (userAnswer === quizData1[questionNumber].correct) {
        userScore++;
        finalScore++;
        e.target.classList.add("correct");
        showUserScore();
    } else {
        e.target.classList.add("incorrect");
    }

    let allAnswers = document.querySelectorAll('.answer-btns');
    allAnswers.forEach((o) => {
        o.classList.add('disabled')
    });
};

function displayFinalNumberOfQuestions () {
    document.getElementById('final-number-of-qs').innerText = quizData1.length;
}

function displayFinalScore () {
    document.getElementById('final-score').innerText = finalScore;
}

function displayResultsMessage (){    
    if (finalScore < 3) {
        document.getElementById('results-message').innerText = "This is relegation form";
    } else if (finalScore <= 5) {
        document.getElementById('results-message').innerText = "You are comfortably mid-table, there's always next season";
    } else if (finalScore <= 9) {
        document.getElementById('results-message').innerText = "Great effort, you are pushing for the play-offs";
    } else if (finalScore == quizData1.length) {
        document.getElementById('results-message').innerText = "Top of the league! Champions!";
    } else {
        document.getElementById('results-message').innerText = "There seems to be a problem here";
    }
}

function displayQuizResult() {
    displayFinalNumberOfQuestions();
    displayResultsMessage();
    displayFinalScore();
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    document.getElementById("thankyou-message").textContent = `Thanks for playing ${username}`;
}

document.getElementById('retake-btn').addEventListener('click', returnHome);

function returnHome () {
    document.getElementById('game-choices-container').classList.add('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('rules-container').classList.remove('hidden');
    document.getElementById('username').value = '';
}

// script to run the second game mode - user guesses the year the shirt is from


// var questionNumber2 = 0;
// var userScore2 = 0;
// var finalScore2 = 0;

// document.getElementById('guess-year-start-btn').addEventListener('click', startGuessShirtYear);

// function startGuessShirtYear () {
//     document.getElementById('game-choices-container').classList.add('hidden');
//     document.getElementById('question-container').classList.remove('hidden');
//     createQuestion2();
//     displayNumberOfQuestions2();
// }

// function createQuestion2 () {
    
//     shirtimage.src = quizData2[questionNumber2].question;
    
//     quizData2[questionNumber2].answers.forEach((o) => {
//         document.getElementById('answer-button-1').innerText = quizData2[questionNumber2].answers[0]
//         document.getElementById('answer-button-2').innerText = quizData2[questionNumber2].answers[1]
//         document.getElementById('answer-button-3').innerText = quizData2[questionNumber2].answers[2]
//         document.getElementById('answer-button-4').innerText = quizData2[questionNumber2].answers[3]
//     });
//     document.getElementById('answer-button-1').addEventListener('click', checkAnswer2);
//     document.getElementById('answer-button-2').addEventListener('click', checkAnswer2);
//     document.getElementById('answer-button-3').addEventListener('click', checkAnswer2);
//     document.getElementById('answer-button-4').addEventListener('click', checkAnswer2);
// };

// function displayNumberOfQuestions2() {
//     document.getElementById('number-of-qs').innerText = quizData2.length;
// }

// // a function that shows the current question number
// function showCurrentQuestionNumber2() {
//     document.getElementById('q-number').innerText = questionNumber2 + 1;
// }

// document.getElementById('next-btn').addEventListener('click', nextQuestion2);

// // a function that displays the next question
// function nextQuestion2 () {
//     if (questionNumber2 >= maxquestions - 1) {
//         displayQuizResult();
//         return;
//     }
//     questionNumber2++;
//     createQuestion2();
//     clearAnswers();
//     showCurrentQuestionNumber2();
// }

// function checkAnswer2 (e2) {
//     let userAnswer2 = e2.target.textContent;
//     if (userAnswer2 === quizData2[questionNumber2].correct) {
//         userScore2++;
//         finalScore2++;
//         e2.target.classList.add("correct");
//         showUserScore2();
//     } else {
//         e2.target.classList.add("incorrect");
//     }
// }

// function showUserScore2 () {
//     document.getElementById('userScore').innerText = userScore2;
// }