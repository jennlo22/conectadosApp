// JavaScript Document
		/*
				Estes es un manejador del evento de tipo negocio
		*/
		
	
/*$.filtrarInmuebles = function(){
				precio=$.trim($("#precioRemoto").val());
				tipoInmueble = $.trim($("#tipoInmuebleRemoto").val());
				tipoNegocio = $("input[name='tipoNegocio']:checked").val();
				var fila = dsInmuebles.getCurrentRow()	
				ultimaPagina = fila["totalPages_rs"];
					var url="http://www.javeahouses.com/index.php?accion=obtenerInmueblesMovil";
					if(precio && precio.length > 0){
						url= url+"&precio="+precio;
					}
					if(tipoInmueble && tipoInmueble.length>0){
						url= url+"&tipoInmueble="+tipoInmueble;	
					}
					if(tipoNegocio && tipoNegocio.length>0){
						if(tipoNegocio=="paraVenta"){
							url = url+"&paraVenta="+1;
						}
						if(tipoNegocio=="paraAlquiler"){
							url = url+"&paraAlquiler="+1;
						}
					if(pagina!=0){
						url = url + "&pageNum_rs="+pagina;
					}	
				alert(url);
				dsInmuebles.setURL(url);
				dsInmuebles.loadData();
				}
            }*/
			
			
			// JavaScript Document
		/*
				Este es un manejador del evento de tipo negocio
		*/
		
$.filtrarInmuebles = function(){
				tipoInmueble = $.trim($("#tipoInmuebleRemoto").val());
				tipoNegocio = $("input[name='tipoNegocio']:checked").val();
				tipoPrecio = $.trim($("#precioRemoto option:selected").text());
				elementos=tipoPrecio.split(' ');
				precioMinimo=elementos[0].replace(".","");
				precioMaximo=elementos[6].replace(".","");								
				var fila = dsInmuebles.getCurrentRow();
				numFilas=fila["totalRows_rs"];
				maxItems=fila["maxRows_rs"];
				if(maxItems!=0){
				  	ultimaPagina=(numFilas/maxItems);
					ultimaPagina=parseFloat(ultimaPagina);
					ultimaPagina=Math.round(ultimaPagina);
				}
				if(ultimaPagina>0 && pagina<ultimaPagina){
						var url="http://www.conectados.co/index.php?";
						
						url = url + "&accion=obtenerInmueblesMovil";
						if(precioMinimo && precioMinimo.length > 0 && precioMaximo && precioMaximo.length > 0){
							url= url+"&precioMinimo="+precioMinimo+"&precioMaximo="+precioMaximo;
						}
						if(tipoInmueble && tipoInmueble.length>0){
							url= url+"&idTipoInmueble="+tipoInmueble;	
						}
						if(tipoNegocio && tipoNegocio.length>0){
							if(tipoNegocio=="paraVenta"){
								url = url+"&paraVenta="+1;
							}
							if(tipoNegocio=="paraAlquiler"){
								url = url+"&paraAlquiler="+1;
							}
							if(pagina>=0){
								url = url + "&pageNum_rs="+pagina;
							}
							dsInmuebles.setURL(url);
							dsInmuebles.loadData();
						}
				}
 }
			
		