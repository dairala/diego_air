function Mostrar()
{
    var num1;
    var num2;
    var multiplicar;
    var resta;
    var suma;

    num1=prompt("Ingrese el primer numero");
    num2=prompt("Ingrese el segundo numero");

    parseInt(num1);
    parseInt(num2);

    if(num1==num2)
    {
        multiplicar=num1*num2;
        document.write(multiplicar);
    }
    else
    {
        if(num1>num2)
        {
            resta=num1-num2;
            document.write(resta);
        }
        else
        {
            suma=num1+num2;
            document.write(suma);
        }
    }

   

}
