for (let i = 0; i < 3; i++) {
    let action = document.querySelectorAll('.button')[i].addEventListener('click', function() {

        let text = this.innerHTML;
        audioPlay(text);

    });
}

function audioPlay(text) {
    switch (text) {
        case "Button1":
            let audio = new Audio("music1.mp3");
            audio.play();
            break;
        case "Button2":
            let audio_ = new Audio("music2.mp3");
            audio_.play();
            break;
        case "Button3":
            audio.pause();
            break;
    }
}