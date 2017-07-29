function Mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    var alambre;

    largo=document.getElementById("alrgo").value;
    ancho=document.getElementById("ancho").value;
    parseInt(largo);
    parseInt(ancho);

    perimetro=2*largo+2*ancho;
    alert("el perimetro del terreno es"+perimetro);
    alambre=3*perimetro;
    parseInt(alambre);
    alert("Se necesitan"+alambre+"hilos de alambre");



}
