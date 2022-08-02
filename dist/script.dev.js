"use strict";

var quizOptions = document.querySelectorAll(".quiz-option > div");
var quiz = document.querySelectorAll(".quiz-wrapper > div");
var questionsContainer = document.getElementById("questionsContainer");
var startBtn = document.getElementById("startBtn"); // Questions

var quizA = {
  question: "1. What is your name",
  answerA: "a. name",
  answerB: "b. age",
  answerC: "c. address"
}; // Select which quiz you want to run

quizOptions[0].addEventListener("click", function () {
  quizOptions[0].classList.add("short");
  quizOptions[1].classList.add("short");
  quizOptions[2].classList.add("short");
  quiz[0].classList.add("active-quiz");
  quiz[1].classList.remove("active-quiz");
  quiz[2].classList.remove("active-quiz"); // questionsContainer.innerHTML = "<button id='startBtn'>Start Quiz</button>"

  getQuiz(quizA);
  questionsContainer.style.display = "block";
  console.log("Running quiz A...");
});
quizOptions[1].addEventListener("click", function () {
  quizOptions[0].classList.add("short");
  quizOptions[1].classList.add("short");
  quizOptions[2].classList.add("short");
  quiz[0].classList.remove("active-quiz");
  quiz[1].classList.add("active-quiz");
  quiz[2].classList.remove("active-quiz");
  getQuiz(quizB);
  questionsContainer.style.display = "block";
  console.log("Running quiz B...");
});
quizOptions[2].addEventListener("click", function () {
  quizOptions[0].classList.add("short");
  quizOptions[1].classList.add("short");
  quizOptions[2].classList.add("short");
  quiz[0].classList.remove("active-quiz");
  quiz[1].classList.remove("active-quiz");
  quiz[2].classList.add("active-quiz");
  getQuiz(quizC);
  questionsContainer.style.display = "block";
  console.log("Running quiz C...");
}); // Load questions

var getQuiz = function getQuiz(q) {
  var txt = "";
  console.log("Quiz starts");

  for (var x in q) {
    txt += "<div class='question-item'>" + q[x] + "</div>";
    quiz[0].innerHTML = "";
    questionsContainer.innerHTML = txt;
  }

  ;
}; // startBtn.addEventListener("click", getQuiz(quiz1))