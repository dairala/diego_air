function Mostrar()
{
    var num;
    var contador=0;
    var min;
    var max;
    var bandera=true;
    var respuesta="si";
    var acumulador=0;
    var promedio=1;
    var contadorpares=0;

    while(respuesta!="no")
        {
            num=prompt("Ingrese un numero");
            num=parseInt(num);
            respuesta=prompt("Desea proseguir si o no");
            contador++;
            acumulador=acumulador+num;
            promedio=acumulador/contador;
            while(isNaN(num))
                {
                    num=prompt("Ingrese un numero en valor numerico");
                }

            while(num<=0)
                {
                    num=prompt("Ingrese un numeromayor a cero");
                }

        
                if(bandera==true)
                {
                    max=num;
                    min=num;
                    bandera=false;
                }
                else if(num>max)
                    {
                        max=num;
                    }
                    else if(num<min)
                        {
                            min=num;
                        }
                        if(num%2==0)
                        {
                            contadorpares++;
                        }

        }
    //alert(contadorpares);
    

    //document.write(acumulador</br>,promedio</br>,contadorpares</br>,min<br/>,max)
    document.write("La suma es"+acumulador<br />"El promedio es"+promedio,"La cantidad de pares son"+contadorpares,"El maximo es"+max,"El minimo es"+min);

}
