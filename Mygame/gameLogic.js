var character = document.getElementById("character");
var block = document.getElementById("block");
var losesParagraph = document.getElementById("losesParagraph");
var loses = 0;
var isDead = false;

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
        playAudio();
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
   
}

var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 40 && blockLeft > 0 && characterTop >= 130) {
        isDead = true;
    }
    if (blockLeft > 40)
        if (isDead) {
            loses++;
            console.log(loses);
            losesParagraph.innerHTML = "Loses : " + loses;
            isDead = false;
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
}

function playAudio() {
    var audio = new Audio('jumpingSound.wav');
    audio.play();
}

