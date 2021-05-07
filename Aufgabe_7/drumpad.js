var sounds = [];
sounds[0] = new Audio("sounds/A.mp3");
sounds[1] = new Audio("sounds/C.mp3");
sounds[2] = new Audio("sounds/F.mp3");
sounds[3] = new Audio("sounds/G.mp3");
sounds[4] = new Audio("sounds/hihat.mp3");
sounds[5] = new Audio("sounds/kick.mp3");
sounds[6] = new Audio("sounds/laugh-1.mp3");
sounds[7] = new Audio("sounds/laugh-2.mp3");
sounds[8] = new Audio("sounds/snare.mp3");
window.addEventListener("load", function () {
    document.querySelector("#drum1").addEventListener("click", function () {
        playSample(0);
    });
    document.querySelector("#drum2").addEventListener("click", function () {
        playSample(1);
    });
    document.querySelector("#drum3").addEventListener("click", function () {
        playSample(2);
    });
    document.querySelector("#drum4").addEventListener("click", function () {
        playSample(3);
    });
    document.querySelector("#drum5").addEventListener("click", function () {
        playSample(4);
    });
    document.querySelector("#drum6").addEventListener("click", function () {
        playSample(5);
    });
    document.querySelector("#drum7").addEventListener("click", function () {
        playSample(6);
    });
    document.querySelector("#drum8").addEventListener("click", function () {
        playSample(7);
    });
    document.querySelector("#drum9").addEventListener("click", function () {
        playSample(8);
    });
    function playSample(chooseSample) {
        sounds[chooseSample].play();
    }
    var beat = [];
    beat[0] = ("sounds/kick.mp3");
    beat[1] = ("sounds/snare.mp3");
    beat[2] = ("sounds/hihat.mp3");
    document.querySelector('#play-button').addEventListener("click", function () {
        beatMachine();
    });
    function beatMachine() {
        setTimeout(function () { playAudio(beat[0]); }, 500);
        setTimeout(function () { playAudio(beat[1]); }, 1200);
        setTimeout(function () { playAudio(beat[2]); }, 1800);
    }
    function playAudio(myBeat) {
        var beat = new Audio(myBeat);
        beat.play();
    }
});
//# sourceMappingURL=drumpad.js.map