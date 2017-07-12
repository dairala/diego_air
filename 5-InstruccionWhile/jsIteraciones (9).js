function Mostrar()
{

	// declarar variables
	var num;
	var respuesta='si';
	var max;
	var min;
	var bandera=true;

	while(respuesta!="no")
	{
		num=prompt("Ingrese numero")
		num=parseInt(num);
		
		if(bandera)
		{
			max=num;
			min=num;
			bandera=false;
		}
		else
		{
			if(num>max)
			{
				max=num;
			}
			else
			{
				if(num<min)
				{
					min=num;
				}
			}
		}

		respuesta=prompt("Dese continuar");
	}
	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;




}//FIN DE LA FUNCIÓN