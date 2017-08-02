//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");
	var importe;
	var iva;
	var resultado;

	importe=prompt("Ingrese un importe para agregarle el IVA");
	importe=parseInt(importe);

	iva=importe*0.21;
	resultado=importe+iva;

	document.getElementById("importe").value=resultado;
}

