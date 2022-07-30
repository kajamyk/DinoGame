var character = document.getElementById("character");
var block = document.getElementById("block");
var losesParagraph = document.getElementById("losesParagraph");
var imageId = document.getElementById("defaultImage");

var loses = 0;
var isDead = false;


var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 40 && blockLeft > 0 && characterTop >= 130) {
        isDead = true;
    }
    if (blockLeft > 40)
        if (isDead) {
            loses++;
            losesParagraph.innerHTML = "Loses : " + loses;
            isDead = false;
            if (loses == 3) {
                alert("You lost ;(");
                endGame();
            }  
        }
}, 100);

function startGame() {
    block.classList.add("moveBlock");
    block.style.animationPlayState = "running";
}

function stopGame() {
    block.style.animationPlayState = "paused";
}

function endGame() {
    block.classList.remove("moveBlock");
    losesParagraph.innerHTML = "Loses : 0";
    loses = 0;
}

function playAudio() {
    var audio = new Audio('Resources/jumpingSound.wav');
    audio.play();
}

