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
			
			