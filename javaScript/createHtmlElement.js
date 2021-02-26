let div = document.querySelector('#paragraph');
let newElement = document.createElement('h1');
newElement.innerHTML = "Hey Guys";
div.appendChild(newElement);
let Element_ = document.createElement('h1');
Element_.innerHTML = "Hey Milo";
div.insertBefore(Element_, newElement);
// div.removeChild(Element_);