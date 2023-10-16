function scoreUpdateLocal() {
    const yourScore = parseInt(localStorage.getItem("yourScore")) || 0;
    const pcScore = parseInt(localStorage.getItem("pcScore")) || 0;

    const yourScoreElement = document.querySelector(".youSco");
    const pcScoreElement = document.querySelector(".comSco");

    if (yourScoreElement && pcScoreElement) {
        yourScoreElement.textContent = yourScore;
        pcScoreElement.textContent = pcScore;
    }
}

window.addEventListener('load', function () {
    scoreUpdateLocal();
});

function playOneAgain() {
    window.location.href = "index.html";
}

const playButton = document.querySelector(".playButton");
if (playButton) {
    playButton.addEventListener("click", playOneAgain);
}

function hurray(){
    window.location.href = "hurray.html";
}

const nextButton = document.querySelector(".nextButton");
if(nextButton){
    nextButton.addEventListener("click", hurray);
}

const yourChoice = localStorage.getItem("yourChoice");
const pcChoice = localStorage.getItem("pcChoice");

const choiceCssMap = {
    rock: {
        borderColor: '#0074B6',
        backgroundColor: 'white',
    },
    paper: {
        borderColor: '#ffa943',
        backgroundColor: 'white',
    },
    scissors: {
        borderColor: '#BD00FF',
        backgroundColor: 'white',
    },
};

const choiceImageMap = {
    rock: "rock.png",
    paper: "paper.png",
    scissors: "scissor.png",
};

const your = document.getElementById("player");
const pc = document.getElementById("computer");

if (yourChoice && pcChoice) {
    your.src = choiceImageMap[yourChoice];
    pc.src = choiceImageMap[pcChoice];
    
    function applyCssStyles(element, choice) {
        element.style.borderRadius = "50%";
        element.style.borderStyle = "solid";
        element.style.borderWidth = "19px";
        element.style.padding = "20px";
        element.style.height = "75px";
        element.style.width = "75px";
        element.style.backgroundColor = "#ffffff";
    
        if (choice === "rock") {
            element.style.borderColor = "#0074B6";
        } else if (choice === "scissors") {
            element.style.borderColor = "#BD00FF";
            element.style.transform = "rotate(5.27deg)";
        } else if (choice === "paper") {
            element.style.borderColor = "#ffa943";
        }
    }
    
    if (yourChoice) {
        applyCssStyles(your, yourChoice);
    }
    
    if (pcChoice) {
        applyCssStyles(pc, pcChoice);
    }  
}

let shadow = document.querySelectorAll('.shadow');

shadow.forEach(element => {
    element.style.boxShadow = boxShadowStyle;
});