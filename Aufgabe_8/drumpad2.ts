namespace Aufgabe_8 {

    window.addEventListener("load", function (): void {



        var playButton: HTMLElement = document.getElementById("play");
        var stopButton: HTMLElement = document.getElementById("stop");
        var trashButton: HTMLElement = document.getElementById("delete");
        var remixButton: HTMLElement = document.getElementById("remix");
        var beatInterval: number;
        var index: number = 0;
        var sounds: HTMLAudioElement[] = [new Audio("sounds/snare.mp3"), new Audio("sounds/laugh-1.mp3"), new Audio("sounds/laugh-2.mp3"), new Audio("sounds/kick.mp3"), new Audio("sounds/hihat.mp3"), new Audio("sounds/G.mp3"), new Audio("sounds/F.mp3"), new Audio("sounds/C.mp3"), new Audio("sounds/A.mp3")];
        var beatArray: HTMLAudioElement[] = [new Audio("sounds/kick.mp3"), new Audio("sounds/snare.mp3"), new Audio("sounds/hihat.mp3")];




        document.querySelector("#drum1").addEventListener("click", function (): void { playSample(sounds[0]); });

        document.querySelector("#drum2").addEventListener("click", function (): void { playSample(sounds[1]); });

        document.querySelector("#drum3").addEventListener("click", function (): void { playSample(sounds[2]); });

        document.querySelector("#drum4").addEventListener("click", function (): void { playSample(sounds[3]); });

        document.querySelector("#drum5").addEventListener("click", function (): void { playSample(sounds[4]); });

        document.querySelector("#drum6").addEventListener("click", function (): void { playSample(sounds[5]); });

        document.querySelector("#drum7").addEventListener("click", function (): void { playSample(sounds[6]); });

        document.querySelector("#drum8").addEventListener("click", function (): void { playSample(sounds[7]); });

        document.querySelector("#drum9").addEventListener("click", function (): void { playSample(sounds[8]); });


        function playSample(sound: HTMLAudioElement): void {
            sound.play();

        }

        document.querySelector("#play").addEventListener("click", function (): void {
            {
                if (beatArray.length > 0) {
                    beatInterval = setInterval(function (): void {
                        beatArray[index].currentTime = 0;
                        beatArray[index].play();
                        index = index + 1;

                        if (index == 3) {
                            index = 0;
                        }

                    },                         500);
                }
            }


        });

        trashButton.addEventListener("click", function (): void {
            beatArray.length = 0;
            if (beatArray.length == 0) {
                playButton.classList.remove("isHidden");
                stopButton.classList.add("isHidden");
            }


        });

        playButton.addEventListener("click", function (): void {
            toggleClasses(this, stopButton);


        });


        stopButton.addEventListener("click", function (): void {
            toggleClasses(this, playButton);
            clearInterval(beatInterval);
            index = 0;

        });


        function toggleClasses(firsHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
            firsHTMLElement.classList.add("isHidden");
            secondHTMLElement.classList.remove("isHidden");


        }


        remixButton.addEventListener("click", function (): void {
            beatArray.length = 0;
            console.log(beatArray);
            while (beatArray.length < 3) {
                var r: HTMLAudioElement = sounds[Math.floor(Math.random() * sounds.length)];
                if (beatArray.indexOf(r) === -1) beatArray.push(r);
                console.log(beatArray[index]);
            }
        });


    });

}





