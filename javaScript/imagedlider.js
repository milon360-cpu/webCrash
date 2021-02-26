const imgs = ["2.jpg", "3.jpg", "4.jpg"];
let imgTag = document.querySelector('img');

let counter = 0;

function next() {

    if (counter >= 0 && counter < imgs.length - 1) {
        counter++;
        imgTag.src = imgs[counter];

    }
}

function prev() {

    if (counter > 0 && counter <= imgs.length - 1) {
        counter--;
        imgTag.src = imgs[counter];

    }
}