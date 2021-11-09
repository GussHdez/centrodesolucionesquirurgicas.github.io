var flagLeft = true;
var flagRight = false;
var flagCenter = false;

$('.btnLeft').on('click', function(){

	if (!flagLeft){

		if (flagCenter){
			flagLeft = true;
			flagCenter = false;

			$('.seccionPaso2').hide(500, function(){
		        $('.seccionPaso1').show(500);
		        $('.paso1').attr('src','assets/cotizador/boton1paso2s.png');
		        $('.paso2').attr('src','assets/cotizador/boton2paso1s.png');
		    });	

		} else if (flagRight){
			flagLeft = true;
			flagRight = false;

			$('.seccionPaso3').hide(500, function(){
		        $('.seccionPaso1').show(500);
		        $('.paso1').attr('src','assets/cotizador/boton1paso2s.png');
		        $('.paso3').attr('src','assets/cotizador/boton3paso1.png');
		    });	

		}
		
	}
});

$('.btnCenter').on('click', function(){

	if (!flagCenter){

		if (flagLeft){
			flagLeft = false;
			flagCenter = true;

			$('.seccionPaso1').hide(500, function(){
		        $('.seccionPaso2').show(500);
		        $('.paso1').attr('src','assets/cotizador/boton1paso1s.png');
		        $('.paso2').attr('src','assets/cotizador/boton2paso2s.png');
		    });	

		} else if (flagRight){
			flagCenter = true;
			flagRight = false;

			$('.seccionPaso3').hide(500, function(){
		        $('.seccionPaso2').show(500);
		        $('.paso2').attr('src','assets/cotizador/boton2paso2s.png');
		        $('.paso3').attr('src','assets/cotizador/boton3paso1.png');
		    });	

		}

	}
});

$('.btnRight').on('click', function(){

	if (!flagRight){

		if (flagLeft){
			flagLeft = false;
			flagCenter = true;

			$('.seccionPaso1').hide(500, function(){
		        $('.seccionPaso3').show(500);
		        $('.paso1').attr('src','assets/cotizador/boton1paso1s.png');
		        $('.paso3').attr('src','assets/cotizador/boton3paso2.png');
		    });	

		} else if (flagCenter){
			flagCenter = false;
			flagRight = true;

			$('.seccionPaso2').hide(500, function(){
		        $('.seccionPaso3').show(500);
		        $('.paso2').attr('src','assets/cotizador/boton2paso1s.png');
		        $('.paso3').attr('src','assets/cotizador/boton3paso2.png');
		    });	

		}

	}
});