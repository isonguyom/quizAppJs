let quizOptions = document.querySelectorAll(".quiz-option > div")
let quiz = document.querySelectorAll(".quiz-wrapper > div")
let questionsContainer = document.getElementById("questionsContainer")
let startBtn = document.getElementById("startBtn")

// Questions
let quizA = {
    question: "1. What is your name",
    answerA: "a. name",
    answerB: "b. age",
    answerC: "c. address",
}


// Select which quiz you want to run
quizOptions[0].addEventListener("click", function () {

    quizOptions[0].classList.add("short")
    quizOptions[1].classList.add("short")
    quizOptions[2].classList.add("short")

    quiz[0].classList.add("active-quiz")
    quiz[1].classList.remove("active-quiz")
    quiz[2].classList.remove("active-quiz")

    // questionsContainer.innerHTML = "<button id='startBtn'>Start Quiz</button>"
    getQuiz(quizA)
    questionsContainer.style.display = "block"


    console.log("Running quiz A...")
})

quizOptions[1].addEventListener("click", function () {

    quizOptions[0].classList.add("short")
    quizOptions[1].classList.add("short")
    quizOptions[2].classList.add("short")

    quiz[0].classList.remove("active-quiz")
    quiz[1].classList.add("active-quiz")
    quiz[2].classList.remove("active-quiz")

    getQuiz(quizB)
    questionsContainer.style.display = "block"

    console.log("Running quiz B...")
})

quizOptions[2].addEventListener("click", function () {

    quizOptions[0].classList.add("short")
    quizOptions[1].classList.add("short")
    quizOptions[2].classList.add("short")

    quiz[0].classList.remove("active-quiz")
    quiz[1].classList.remove("active-quiz")
    quiz[2].classList.add("active-quiz")

    getQuiz(quizC)
    questionsContainer.style.display = "block"

    console.log("Running quiz C...")
})


// Load questions
let getQuiz = function (q) {
    let txt = "";

    console.log("Quiz starts")
    for (let x in q) {
        txt += "<div class='question-item'>" + q[x] + "</div>";

        quiz[0].innerHTML = "";
        questionsContainer.innerHTML = txt;
    };
}

// startBtn.addEventListener("click", getQuiz(quiz1))