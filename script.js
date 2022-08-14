// JAVASCRIPT QUIZ APP

// Global declarations
let quizWrapper = document.getElementById("quizWrapper")
let qtnsWrapper = document.querySelector(".qtn-wrapper")
let quizOptions = document.querySelectorAll(".quiz-wrapper > div")
let qtnNode = document.querySelectorAll(".qtn-inner")
let quizRan = [false, false, false]
let quizNode = []
console.log(qtnNode)



// QUIZ QUESTIONS
// Quiz A (Javascipt knowledge)
let quizA = [{
        question: "1. Which of the following are the three core languages of web development?",
        answerA: "a. HTML, JavaScript, and Python",
        answer: "b. HTML, CSS, and JavaScript",
        answerC: "c. HTML, JavaScript, and PHP",
    },
    {
        question: "2. JavaScript was invented in 1995 by whom?",
        answerA: "a. Tim Berners-Lee",
        answerB: "b. James Gosling ",
        answer: "c. Brendan Eich",
    },
    {
        question: "3. Which of the following can not be used to declare a JavaScript variable?",
        answerA: "a. const",
        answerB: "b. let",
        answer: "c. Var",
    },
    {
        question: "4. A JavaScript variable whose values are written as name:value pairs is referred to as?",
        answerA: "a. Array",
        answer: "b. Object ",
        answerC: "c. String",
    },
    {
        question: "5. A block of code designed to perform a particular task is called a...",
        answer: "a. function",
        answerB: "b. conditional statement",
        answerC: "c. loop",
    },

]

// Quiz B (Maritime terminolgies)
let quizB = [{
        question: "1. Which of the following is not a major department on a ship?",
        answerA: "a. deck",
        answerB: "b. catering",
        answer: "c. security",
    },
    {
        question: "2. At sea, distance is expressed in...",
        answerA: "a. nautical distance",
        answer: "b. nautical mile",
        answerC: "c. nautical meter",
    },
    {
        question: "3. The bottom-most central part of the ship or boat hull on which the entire structure of the ship is built upon.",
        answer: "a. keel",
        answerB: "b. bilge",
        answerC: "c. deck",
    },
    {
        question: "4. The movement of cargo from one ship to another for transfer to a final destination is called?",
        answerA: "a. cargo transfer",
        answer: "b. transshipment",
        answerC: "c. trans-movement",
    },
    {
        question: "5. What is the name of the navigational device that uses the position of the sun, moon, and stars in the sky to determine a ship's location at sea?",
        answer: "a. Sextant",
        answerB: "b. Telescope",
        answerC: "c. Sunglasses",
    }

]

// Quiz C (Engineering principles)
let quizC = [{
        question: "1. The principle of floatation, which states that for an object to be partially or fully immersed in a fluid, it must experience an upward force equal to the weight of the fluid displaced by it, was propounded by",
        answer: "a. Archimedes of Syracuse",
        answerB: "b. Sir Isaac Newton",
        answerC: "c.  Daniel Bernoulli",
    },
    {
        question: "2. Which law states that the pressure of a given quantity of gas varies inversely with its volume at constant temperature?",
        answer: "a. Boyle's law",
        answerB: "b. Charles' law",
        answerC: "c. Gay-Lussac's law",
    },
    {
        question: "3. Which law states that the volume of an ideal gas is directly proportional to the absolute temperature at constant pressure?",
        answerA: "a. Boyle's law",
        answer: "b. Charles' law",
        answerC: "c. Gay-Lussac's law",
    },
    {
        question: "4. Which law states that as the speed of a moving fluid increases (liquid or gas), the pressure within the fluid decreases?",
        answer: "a. Bernoulli's principle",
        answerB: "b. Fick's law",
        answerC: "c. Graham's law",
    },
    {
        question: "5. Which law states that the rate of diffusion or of effusion of a gas is inversely proportional to the square root of its molecular weight?",
        answerA: "a. Bernoulli's principle",
        answerB: "b. Fick's law",
        answer: "c. Graham's law",
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