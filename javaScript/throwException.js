document.querySelector("#btn").addEventListener('click',function()
{
   let text = document.getElementById("checkValue").value;
   let convert = parseInt(text);
   try
   {
    if(convert>=1 && convert<=10)
    {
        alert("Valid Value");
    }
    else
    {
       
        throw "vul hoise";
    }
   }
   catch(err)
   {
       alert(err);
   }
   document.getElementById("checkValue").value = '';
  
});