function Mostrar()
{
    var num;
    var final;
    var resultado;

    num=prompt("Ingrese el importe para incluirle el IVA");
    num=parseInt(num);

    final=num*0.21;
    resultado=final+num;

    document.getElementById("importeFinal").value=resultado;






}
