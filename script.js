
 function f1()
         {
       var name =prompt("What should , I Call You?");
       if(name==""||name==null){
           alert("Please type your name:");
       }
       else{

 
       
                     var by=document.getElementById('by').style.display="none";
                    var bot=document.getElementById('btn').style.display="none";
                     var cont= document.getElementById('container').style. display="block";
                 var sure= document.getElementById("sure").innerHTML=" Sure na Bayan "+name+"?";
                 
                 
  }
                 }
         
             
const buttonHeigth=200;
const buttonWidth=200;



 const MaxWidth= window.innerWidth-buttonWidth
 const MaxHeight= window.innerHeight-buttonHeigth
 window.addEventListener('DOMContentLoaded',()=>{
   const button=document.getElementById('btn');
   btn.style.cursor='pointer'; 





   

  button.addEventListener('mouseover',()=>{
     
       button.style.left=Math.floor(Math.random()*(MaxWidth +0))+ 'px';
       button.style.top=Math.floor(Math.random()*(MaxHeight +0))+ 'px';
        


   

   });
});
