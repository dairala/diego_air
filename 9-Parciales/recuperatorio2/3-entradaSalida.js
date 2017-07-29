//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 3-EntradaSalida");
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo=document.getElementById("ancho").value;
	ancho=document.getElementById("largo").value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=largo*ancho;
	alambre=perimetro*6;

	alert("Se necesitan"+alambre+"hilos de alambre");


	
}

