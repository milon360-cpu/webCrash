let myArray = [2, 53, 23, 69, 230];
let myArray_ = ["Milon", "Tapu", "Salin", "abul", "Kashem"];
console.log(myArray);

// array all Methods list 

//push();
myArray.push("Sakina");
console.log(myArray);
// pop();
myArray.pop();
console.log(myArray);
// unshift();
myArray.unshift("Sakina");
console.log(myArray);
// shift();
myArray.shift();
console.log(myArray);
// sort() (String sorting)
const sortArray = myArray_.sort();
console.log(sortArray);
// reverse();
myArray_.reverse();
console.log(myArray_);
// (Number Sorting) sort();
myArray.sort(function(a, b) {
    return a - b;
});
console.log(myArray);
myArray.reverse();
console.log(myArray);

//Concet
let arrayConcet = myArray_.concat(myArray);
console.log(arrayConcet);

//Copy Array
let newArray_ = [20, 21];
let newArray_1 = myArray_.copyWithin(4, 1);
console.log(newArray_1);