var Aufgabe_8;
(function (Aufgabe_8) {
    window.addEventListener("load", function () {
        var playButton = document.getElementById("play");
        var stopButton = document.getElementById("stop");
        var trashButton = document.getElementById("delete");
        var remixButton = document.getElementById("remix");
        var beatInterval;
        var index = 0;
        var sounds = [new Audio("sounds/snare.mp3"), new Audio("sounds/laugh-1.mp3"), new Audio("sounds/laugh-2.mp3"), new Audio("sounds/kick.mp3"), new Audio("sounds/hihat.mp3"), new Audio("sounds/G.mp3"), new Audio("sounds/F.mp3"), new Audio("sounds/C.mp3"), new Audio("sounds/A.mp3")];
        var beatArray = [new Audio("sounds/kick.mp3"), new Audio("sounds/snare.mp3"), new Audio("sounds/hihat.mp3")];
        document.querySelector("#drum1").addEventListener("click", function () { playSample(sounds[0]); });
        document.querySelector("#drum2").addEventListener("click", function () { playSample(sounds[1]); });
        document.querySelector("#drum3").addEventListener("click", function () { playSample(sounds[2]); });
        document.querySelector("#drum4").addEventListener("click", function () { playSample(sounds[3]); });
        document.querySelector("#drum5").addEventListener("click", function () { playSample(sounds[4]); });
        document.querySelector("#drum6").addEventListener("click", function () { playSample(sounds[5]); });
        document.querySelector("#drum7").addEventListener("click", function () { playSample(sounds[6]); });
        document.querySelector("#drum8").addEventListener("click", function () { playSample(sounds[7]); });
        document.querySelector("#drum9").addEventListener("click", function () { playSample(sounds[8]); });
        function playSample(sound) {
            sound.play();
        }
        document.querySelector("#play").addEventListener("click", function () {
            {
                if (beatArray.length > 0) {
                    beatInterval = setInterval(function () {
                        beatArray[index].currentTime = 0;
                        beatArray[index].play();
                        index = index + 1;
                        if (index == 3) {
                            index = 0;
                        }
                    }, 500);
                }
            }
        });
        trashButton.addEventListener("click", function () {
            clearInterval(beatInterval);
            beatArray.length = 0;
            if (beatArray.length == 0) {
                playButton.classList.remove("isHidden");
                stopButton.classList.add("isHidden");
            }
        });
        playButton.addEventListener("click", function () {
            toggleClasses(this, stopButton);
        });
        stopButton.addEventListener("click", function () {
            toggleClasses(this, playButton);
            clearInterval(beatInterval);
            index = 0;
        });
        function toggleClasses(firsHTMLElement, secondHTMLElement) {
            firsHTMLElement.classList.add("isHidden");
            secondHTMLElement.classList.remove("isHidden");
        }
        remixButton.addEventListener("click", function () {
            beatArray.length = 0;
            console.log(beatArray);
            while (beatArray.length < 3) {
                var r = sounds[Math.floor(Math.random() * sounds.length)];
                if (beatArray.indexOf(r) === -1)
                    beatArray.push(r);
                console.log(beatArray[index]);
            }
        });
    });
})(Aufgabe_8 || (Aufgabe_8 = {}));
//# sourceMappingURL=drumpad2.js.map