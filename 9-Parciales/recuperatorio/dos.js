function Mostrar()
{
    var precio;
    var resultado;
    var descuento;

    precio=document.getElementById("importeFinal").value;
    precio=parseInt(precio);

    resultado=precio*0.25;
    descuento=precio-resultado;

    alert("Precio con descuento"+descuento+"pesos");


  
}
