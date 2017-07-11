function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var dato;
	
	while(respuesta=="si")
	{
		contador++;
		dato=prompt("ingrese numero");
		dato=parseInt(dato);
		while(isNaN(dato))
		{
		dato=prompt("Ingrese solo numero");
		dato=parseInt(dato);
		}
		acumulador=acumulador+dato;
		respuesta=prompt("Desea proseguir,si o no");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN