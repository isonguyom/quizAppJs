let quizOptions = document.querySelectorAll(".quiz-option > div")
let quiz = document.querySelectorAll(".quiz-wrapper > div")
let questionsContainer = document.getElementById("questionsContainer")
let questionsHolder = document.getElementById("questionsInner")
let quizRan = false

// Questions
let quizA = [{
        question: "1. What is your name?",
        answer: "a. name",
        answerB: "b. age",
        answerC: "c. state",
    },
    {
        question: "2. What is your name?",
        answerA: "a. name",
        answer: "b. age",
        answerC: "c. state",
    },
    {
        question: "3. What is your name?",
        answerA: "a. name",
        answerB: "b. age",
        answer: "c. state",
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

    if (quizRan == false) {
        console.log("Running quiz A...")
        quiz[0].innerHTML = "<h2>This is quiz A</h2><br><button id='startBtn'>Start Quiz</button>";

        // Load Quiz questions
        let startBtn = document.getElementById("startBtn")
        startBtn.addEventListener("click", function () {

            quiz[0].innerHTML = "<h4>Quiz A</h4>"
            questionsHolder.innerHTML = ""
            console.log("Quiz starts")

            quizA.forEach(question => {
                let qtnDiv = document.createElement("div")
                qtnDiv.id = "qtnWrapper"

                for (let key in question) {
                    // console.log(`${key}: ${question[key]}`);

                    // Display questions
                    if (key == "question") {
                        qtnDiv.innerHTML += "<div class='question'>" + `${question[key]}` + "</div>"
                    }

                    // Display options for answer
                    // let ans = []
                    if (key != "question") {
                        if (key == "answer") {
                            qtnDiv.innerHTML += "<li class='ans-option ans' onclick='addBorder(this)'>" + `${question[key]}` + "</li>"

                        }
                        if (key != "answer") {
                            qtnDiv.innerHTML += "<li class='ans-option' onclick='addBorder(this)'>" + `${question[key]}` + "</li>"
                        }

                    }


                }

                questionsHolder.appendChild(qtnDiv)
            })

            // Create check score button
            let newSubmitBtn = document.createElement("button")
            newSubmitBtn.id = "scoreBtn"
            newSubmitBtn.innerHTML = "Check Score"
            questionsContainer.appendChild(newSubmitBtn)

            // Get score button and check scores
            let scoreBtn = document.getElementById("scoreBtn")
            scoreBtn.addEventListener("click", checkScore)
        })
        questionsContainer.style.display = "block"
    }

})



let addBorder = function (obj) {
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

let checkScore = function () {
    let valArray = [];
    let val, sumOfAns
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

    // sumOfAns =
    console.log(valArray)
    questionsContainer.innerHTML = valArray.length
    quizRan = true
}
// obj.style.border = "1px dotted gray"

// quizOptions[1].addEventListener("click", function () {

//     quizOptions[0].classList.add("short")
//     quizOptions[1].classList.add("short")
//     quizOptions[2].classList.add("short")

//     quiz[0].classList.remove("active-quiz")
//     quiz[1].classList.add("active-quiz")
//     quiz[2].classList.remove("active-quiz")

//     console.log("Running quiz B...")
//     quiz[1].innerHTML = "<h2>This is quiz B</h2>";


//     questionsContainer.innerHTML = "<button id='startBtn'>Start Quiz</button>"
//     // getQuiz(quizA)


//     let startBtn = document.getElementById("startBtn")
//     startBtn.addEventListener("click", function () {
//         let txt = "";
//         q = quizB

//         console.log("Quiz starts")
//         for (let x in q) {
//             txt += "<div class='question-item'>" + q[x] + "</div>";

//             // quiz[0].innerHTML = "";
//             questionsContainer.innerHTML = txt + "<button id='submitAns'>Check score</button>";
//             let submitAns = document.getElementById("submitAns")
//             submitAns.addEventListener("click", function () {
//                 questionsContainer.innerHTML = "Hello! B"
//             })
//         };
//     })
//     questionsContainer.style.display = "block"
// })

// quizOptions[2].addEventListener("click", function () {

//     quizOptions[0].classList.add("short")
//     quizOptions[1].classList.add("short")
//     quizOptions[2].classList.add("short")

//     quiz[0].classList.remove("active-quiz")
//     quiz[1].classList.remove("active-quiz")
//     quiz[2].classList.add("active-quiz")

//     console.log("Running quiz C...")
//     quiz[2].innerHTML = "<h2>This is quiz C</h2>";

//     questionsContainer.innerHTML = "<button id='startBtn'>Start Quiz</button>"
//     // getQuiz(quizA)


//     let startBtn = document.getElementById("startBtn")
//     startBtn.addEventListener("click", function () {
//         let txt = "";
//         q = quizC

//         console.log("Quiz starts")
//         for (let x in q) {
//             txt += "<div class='question-item'>" + q[x] + "</div>";

//             // quiz[0].innerHTML = "";
//             questionsContainer.innerHTML = txt + "<button id='submitAns'>Check score</button>";
//             let submitAns = document.getElementById("submitAns")
//             submitAns.addEventListener("click", function () {
//                 questionsContainer.innerHTML = "Hello! C"
//             })
//         };
//     })
//     questionsContainer.style.display = "block"
// })


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