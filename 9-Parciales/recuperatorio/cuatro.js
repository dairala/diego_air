function Mostrar()
{
    var num1;
    var num2;
    var suma;
    var resultado;
    var positivo;
    var negativo;
    var cero;

    num1=prompt("Ingrese el primer numero");
    num2=prompt("Ingrese el segundo numero");

    num1=parseInt(num1);
    num2=parseInt(num2);

    resultado=num1+num2;

    if(resultado>0)
    {
        positivo=resultado;
        document.write(positivo);
    }
    else
    {
        if(resultado<0)
        {
            negativo=resultado;
            document.write(negativo);
        }
        else
        {
            cero=resultado;
            document.write(cero);
        }
    }


}
