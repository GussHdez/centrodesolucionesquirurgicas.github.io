<?php
/*	Recopilo los datos vía POST	Con strip_tags suprimo etiquetas HTML y php para evitar una posible inyección.	Como no gestiona base de datos no es necesario limpiar de inyección SQL.*/
$nombre = $_POST['name'];
$correo = $_POST['correo'];
$tema = $_POST['tema'];
$telefono = $_POST['telefono'];

//Correo de destino; donde se enviará el correo.
$correoDestino = 'ramon@fusionpm.com'. ', ';
$correoDestino .= 'project.codiac@gmail.com';

//Texto emisor; sólo lo leerá quien reciba el contenido.
$textoEmisor = "MIME-VERSION: 1.0\r\n";
$textoEmisor .= "Content-type: text/html; charset=UTF-8\r\n";
$textoEmisor .= "From: Quirurgy.com";

//Headers del correo electrónico.
$headers =
	'From: ' . $correo . "\r\n". 
	'Reply-To: ' . $correoDestino. "\r\n" . 
	'X-Mailer: PHP/' . phpversion() .
	'MIME-Version: 1.0\r\n'.
	'Content-type: text/html; charset=UTF-8\r\n';

//Formateo el asunto del correo
$asunto = "Contacto WEB_".$nombre." de Membresia Quirurgy";
//Formateo el cuerpo del correo
$cuerpo = "<b>Informacion de contacto</b><br><br>\n".
          "<table><thead>".
          "<tr><th>Nombre Contacto</th>".
          "<th>Correo electronico</th>".
          "<th>Telefono</th>".
          "<th>Tema de interes</th></tr></thead>".
          "<tbody><tr>".
          "<td>$nombre</td>".
          "<td>$correo</td>".
          "<td>$telefono</td>".
          "<td>$tema</td></tr>".
          "</tbody></table>".
          "";

// Envío el mensaje
mail( $correoDestino, $asunto, $cuerpo, $textoEmisor);

?>