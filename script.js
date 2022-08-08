// JAVASCRIPT QUIZ APP

// Global declarations
let optionContainer = document.querySelector(".quiz-option")
let quizOptions = document.querySelectorAll(".quiz-option > div")
let quizTitle = document.querySelector("#quizTitle")
let questionsContainer = document.getElementById("questionsContainer")
let questionsHolder = document.getElementById("questionsInner")
let quizRan = false

// Questions
let quizA = [{
        question: "1. Which quiz is this?",
        answer: "a. A",
        answerB: "b. B",
        answerC: "c. C",
    },
    {
        question: "2. What is your name?",
        answer: "a. name",
        answerB: "b. age",
        answerC: "c. state",
    },
    {
        question: "3. What is your age?",
        answerA: "a. name",
        answer: "b. age",
        answerC: "c. state",
    },
    {
        question: "4. What is 1 + 1",
        answerA: "a. 3",
        answerB: "b. 1",
        answer: "c. 2",
    },

]

let quizB =[ {
    question: "1. Which quiz is this?",
    answerA: "a. A",
    answer: "b. B",
    answerC: "c. C",
},
{
    question: "2. Where are you from?",
    answerA: "a. name",
    answerB: "b. age",
    answer: "c. state",
},
{
    question: "3. Where are you going?",
    answer: "a. home",
    answerB: "b. age",
    answerC: "c. state",
}

]
let quizC = {
    question: "1. What is your age?",
    answerA: "a. name",
    answerB: "b. age",
    answerC: "c. state",
}


// Run quiz function
let runQuiz = function (q) {
    optionContainer.classList.add("short")

    for (i = 0; i < quizOptions.length; i++) {
        quizOptions[i].classList.add("short")
    }

    if (quizRan == false) {
        console.log("Running quiz A...")
        quizTitle.innerHTML = "<h2>This is quiz A</h2><br><button id='startBtn'>Start Quiz</button>";

        // Load Quiz questions
        let startBtn = document.getElementById("startBtn")
        startBtn.addEventListener("click", function (quiz) {
            quiz = q
            displayQuestions(quiz)
        })
    }
}


// Function to display quiz questions
let displayQuestions = function (quiz) {

    quizTitle.innerHTML = "<h4>Quiz A</h4>"
    questionsHolder.innerHTML = ""
    console.log("Quiz starts")

    // get quiz
    getQuestions(quiz)

    // Create check score button
    let newSubmitBtn = document.createElement("button")
    newSubmitBtn.id = "scoreBtn"
    newSubmitBtn.innerHTML = "Check Score"
    questionsContainer.appendChild(newSubmitBtn)

    // Get score button and check scores
    let scoreBtn = document.getElementById("scoreBtn")
    scoreBtn.addEventListener("click", displayScore)
}

// Get quiz question function
let getQuestions = function (quiz) {
    quiz.forEach(question => {
        let qtnDiv = document.createElement("div")
        qtnDiv.id = "qtnWrapper"

        for (let key in question) {

            // Display questions
            if (key == "question") {
                qtnDiv.innerHTML += "<div class='question'>" + `${question[key]}` + "</div>"
            }

            // Display options for answer
            if (key != "question") {
                if (key == "answer") {
                    qtnDiv.innerHTML += "<li class='ans-option ans' onclick='getAns(this)'>" + `${question[key]}` + "</li>"

                }
                if (key != "answer") {
                    qtnDiv.innerHTML += "<li class='ans-option' onclick='getAns(this)'>" + `${question[key]}` + "</li>"
                }
            }
        }

        questionsHolder.appendChild(qtnDiv)
    })

}

let getAns = function (obj) {
    let ansOption = document.querySelectorAll(".ans-option")
    for (i = 0; i < ansOption.length; i++) {
        if (ansOption[i] == obj) {
            ansOption[i].classList.add("add-border")
            // console.log(Object.getOwnPropertyNames(obj))
            // if (ansOption[i].classList.contains("ans")) {
            //     obj.style.border = "2px solid green"
            // } else {
            //     obj.style.border = "2px solid red"
            // }
        } else if (ansOption[i].parentNode == obj.parentNode)
            ansOption[i].classList.remove("add-border")
    }
}

let displayScore = function () {
    let valArray = [];
    let val, perc, message, sumOfAns = 0
    let selected = document.querySelectorAll(".add-border")
    for (i = 0; i < selected.length; i++) {
        let correctAns = selected[i].classList.contains("ans")
        if (correctAns) {
            val = 1
        } else {
            val = 0
        }
        valArray.push(val)
        // console.log(valArray)
    }

    // Sum score
    for (let i = 0; i < valArray.length; i++) {
        sumOfAns += valArray[i];
    }

    // Calculate percentage
    perc = (sumOfAns / valArray.length) * 100

    if (perc >= 45) {
        message = "Congratulations! you pass the quiz.\n Your score is " + perc + "%"
    } else {
        message = "Ooh! you failed the quiz.\n Your score is " + perc + "%"
    }

    // sumOfAns =
    console.log(valArray + "=" + sumOfAns + "perc = " + perc)
    questionsContainer.innerHTML = message
    quizRan = true
}


quizOptions[0].addEventListener("click", function () {
    runQuiz(quizA)
})

// quizOptions[1].addEventListener("click", function () {
//     runQuiz(quizB)
// })