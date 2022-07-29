var character = document.getElementById("character");
var block = document.getElementById("block");
var loses = 0;
var isDead = false;

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
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
            document.getElementById("p1").innerHTML = "Loses : " + loses;
            isDead = false;
        }
}, 100);

