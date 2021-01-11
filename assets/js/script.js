/************************************************************************************************
*                                                                                               *
*                                           CODEQUIZ 2                                          *
*                                                                                               *
*                                   Developed by Ethan Torres                                   *
*                                                                                               *
*                                                                                               *
*                                                                                               *
*                                                                                               *
*                                         © DevDelta 2021                                       *
*************************************************************************************************/




// ------------------ Global Variables ----------------------------------------------------------

// Start Variable
var start = document.getElementById("start-quiz");

// Question Variables
var questionEl = document.getElementById("question");
var questionNum = 0;

// Answer Variables
var ans;
var ansSelect = document.getElementById("choices");

// Timer Variables
var time = document.getElementById("time");
var timerId;
var timeRemaining = (questions.length * 30 + 1);

// Score Variables
var scoreUser = document.getElementById("score-user");
var scoreRemaining = document.getElementById("#score-submit")

// Miscellaneous Variables
var submit = document.querySelector("button.submit");
var username; 
// ----------------------------------------------------------------------------------------------





// ---------------------------------------- FUNCTIONS -------------------------------------------

// Start quiz Function
function start() {
    var homepageEl = document.getElementById('homepage');
    questionEl.removeAttribute("class"); // removes the main screen display once the button was clicked 

    timerId = setInterval(timer, 5000); // sets a timer

    time.textContent = timeRemaining; // displays timer

    pullQuestion(); // once the quiz starts, the function pulls out a question.
}
// ----------------------------------------------------------------------------------------------


//  Stop quiz Function
function stop() {
    clearInterval(timerId);

}
// ---------------------------------------------------------------------------------------------

// Timer Function
function timer() {
    timeRemaining--; // deducts time every second
    time.textContent = timeRemaining; // displays timer on quiz

    if (timeRemaining <= 0) {
        stop(); // stop sthe quiz once the timer reaches at or below 0
    }
}
// ---------------------------------------------------------------------------------------------



// Score Function
function currentScore() {

}
// ----------------------------------------------------------------------------------------------

// Leaderbord Function



start.addEventListener("click", start); // event listener for the start function