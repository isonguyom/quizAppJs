"use strict";

// JAVASCRIPT QUIZ APP
// Global declarations
var optionContainer = document.querySelector(".quiz-option");
var quizOptions = document.querySelectorAll(".quiz-option > div");
var quizTitle = document.querySelector("#quizTitle");
var questionsContainer = document.getElementById("questionsContainer");
var questionsHolder = document.getElementById("questionsInner");
var quizRan = false; // Questions

var quizA = [{
  question: "1. Which quiz is this?",
  answer: "a. A",
  answerB: "b. B",
  answerC: "c. C"
}, {
  question: "2. What is your name?",
  answer: "a. name",
  answerB: "b. age",
  answerC: "c. state"
}, {
  question: "3. What is your age?",
  answerA: "a. name",
  answer: "b. age",
  answerC: "c. state"
}, {
  question: "4. What is 1 + 1",
  answerA: "a. 3",
  answerB: "b. 1",
  answer: "c. 2"
}];
var quizB = [{
  question: "1. Which quiz is this?",
  answerA: "a. A",
  answer: "b. B",
  answerC: "c. C"
}, {
  question: "2. Where are you from?",
  answerA: "a. name",
  answerB: "b. age",
  answer: "c. state"
}, {
  question: "3. Where are you going?",
  answer: "a. home",
  answerB: "b. age",
  answerC: "c. state"
}];
var quizC = {
  question: "1. What is your age?",
  answerA: "a. name",
  answerB: "b. age",
  answerC: "c. state"
}; // Run quiz function

var runQuiz = function runQuiz(q) {
  optionContainer.classList.add("short");

  for (i = 0; i < quizOptions.length; i++) {
    quizOptions[i].classList.add("short");
  }

  if (quizRan == false) {
    console.log("Running quiz A...");
    quizTitle.innerHTML = "<h2>This is quiz A</h2><br><button id='startBtn'>Start Quiz</button>"; // Load Quiz questions

    var startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", function (quiz) {
      quiz = q;
      displayQuestions(quiz);
    });
  }
}; // Function to display quiz questions


var displayQuestions = function displayQuestions(quiz) {
  quizTitle.innerHTML = "<h4>Quiz A</h4>";
  questionsHolder.innerHTML = "";
  console.log("Quiz starts"); // get quiz

  getQuestions(quiz); // Create check score button

  var newSubmitBtn = document.createElement("button");
  newSubmitBtn.id = "scoreBtn";
  newSubmitBtn.innerHTML = "Check Score";
  questionsContainer.appendChild(newSubmitBtn); // Get score button and check scores

  var scoreBtn = document.getElementById("scoreBtn");
  scoreBtn.addEventListener("click", displayScore);
}; // Get quiz question function


var getQuestions = function getQuestions(quiz) {
  quiz.forEach(function (question) {
    var qtnDiv = document.createElement("div");
    qtnDiv.id = "qtnWrapper";

    for (var key in question) {
      // Display questions
      if (key == "question") {
        qtnDiv.innerHTML += "<div class='question'>" + "".concat(question[key]) + "</div>";
      } // Display options for answer


      if (key != "question") {
        if (key == "answer") {
          qtnDiv.innerHTML += "<li class='ans-option ans' onclick='getAns(this)'>" + "".concat(question[key]) + "</li>";
        }

        if (key != "answer") {
          qtnDiv.innerHTML += "<li class='ans-option' onclick='getAns(this)'>" + "".concat(question[key]) + "</li>";
        }
      }
    }

    questionsHolder.appendChild(qtnDiv);
  });
};

var getAns = function getAns(obj) {
  var ansOption = document.querySelectorAll(".ans-option");

  for (i = 0; i < ansOption.length; i++) {
    if (ansOption[i] == obj) {
      ansOption[i].classList.add("add-border"); // console.log(Object.getOwnPropertyNames(obj))
      // if (ansOption[i].classList.contains("ans")) {
      //     obj.style.border = "2px solid green"
      // } else {
      //     obj.style.border = "2px solid red"
      // }
    } else if (ansOption[i].parentNode == obj.parentNode) ansOption[i].classList.remove("add-border");
  }
};

var displayScore = function displayScore() {
  var valArray = [];
  var val,
      perc,
      message,
      sumOfAns = 0;
  var selected = document.querySelectorAll(".add-border");

  for (i = 0; i < selected.length; i++) {
    var correctAns = selected[i].classList.contains("ans");

    if (correctAns) {
      val = 1;
    } else {
      val = 0;
    }

    valArray.push(val); // console.log(valArray)
  } // Sum score


  for (var _i = 0; _i < valArray.length; _i++) {
    sumOfAns += valArray[_i];
  } // Calculate percentage


  perc = sumOfAns / valArray.length * 100;

  if (perc >= 45) {
    message = "Congratulations! you pass the quiz.\n Your score is " + perc + "%";
  } else {
    message = "Ooh! you failed the quiz.\n Your score is " + perc + "%";
  } // sumOfAns =


  console.log(valArray + "=" + sumOfAns + "perc = " + perc);
  questionsContainer.innerHTML = message;
  quizRan = true;
};

quizOptions[0].addEventListener("click", function () {
  runQuiz(quizA);
}); // quizOptions[1].addEventListener("click", function () {
//     runQuiz(quizB)
// })