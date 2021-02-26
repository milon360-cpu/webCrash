let change = document.getElementById('bd');
change.addEventListener('mouseover', function_);

function function_() {
    // change.style.color = "Blue";
    // change.innerText = "Hello";
}

// let changeHeading = document.querySelectorAll('.myButton')[0];
// changeHeading.addEventListener('click', function() {
//     let button = this.innerText;
//     change.innerText = button;
// });
// let changeHeading_ = document.querySelectorAll('.myButton')[1];
// changeHeading_.addEventListener('click', function() {
//     let button = this.innerText;
//     change.innerText = button;
// });
// let changeHeading_s = document.querySelectorAll('.myButton')[2];
// changeHeading_s.addEventListener('click', function() {
//     let button = this.innerText;
//     change.innerText = button;
// });

for (let i = 0; i < 3; i++) {
    let changeHeading_s = document.querySelectorAll('.myButton')[i];
    changeHeading_s.addEventListener('click', function() {
        let button = this.innerText;
        change.innerText = button;
    });
}