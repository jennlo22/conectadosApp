/*

*/

	$(function(){
		/*
				Estes es un manejador del evento de tipo negocio
		*/
		 $("input[name=tipoNegocio]:radio").click(function(evento){ 
						
			
	//		precio=$.trim($("#precioRemoto").val());
//			tipoInmueble = $.trim($("#tipoInmuebleRemoto").val());

			tipoNegocio = $("input[name='tipoNegocio']:checked").val();
			
//			dsInmuebles = new Spry.Data.HTMLDataSet("http://www.javeahouses.com/index.php?accion=obtenerInmueblesMovil&paraVenta=1", "inmuebles");
			dsInmuebles.setURL("http://www.conectados.co/index.php?accion=obtenerInmueblesMovil&paraVenta=1");
			
			dsInmuebles.loadData();
	
alert("buscando3:"+ dsInmuebles.curRowID);			
			  if(tipoNegocio.length > 0)
                {
                    $.ajax({
                      type: "POST",
                      url: "http://www.conectados.co/movil/listar.php",
//                      data: "accion=buscar&tipoI="+tipoInmueble+"&tipoN="+tipoNegocio+"&precio="+precio,
                      data: "accion=buscar&tipoI="+"&tipoN="+tipoNegocio,
					  cache: false,
                      dataType: "text",
                      success: onSuccess
                    });
                } 
				
			})
		
			/*
					Este es un manejador del evento del control "TipoInmueble"
			*/
			$("#tipoInmuebleRemoto").live("change",function(){
				
				precio = $.trim($("#precioRemoto").val());
				tipoInmueble = $.trim($("#tipoInmuebleRemoto").val());
				tipoNegocio = $("input[name='tipoNegocio_0']:checked").val();
				if(tipoInmueble.length > 0)
                {
                    $.ajax({
                      type: "POST",
                      url: "http://www.conectados.co/movil/listar.php",
                      //data: ({tipoI: tipoInmueble}),
					   data: "accion=buscar&tipoI="+tipoInmueble+"&tipoN="+tipoNegocio+"&precio="+precio,
                      cache: false,
                      dataType: "text",
                      success: onSuccess
                    });
                }
				
				});
			
			/*
					Este es el manejador de eventos del combo de precios				
			*/
			$("#precioRemoto").live("change",function(){
				precio=$.trim($("#precioRemoto").val());
				tipoInmueble = $.trim($("#tipoInmuebleRemoto").val());
				tipoNegocio = $("input[name='tipoNegocio']:checked").val();
				if(tipoInmueble.length > 0)
                {
                    $.ajax({
                      type: "POST",
                      url: "http://www.conectados.co/movil/listar.php",
					    data: "accion=buscar&tipoI="+tipoInmueble+"&tipoN="+tipoNegocio+"&precio="+precio,
                      cache: false,
                      dataType: "text",
                      success: onSuccess
                    });
                }
				
				});

			/*
						Manejador de los resultados en caso de error
			*/			
            $("#resultLog").ajaxError(function(event, request, settings, exception) {
              $("#resultLog").html("Error Calling: " + settings.url + "<br />HTTP Code: " + request.status);
            });
 
			/*
						Manejador de los resultados en caso de exito
			*/			
            function onSuccess(data){
				$("#resultLog").html("");
                $("#resultLog").html(data);
            }
			
			
        });



