/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largoo;
var anchoo;
var radioo;
var resultado;


document.getElementById("Largo").value=largoo;
document.getElementById("Ancho").value=anchoo;
document.getElementById("Radio").value=radioo;

largoo=parseInt(largoo);
anchoo=parseInt(anchoo);
radioo=parseInt(radioo);


function Rectangulo () 
{
resultado=largoo+anchoo*2*3;
alert(resultado);

}
function Circulo () 
{
	resultado=(((2*Math.PI)*radioo)*3);
    parseInt(resultado);
    alert("El circulo de alambre es:"+resultado);

}
function Materiales () 
{
    var cal=2;
    var cemento=3;
	var resultadocal;
    var resultadocemento;
    
    resultadocal=(largoo*anchoo)*cal
    resultadocemento=(largoo*anchoo)*cemento
    alert("Se necesitan:"+resultadocal+"bolsas de cal y"+resultadocemento+"bolsa de cemento");

}