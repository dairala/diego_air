function Mostrar()
{
  var venta;
  var contador=0;
  var bandera=true;
  var min;
  var max;

  while(contador<5)
    {
        venta=prompt("ingrese un importe");
        venta=parseInt(venta);
        contador++;

        while(isNaN(venta))
            {
                venta=prompt("ingrese un importe numerico");
            }
        
        while(venta<0)
            {
                venta=prompt("ingrese un importe queno sea nulo");
            }

        if(bandera==true)
            {
                min=venta;
                max=venta;
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

    alert("El importe maximo es"+max);
    alert("El importe menor es"+min);


}
