function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var dato;

	while(contador<5)
{
	contador++;
	dato=prompt("Ingrese numero");
	dato=parseInt(dato);
	while(isNaN(dato))
	{
		dato=prompt("Ingrese solo numero");
		dato=parseInt(dato);
	}
	acumulador=acumulador+dato;	
	
}
  

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN