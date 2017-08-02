//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 6-iteraciones");
	var venta;
	var contador=0;
	var min;
	var max;
	var bandera=true;

	while(contador<5)
		{
			venta=prompt("Ingrese un importe");
			venta=parseInt(venta);
			contador++;

			while(isNaN(venta))
				{
					venta=prompt("Ingrese un importe que sea numerico");
				}

			while(venta<=0)
				{
					venta=prompt("Ingrese un importe mayor a cero");
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
	alert("El importa mayor fue de"+max+"pesos");
	alert("El importe mas bajo fue de"+min+"pesos");

}

