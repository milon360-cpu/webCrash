let count = 0;
document.querySelector("#area").addEventListener("keypress",function(event){

count++;
 
document.querySelector("#btn").innerHTML = "Press "+count;

});