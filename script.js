let quizOptions = document.querySelectorAll(".quiz-option > div")
let quiz = document.querySelectorAll(".quiz-wrapper > div")
let questionsContainer = document.getElementById("questionsContainer")
let questionsHolder = document.getElementById("mainQuestions")
// let startBtn = document.getElementById("startBtn")

// Questions
let quizA = [{
        question: "1. What is your name?",
        answerA: "a. name",
        answerB: "b. age",
        answerC: "c. state",
    },
    {
        question: "2. What is your name?",
        answerA: "a. name",
        answerB: "b. age",
        answerC: "c. state",
    },
    {
        question: "3. What is your name?",
        answerA: "a. name",
        answerB: "b. age",
        answerC: "c. state",
    },

]

let quizB = {
    question: "1. Where are you from?",
    answerA: "a. name",
    answerB: "b. age",
    answerC: "c. state",
}

let quizC = {
    question: "1. What is your age?",
    answerA: "a. name",
    answerB: "b. age",
    answerC: "c. state",
}


// Select which quiz you want to run
quizOptions[0].addEventListener("click", function () {

    quizOptions[0].classList.add("short")
    quizOptions[1].classList.add("short")
    quizOptions[2].classList.add("short")

    quiz[0].classList.add("active-quiz")
    quiz[1].classList.remove("active-quiz")
    quiz[2].classList.remove("active-quiz")


    console.log("Running quiz A...")
    quiz[0].innerHTML = "<h2>This is quiz A</h2>";

    // Create start button
    questionsContainer.innerHTML = "<button id='startBtn'>Start Quiz</button>"
  

    // Load Quiz questions
    let startBtn = document.getElementById("startBtn")
    startBtn.addEventListener("click", function () {
        console.log("Quiz starts")
        quizA.forEach(question => {
            for (let key in question) {
                console.log(`${key}: ${question[key]}`);
                questionsContainer.innerHTML += "<div class='question-item'>" + `${question[key]}` + "</div>"
            }

        
        })
        startBtn.style.display = "none"
    })
    questionsContainer.style.display = "block"

})

quizOptions[1].addEventListener("click", function () {

    quizOptions[0].classList.add("short")
    quizOptions[1].classList.add("short")
    quizOptions[2].classList.add("short")

    quiz[0].classList.remove("active-quiz")
    quiz[1].classList.add("active-quiz")
    quiz[2].classList.remove("active-quiz")

    console.log("Running quiz B...")
    quiz[1].innerHTML = "<h2>This is quiz B</h2>";


    questionsContainer.innerHTML = "<button id='startBtn'>Start Quiz</button>"
    // getQuiz(quizA)


    let startBtn = document.getElementById("startBtn")
    startBtn.addEventListener("click", function () {
        let txt = "";
        q = quizB

        console.log("Quiz starts")
        for (let x in q) {
            txt += "<div class='question-item'>" + q[x] + "</div>";

            // quiz[0].innerHTML = "";
            questionsContainer.innerHTML = txt + "<button id='submitAns'>Check score</button>";
            let submitAns = document.getElementById("submitAns")
            submitAns.addEventListener("click", function () {
                questionsContainer.innerHTML = "Hello! B"
            })
        };
    })
    questionsContainer.style.display = "block"
})

quizOptions[2].addEventListener("click", function () {

    quizOptions[0].classList.add("short")
    quizOptions[1].classList.add("short")
    quizOptions[2].classList.add("short")

    quiz[0].classList.remove("active-quiz")
    quiz[1].classList.remove("active-quiz")
    quiz[2].classList.add("active-quiz")

    console.log("Running quiz C...")
    quiz[2].innerHTML = "<h2>This is quiz C</h2>";

    questionsContainer.innerHTML = "<button id='startBtn'>Start Quiz</button>"
    // getQuiz(quizA)


    let startBtn = document.getElementById("startBtn")
    startBtn.addEventListener("click", function () {
        let txt = "";
        q = quizC

        console.log("Quiz starts")
        for (let x in q) {
            txt += "<div class='question-item'>" + q[x] + "</div>";

            // quiz[0].innerHTML = "";
            questionsContainer.innerHTML = txt + "<button id='submitAns'>Check score</button>";
            let submitAns = document.getElementById("submitAns")
            submitAns.addEventListener("click", function () {
                questionsContainer.innerHTML = "Hello! C"
            })
        };
    })
    questionsContainer.style.display = "block"
})


// Load questions
// let getQuiz = function (q) {
//     let txt = "";

//     console.log("Quiz starts")
//     for (let x in q) {
//         txt += "<div class='question-item'>" + q[x] + "</div>";

//         quiz[0].innerHTML = "";
//         questionsContainer.innerHTML = txt;
//     };
// }

// let startBtn = document.getElementById("startBtn")
// startBtn.addEventListener("click", getQuiz(quizA))