function uniqId() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
}

var r6 = "";
var edad = "";
var invertir2 = "";
var ingresosPregunta7 = "";
var inversion = "";
var seguro = "";
var nombrePregunta7 = "";
var mailPregunta7 = "";
var ciudadPregunta7 = "";
var tarjetaPregunta7 = "";

$(".edadEncuesta").on('change', function (e) {
    edad = $('.edadEncuesta').children("option:selected").val();
    console.log(edad);
});

$('.invertirCirugia').on('change', function (e) {
    invertir2 = $('.invertirCirugia').children("option:selected").val();
    console.log(invertir2);
});

$('.anexoIngresosPregunta7').on('change', function (e){
    ingresosPregunta7 = $('.anexoIngresosPregunta7').children("option:selected").val();
    console.log(ingresosPregunta7);
});

$("#si6").change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            r6 = $(this).val(); // retrieve the value
            $('.anexoP6').css("display","block");
        }
    });

$("#no6").change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            r6 = $(this).val(); // retrieve the value
            $('.anexoP6').css("display","none");
        }
    });
 
$('.btnNo').on('click', function() {
    inversion = $('#pregunta2respuesta2').val();
    seguro = $('input[name="pregunta5radio"]:checked').val();
    r6 += " , mail:" + $('#anexoCorreoPregunta6').val() + " , whatsapp:" + $('#anexoWhatsPregunta6').val();
    console.log(inversion);
    console.log(seguro);
    console.log(r6);
});

$('.btnSi').on('click', function() {
    $('.formularioAnexoPregunta7').css('display','block');
})

$('.btnEnviar').on('click', function() {
    nombrePregunta7 = $('#anexoNombrePregunta7').val();
    mailPregunta7 = $('#anexoMailPregunta7').val();
    ciudadPregunta7 = $('#anexoCiudadPregunta7').val();
    tarjetaPregunta7 = $('#anexoTarjetaPregunta7').val();
    
    console.log(nombrePregunta7);
    console.log(mailPregunta7);
    console.log(ciudadPregunta7);
    console.log(tarjetaPregunta7);
    
    writeUserData();
});

function writeUserData() {
        var id = uniqId();
        console.log(id);
        db.ref('encuestas/' + id).set({
         p1: edad,
         p2: inversion,
         p3: invertir2,
         p4: seguro,
         p5: r6,
         p6: nombrePregunta7, 
         p7: mailPregunta7,
         p8: ingresosPregunta7,
         p9: ciudadPregunta7,
         p10: tarjetaPregunta7
        });
        
        alert('Gracias por tomarse el tiempo para contestar este breve cuestionario!');
    }