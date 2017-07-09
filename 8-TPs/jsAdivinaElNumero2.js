/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numerosecreto; 
var contadorIntentos;
var num;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numerosecreto=Math.floor((Math.random()*(100-1)+1))
	 alert(numerosecreto);
	 contadorIntentos=0;

	

}

function verificar()
{
	contadorIntentos++;
	document.getElementById("intentos").value=contadorIntentos;
	num=document.getElementById("numero").value;
	if(num==numerosecreto&&contadorIntentos==1)
	{
		alert("Usted es un psiquico"+contadorIntentos+"Intento");
	}
	else
	{
		if(num==numerosecreto&&contadorIntentos==2)
		{
			alert("Excelente percepcion, en"+contadorIntentos+"Intentos");
		}
		else
		{
			if(num==numerosecreto&&contadorIntentos==3)
			{
				alert("Esto es suerte, en"+contadorIntentos+"Intentos");
			}
			else
			{
				if(num==numerosecreto&&contadorIntentos==4)
				{
					alert("Excelente tecnica, en"+contadorIntentos+"Intentoss");
				}
				else
				{
					if(num==numerosecreto&&contadorIntentos==5)
					{
						alert("Esta esta en la media, en"+contadorIntentos+"Intentos");
					}
					else
					{
						if(num==numerosecreto&&contadorIntentos>5&&contadorIntentos<11)
						{
							alert("Falta mas tecnica, en"+contadorIntentos+"Intentos");
						}
						else
						{
							if(num==numerosecreto&&contadorIntentos>10)
							{
								alert("Afortunado en elamor, en"+contadorIntentos+"intentos");
							}
							else
							{
								alert("Vuelve a intentarlo");
							}
						}
				}
			}
		}
	}
}

}