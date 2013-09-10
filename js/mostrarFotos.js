// JavaScript Document

$.cargarFotos = function(){
	var fila = dsInmuebles.getCurrentRow()	
	var numFotos = fila["NumFotos"];
	$("#Gallery2").empty();
	for(var i=0; i<numFotos; i++) {
		var url = fila["Foto" + i]; 
		var texto = "Imagen" + i;
		alert(url);
		$("#Gallery2").append('<li><a href="'+url+'" rel="external" ><img src="'+url+'" alt="' + texto + '" /></a></li>');
		
		var url='<li><a href="'+url+'" rel="external" ><img src="'+url+'" alt="' + texto + '" /></a></li>';
		
		
	}			
}