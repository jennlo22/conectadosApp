// JavaScript Document
function validarBlancos(){
			
    if($("#nombre").val()==""){
        alert(" EL CAMPO NOMBRE ES OBLIGATORIO");
        $("#nombre").focus();
        return false;
    }else if($("#telefono").text()){
        alert("EL CAMPOR TELEFONO ES OBLIGATORIO");
        $("#telefono").focus();
        return false;
    }else if($("#email").val()==""){
        alert("EL CAMPO EMAIL ES OBLIGATORIO");
        $("#email").focus();
        return false;
    }else if($("#observaciones").val()==""){
        alert("EL CAMPO COMENTARIOS ES OBLIGATORIO");
        $("#observaciones").focus();
        return false;
    }
    return true;
					
}

function validarTexto(valor){ 
                var texto=/[A-Za-z0-9_]/; 
                if (!texto.test(valor)){ 
                    return true; 
                }    
                else{ 
                    return false; 
                } 
            }
			
			function validarEmail(valor) { 
                 var email = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; 
                 if(!(email.test(valor))) { 
                     return false; 
                 } 
                 return true; 
            } 
			
			function validarNumeros(valor){ 
                var numeros=/^([0-9])*$/;
                if(!(numeros.test(valor))){ 
                    return false; 
                } 
                return true;  
                  
            }


	function validarTipoDatos(){
		if(!validarTexto($("#nombre").text())){
				alert(" EL NOMBRE ES UN CAMPO ALFABETICO");
      			$("#nombre").focus();
       			return false;
		}else if(!validarNumeros($("#telefono").val())){
				alert("EL TELEFONO ES UN CAMPO NUMERICO");
       			$("#telefono").focus();
       			return false;
		}else if(!validarEmail($("#email").val())){
				alert("EL FORMATO DE EMAIL ES INCORRECTO");
       			$("#email").focus();
       			return false;
		}else{
				return true;	
		}
	}
			
			
function validarRegistro(){
    if(!validarBlancos()){
        return false;
    }if(!validarTipoDatos()){
		return false;
	}
	else{
        return true;
    }
}						
			
			
			
function envioMensaje(){
				if(validarRegistro()){
					adicionarContacto();
				}
		}


function adicionarContacto(){
	enviarMensaje();
}

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
                 url : "http://www.conectados.co/index.php?accion=enviarMensajeMovil",
                 cache : false,
                 data : ({
                    nombre : nombreAux,
                    telefono : telefonoAux,
				    email : emailAux,
                    observaciones : observacionesAux,
					idInmueble: idInmuebleAux
		         }),
                 success : function(data,status){
					   					   
				 },
				 error: function(data,status){
					 alert("Error al enviar la información","ERROR AL ENVIAR LA INFORMACIÓN");
					 }
			});                            
                return true;
        }
        else
         alert("DEBE INGRESAR TODOS LOS CAMPOS");
         return false;
}

function enviarMensajeContacto() {
        var nombreAux = $.trim($("#nombre").val());
        var telefonoAux = $.trim($("#telefono").val());
        var emailAux = $.trim($("#email").val());
        var observacionesAux = $("#observaciones").val();
		if (nombreAux != "" && telefonoAux != ""&& emailAux != ""&& observacionesAux != "") {
        	    $.ajax({
                   type : "GET",
				   dataType:"html",
                   url : "http://www.conectados.co/index.php?accion=enviarMensajeContactoMovil",
                   cache : false,
                   data : ({
                        nombre : nombreAux,
                        telefono : telefonoAux,
						email : emailAux,
                        observaciones : observacionesAux,
				   }),
                   success : function(data,status){
					   alert("GRACIAS POR ESCRIBIRNOS","MENSAJE ENVIADO");
				   },
				   error: function(data,status){
					 alert("Error al enviar la información","ERROR AL ENVIAR LA INFORMACIÓN");
					 }
                });                            
                return true;
        }
        else
         return false;
}

function adicionarContacto(){
	enviarMensaje();
	borrar();	
}

function borrar(){
       $("#nombre").val("");
       $("#telefono").val("");
       $("#email").val("");
       $("#observaciones").val("");
}