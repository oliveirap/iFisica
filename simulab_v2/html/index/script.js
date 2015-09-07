
/* ///////////////// FUNÇÃO MOSTRA/ESCONDE AULAS/ANIMACOES /////////////////  */	
function mostraAula(id, id2, anim){
	separador.style.display = 'block';
	separador1.style.display = 'block';		
	if(document.getElementById(id).style.display === 'block' || document.getElementById(id).style.display === ' '){
			
			document.getElementById(id).style.display = 'none';
			document.getElementById(anim).style.display = 'none';
			document.getElementById(id2).style.webkitFilter = 'none';
			document.getElementById(id2).style.msFilter = 'none';
			document.getElementById(id2).style.mozFilter = 'none';
			document.getElementById(id2).style.oFilter = 'none';
			document.getElementById(id2).style.Filter = 'none';
			
		}
	else {			
			document.getElementById(id).style.display = 'block';
			document.getElementById(anim).style.display = 'block';
			document.getElementById(id2).style.webkitFilter = 'opacity(.7)';	
			document.getElementById(id2).style.Filter = 'opacity(.7)';	
			document.getElementById(id2).style.msFilter = 'opacity(.7)';
			document.getElementById(id2).style.mozFilter = 'opacity(.7)';
			document.getElementById(id2).style.oFilter = 'opacity(.7)';		
		}

}

/* ///////////////////////////// FUNÇÃO SCROLL ///////////////////////////////// */

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});			
