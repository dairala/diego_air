//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 7-iteraciones");
	var nota;
	var sexo;
	var cantidadvarones=0;
	var contador=0;
	var max;
	var min;
	var bandera=true;
	var acumulador=0;
	var promedio;



	while(contador<4)
		{
			sexo=prompt("Ingrese f (femenino) o m (masculino)");
			nota=prompt("Ingrese una nota");
			nota=parseInt(nota);
			
			acumulador=acumulador+nota;
			
			contador++;

			

			while(isNaN(nota))
				{
					nota=prompt("Ingrese una nota del tipo numerico");
				}

			while(nota<0||nota>10)
				{
					nota=prompt("Ingrese una nota entre 0 y 10");
				}

			while(sexo!="f" && sexo!="m")
				{
					sexo=prompt("Ingrese f (femenino) o m (masculino)");
				}

			if(bandera==true)
				{
					max=nota;
					min=nota;
					bandera=false;
				}
				else if(nota>max)
					{
						max=venta;
					}
					else if(nota<min)
						{
							min=nota;
						}
					if(sexo="m" && nota>5)
						{
							cantidadvarones++;
						}

			
			

		}
		promedio=acumulador/contador;


	   alert("El promedio de todas las notas es de"+promedio);
	   alert("La nota mas baja es un"+min);
	   alert("La cantidad de varones con nota mayor igual a 6 son de"+cantidadvarones+"varones");


	   






}

