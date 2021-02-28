
for(let i=0; i<3; i++)
{
    let btn = document.querySelectorAll(".button")[i];
    btn.addEventListener('click',function(){
     btn.classList.add("buttonStyle");

     setTimeout(function()
     {
         btn.classList.remove("buttonStyle");
     },200);

    });
}