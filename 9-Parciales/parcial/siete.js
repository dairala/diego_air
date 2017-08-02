function Mostrar()
{
    var nota;
    var sexo;
    var contador=0;
    var acumulador=0;
    var bandera=true;
    var max;
    var min;
    var contadorvarones=0;
    var promedio;

    while(contador<4)
        {
            sexo=prompt("Ingrese f (femenino) o m (masculino)");
            nota=prompt("Ingrese la nota del alumno");
            nota=parseInt(nota);
            acumulador=acumulador+nota;
            contador++;
            
            

            while(isNaN(nota))
                {
                   nota=prompt("Ingrese la nota del alumno numeria"); 
                }
            while(sexo!="f" && sexo!="m")
                {
                   sexo=prompt("Ingrese SOLO f (femenino) o m (masculino)"); 
                }
            while(nota<0||nota>9)
                {
                    nota=prompt("Ingrese la nota del alumno de 0 a 10"); 
                }

            if(bandera==true)
                {
                    max=nota;
                    min=nota;
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
                        if(sexo="m" && nota>5)
                            {
                                contadorvarones++;
                            }
                            
            
        }
        promedio=acumulador/contador;
    alert("El promedio de todas las nota es"+promedio);
    alert("La nota mas baja es"+min);
    alert("La cantidad de varones con nota mayor a 6 son"+contadorvarones);






}
