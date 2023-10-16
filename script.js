function openRules() {
    document.getElementById("rulesContainer").style.display = "block";
}

function closeRules() {
    document.getElementById("rulesContainer").style.display = "none";
}

let yourScore = 0;
let pcScore = 0;
let choices = ["rock", "paper", "scissors"];


document.getElementById("rockIcon").addEventListener("click",function(){
    gamingRound("rock");
    scoreUpdate(); 
});

document.getElementById("paperIcon").addEventListener("click",function(){
    gamingRound("paper");
    scoreUpdate();
});

document.getElementById("scissorIcon").addEventListener("click",function(){
    gamingRound("scissors");
    scoreUpdate(); 
});

function gamingRound(yourChoice) {
    let pcChoice = choices[Math.floor(Math.random() * choices.length)];

    localStorage.setItem("pcChoice", pcChoice);

    if (yourChoice === pcChoice) {
        window.location.href = "tie.html"
    } else if (
        (yourChoice === "rock" && pcChoice === "scissors") ||
        (yourChoice === "paper" && pcChoice === "rock") ||
        (yourChoice === "scissors" && pcChoice === "paper")
    ) {
        yourScore++;
        window.location.href = "youWin.html";
    } else {
        pcScore++;
        window.location.href = "pcWin.html";
    }
    document.querySelector(".youSco").textContent = yourScore;
    document.querySelector(".comSco").textContent = pcScore;
}

function scoreUpdate(){
    localStorage.setItem('yourScore', yourScore);
    localStorage.setItem('pcScore', pcScore);
}

window.addEventListener('load', function(){
    let storedYourScore = localStorage.getItem('yourScore');
    let storedPcScore = localStorage.getItem('pcScore');

    if (storedYourScore !== null) {
        yourScore = parseInt(storedYourScore);
        document.querySelector(".youSco").textContent = yourScore;
    }

    if (storedPcScore !== null){
        pcScore = parseInt(storedPcScore);
        document.querySelector(".comSco").textContent = pcScore
    }
});

document.getElementById("rockIcon").addEventListener("click", function () {
    localStorage.setItem("yourChoice", "rock");
});

document.getElementById("scissorIcon").addEventListener("click", function () {
    localStorage.setItem("yourChoice", "scissors");
});

document.getElementById("paperIcon").addEventListener("click", function () {
    localStorage.setItem("yourChoice", "paper");
});