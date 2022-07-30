var character = document.getElementById("character");

function replaceImage(fileName) {
    imageId.src = fileName;
}

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
        playAudio();
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);

}
