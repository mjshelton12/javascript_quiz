var quizEl = document.querySelector('.quiz_el')
var header = document.getElementById('header')
var timer = document.getElementById('timer')
var leftBox = document.getElementById('left_box')
var rightBox = document.getElementById('right_box')

var startBtn = document.createElement("button")
var againBtn = document.createElement("button")

var state = quizEl.getAttribute("data-state")

var countDown = document.createElement("p")

var secondsLeft = 3

var i = 0

var questions = [
    {
        question: "Which of these would you put around an array?",
        choices: ["{", "(", "[", "|"],
        answer: "{",
    },
    {
        question: "Which of these can not be used to define a new variable?",
        choices: ["var", "if", "let", "const"],
        answer: "if",
    },
    {
        question: "What can JavaScript not do?",
        choices: ["Create a timer", "Create a videogame", "Solve math problems", "Walk my dog"],
        answer: "Walk my dog",
    }
]

var leaders = []

function quizOpen() {
    header.textContent = "So You Think You Can Script?";

    timer.textContent = "";

    leftBox.textContent = "You've survived a whole month of coding bootcamp and think you're tough script?";
    leftBox.style.fontSize = "1.5rem"
        
    var proveIt = document.createElement("p")
    proveIt.textContent = "Prove it!"
    proveIt.style.padding = "2rem"
    proveIt.style.fontSize = "2rem"
    proveIt.style.fontStyle = "italic"
    leftBox.appendChild(proveIt)

    var callToAction = document.createElement("p")
    callToAction.textContent = "Take this quiz with your friends and see who's the slickest JS coder on the server."
    leftBox.appendChild(callToAction)

    rightBox.textContent = "Let's Begin!";
    rightBox.style.padding = "3rem"
    rightBox.style.fontStyle = "italic"
    rightBox.style.fontSize = "2rem"

    startBtn.textContent = "Start"
    startBtn.style.marginTop = "6rem"
    startBtn.style.padding = "1rem"
    startBtn.style.backgroundColor = "#7EA16B"
    startBtn.classList.add('btn')
    rightBox.appendChild(startBtn)
}

function quizGo() {
    timerGo()
    questionsGo()
}

function timerGo() {
    var timerInterval = setInterval(function() {
    secondsLeft--;

    countDown.textContent = secondsLeft
    timer.appendChild(countDown)
    
    if (secondsLeft === 0){
        clearInterval(timerInterval);
        gameOver()
        quizEl.dataset.state = "over";
    }
        }, 1000);

}

function questionsGo() {
    for (let i = 0; i < questions.length; i++) {
        while (i<=2){
            console.log(questions[i].question)
            console.log(questions[i].answer)
        
            leftBox.textcontent = questions[i].question

            rightBox.textcontent = questions[i].choices
        
            // i++
        }
    }
}

function gameOver() {
    header.textContent = "Quiz over!";

    timer.textContent = "How did you do?";

    leftBox.textContent = "";

    rightBox.textContent = "Leaderboard";

    var leaderHeader = document.createElement("h1")
    leaderHeader.textContent = "MJ Is the Supreme Leader"
    leaderHeader.style.fontSize = "1rem"
    rightBox.appendChild(leaderHeader)

    againBtn.textContent = "Go Again?"
    againBtn.style.marginTop = "6rem"
    againBtn.style.padding = "1rem"
    againBtn.style.backgroundColor = "#7EA16B"
    againBtn.classList.add('btn')
    rightBox.appendChild(againBtn)

    secondsLeft = 3
}



startBtn.addEventListener("click", quizGo)

againBtn.addEventListener("click", quizGo)

quizOpen()
