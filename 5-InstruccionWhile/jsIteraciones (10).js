function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var acumuladorneg=0;
	var num;
	var respuesta="si";
    var acumuladorpos=0;
    var contadorpos=0;
	var contadorneg=0;
	var contadorpares=0;
	var contadorceros=0;
	var promediopos=1;
	var promedioneg=1;
	var difposneg=0;


	while(respuesta!="no")
	{
		contador++;
		num=prompt("Ingrese numero");
		num=parseInt(num);

		while(isNaN(num))
	{
		num=prompt("Ingrese solo numero");
		num=parseInt(num);
	}
	if(num<0)
	{
		parseInt(acumuladorneg);
		acumuladorneg=acumuladorneg+num;
	}
	else 
	{
		if(num>0)
		{
			parseInt(acumuladorpos);
			acumuladorpos=acumuladorpos+num;
		}
		else
		{
			if(num>0)
			{
				parseInt(contadorpos);
				contadorpos++;
			}
			else
			{
				parseInt(contadorceros);
				contadorceros++;
			}
			if(num<0)
		    {
				parseint(contadorneg);
				contadorneg++;
			}
			else
			{
				if(num%2==0)
				{
					parseInt(contadorpares)
					contadorpares++
				}
			}
		}
	}
	respuesta=prompt("Desea proseguir,si o no");
	}

promediopos=acumuladorpos/contadorpos;
promedioneg=acumuladorneg/contadorneg;
difposneg=contadorpos-contadorneg;

document.write(acumuladorneg+acumuladorpos+contadorpos+contadorneg+contadorpares+contadorceros+promediopos+promedioneg+difposneg);


}//FIN DE LA FUNCIÓN