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