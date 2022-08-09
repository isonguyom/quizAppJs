// JAVASCRIPT QUIZ APP

// Global declarations
let quizWrapper = document.getElementById("quizWrapper")
let qtnsWrapper = document.querySelector(".qtn-wrapper")
let quizOptions = document.querySelectorAll(".quiz-wrapper > div")
let quizRan = [false, false, false]



// QUIZ QUESTIONS
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

let quizB = [{
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
let quizC = [{
        question: "1. Which quiz is this?",
        answerA: "a. A",
        answerB: "b. B",
        answer: "c. C",
    },
    {
        question: "2. What is your age?",
        answerA: "a. name",
        answer: "b. age",
        answerC: "c. state",
    },
    {
        question: "3. Where are you from?",
        answerA: "a. name",
        answerB: "b. age",
        answer: "c. state",
    },
    {
        question: "4. Where are you going?",
        answer: "a. home",
        answerB: "b. age",
        answerC: "c. state",
    }
]


// Run quiz function
let runQuiz = function (qId, no, q) {
    quizWrapper.classList.add("short")

    for (i = 0; i < quizOptions.length; i++) {
        quizOptions[i].classList.add("short")
    }


    // Check if quiz has been ran already
    if (quizRan[no] == false) {
        let titleTxt = "<h2>This is quiz " + qId + "</h2>"
        let createStartBtn = "<button id='startBtn'>Start Quiz</button>";

        // Create quiz questions and description display div
        let qtnsInner = document.createElement("div")
        qtnsInner.id = "qtnInner" + qId
        qtnsInner.classList.add("qtn-inner")
        qtnsWrapper.appendChild(qtnsInner)

        // Indicate the quiz running
        console.log("Running quiz" + qId + "...")

        // Create quiz title div
        let quizTitle = document.createElement("div")
        quizTitle.id = "quizTitle" + qId

        // Add title text and start quiz button
        quizTitle.innerHTML = titleTxt + "<br>" + createStartBtn
        qtnsInner.appendChild(quizTitle)

        // Load Quiz questions
        let startBtn = document.getElementById("startBtn")
        startBtn.addEventListener("click", function (quiz, id, qNo) {
            quiz = q
            id = qId
            qNo = no
            quizTitle.innerHTML = "<h4>Quiz " + id + "</h4>"
            displayQuestions(quiz, id, qNo)
        })
    }
}



// Function to display quiz questions
let displayQuestions = function (quiz, id, qNo) {
    console.log("Quiz starts")
    let qtnsInner = document.getElementById("qtnInner" + id)
    let qtnsHolder = document.createElement("div")
    qtnsHolder.id = "qtnsHolder" + id
    qtnsHolder.innerHTML = ""
    qtnsInner.appendChild(qtnsHolder)

    // get quiz
    getQuestions(quiz, id)

    // Create check score button
    let newSubmitBtn = document.createElement("button")
    newSubmitBtn.id = "scoreBtn"
    newSubmitBtn.innerHTML = "Check Score"
    qtnsInner.appendChild(newSubmitBtn)

    // Get score button and check scores
    let scoreBtn = document.getElementById("scoreBtn")
    scoreBtn.addEventListener("click", function (qId, no) {
        qId = id
        no = qNo
        displayScore(qId, no)
    })
}



// Get quiz question function
let getQuestions = function (quiz, id) {
    let qtnsHolder = document.getElementById("qtnsHolder" + id)
    quiz.forEach(question => {
        let qtnDiv = document.createElement("div")
        qtnDiv.id = "qtnDiv"

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

        qtnsHolder.appendChild(qtnDiv)
    })

}


// Indicate user answers
let getAns = function (obj) {
    let ansOption = document.querySelectorAll(".ans-option")
    for (i = 0; i < ansOption.length; i++) {
        if (ansOption[i] == obj) {
            ansOption[i].classList.add("add-border")

        } else if (ansOption[i].parentNode == obj.parentNode)
            ansOption[i].classList.remove("add-border")
    }
}



// Calculate and display the score
let displayScore = function (id, no) {
    let qtnsInner = document.getElementById("qtnInner" + id)
    let valArray = [];
    let val, perc, message = "",
        sumOfAns = 0
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
    perc = Math.round((sumOfAns / valArray.length) * 100)

    if (perc >= 45) {
        message = "<h3 class='message pass'>Congratulations! you pass the quiz.<br><br>Your score is " + perc + "%</h3>"
    } else {
        message = "<h3 class='message fail'>Ooh! you failed the quiz.<br><br>Your score is " + perc + "%</h3>"
        
    }

    // sumOfAns =
    console.log(valArray + "=" + sumOfAns + "perc = " + perc)
    qtnsInner.innerHTML = message
    qtnsInner.classList.add("flex")
    quizRan[no] = true
}



// Event origin
quizOptions[0].addEventListener("click", function () {
    runQuiz("A", 0, quizA)
})

quizOptions[1].addEventListener("click", function () {
    runQuiz("B", 1, quizB)
})

quizOptions[2].addEventListener("click", function () {
    runQuiz("C", 2, quizC)
})