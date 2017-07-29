//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");
	var precio;
	var resultado;
	precio=prompt("Ingrese un precio");
	precio=parseInt(precio);

	resultado=precio*0.21;

	document.getElementById("importe").value=resultado;
	
}

