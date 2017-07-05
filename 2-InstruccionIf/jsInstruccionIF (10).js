function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=parseInt(Math.random()*(11-1))+1;
	if(nota>8)
	{
		alert("excelente")
	}
	else
	{
		if(nota>3)
		{
			alert("aprobo")
		}
		else
		{
			alert("vamos que se puede")
		}
	}

}//FIN DE LA FUNCIÓN