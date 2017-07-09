function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var dato;
	var respuesta="si";
	
	while(respuesta=="si"||dato>0)
	{
		dato=prompt("ingrese un numero, positivos se sumaran negativos se multiplicaran");
		dato=parseInt(dato);
		positivo=positivo+dato;
		contador++;
		respuesta=prompt("Desea proseguir,si o no");
	}

	    document.getElementById('suma').value=positivo;
    while(respuesta=="si"||dato<0)
	{
		dato=prompt("ingrese un numero, positivos se sumaran negativos se multiplicaran");
		dato=parseInt(dato);
		negativo=negativo*dato;
		contador++;
		respuesta=prompt("Desea proseguir,si o no");
	}


document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN