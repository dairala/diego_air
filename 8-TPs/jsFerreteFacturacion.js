/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var numero1;
var numero2;
var numero3;
var resultado;

document.getElementById("PrecioUno").value=numero1;
document.getElementById("PrecioDos").value=numero2;
document.getElementById("PrecioTres").value=numero3;




function Sumar () 
{
	resultado=numero1+numero2+numero3;
    alert("La suma es:"+resultado);

}
function Promedio () 
{
	resultado=(numero1+numero2+numero3)/3;
    alert("El promedio es:"+resultado);


}
function PrecioFinal () 
{
	resultado=(numero1+numero2+numero3)*0.21;
    alert("El precio final es:"+resultado);

}