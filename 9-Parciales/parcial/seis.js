function Mostrar()
{
    var venta;
    var contador=0;
    var max;
    var min;
    var bandera=true;

        while(contador<25)
    {
        
        venta=prompt("Ingrese venta");
        venta=parseInt(venta);
        contador++;  

        while( venta < 0 )
        {

        }
           if(bandera==true)
          {
              max=venta;
              min=venta;
              bandera=false;
          }
        
             else
            {
                if(venta>max)
                {
                    max=venta;
                }
                else
                {
                    if(venta<min)
                    {
                        min=venta;
                    }
                }
            }

    }

    alert("El maximo es"+max);
    alert("El minimo es"+min);
    


}
