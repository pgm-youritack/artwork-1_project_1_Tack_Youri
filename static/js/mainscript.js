//top variable
const naartopknop = document.getElementById("top");

// als men scrollt 20px naar beneden 
window.onscroll =function(){scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
      naartopknop.style.display = 'block';
      naartopknop.style.animation= '    fadein 450ms';
  } else {
      naartopknop.style.display = 'none';
  }
}

// wanneer het persoon op de back to top klikt
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("click",function(evt){
  var flyoutElement=document.getElementById('mail');
  let targetElement = evt.target;
  do{
    if (targetElement==flyoutElement){
      document.getElementById('subscribe').style.visibility= "visible"
      return;
    }
    targetElement = targetElement.parentNode;
  }while(targetElement);
  document.getElementById('subscribe').style.visibility="hidden"
})