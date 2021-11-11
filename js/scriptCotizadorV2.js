var flagLeft = true;
var flagRight = false;
var flagCenter = false;

$('.btnLeft').on('click', function(){

	if (!flagLeft){

		if (flagCenter){
			flagLeft = true;
			flagCenter = false;

			$('.seccionPaso2').hide(500, function(){
				$('.seccionPaso2').hide(500);
		        $('.seccionPaso1').show(500);
		        $('.paso1').attr('src','assets/cotizador/boton1paso2s.png');
		        $('.paso2').attr('src','assets/cotizador/boton2paso1s.png');
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
		        $('.seccionPaso2').css('display','flex');
		        $('.paso1').attr('src','assets/cotizador/boton1paso1s.png');
		        $('.paso2').attr('src','assets/cotizador/boton2paso2s.png');
		    });	

		} 

	}
});

$('.close').on('click', function() {
	$('.modalInfo5Seg').show(500);
});

$(document).ready(function() {
    setTimeout(function (){
        $('.modalInfo5Seg').show(500);
    }, 5500);

});