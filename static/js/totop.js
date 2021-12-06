(function(){
  const naartopknop = document.getElementById("top");

// als men scrollt 20px naar beneden 
window.onscroll =function(){scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      naartopknop.style.display = 'block';
      naartopknop.style.animation= '    fadein 450ms';
  } else {
      naartopknop.style.display = 'none';
  }
}
})();
