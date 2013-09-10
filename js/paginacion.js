// JavaScript Document
/*$(function(){
	$("#siguiente" ).click( function() {
		if(pagina<ultimaPagina){
  			pagina = pagina + 1;
  			$.filtrarInmuebles();
		}
	})
})

$(function(){
	$("#anterior" ).click( function() {
  		if(pagina > 0){
			pagina = pagina - 1;
			$.filtrarInmuebles();
		}
	})
})

$(function(){
	$("#ultimo" ).click( function() {
			pagina = ultimaPagina;
			$.filtrarInmuebles();
	})
})

$(function(){
	$("#primero" ).click( function() {
		if(pagina>0){	
			pagina = 0;
			$.filtrarInmuebles();
		}
	})
})*/

$(function(){
	$("#siguiente" ).click( function() {
		if(pagina<ultimaPagina){
  				pagina = pagina + 1;
  				$.filtrarInmuebles();
		}
	})
})

$(function(){
	$("#anterior" ).click( function() {
  		if(pagina > 0){
			pagina = pagina - 1;
			$.filtrarInmuebles();
		}
	})
})

$(function(){
	$("#ultimo" ).click( function() {
		if(ultimaPagina!=0){
			pagina=ultimaPagina-1;
			$.filtrarInmuebles();
		}
	})
})

$(function(){
	$("#primero" ).click( function() {
		if(pagina>0){	
			pagina = 0;
			$.filtrarInmuebles();
		}
	})
})