//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 7-iteraciones");
	var nota;
	var max;
	var min;
	var promedio;
	var contvarones=0;
	var contador=0;
	var bandera=true;
	var sexo;
	var acumulador=0;

	while(contador<3)
		{
			sexo=prompt("Ingrese f o m");
			nota=prompt("Ingrese nota del alumno/a");
			nota=parseInt(nota);
			contador++;
			acumulador=acumulador+nota;
			promedio=acumulador/contador;


			while(isNaN(nota))
				{
					nota=prompt("Ingrese nota del alumno/a valida");
				}

			while(sexo	!="f"	&& sexo	!="m")
				{
					sexo=prompt("Ingrese f o m que sea valido");
				}

			while(nota	<0 || nota	>10)
				{
					nota=prompt("Ingrese nota del alumno/a de 0 a 10");
				}

			if(bandera==true)
				{
					min=nota;
					max=nota;
					bandera=false;
				}
				else if(nota>max)
					{
						max=nota;
					}
					else if(nota<min)
						{
							min=nota;
						}
						else if(sexo=="m"	&&	nota>=6)
							{
								contvarones++;
								
							}

			
		}

alert("El promedio de todas las notas es"+promedio);
alert("La nota mas baja es"+min);
alert("La cantidad de varones con nota mayor a 6 son"+contvarones);	
	
}

