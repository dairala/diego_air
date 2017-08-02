function Mostrar()
{
 
    var num1;
    var num2;
    var multiplicacion;
    var resta;
    var suma;

    num1=prompt("Ingrese el primer numero");
    num2=prompt("Ingrese el segundo numero");

    num1=parseInt(num1);
    num2=parseInt(num2);

    if(num1==num2)
        {
            multiplicacion=num1*num2;
            document.write("El resultado de la multiplicacion es"+multiplicacion);
        }
        else if(num1>num2)
            {
                resta=num1-num2;
                document.write("El resultado de la resta es"+resta);
            }
            else if(num1<num2)
                {
                    suma=num1+num2;
                    document.write("El resultado de la suma es"+suma);
                }
   

}
