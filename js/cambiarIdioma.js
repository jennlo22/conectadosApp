
$.cambiarIdioma=function(){
	
var idioma=$("input[name=idioma]:checked").val();
	var url = "http://www.conectados.co/index.php?accion=obtenerTraducciones&idioma="+idioma;
  
 
  
  dsTraduccion.setURL(url);
  dsTraduccion.loadData();
  
  var urlTipoI="http://www.conectados.co/index.php?accion=obtenerTiposMovil&idioma="+idioma;
  dsTipoInmueble.setURL(urlTipoI);
  dsTipoInmueble.loadData();
  
  var urlPrecios = "http://www.conectados.co/index.php?accion=obtenerPreciosMovil&idioma="+idioma;
  
  dsPrecios.setURL(urlPrecios);
  dsPrecios.loadData();
  
 window.location='./main.html#inicio';
 /*var fila = dsTraduccion.getCurrentRow();	
var alquiler = fila["alquiler"];
		
		alert("alquiler");	*/
			
	
  
}