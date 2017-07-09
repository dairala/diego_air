function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var dato;
	var respuesta='si';
	while(respuesta=="si")
	{
		dato=prompt("ingrese un numero, positivos se sumaran negativos se multiplicaran");
		dato=parseInt(dato)
		positivo=dato>=0;
		positivo=positivo+positivo;
		negativo=dato<0;
		negativo=negativo*negativo;
		contador++;
		respuesta=prompt("Desea proseguir,si o no");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN