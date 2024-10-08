/* jshint esversion: 6 */
/* Two arrays that contain questiosn, answers and the correct answer */
let quizData1 = [
    {
        question: "assets/images/team/accrington-stanley-95-96.webp",
        answers: ["Accrington Stanley", "Swindon", "Rotherham", "Bristol City"],
        correct: "Accrington Stanley",
    },
    {
        question: "assets/images/team/arsenal_football_shirt_91-93.webp",
        answers: ["Arsenal", "Chelsea", "Newcastle", "Liverpool"],
        correct: "Arsenal",
    },
    {
        question: "assets/images/team/av-93-95.webp",
        answers: ["West Ham", "Norwich", "Aston Villa", "Ipswich"],
        correct: "Aston Villa",
    },
    {
        question: "assets/images/team/blackburn-rovers-1994-1995.webp",
        answers: ["Liverpool", "Blackburn Rovers", "Manchester United", "Southampton"],
        correct: "Blackburn Rovers",
    },
    {
        question: "assets/images/team/bolton-99-01.webp",
        answers: ["Swindon", "Bolton", "Oldham", "Wolves"],
        correct: "Bolton",
    },
    {
        question: "assets/images/team/crystal-palace93-94.webp",
        answers: ["Tottenham Hotspur", "Arsenal", "Crystal Palace", "Brentford"],
        correct: "Crystal Palace",
    },
    {
        question: "assets/images/team/cov-92-94.webp",
        answers: ["Ipswich Town", "Swansea City", "Manchester City", "Coventry City"],
        correct: "Coventry City",
    },
    {
        question: "assets/images/team/liverpool.webp",
        answers: ["Manchester United", "Liverpool", "Arsenal", "Sheffield United"],
        correct: "Liverpool",
    },
    {
        question: "assets/images/team/manutd-95-96.webp",
        answers: ["Leeds", "Manchester United", "Newcastle", "Bradford City"],
        correct: "Manchester United",
    },
    {
        question: "assets/images/team/tot-95-96.webp",
        answers: ["Arsenal", "Leeds", "Tottenham Hotspur", "Blackburn Rovers"],
        correct: "Tottenham Hotspur",
    },
];

let quizData2 = [
    {
        question: "assets/images/year/brazil-99.webp",
        answers: ["1997", "1999", "2002", "1995"],
        correct: "1999",
    },
    {
        question: "assets/images/year/denmark-92.webp",
        answers: ["1991", "1990", "1995", "1992"],
        correct: "1992",
    },
    {
        question: "assets/images/year/england-90.webp",
        answers: ["1988", "1993", "1998", "1990"],
        correct: "1990",
    },
    {
        question: "assets/images/year/fiorentina-98.webp",
        answers: ["2000", "2002", "1998", "1994"],
        correct: "1998",
    },
    {
        question: "assets/images/year/france-98.webp",
        answers: ["1996", "1998", "2000", "2004"],
        correct: "1998",
    },
    {
        question: "assets/images/year/nigeria-96-jay-jay.webp",
        answers: ["1996", "1994", "2000", "1990"],
        correct: "1996",
    },
    {
        question: "assets/images/year/acmilan-93.webp",
        answers: ["1990", "1995", "1999", "1993"],
        correct: "1993",
    },
    {
        question: "assets/images/year/sampdoria-91-92.webp",
        answers: ["1988", "1999", "1991", "1997"],
        correct: "1991",
    },
    {
        question: "assets/images/year/scotland-98.webp",
        answers: ["1998", "1996", "2000", "2006"],
        correct: "1998",
    },
    {
        question: "assets/images/year/man-98-99.webp",
        answers: ["1999", "2001", "1997", "2002"],
        correct: "1999",
    },
];

/* The main variable that control the game */
let username = document.getElementById("username");
const shirtImage = document.getElementById("shirt-image");
const maxQuestions = 10;
let questionNumber = 0;
let userScore = 0;
let finalScore = 0;
let questionArray = [];
let gameMode = 'shirt-team';

/**
 * A function that decides which array to sue, dependant on which game mode is chosen
 */
function modeOfGame (gameMode) {
    if (gameMode === 'shirt-team') {
        questionArray = quizData1;
    } else {
        questionArray = quizData2;
    }
}

document.getElementById('user-submit').addEventListener('click', confirmUser);
/**
 * a function that requires the user to enter in a username
 */
function confirmUser () {
    let usernameCurrent = username.value;
    if (usernameCurrent === ''){
        alert('Please enter a name');
    } else if (usernameCurrent.length >= 20){
        alert('Your username cannot be over 20 characters');
    } else  {
    username = document.getElementById("username").value;
    document.getElementById('user-submit-btn').classList.add('hidden');
    document.getElementById("welcome-message").textContent = `Welcome ${username}, are you ready to play? Click the button below to choose your game mode.`;
    document.getElementById('next-choose-container').classList.remove('hidden');
}}

/**
 * a function that hides the rules and adds the game choice selection screen
 * works when the game choices button is clicked
 */
document.getElementById('game-choices-btn').addEventListener('click', gameType);
function gameType () {
    document.getElementById('rules-container').classList.add('hidden');
    document.getElementById('game-choices-container').classList.remove('hidden');
    document.getElementById('game-choices-btn').classList.add('hidden');
}

/**
 * two functions that start seperate game modes
 * event listeners are used when the start button is clicked
 * game mode is chosen when clicked
 */
document.getElementById('guess-shirt-start-btn').addEventListener('click', startGuessShirtTeam);
document.getElementById('guess-year-start-btn').addEventListener('click', startGuessShirtYear);
function startGuessShirtTeam () {
    document.getElementById('game-choices-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    modeOfGame('shirt-team');
    createQuestion();
    displayNumberOfQuestions();
}
function startGuessShirtYear () {
    document.getElementById('game-choices-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    gameMode = 'shirt-year';
    modeOfGame('shirt-year');
    createQuestion();
    displayNumberOfQuestions(); 
}

/**
 * a function that displays the shirts from the quiz array and the answers in their boxes.
 * calls the unique question title too
 */
function createQuestion () {
    displayQuestionTitle(gameMode);
    shirtImage.src = questionArray[questionNumber].question;
    
    questionArray[questionNumber].answers.forEach((o) => {
        document.getElementById('answer-button-1').innerText = questionArray[questionNumber].answers[0];
        document.getElementById('answer-button-2').innerText = questionArray[questionNumber].answers[1];
        document.getElementById('answer-button-3').innerText = questionArray[questionNumber].answers[2];
        document.getElementById('answer-button-4').innerText = questionArray[questionNumber].answers[3];
    });
    document.getElementById('answer-button-1').addEventListener('click', checkAnswer);
    document.getElementById('answer-button-2').addEventListener('click', checkAnswer);
    document.getElementById('answer-button-3').addEventListener('click', checkAnswer);
    document.getElementById('answer-button-4').addEventListener('click', checkAnswer);
}

/**
 * a function that displays a unique question for this particular game choice
 */
function displayQuestionTitle (gameMode) {
    if (gameMode === 'shirt-team') {
        let questionTitle = document.getElementById('question-title');
        let questionText = document.createTextNode('Whose shirt is this?');
        questionTitle.appendChild(questionText);
} else {
    let questionTitle = document.getElementById('question-title');
    let questionText = document.createTextNode('What year was this worn?');
    questionTitle.appendChild(questionText);
}}

/**
 *  a function that clears the previous question title so it does not repeat over and over again
 */
function clearQuestionTitle () {
    document.getElementById('question-title').innerHTML = '';
}

/**
 * function that displays the total number of questions in the quiz
 */
function displayNumberOfQuestions() {
    document.getElementById('number-of-qs').innerText = questionArray.length;
}

/**
 * a function that shows the current question number
 */
function showCurrentQuestionNumber() {
    document.getElementById('q-number').innerText = questionNumber + 1;
}

/**
 * a function that displays the next question
 * clears data from any previous question
 * resets any clicked answers
 * ends the quiz if the max number of questions is reached
 */
document.getElementById('next-btn').addEventListener('click', nextQuestion);
function nextQuestion () {
    let allAnswers = document.querySelectorAll('.answer-btns');
    allAnswers.forEach((o) => {
        o.classList.remove('disabled');
    });
    if (questionNumber >= maxQuestions - 1) {
        displayQuizResult();
        return;
    }
    questionNumber++;
    clearCorrectAnswer();
    clearQuestionTitle();
    createQuestion(questionArray);
    clearAnswers();
    showCurrentQuestionNumber();
}

/**
 * a function to clear the answers from the previous question
 */
function clearAnswers (){
    document.getElementById('answer-button-1').classList.remove('correct', 'incorrect');
    document.getElementById('answer-button-2').classList.remove('correct', 'incorrect');
    document.getElementById('answer-button-3').classList.remove('correct', 'incorrect');
    document.getElementById('answer-button-4').classList.remove('correct', 'incorrect');
}

/**
 * a function that displays the current score the user has
 */
function showUserScore () {
    document.getElementById('user-score').innerText = userScore;
}

/**
 * a function that check whether or not an answer is correct and to disable the other options
 * adds to the user score if correct
 * shows what the right answer is, if the wrong one is clicked
 */
function checkAnswer (e) {
    let userAnswer = e.target.textContent;
    if (userAnswer === questionArray[questionNumber].correct) {
        userScore++;
        finalScore++;
        e.target.classList.add("correct");
        showUserScore();
    } else {
        e.target.classList.add("incorrect");
        let correct = document.getElementById('correct-answer');
        let correctAnswer = document.createTextNode(`That's incorrect, the answer is ${questionArray[questionNumber].correct}`);

    correct.appendChild(correctAnswer);
    }

    let allAnswers = document.querySelectorAll('.answer-btns');
    allAnswers.forEach((o) => {
        o.classList.add('disabled');
    });
}

/**
 * a function that clears the message stating the correct answer
 */
function clearCorrectAnswer () {
    document.getElementById('correct-answer').innerHTML = '';
}

/**
 * A function that displays the final amount of questions in the results container
 */
function displayFinalNumberOfQuestions () {
    document.getElementById('final-number-of-qs').innerText = questionArray.length;
}

/**
 * A function that displays the users final score in the results container
 */
function displayFinalScore () {
    document.getElementById('final-score').innerText = finalScore;
}

/**
 * a function that displays a different results messgae which is dependant on the score that the user got
 */
function displayResultsMessage (){    
    if (finalScore < 3) {
        document.getElementById('results-message').innerText = "This is relegation form";
        document.getElementById('results-image').src = 'assets/images/have-a-word.webp';
    } else if (finalScore <= 5) {
        document.getElementById('results-message').innerText = "You are comfortably mid-table, there's always next season";
        document.getElementById('results-image').src = 'assets/images/90s-kits.webp';
    } else if (finalScore <= 9) {
        document.getElementById('results-message').innerText = "Great effort, you are pushing for the play-offs";
        document.getElementById('results-image').src = 'assets/images/chelsea-97.webp';
    } else if (finalScore == questionArray.length) {
        document.getElementById('results-message').innerText = "Top of the league! Champions!";
        document.getElementById('results-image').src = 'assets/images/blackburn-94-95.webp';
    } else {
        document.getElementById('results-message').innerText = "There seems to be a problem here";
    }
}

/**
 * This function is called when the user has gone through all of the possible questions
 */
function displayQuizResult() {
    displayFinalNumberOfQuestions();
    displayResultsMessage();
    displayFinalScore();
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    document.getElementById("thankyou-message").textContent = `Thanks for playing ${username}`;
}