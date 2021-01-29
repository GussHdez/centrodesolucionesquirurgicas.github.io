function uniqId() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
}

var r5 = "";
var anexor5 = "";
var r6 = "";
var edad = "";
var invertir = "";
var invertir2 = "";
var ingresosPregunta7 = "";
var inversion = "";
var seguro = "";
var nombrePregunta7 = "";
var mailPregunta7 = "";
var ciudadPregunta7 = "";
var whatsPregunta7 = "";
var r12 = "";

$(".p2").css("display","none");
$(".p3").css("display","none");
$(".p4").css("display","none");
$(".p5").css("display","none");
$(".p6").css("display","none");
$(".p7").css("display","none");
$(".formularioAnexoPregunta7").css("display","none");
$(".p13").css("display","none");


$(".edadEncuesta").on('change', function (e) {
    edad = $('.edadEncuesta').children("option:selected").val();
    console.log(edad);
    $(".p2").show(700);
});

$('.invertirAnual').on('change', function (e) {
    invertir = $('.invertirAnual').children("option:selected").val();
    console.log(invertir);
    $(".p3").show(700);
});

$('.invertirCirugia').on('change', function (e) {
    invertir2 = $('.invertirCirugia').children("option:selected").val();
    console.log(invertir2);
    $(".p4").show(700);
});

$("#si").change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            r5 = $(this).val(); // retrieve the value
            $('.anexoP5').show(700);
            $(".p5").show(700);
        }
    });

$("#no").change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            r5 = $(this).val(); // retrieve the value
            $(".p5").show(700);
        }
    });

$("#si6").change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            r6 = $(this).val(); // retrieve the value
            $('.anexoP6').css("display","block");
            $(".p6").show(700);
        }
    });

$("#no6").change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            r6 = $(this).val(); // retrieve the value
            $('.anexoP6').css("display","none");
            $(".p6").show(700);
        }
    });
 
$('.btnNo').on('click', function() {
    seguro = r5 + $("#anexoPregunta5").val();
    r6 += " , mail:" + $('#anexoCorreoPregunta6').val() + " , whatsapp:" + $('#anexoWhatsPregunta6').val();
    console.log(inversion);
    console.log(seguro);
    console.log(r6);
    
    writeUserData();
});

$('.btnSi').on('click', function() {
    seguro = $('input[name="pregunta5radio"]:checked').val();
    r6 += " , mail:" + $('#anexoCorreoPregunta6').val() + " , whatsapp:" + $('#anexoWhatsPregunta6').val();
    $('.formularioAnexoPregunta7').css('display','block');
    
    $(".formularioAnexoPregunta7").show(700);
})

$('.anexoIngresosPregunta7').on('change', function (e){
    ingresosPregunta7 = $('.anexoIngresosPregunta7').children("option:selected").val();
    console.log(ingresosPregunta7);
    $(".p8").show(700);
});

$("#si12").change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            r12 = $(this).val(); // retrieve the value
            $(".p13").show(700);
        }
    });

$("#no12").change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            r12 = $(this).val(); // retrieve the value
            $(".p13").show(700);
        }
    });



$('.btnEnviar').on('click', function() {
    nombrePregunta7 = $('#anexoNombrePregunta7').val();
    mailPregunta7 = $('#anexoMailPregunta8').val();
    whatsPregunta7 = $('#anexoWhatsPregunta9').val();
    ciudadPregunta7 = $('#anexoCiudadPregunta7').val();
    
    console.log(nombrePregunta7);
    console.log(mailPregunta8);
    console.log(whatsPregunta7);
    console.log(ciudadPregunta7);
    console.log(inversion);
    console.log(seguro);
    console.log(r6);
    
    writeUserData();
});

function writeUserData() {
        var id = uniqId();
        console.log(id);
        db.ref('encuestas/' + id).set({
         p1: edad,
         p2: invertir,
         p3: invertir2,
         p4: seguro,
         p5: r6,
         p6: nombrePregunta7, 
         p7: mailPregunta7,
         p8: ingresosPregunta7,
         p9: whatsPregunta7,
         p10: ciudadPregunta7,
         p11: r12
        });
        
        alert('Gracias por tomarse el tiempo para contestar este breve cuestionario!');
    }