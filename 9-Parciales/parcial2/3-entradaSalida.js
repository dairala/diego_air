//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 3-EntradaSalida");
var ancho;
var largo;
var resultado;
var alambre;

ancho=document.getElementById("ancho").value;
largo=document.getElementById("largo").value;

ancho=parseInt(ancho);
largo=parseInt(largo);

resultado=(ancho*2)+(largo*2);
alambre=resultado*6;

alert("Se necesitan"+alambre+"hios de alambre para el terreno");

	
}

