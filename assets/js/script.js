var quizEl = document.querySelector('.quiz_el')
var header = document.getElementById('header')
var timer = document.getElementById('timer')
var leftBox = document.getElementById('left_box')
var rightBox = document.getElementById('right_box')

var startBtn = document.createElement("button")
var againBtn = document.createElement("button")
var quizBtn

var countDown = document.createElement("p")

var score = 0

var secondsLeft = 10

var i = 0

const questions = [
    {
        question: "Which of these would you put around an array?",
        choices: [ "{", "(", "[", "|"],
        answer: "[",
    },
    {
        question: "Which of these can not be used to define a new variable?",
        choices: ["var", "if", "let", "const"],
        answer: "if",
    },
    {
        question: "What can JavaScript not do?",
        choices: ["Create a timer", "Drive a videogame", "Solve math problems", "Walk my dog"],
        answer: "Walk my dog",
    }
]

var leaders = []

var leaderArray = [
    {
        score: "100",
        initials: "MJS",
    }
]

localStorage.setItem("leaders", JSON.stringify(leaderArray))

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
    questionsOne()
    timer.textContent = ""
    secondsLeft = 10
    score = 0
}

function timerGo() {
    var timerInterval = setInterval(function() {
    secondsLeft--;

    countDown.textContent = secondsLeft
    timer.appendChild(countDown)
    
    if (secondsLeft <= 0){
        clearInterval(timerInterval);
        gameOver()
    }
        }, 1000);

}

function questionsOne(){

    header.textContent = "Question 1"

    leftBox.textContent = questions[0].question
    leftBox.style.paddingTop = "7rem"
    leftBox.style.fontSize = "2rem"
    
    rightBox.textContent = ""

    var choiceOne = document.createElement("button");
    choiceOne.textContent = "{"
    choiceOne.classList = "choice_buttons"
    rightBox.appendChild(choiceOne)

    var choiceTwo = document.createElement("button");
    choiceTwo.textContent = "("
    choiceTwo.classList = "choice_buttons"
    rightBox.appendChild(choiceTwo)

    var choiceThree = document.createElement("button");
    choiceThree.textContent = "["
    choiceThree.classList = "choice_buttons"
    rightBox.appendChild(choiceThree)

    var choiceFour = document.createElement("button");
    choiceFour.textContent = "|"
    choiceFour.classList = "choice_buttons"
    rightBox.appendChild(choiceFour)

    choiceOne.addEventListener("click", function(event) {
        var element = event.target;
            secondsLeft -= 5
            console.log("too bad")
            questionsTwo()
            console.log(score)
    })

    choiceTwo.addEventListener("click", function(event) {
        var element = event.target;
            secondsLeft -= 5
            console.log("too bad")
            questionsTwo()
            console.log(score)
    })

    choiceThree.addEventListener("click", function(event) {
        var element = event.target;
            score++
            console.log("correct")
            questionsTwo()
            console.log(score)
    })

     choiceFour.addEventListener("click", function(event) {
        var element = event.target;
            secondsLeft -= 5
            console.log("too bad")
            questionsTwo()
            console.log(score)
    })
}

function questionsTwo(){
    header.textContent = "Question 2"

    leftBox.textContent = questions[1].question
    leftBox.style.paddingTop = "7rem"
    leftBox.style.fontSize = "2rem"
    
    rightBox.textContent = ""

    var choiceOne = document.createElement("button");
    choiceOne.textContent = "var"
    choiceOne.classList = "choice_buttons"
    rightBox.appendChild(choiceOne)

    var choiceTwo = document.createElement("button");
    choiceTwo.textContent = "if"
    choiceTwo.classList = "choice_buttons"
    rightBox.appendChild(choiceTwo)

    var choiceThree = document.createElement("button");
    choiceThree.textContent = "let"
    choiceThree.classList = "choice_buttons"
    rightBox.appendChild(choiceThree)

    var choiceFour = document.createElement("button");
    choiceFour.textContent = "const"
    choiceFour.classList = "choice_buttons"
    rightBox.appendChild(choiceFour)

    choiceOne.addEventListener("click", function(event) {
        var element = event.target;
            secondsLeft -= 5
            console.log("too bad")
            questionsThree()
            console.log(score)
    })

    choiceTwo.addEventListener("click", function(event) {
        var element = event.target;
            score++
            console.log("correct")
            questionsThree()
            console.log(score)
    })

    choiceThree.addEventListener("click", function(event) {
        var element = event.target;
            secondsLeft -= 5
            console.log("too bad")
            questionsThree()
            console.log(score)
    })

     choiceFour.addEventListener("click", function(event) {
        var element = event.target;
            secondsLeft -= 5
            console.log("too bad")
            questionsThree()
            console.log(score)
    })
}

function questionsThree(){
    header.textContent = "Question 3"

    leftBox.textContent = questions[2].question
    leftBox.style.paddingTop = "7rem"
    leftBox.style.fontSize = "2rem"
    
    rightBox.textContent = ""

    var choiceOne = document.createElement("button");
    choiceOne.textContent = "Create a timer"
    choiceOne.classList = "choice_buttons"
    rightBox.appendChild(choiceOne)

    var choiceTwo = document.createElement("button");
    choiceTwo.textContent = "Drive a videogame"
    choiceTwo.classList = "choice_buttons"
    rightBox.appendChild(choiceTwo)

    var choiceThree = document.createElement("button");
    choiceThree.textContent = "Solve a math problem"
    choiceThree.classList = "choice_buttons"
    rightBox.appendChild(choiceThree)

    var choiceFour = document.createElement("button");
    choiceFour.textContent = "Walk a dog"
    choiceFour.classList = "choice_buttons"
    rightBox.appendChild(choiceFour)

    choiceOne.addEventListener("click", function(event) {
        var element = event.target;
            secondsLeft -= 5
            console.log("too bad")
            gameOver()
            console.log(score)
    })

    choiceTwo.addEventListener("click", function(event) {
        var element = event.target;
            secondsLeft -= 5
            console.log("too bad")
            gameOver()
            console.log(score)
    })

    choiceThree.addEventListener("click", function(event) {
        var element = event.target;
            secondsLeft -= 5
            console.log("too bad")
            gameOver()
            console.log(score)
    })

     choiceFour.addEventListener("click", function(event) {
        var element = event.target;
            score++
            console.log("correct")
            gameOver()
            console.log(score)
    })
}

function gameOver() {

    header.textContent = "Quiz Complete!";

    timer.textContent = "Your Score: " + score;

    leftBox.textContent = "";

    rightBox.textContent = "";

    // rightBox.textContent = "Leaderboard";

    var leaderPrompt = document.createElement("p")
    leaderPrompt.textContent = "Write in your initials to join the leader board!"
    leaderPrompt.classList = "leader_prompt"
    leftBox.appendChild(leaderPrompt)

    var leaderInput = document.createElement("input")
    leaderInput.classList = "leader-input"
    leaderInput.type = "text"
    leaderInput.name = "leader-name"
    leftBox.appendChild(leaderInput)

    var leaderButton = document.createElement("button")
    leaderButton.textContent = "Submit"
    leaderButton.classList = "choice_buttons"
    leftBox.appendChild(leaderButton)

    againBtn.textContent = "Go Again?"
    // againBtn.style.marginTop = "12rem"
    againBtn.style.padding = ".1rem"
    againBtn.style.backgroundColor = "#7EA16B"
    againBtn.classList = "choice_buttons"
    leftBox.appendChild(againBtn)

    var leaderBox = document.createElement("h1")
    leaderBox.textContent = "Leaderboard"
    rightBox.appendChild(leaderBox)

    var lastLeader = JSON.parse(localStorage.getItem("leaders"));

    for (let i = 0; i < lastLeader.length; i++) {
        var leaderBox = document.createElement("h1")
        leaderBox.textContent = lastLeader[i].initials + ": " + lastLeader[i].score
        leaderBox.classList = "leaderboard"
        rightBox.appendChild(leaderBox)
    }

    var leaderText = document.querySelector(".leader-input").value

    leaderButton.addEventListener("click", function(event) {
        event.preventDefault();
        var leaderText = leaderInput.value

        if (!leaderText) {
          return;
        }

        var leaderObject = {
            score: score,
            initials: leaderText,
        }

        leaderArray.unshift(leaderObject)

        console.log(leaderArray)

        localStorage.setItem("leader", JSON.stringify(leaderObject))

        localStorage.setItem("leaders", JSON.stringify(leaderArray))

        leaderInput.value = ""

        console.log(leaderObject)

        var lastLeader = JSON.parse(localStorage.getItem("leaders"));

        for (let i = 0; i < 1; i++) {
            var leaderBox = document.createElement("h1")
            leaderBox.textContent = lastLeader[i].initials + ": " + lastLeader[i].score
            leaderBox.classList = "leaderboard"
            rightBox.appendChild(leaderBox)
        }

      });

    localStorage.setItem("score", score);

    secondsLeft = 0
}

startBtn.addEventListener("click", quizGo)

againBtn.addEventListener("click", quizGo)

quizOpen()
