function Mostrar()
{
    var mes;

    mes=prompt("ingrese un mes");

    switch(mes)
    {
        case "diciembre":
        alert("Se vienen las fiestas");
        break;
        case "enero":
        alert("Comienza el año");
        break;
        default:
        alert("No es enero ni diciembre");
    }

}
