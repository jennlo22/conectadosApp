function enviarMensaje() {
        var nombreAux = $.trim($("#nombre").val());
        var telefonoAux = $.trim($("#telefono").val());
        var emailAux = $.trim($("#email").val());
        var observacionesAux = $("#observaciones").val();
		var idInmuebleAux = $("#idInmueble").val();
		if (nombreAux != "" && telefonoAux != ""&& emailAux != ""&& observacionesAux != ""&& idInmueble != "") {
        	  $.ajax({
                 type : "GET",
				 dataType:"html",
                 url : "http://www.javeahouses.com/index.php?accion=enviarMensajeMovil",
                 cache : false,
                 data : ({
                    nombre : nombreAux,
                    telefono : telefonoAux,
				    email : emailAux,
                    observaciones : observacionesAux,
					idInmueble: idInmuebleAux
		         }),
                 success : function(data,status){
					   alert("GRACIAS POR ESCRIBIRNOS");
     			 },
				 error: function(data,status){
					 alert("Error al enviar la información");
					 }
			});                            
                return true;
        }
        else
         alert("DEBE INGRESAR TODOS LOS CAMPOS");
         return false;
}

function adicionarContacto(){
	enviarMensaje();
}