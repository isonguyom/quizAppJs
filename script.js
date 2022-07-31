let quizOptions = document.querySelectorAll(".quiz-option > div")
let quiz = document.querySelectorAll(".quiz-wrapper > div")
let startBtn = document.getElementById("startBtn")


// Select which quiz you want to run
quizOptions[0].addEventListener("click", function () {

    quizOptions[0].classList.add("short")
    quizOptions[1].classList.add("short")
    quizOptions[2].classList.add("short")

    quiz[0].classList.add("active-quiz")
    quiz[1].classList.remove("active-quiz")
    quiz[2].classList.remove("active-quiz")
    

    console.log("Running quiz A...")
})

quizOptions[1].addEventListener("click", function () {

    quizOptions[0].classList.add("short")
    quizOptions[1].classList.add("short")
    quizOptions[2].classList.add("short")

    quiz[0].classList.remove("active-quiz")
    quiz[1].classList.add("active-quiz")
    quiz[2].classList.remove("active-quiz")

    console.log("Running quiz B...")
})

quizOptions[2].addEventListener("click", function () {

    quizOptions[0].classList.add("short")
    quizOptions[1].classList.add("short")
    quizOptions[2].classList.add("short")

    quiz[0].classList.remove("active-quiz")
    quiz[1].classList.remove("active-quiz")
    quiz[2].classList.add("active-quiz")

    console.log("Running quiz C...")
})



// let getQuiz = function () {
//     console.log("Quiz starts")
//         quiz[0].innerHTML = "Question 1";
// }

startBtn.addEventListener("click", function () {
    console.log("Quiz starts!")
        quiz[0].innerHTML = "Question 1";
})