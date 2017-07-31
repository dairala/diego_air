function Mostrar()
{
    var peso;
    var contador=0;
    var bandera=true;
    var pesomax;
    var pesomin;
    var contadormax=1;
    var contadormin=1;

    while(contador<2)
        {
            contador++;
            peso=prompt("Ingrese el peso en kilos del contenedor");
            peso=parseInt(peso);
            

            while(peso<=0)
                {
                    peso=prompt("Ingrese el peso del contenedor mayor a cero");
                }

                if(bandera==true)
                    {
                        pesomax=peso;
                        pesomin=peso;
                        bandera=false;
                    }
                    else if(peso>pesomax)
                        {
                            pesomax=peso;
                            contadormax++;
                        }
                            else if(peso<pesomin)
                                {
                                    pesomin=peso;
                                    contadormin++;
                                }

        }
    alert("El mas pesado es el contenedor N"+contadormax+"y pesa"+pesomax+"Kilos");
    alert("El mas liviando es el contenedor N"+contadormin+"y pesa"+pesomin+"Kilos");

    

}
