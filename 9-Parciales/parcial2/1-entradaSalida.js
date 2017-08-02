//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 1-EntradaSalida");
	var base;
	var resultado;

	base=document.getElementById("lado").value;
	base=parseInt(base);

	resultado=base*3;

	alert("El perimetro del triangulo es"+resultado);


	
}

