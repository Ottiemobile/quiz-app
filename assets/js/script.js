
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

// Miscillaneous Variables
var submit = document.querySelector("button.submit");
var username; 



start.addEventListener("click", start);