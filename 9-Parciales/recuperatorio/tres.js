function Mostrar()
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;
    var promedio;

    precio1=document.getElementById("precioUno").value;
    precio2=document.getElementById("precioDos").value;
    precio3=document.getElementById("precioTres").value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    resultado=precio1+precio2+precio3;
    promedio=resultado/3;

    alert("Total de compras es"+resultado);
    alert("El promedio de las compras es"+promedio);



}
