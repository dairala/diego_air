//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 6-iteraciones");
	var venta;
	var contador=0;
	var max;
	var min;
	var bandera=true;

	while(contador<7)
		{
			venta=prompt("Ingrese un importe en peses");
			venta=parseInt(venta);
			contador++;

			while(isNaN(venta))
				{
					venta=prompt("Ingrese un importe valido y numerico");
				}

			while(venta<=0)
				{
					venta=prompt("Ingrese un importe valido");
				}

		if(bandera==true)
			{
				max=venta;
				min=venta;
				bandera=false;
			}
			else if(venta>max)
				{
					max=venta;
				}
				else if(venta<min)
					{
						min=venta;
					}
			

		}
	
alert("El importe maximo es"+max+"pesos");
alert("El importe minimo es"+min+"pesos");

}

