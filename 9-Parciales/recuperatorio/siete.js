function Mostrar()
{
    var sexo;
    var edad;
    var contador=0;
    var max;
    var min;
    var promedio;
    var contadorvar=0;
    var bandera=true;
    var contadormax=0;
    var acumuladoredad=0;
    var contadormin=0;


    while(contador<4)
        {
            sexo=prompt("Ingrese f o m");
            edad=prompt("ingrese la edad");
            edad=parseInt(edad);
            acumuladoredad=acumuladoredad+edad;
            
            contador++;

            while(isNaN(edad))
                {
                    edad=prompt("ingrese la edad, pero en valor numerico");
                }

            while(sexo !="f" && sexo !="m")
                {
                    sexo=prompt("Ingrese f o m");
                }

                if(bandera==true)
                    {
                        max=edad;
                        min=edad;
                        bandera=false;
                    }
                    else if(edad<min)
                        {
                            min=edad;
                            contadormin++;
                        }
                        else if(sexo=="m" && edad>20)
                            {
                                contadorvar++;
                            }
        
        
        promedio=acumuladoredad/contador;
        }

        //alert(acumuladoredad);
        //promedio=acumuladoredad/contador;
        alert("La edad mas baja es"+min);
        alert("El promedio de edad es"+promedio);
        alert("La cantidad de varones mayores a 20 son"+contadorvar);

}
